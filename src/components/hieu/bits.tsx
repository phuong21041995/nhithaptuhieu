import type { ReactNode } from "react";
import { ChevronLeft, Volume2, VolumeX } from "lucide-react";
import { useProgress } from "@/lib/hieu/progress";

export function Screen({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-lg px-4 pt-7 pb-16">{children}</div>;
}

export function Seal({
  char,
  size = "md",
  earned = true,
  pop = false,
}: {
  char: string;
  size?: "sm" | "md" | "lg";
  earned?: boolean;
  pop?: boolean;
}) {
  const cls = ["seal", size === "sm" ? "sm" : "", size === "lg" ? "lg" : "", earned ? "" : "off", pop ? "pop" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} aria-hidden>
      {char}
    </div>
  );
}

export function TopBar({ title, kicker, onBack }: { title: string; kicker?: string; onBack?: () => void }) {
  const { progress, toggleSound } = useProgress();
  return (
    <header className="mb-5 flex items-center gap-3">
      {onBack ? (
        <button type="button" className="btn btn-line btn-icon" onClick={onBack} aria-label="Quay lại">
          <ChevronLeft className="size-5" />
        </button>
      ) : (
        <Seal char="孝" size="sm" />
      )}
      <div className="min-w-0 flex-1">
        <p className="eyebrow">{kicker ?? "Nhị thập tứ hiếu"}</p>
        <h1 className="truncate font-serif text-2xl leading-tight">{title}</h1>
      </div>
      <button
        type="button"
        className="btn btn-line btn-icon"
        onClick={toggleSound}
        aria-label={progress.sound ? "Tắt tiếng chuông" : "Bật tiếng chuông"}
        aria-pressed={progress.sound}
      >
        {progress.sound ? <Volume2 className="size-5" /> : <VolumeX className="size-5" />}
      </button>
    </header>
  );
}

export function Steps({ step }: { step: 0 | 1 | 2 | 3 }) {
  const items = ["Học", "Hiểu", "Hành"];
  return (
    <ol className="mb-5 grid grid-cols-3 gap-2">
      {items.map((label, index) => {
        const on = step === index;
        const done = step > index;
        return (
          <li
            key={label}
            className={`flex items-center justify-center gap-1 rounded-full border py-2 text-sm font-medium ${
              on
                ? "border-cinnabar bg-cinnabar text-on-cinnabar"
                : done
                  ? "border-pine text-pine"
                  : "border-line text-ink-soft"
            }`}
          >
            <span className="font-serif">{index + 1}</span>
            {label}
          </li>
        );
      })}
    </ol>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="slip px-2 py-3 text-center">
      <dd className="font-serif text-2xl leading-none">{value}</dd>
      <dt className="mt-1 text-xs tracking-wide text-ink-soft uppercase">{label}</dt>
    </div>
  );
}
