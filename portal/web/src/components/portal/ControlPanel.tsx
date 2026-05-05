"use client";

import { useEffect, useId, useState } from "react";

import { rcPanel } from "@/lib/portal/tokens";

type Props = {
  modeLabel: string;
};

type Size = "compact" | "expanded";

const OVERLAY_ID = "robot-control-expanded-panel";

function IconExpand() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="text-rc-text">
      <path
        fill="currentColor"
        d="M9 3H5a2 2 0 0 0-2 2v4m18 0V5a2 2 0 0 0-2-2h-4M21 15v4a2 2 0 0 1-2 2h-4M3 15v4a2 2 0 0 0 2 2h4"
      />
    </svg>
  );
}

function IconCollapse() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="text-rc-text">
      <path
        fill="currentColor"
        d="M4 14h4v4H4v-4zm12-4h4v4h-4v-4zM4 6h4v4H4V6zm8 8h4v4h-4v-4z"
      />
    </svg>
  );
}

function Joystick({ size }: { size: Size }) {
  const outer = size === "compact" ? "h-11 w-11" : "h-[4.5rem] w-[4.5rem]";
  const inner = size === "compact" ? "inset-[5px]" : "inset-2.5";
  const nub = size === "compact" ? "h-2.5 w-2.5" : "h-3.5 w-3.5";
  return (
    <div
      className={`relative shrink-0 rounded-full border border-rc-border-strong bg-rc-controller-handle shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] ${outer}`}
    >
      <div
        className={`absolute ${inner} rounded-full bg-gradient-to-br from-rc-border-strong to-black shadow-inner`}
      />
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rc-muted/90 shadow ${nub}`}
      />
    </div>
  );
}

const dPadKeys = [
  { label: "Up", glyph: "\u2191", className: "col-start-2 row-start-1" },
  { label: "Left", glyph: "\u2190", className: "col-start-1 row-start-2" },
  { label: "Walk", glyph: "\u2689", className: "col-start-2 row-start-2" },
  { label: "Right", glyph: "\u2192", className: "col-start-3 row-start-2" },
  { label: "Down", glyph: "\u2193", className: "col-start-2 row-start-3" },
];

function DPad({ size }: { size: Size }) {
  const cell = size === "compact" ? "min-h-[1.65rem] text-xs" : "min-h-10 text-sm";
  return (
    <div className="grid w-full max-w-[6.5rem] grid-cols-3 grid-rows-3 gap-1">
      {dPadKeys.map((k) => (
        <button
          key={k.label}
          type="button"
          className={`${k.className} flex items-center justify-center rounded border border-rc-border-strong bg-rc-shell/90 font-medium text-rc-text shadow-sm hover:bg-rc-border/40 ${cell}`}
        >
          {k.glyph}
        </button>
      ))}
    </div>
  );
}

function PillPair({ size }: { size: Size }) {
  const text = size === "compact" ? "text-[9px]" : "text-xs";
  return (
    <div className="flex w-full justify-center gap-1.5">
      <button
        type="button"
        className={`rounded-full border border-rc-border-strong bg-rc-shell/80 px-2 py-0.5 font-medium text-rc-muted hover:bg-rc-border/40 ${text}`}
      >
        L1
      </button>
      <button
        type="button"
        className={`rounded-full border border-rc-border-strong bg-rc-shell/80 px-2 py-0.5 font-medium text-rc-muted hover:bg-rc-border/40 ${text}`}
      >
        L2
      </button>
    </div>
  );
}

function FaceDiamond({ size }: { size: Size }) {
  const btn =
    size === "compact"
      ? "h-9 w-9 text-[10px] font-semibold leading-tight"
      : "h-12 w-12 text-xs font-semibold leading-tight";
  return (
    <div className="flex items-center justify-center py-1">
      <div className="rotate-45">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className={`flex items-center justify-center rounded-full border border-rc-border-strong bg-rc-shell/95 text-rc-text shadow hover:bg-rc-border/40 ${btn}`}
          >
            <span className="-rotate-45">Stand</span>
          </button>
          <button
            type="button"
            className={`flex items-center justify-center rounded-full border border-rc-border-strong bg-rc-shell/95 text-rc-text shadow hover:bg-rc-border/40 ${btn}`}
          >
            <span className="-rotate-45">Q</span>
          </button>
          <button
            type="button"
            className={`flex items-center justify-center rounded-full border border-rc-border-strong bg-rc-shell/95 text-rc-text shadow hover:bg-rc-border/40 ${btn}`}
          >
            <span className="-rotate-45">E</span>
          </button>
          <button
            type="button"
            className={`flex items-center justify-center rounded-full border border-rc-border-strong bg-rc-shell/95 text-rc-text shadow hover:bg-rc-border/40 ${btn}`}
          >
            <span className="-rotate-45">Sit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ControllerBody({ modeLabel, size }: { modeLabel: string; size: Size }) {
  const compact = size === "compact";
  const chassisPad = compact ? "p-2" : "p-5";
  const gapCol = compact ? "gap-1.5" : "gap-3";
  const screenText = compact ? "text-[10px] leading-snug" : "text-xs leading-relaxed";
  const gripPad = compact ? "px-1.5 py-2" : "px-3 py-3";

  return (
    <div
      className={`rounded-2xl border-2 border-rc-border bg-rc-controller-chassis shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${chassisPad}`}
    >
      <div
        className={`flex min-w-0 flex-col sm:flex-row ${gapCol} sm:items-stretch`}
      >
        {/* Left grip */}
        <div
          className={`flex min-w-0 flex-1 flex-col items-center justify-between gap-2 rounded-2xl rounded-r-md border border-rc-border bg-rc-controller-handle ${gripPad} sm:max-w-[34%]`}
        >
          <Joystick size={size} />
          <DPad size={size} />
          <PillPair size={size} />
        </div>

        {/* Center screen */}
        <div
          className={`flex min-h-0 min-w-0 flex-[1.15] flex-col rounded-md border border-rc-controller-bezel bg-rc-controller-screen p-2 font-mono ${screenText} text-rc-muted shadow-inner`}
        >
          <div className="mb-1 text-[0.65rem] uppercase tracking-wider text-rc-muted/80">
            Display
          </div>
          <p className="text-rc-success">● Manual</p>
          <p className="mt-1 text-rc-text/90">MODE: {modeLabel}</p>
          <p className="mt-2 text-rc-muted">INPUT</p>
          <p className="text-rc-text/80">W A S D move</p>
          <p className="text-rc-text/80">Q E rotate</p>
          <p className="text-rc-text/80">Space stop</p>
        </div>

        {/* Right grip */}
        <div
          className={`flex min-w-0 flex-1 flex-col items-center justify-between gap-2 rounded-2xl rounded-l-md border border-rc-border bg-rc-controller-handle ${gripPad} sm:max-w-[34%]`}
        >
          <Joystick size={size} />
          <FaceDiamond size={size} />
          <div className="flex w-full justify-center gap-1.5">
            <button
              type="button"
              className={`rounded-full border border-rc-border-strong bg-rc-shell/80 px-2 py-0.5 font-medium text-rc-muted hover:bg-rc-border/40 ${compact ? "text-[9px]" : "text-xs"}`}
            >
              R1
            </button>
            <button
              type="button"
              className={`rounded-full border border-rc-border-strong bg-rc-shell/80 px-2 py-0.5 font-medium text-rc-muted hover:bg-rc-border/40 ${compact ? "text-[9px]" : "text-xs"}`}
            >
              R2
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`mt-3 w-full rounded-md bg-rc-danger font-semibold text-white shadow hover:bg-rc-danger-hover ${compact ? "py-2 text-sm" : "py-3 text-base"}`}
      >
        Emergency Stop
      </button>
    </div>
  );
}

export function ControlPanel({ modeLabel }: Props) {
  const [expanded, setExpanded] = useState(false);
  const headingId = useId();
  const overlayTitleId = useId();

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <aside className={`${rcPanel} min-w-0`}>
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h2 id={headingId} className="text-sm font-semibold text-rc-text">
            Robot Control
          </h2>
          <span className="mt-1 inline-block rounded bg-rc-success/20 px-2 py-0.5 text-[10px] text-rc-success sm:text-xs">
            Manual Mode
          </span>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-md border border-rc-border-strong bg-rc-shell p-1.5 text-rc-text hover:bg-rc-border/40"
          aria-expanded={expanded}
          aria-controls={OVERLAY_ID}
          aria-label={expanded ? "Close enlarged controls" : "Enlarge controls"}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? <IconCollapse /> : <IconExpand />}
        </button>
      </div>

      <ControllerBody modeLabel={modeLabel} size="compact" />

      {expanded ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-rc-overlay p-4"
          role="presentation"
          onClick={() => setExpanded(false)}
        >
          <div
            id={OVERLAY_ID}
            role="dialog"
            aria-modal="true"
            aria-labelledby={overlayTitleId}
            className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl border border-rc-border bg-rc-panel p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <p id={overlayTitleId} className="text-sm font-semibold text-rc-text">
                Robot Control (expanded)
              </p>
              <button
                type="button"
                className="rounded-md border border-rc-border-strong bg-rc-shell p-1.5 hover:bg-rc-border/40"
                aria-label="Close enlarged controls"
                onClick={() => setExpanded(false)}
              >
                <IconCollapse />
              </button>
            </div>
            <ControllerBody modeLabel={modeLabel} size="expanded" />
          </div>
        </div>
      ) : null}
    </aside>
  );
}
