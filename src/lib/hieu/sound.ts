let ctx: AudioContext | null = null;

export function playTone(kind: "ok" | "mid" | "no") {
  if (typeof window === "undefined") return;
  const AC =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return;
  try {
    if (!ctx) ctx = new AC();
    if (ctx.state === "suspended") void ctx.resume();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = kind === "no" ? "triangle" : "sine";
    osc.frequency.setValueAtTime(kind === "ok" ? 523.25 : kind === "mid" ? 392 : 220, now);
    if (kind === "ok") osc.frequency.setValueAtTime(659.25, now + 0.09);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.05, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (kind === "ok" ? 0.28 : 0.18));
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.32);
  } catch {
    /* audio is optional */
  }
}

export function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "vi-VN";
  utter.rate = 0.9;
  utter.pitch = 1.05;
  window.speechSynthesis.speak(utter);
}

export function stopSpeak() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}
