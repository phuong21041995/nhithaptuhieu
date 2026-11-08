import { useEffect, useRef, useState } from "react";
import { BookOpen, CircleHelp, Footprints, Volume2 } from "lucide-react";
import {
  GROUPS,
  TALES,
  sample,
  shuffle,
  speakText,
  taleById,
  taleOfDay,
  type Tale,
} from "@/lib/hieu/content";
import { rankName, streakCount, todayKey, useProgress, ProgressProvider } from "@/lib/hieu/progress";
import { playTone, speak, stopSpeak } from "@/lib/hieu/sound";
import { Screen, Seal, Stat, Steps, TopBar } from "@/components/hieu/bits";

type View =
  | { name: "home" }
  | { name: "tale"; id: string }
  | { name: "quiz" }
  | { name: "act" };

export function GameApp() {
  return (
    <>
      <div className="spine" aria-hidden />
      <p className="vtext pointer-events-none fixed top-1/2 left-4 hidden -translate-y-1/2 font-serif text-sm text-gold xl:block">
        二十四孝
      </p>
      <p className="vtext pointer-events-none fixed top-1/2 right-4 hidden -translate-y-1/2 font-serif text-sm text-gold xl:block">
        Học · Hiểu · Hành
      </p>
      <ProgressProvider>
        <Game />
      </ProgressProvider>
    </>
  );
}

function Game() {
  const { ready, progress, welcome } = useProgress();
  const [view, setView] = useState<View>({ name: "home" });

  if (!ready) {
    return (
      <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col items-center justify-center px-5">
        <Seal char="孝" />
        <p className="eyebrow mt-6">Nhị thập tứ hiếu</p>
      </main>
    );
  }

  if (!progress.welcomed) return <Welcome onStart={welcome} />;
  if (view.name === "tale") return <TaleStudy id={view.id} onBack={() => setView({ name: "home" })} />;
  if (view.name === "quiz") return <QuizRound onBack={() => setView({ name: "home" })} />;
  if (view.name === "act") return <ActRound onBack={() => setView({ name: "home" })} />;
  return <Home onOpen={setView} />;
}

function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <main className="rise mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-center px-5 py-6">
      <div className="frame px-5 py-6 sm:px-7">
        <div className="relative z-10 flex flex-col items-center text-center">
          <Seal char="孝" pop />
          <p className="eyebrow mt-4">Học · Hiểu · Hành</p>
          <p lang="zh-Hant" className="mt-2 font-serif text-4xl leading-none">
            二十四孝
          </p>
          <h1 className="mt-2 font-serif text-3xl tracking-wide">Nhị Thập Tứ Hiếu</h1>
          <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
            Hai mươi bốn chuyện con cái thương cha mẹ. Nghe kể, hiểu ý, rồi chọn một việc nhỏ làm được hôm nay.
          </p>
          <ul className="mt-4 w-full space-y-2 text-left text-sm">
            <li className="slip px-4 py-2">
              <span className="font-serif text-cinnabar">Học.</span> Nghe chuyện, chữ to, có nút đọc.
            </li>
            <li className="slip px-4 py-2">
              <span className="font-serif text-cinnabar">Hiểu.</span> Đố một câu cho nhớ ý, không học vẹt.
            </li>
            <li className="slip px-4 py-2">
              <span className="font-serif text-cinnabar">Hành.</span> Chọn việc hiền, an toàn. Chuyện nguy hiểm thì sổ bảo không bắt chước.
            </li>
          </ul>
          <button type="button" className="btn btn-primary btn-block mt-4" onClick={onStart}>
            Mở sổ hiếu
          </button>
          <p className="mt-3 text-sm text-ink-soft">Quách Cư Kính đời Nguyên ghi lại · kể lại cho bé</p>
        </div>
      </div>
    </main>
  );
}

function Home({ onOpen }: { onOpen: (view: View) => void }) {
  const { progress, reset } = useProgress();
  const [wipe, setWipe] = useState(false);
  const sealCount = TALES.filter((tale) => progress.seals[tale.id]).length;
  const streak = streakCount(progress.days);
  const daily = taleOfDay();
  const dailyDone = progress.dailyDone === todayKey();
  const next =
    TALES.find((tale) => !progress.seals[tale.id]) ??
    (progress.lastId ? taleById(progress.lastId) : undefined) ??
    daily;

  return (
    <Screen>
      <div className="rise">
        <TopBar title="Sổ hiếu" kicker={rankName(sealCount)} />
        <p className="font-serif text-lg leading-snug">Nghe chuyện xưa. Giữ lòng hiếu. Làm việc vừa sức, cho an toàn.</p>
        <dl className="mt-5 grid grid-cols-3 gap-2">
          <Stat label="Điểm" value={String(progress.points)} />
          <Stat label="Chuỗi ngày" value={String(streak)} />
          <Stat label="Tem" value={`${sealCount}/24`} />
        </dl>

        <button
          type="button"
          className="slip mt-4 flex w-full items-center gap-3 px-4 py-4 text-left"
          onClick={() => onOpen({ name: "tale", id: daily.id })}
        >
          <Seal char={daily.seal} size="sm" earned={Boolean(progress.seals[daily.id])} />
          <span className="min-w-0 flex-1">
            <span className="eyebrow">{dailyDone ? "Hôm nay đã học" : "Chuyện hôm nay"}</span>
            <span className="mt-1 block truncate font-serif text-xl">
              {daily.no}. {daily.name}
            </span>
            <span className="mt-0.5 block truncate text-sm text-ink-soft">{daily.title}</span>
          </span>
        </button>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button type="button" className="btn btn-line" onClick={() => onOpen({ name: "tale", id: next.id })}>
            <BookOpen className="size-4" />
            {sealCount === 0 ? "Bắt đầu" : sealCount === 24 ? "Đọc lại" : "Kể tiếp"}
          </button>
          <button type="button" className="btn btn-line" onClick={() => onOpen({ name: "quiz" })}>
            <CircleHelp className="size-4" />
            Đố vui
          </button>
          <button type="button" className="btn btn-pine col-span-2" onClick={() => onOpen({ name: "act" })}>
            <Footprints className="size-4" />
            Chọn việc nhỏ
          </button>
        </div>

        <div className="mt-8">
          {GROUPS.map((group) => (
            <section key={group.title} className="mb-6">
              <h2 className="eyebrow mb-3">{group.title}</h2>
              <ul className="grid grid-cols-4 gap-1">
                {group.ids.map((id) => {
                  const tale = taleById(id);
                  if (!tale) return null;
                  const stars = progress.seals[tale.id];
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        className="flex w-full flex-col items-center gap-1 rounded-2xl px-1 py-2"
                        onClick={() => onOpen({ name: "tale", id })}
                      >
                        <Seal char={tale.seal} size="sm" earned={Boolean(stars)} />
                        <span className="w-full truncate text-center text-xs font-medium">{tale.name}</span>
                        <span className="text-xs text-ink-soft">{stars ? `Tem ${stars}` : tale.no}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {sealCount === 24 ? (
          <p className="frame relative mb-6 px-4 py-4 text-center font-serif text-lg">
            <span className="relative z-10">Sổ đủ hai mươi bốn tem. Ngày mai vẫn có chuyện để nhớ.</span>
          </p>
        ) : null}

        {wipe ? (
          <div className="slip px-4 py-4">
            <p>Xóa tem và điểm trên máy này?</p>
            <div className="mt-3 flex gap-2">
              <button type="button" className="btn btn-primary" onClick={reset}>
                Xóa sổ
              </button>
              <button type="button" className="btn btn-line" onClick={() => setWipe(false)}>
                Để lại
              </button>
            </div>
          </div>
        ) : (
          <button type="button" className="text-sm text-ink-soft underline-offset-2 hover:underline" onClick={() => setWipe(true)}>
            Xóa sổ trên máy này
          </button>
        )}
      </div>
    </Screen>
  );
}

function toneState(picked: number | null, index: number, answerAt: number): string {
  if (picked === null) return "";
  if (index === answerAt) return "right";
  if (index === picked) return "wrong";
  return "dim";
}

function TaleStudy({ id, onBack }: { id: string; onBack: () => void }) {
  const tale = taleById(id);
  const { progress, see, answerQuiz, recordAct, giveSeal, markDaily } = useProgress();
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [quizOk, setQuizOk] = useState<boolean | null>(null);
  const [actScore, setActScore] = useState<0 | 1 | 2 | null>(null);
  const [pickedQuiz, setPickedQuiz] = useState<number | null>(null);
  const [pickedAct, setPickedAct] = useState<number | null>(null);
  const [order] = useState(() => (tale ? shuffle(tale.quiz.choices.map((_, index) => index)) : []));
  const sealed = useRef(false);
  const [seal, setSeal] = useState<{ stars: 2 | 3; daily: number; kept: boolean } | null>(null);

  useEffect(() => () => stopSpeak(), []);

  if (!tale) {
    return (
      <Screen>
        <TopBar title="Không thấy chuyện" onBack={onBack} />
      </Screen>
    );
  }

  const answerAt = order.indexOf(tale.quiz.answer);

  function finishAct(score: 0 | 1 | 2, ok: boolean | null) {
    if (!tale || sealed.current) return;
    sealed.current = true;
    recordAct(score);
    const stars: 2 | 3 | null = ok && score === 2 ? 3 : ok || score >= 1 ? 2 : null;
    if (stars) giveSeal(tale.id, stars);
    const had = progress.seals[tale.id];
    const daily = tale.id === taleOfDay().id && stars ? markDaily() : 0;
    const shown = (stars ? Math.max(stars, had ?? 0) : had) as 2 | 3 | undefined;
    setSeal(shown ? { stars: shown, daily, kept: !stars } : null);
    setStep(3);
    if (progress.sound) playTone(stars === 3 ? "ok" : stars === 2 ? "mid" : "no");
  }

  return (
    <Screen>
      <TopBar title={tale.name} kicker={`${tale.no}/24 · ${tale.era}`} onBack={onBack} />
      <Steps step={step === 3 ? 2 : step} />
      {step === 0 ? (
        <article className="rise">
          <div className="flex items-center gap-4">
            <Seal char={tale.seal} earned={Boolean(progress.seals[tale.id])} />
            <div>
              <h2 className="font-serif text-2xl leading-tight">{tale.title}</h2>
              <p className="mt-1 text-sm text-ink-soft">{tale.era}</p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-line mt-4"
            onClick={() => speak(speakText(tale))}
          >
            <Volume2 className="size-4" />
            Nghe kể
          </button>
          <div className="story mt-4 space-y-3">
            {tale.story.split("\n").map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <p className="note mt-4">
            <span className="font-semibold">Ý cho bé. </span>
            {tale.y}
          </p>
          <p className="slip mt-3 px-4 py-3 leading-relaxed">
            <span className="font-semibold">Việc nhỏ. </span>
            {tale.viec}
          </p>
          {tale.care ? (
            <p className="warn mt-3">
              <span className="font-semibold">Không bắt chước. </span>
              {tale.care}
            </p>
          ) : null}
          <button
            type="button"
            className="btn btn-primary btn-block mt-5"
            onClick={() => {
              stopSpeak();
              see(tale.id);
              setStep(1);
            }}
          >
            Mình nghe rồi
          </button>
        </article>
      ) : null}

      {step === 1 ? (
        <div className="rise">
          <p className="mb-3 font-medium">{tale.quiz.ask}</p>
          <div className="flex flex-col gap-2">
            {order.map((choiceIndex, index) => (
              <button
                key={choiceIndex}
                type="button"
                className={`choice ${toneState(pickedQuiz, index, answerAt)}`}
                disabled={pickedQuiz !== null}
                onClick={() => {
                  if (pickedQuiz !== null) return;
                  const ok = index === answerAt;
                  setPickedQuiz(index);
                  setQuizOk(ok);
                  answerQuiz(ok);
                  if (progress.sound) playTone(ok ? "ok" : "no");
                }}
              >
                <span className="idx">{index + 1}</span>
                <span>{tale.quiz.choices[choiceIndex]}</span>
              </button>
            ))}
          </div>
          {pickedQuiz !== null ? (
            <div className="rise mt-4" aria-live="polite">
              <p className={`font-serif text-lg ${quizOk ? "text-pine" : "text-cinnabar"}`}>
                {quizOk ? "Đúng ý rồi" : "Chưa đúng, đọc lời giải nhé"}
              </p>
              <p className="mt-1 leading-relaxed text-ink-soft">{tale.quiz.why}</p>
              <button type="button" className="btn btn-primary btn-block mt-4" onClick={() => setStep(2)}>
                Chọn việc nhỏ
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      {step === 2 ? (
        <ActCard
          tale={tale}
          picked={pickedAct}
          onPick={(index) => {
            if (pickedAct !== null) return;
            setPickedAct(index);
            const score = tale.act.choices[index]!.score;
            setActScore(score);
            if (progress.sound) playTone(score === 2 ? "ok" : score === 1 ? "mid" : "no");
          }}
          onNext={() => finishAct(actScore ?? 0, quizOk)}
          nextLabel="Xem tem"
        />
      ) : null}

      {step === 3 ? (
        <div className="rise text-center">
          <div className="flex justify-center">
            <Seal char={tale.seal} size="lg" earned={Boolean(seal)} pop={Boolean(seal)} />
          </div>
          <h2 className="mt-4 font-serif text-2xl">
            {seal?.kept ? "Tem cũ vẫn còn" : seal ? (seal.stars === 3 ? "Đóng tem đẹp" : "Đã có tem") : "Chưa đóng tem"}
          </h2>
          <p className="mt-2 leading-relaxed text-ink-soft">
            {seal?.kept
              ? "Lần này chưa đủ để nâng tem. Tem đã đóng vẫn nằm trong sổ."
              : seal
                ? seal.stars === 3
                  ? `${tale.name} vào sổ với tem đẹp: hiểu đúng và chọn việc hiền nhất.`
                  : `${tale.name} có tem. Lần sau chọn đủ câu đúng và việc hiền nhất để nâng lên tem ba.`
                : "Lần này chưa đủ để đóng tem. Chọn câu đúng và việc hiền hơn."}
          </p>
          {seal?.daily ? <p className="mt-2 text-pine">Thêm quà chuyện hôm nay.</p> : null}
          <div className="mt-5 flex flex-col gap-2">
            {!seal || seal.kept ? (
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  sealed.current = false;
                  setPickedQuiz(null);
                  setPickedAct(null);
                  setQuizOk(null);
                  setActScore(null);
                  setStep(1);
                }}
              >
                Làm lại phần đố
              </button>
            ) : null}
            <button type="button" className="btn btn-line btn-block" onClick={onBack}>
              Về sổ
            </button>
          </div>
        </div>
      ) : null}
    </Screen>
  );
}

function ActCard({
  tale,
  picked,
  onPick,
  onNext,
  nextLabel,
}: {
  tale: Tale;
  picked: number | null;
  onPick: (index: number) => void;
  onNext: () => void;
  nextLabel: string;
}) {
  const best = tale.act.choices.findIndex((choice) => choice.score === 2);
  return (
    <div className="rise">
      <p className="eyebrow">{tale.act.where}</p>
      <h2 className="mt-1 font-serif text-2xl">{tale.act.title}</h2>
      <p className="story mt-3">{tale.act.story}</p>
      <div className="mt-4 flex flex-col gap-2">
        {tale.act.choices.map((choice, index) => {
          const state = picked === null ? "" : index === best ? "right" : index === picked ? "wrong" : "dim";
          return (
            <button
              key={choice.text}
              type="button"
              className={`choice ${state}`}
              disabled={picked !== null}
              onClick={() => onPick(index)}
            >
              <span className="idx">{index + 1}</span>
              <span>{choice.text}</span>
            </button>
          );
        })}
      </div>
      {picked !== null ? (
        <div className="rise mt-4" aria-live="polite">
          <p className="leading-relaxed">{tale.act.choices[picked]?.note}</p>
          <button type="button" className="btn btn-primary btn-block mt-4" onClick={onNext}>
            {nextLabel}
          </button>
        </div>
      ) : null}
    </div>
  );
}

function QuizRound({ onBack }: { onBack: () => void }) {
  const { progress, answerQuiz } = useProgress();
  const [deck] = useState(() => sample(TALES, 5));
  const [orders] = useState(() => deck.map((item) => shuffle(item.quiz.choices.map((_, index) => index))));
  const [cursor, setCursor] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const done = cursor >= deck.length;
  const tale = deck[cursor];
  const order = tale ? (orders[cursor] ?? []) : [];
  const answerAt = tale ? order.indexOf(tale.quiz.answer) : 0;

  return (
    <Screen>
      <TopBar title="Đố năm câu" kicker={done ? "Xong vòng" : `${cursor + 1}/5`} onBack={onBack} />
      {done || !tale ? (
        <RoundEnd
          title={correct >= 4 ? "Nhớ ý khá rồi" : "Đọc lại chuyện chưa chắc"}
          body={`Đúng ${correct} trên ${deck.length}. Mỗi câu đúng là hiểu một gương, không cần thuộc tên đời vua.`}
          onBack={onBack}
        />
      ) : (
        <div className="rise" key={tale.id}>
          <p className="text-sm text-ink-soft">
            {tale.no}. {tale.name} · {tale.title}
          </p>
          <p className="mt-2 mb-3 font-medium">{tale.quiz.ask}</p>
          <div className="flex flex-col gap-2">
            {order.map((choiceIndex, index) => (
              <button
                key={choiceIndex}
                type="button"
                className={`choice ${toneState(picked, index, answerAt)}`}
                disabled={picked !== null}
                onClick={() => {
                  if (picked !== null) return;
                  const ok = index === answerAt;
                  setPicked(index);
                  if (ok) setCorrect((value) => value + 1);
                  answerQuiz(ok);
                  if (progress.sound) playTone(ok ? "ok" : "no");
                }}
              >
                <span className="idx">{index + 1}</span>
                <span>{tale.quiz.choices[choiceIndex]}</span>
              </button>
            ))}
          </div>
          {picked !== null ? (
            <div className="rise mt-4">
              <p className="leading-relaxed text-ink-soft">{tale.quiz.why}</p>
              <button
                type="button"
                className="btn btn-primary btn-block mt-4"
                onClick={() => {
                  setPicked(null);
                  setCursor((value) => value + 1);
                }}
              >
                {cursor === deck.length - 1 ? "Xem kết quả" : "Câu sau"}
              </button>
            </div>
          ) : null}
        </div>
      )}
    </Screen>
  );
}

function ActRound({ onBack }: { onBack: () => void }) {
  const { progress, recordAct } = useProgress();
  const [deck] = useState(() => sample(TALES, 3));
  const [cursor, setCursor] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const tale = deck[cursor];
  const done = cursor >= deck.length;

  return (
    <Screen>
      <TopBar title="Việc nhỏ" kicker={done ? "Xong" : `${Math.min(cursor + 1, deck.length)}/3`} onBack={onBack} />
      {done || !tale ? (
        <RoundEnd
          title={score >= 5 ? "Chọn khéo" : "Có câu còn vội"}
          body={`Được ${score} điểm lòng hiếu trong ba tình huống. Việc hiền là việc an toàn, vừa sức bé.`}
          onBack={onBack}
        />
      ) : (
        <ActCard
          key={tale.id}
          tale={tale}
          picked={picked}
          onPick={(index) => {
            if (picked !== null) return;
            const got = tale.act.choices[index]!.score;
            setPicked(index);
            setScore((value) => value + got);
            recordAct(got);
            if (progress.sound) playTone(got === 2 ? "ok" : got === 1 ? "mid" : "no");
          }}
          onNext={() => {
            setPicked(null);
            setCursor((value) => value + 1);
          }}
          nextLabel={cursor >= deck.length - 1 ? "Xem kết quả" : "Việc sau"}
        />
      )}
    </Screen>
  );
}

function RoundEnd({ title, body, onBack }: { title: string; body: string; onBack: () => void }) {
  return (
    <div className="rise">
      <Seal char="孝" pop />
      <h2 className="mt-4 font-serif text-2xl">{title}</h2>
      <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
      <button type="button" className="btn btn-primary btn-block mt-5" onClick={onBack}>
        Về sổ
      </button>
    </div>
  );
}
