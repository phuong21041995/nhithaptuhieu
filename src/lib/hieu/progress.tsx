import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const KEY = "nth-hieu-v1";

export type Progress = {
  version: 1;
  welcomed: boolean;
  seen: string[];
  seals: Partial<Record<string, 2 | 3>>;
  points: number;
  quizCorrect: number;
  quizTotal: number;
  actBest: number;
  actTotal: number;
  days: string[];
  dailyDone: string | null;
  sound: boolean;
  lastId: string | null;
};

export const DEFAULT_PROGRESS: Progress = {
  version: 1,
  welcomed: false,
  seen: [],
  seals: {},
  points: 0,
  quizCorrect: 0,
  quizTotal: 0,
  actBest: 0,
  actTotal: 0,
  days: [],
  dailyDone: null,
  sound: true,
  lastId: null,
};

export function todayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function shiftDay(key: string, delta: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(y || 1970, (m || 1) - 1, d || 1);
  dt.setDate(dt.getDate() + delta);
  return todayKey(dt);
}

export function streakCount(days: string[], today = todayKey()): number {
  const set = new Set(days);
  let cursor = today;
  if (!set.has(cursor)) cursor = shiftDay(cursor, -1);
  let n = 0;
  while (set.has(cursor)) {
    n += 1;
    cursor = shiftDay(cursor, -1);
  }
  return n;
}

export function rankName(sealCount: number): string {
  if (sealCount >= 24) return "Tròn hai mươi bốn gương";
  if (sealCount >= 18) return "Gần tròn sổ";
  if (sealCount >= 12) return "Có lòng";
  if (sealCount >= 6) return "Biết nhường";
  if (sealCount >= 1) return "Tập hiếu";
  return "Mới mở sổ";
}

function withDay(progress: Progress, day = todayKey()): Progress {
  if (progress.days.includes(day)) return progress;
  return { ...progress, days: [...progress.days, day].slice(-120) };
}

function load(): Progress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const data = JSON.parse(raw) as Partial<Progress>;
    if (data.version !== 1) return DEFAULT_PROGRESS;
    const seals: Progress["seals"] = {};
    if (data.seals && typeof data.seals === "object") {
      for (const [id, stars] of Object.entries(data.seals)) {
        if (stars === 2 || stars === 3) seals[id] = stars;
      }
    }
    return {
      ...DEFAULT_PROGRESS,
      welcomed: Boolean(data.welcomed),
      seen: Array.isArray(data.seen) ? data.seen.filter((item) => typeof item === "string") : [],
      seals,
      points: typeof data.points === "number" ? data.points : 0,
      quizCorrect: typeof data.quizCorrect === "number" ? data.quizCorrect : 0,
      quizTotal: typeof data.quizTotal === "number" ? data.quizTotal : 0,
      actBest: typeof data.actBest === "number" ? data.actBest : 0,
      actTotal: typeof data.actTotal === "number" ? data.actTotal : 0,
      days: Array.isArray(data.days) ? data.days.filter((item) => typeof item === "string") : [],
      dailyDone: typeof data.dailyDone === "string" ? data.dailyDone : null,
      sound: data.sound !== false,
      lastId: typeof data.lastId === "string" ? data.lastId : null,
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

type SealResult = { gained: number; fresh: boolean; upgraded: boolean };

type Api = {
  progress: Progress;
  ready: boolean;
  welcome: () => void;
  see: (id: string) => void;
  answerQuiz: (correct: boolean) => void;
  recordAct: (score: 0 | 1 | 2) => number;
  markDaily: () => number;
  giveSeal: (id: string, stars: 2 | 3) => SealResult;
  toggleSound: () => void;
  reset: () => void;
};

const Ctx = createContext<Api | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(DEFAULT_PROGRESS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(progress));
  }, [progress, ready]);

  const api: Api = {
    progress,
    ready,
    welcome: () => setProgress((current) => ({ ...current, welcomed: true })),
    see: (id) =>
      setProgress((current) => {
        const base = withDay({ ...current, lastId: id });
        if (base.seen.includes(id)) return base;
        return { ...base, seen: [...base.seen, id], points: base.points + 2 };
      }),
    answerQuiz: (correct) =>
      setProgress((current) =>
        withDay({
          ...current,
          quizTotal: current.quizTotal + 1,
          quizCorrect: current.quizCorrect + (correct ? 1 : 0),
          points: current.points + (correct ? 10 : 2),
        }),
      ),
    recordAct: (score) => {
      const gain = score === 2 ? 12 : score === 1 ? 6 : 2;
      setProgress((current) =>
        withDay({
          ...current,
          actTotal: current.actTotal + 1,
          actBest: current.actBest + (score === 2 ? 1 : 0),
          points: current.points + gain,
        }),
      );
      return gain;
    },
    markDaily: () => {
      const day = todayKey();
      if (progress.dailyDone === day) return 0;
      setProgress((current) => {
        if (current.dailyDone === day) return current;
        return withDay({ ...current, dailyDone: day, points: current.points + 8 });
      });
      return 8;
    },
    giveSeal: (id, stars) => {
      const prev = progress.seals[id];
      let result: SealResult = { gained: 0, fresh: false, upgraded: false };
      if (!prev) result = { gained: stars === 3 ? 40 : 24, fresh: true, upgraded: false };
      else if (stars > prev) result = { gained: 16, fresh: false, upgraded: true };
      if (result.gained > 0) {
        setProgress((current) => {
          const had = current.seals[id];
          if (!had && result.fresh) {
            return { ...current, seals: { ...current.seals, [id]: stars }, points: current.points + result.gained };
          }
          if (had && stars > had && result.upgraded) {
            return { ...current, seals: { ...current.seals, [id]: stars }, points: current.points + result.gained };
          }
          return current;
        });
      }
      return result;
    },
    toggleSound: () => setProgress((current) => ({ ...current, sound: !current.sound })),
    reset: () => setProgress({ ...DEFAULT_PROGRESS, welcomed: true }),
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useProgress(): Api {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useProgress ngoài sổ hiếu");
  return ctx;
}
