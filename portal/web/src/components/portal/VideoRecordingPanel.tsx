"use client";

import { useEffect, useRef, useState } from "react";

function formatElapsed(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export function VideoRecordingPanel() {
  const [recording, setRecording] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [audioOn, setAudioOn] = useState(true);
  const [multicamOn, setMulticamOn] = useState(true);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!recording) return;
    const id = window.setInterval(() => {
      if (startRef.current == null) {
        startRef.current = Date.now();
      }
      setElapsedSec(Math.floor((Date.now() - startRef.current) / 1000));
    }, 250);
    return () => window.clearInterval(id);
  }, [recording]);

  const toggleRecording = () => {
    setRecording((on) => {
      if (on) {
        startRef.current = null;
        setElapsedSec(0);
        return false;
      }
      startRef.current = Date.now();
      setElapsedSec(0);
      return true;
    });
  };

  return (
    <section
      className="rounded-xl border border-rc-border-strong bg-rc-controller-chassis p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-rc-border/80"
      aria-label="Video recorder"
    >
      <div className="mb-2 flex items-center justify-between border-b border-rc-border/60 pb-2">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-rc-muted">
          Video recorder
        </h2>
        <span className="font-mono text-[10px] text-rc-muted">DECK-A</span>
      </div>

      <div className="flex items-center justify-between gap-2 border-b border-rc-border/60 py-2">
        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full border border-black/40 shadow-inner ${
              recording ? "bg-rc-danger shadow-[0_0_8px_rgba(244,63,94,0.7)]" : "bg-rc-border-strong"
            }`}
            aria-hidden
          />
          <span className="text-xs font-semibold tracking-wide text-rc-text">REC</span>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={recording}
          aria-label={recording ? "Stop recording" : "Start recording"}
          onClick={toggleRecording}
          className={`rounded border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide shadow-sm ${
            recording
              ? "border-rc-danger/60 bg-rc-danger/20 text-rc-log-error-text"
              : "border-rc-border-strong bg-rc-shell text-rc-muted hover:bg-rc-border/40"
          }`}
        >
          {recording ? "Stop" : "Arm"}
        </button>
      </div>

      <div
        className="border-b border-rc-border/60 py-3 text-center font-mono tabular-nums"
        aria-live={recording ? "polite" : "off"}
        aria-atomic="true"
      >
        <p className="text-[10px] uppercase tracking-wider text-rc-muted">Elapsed</p>
        <p className={`text-2xl font-semibold tracking-widest ${recording ? "text-rc-text" : "text-rc-muted"}`}>
          {formatElapsed(elapsedSec)}
        </p>
      </div>

      <dl className="space-y-1.5 border-b border-rc-border/60 py-2 text-[10px]">
        <div className="flex justify-between gap-2 text-rc-muted">
          <dt>Video</dt>
          <dd className="font-mono text-rc-text/90">1080p</dd>
        </div>
        <div className="flex justify-between gap-2 text-rc-muted">
          <dt>Frame rate</dt>
          <dd className="font-mono text-rc-text/90">30 fps</dd>
        </div>
        <div className="flex justify-between gap-2 text-rc-muted">
          <dt>Codec</dt>
          <dd className="font-mono text-rc-text/90">H.264</dd>
        </div>
        <div className="flex justify-between gap-2 text-rc-muted">
          <dt>Storage</dt>
          <dd className="font-mono text-rc-text/90">Est. 12.4 GB free</dd>
        </div>
      </dl>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <button
          type="button"
          aria-pressed={audioOn}
          aria-label="Audio capture"
          onClick={() => setAudioOn((v) => !v)}
          className={`rounded border px-2 py-1.5 text-center text-[10px] font-medium uppercase tracking-wide hover:bg-rc-border/30 ${
            audioOn
              ? "border-rc-success/40 bg-rc-controller-handle text-rc-text"
              : "border-rc-border-strong bg-rc-shell/50 text-rc-muted"
          }`}
        >
          Audio
          <span className="mt-0.5 block font-mono text-[9px] text-rc-success">
            {audioOn ? "ON" : "OFF"}
          </span>
        </button>
        <button
          type="button"
          aria-pressed={multicamOn}
          aria-label="Multicam tracks"
          onClick={() => setMulticamOn((v) => !v)}
          className={`rounded border px-2 py-1.5 text-center text-[10px] font-medium uppercase tracking-wide hover:bg-rc-border/30 ${
            multicamOn
              ? "border-rc-success/40 bg-rc-controller-handle text-rc-text"
              : "border-rc-border-strong bg-rc-shell/50 text-rc-muted"
          }`}
        >
          Multicam
          <span className="mt-0.5 block font-mono text-[9px] text-rc-success">
            {multicamOn ? "4" : "—"}
          </span>
        </button>
      </div>
    </section>
  );
}
