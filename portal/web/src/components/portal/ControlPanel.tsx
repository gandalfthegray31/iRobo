import { rcPanel } from "@/lib/portal/tokens";

type Props = {
  modeLabel: string;
};

const controlButtons = [
  { label: "Up", glyph: "\u2191" },
  { label: "Left", glyph: "\u2190" },
  { label: "Walk", glyph: "\u2689" },
  { label: "Right", glyph: "\u2192" },
  { label: "Down", glyph: "\u2193" },
];

export function ControlPanel({ modeLabel }: Props) {
  return (
    <aside className={rcPanel}>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-rc-text">Robot Control</h2>
        <span className="rounded bg-rc-success/20 px-2 py-1 text-xs text-rc-success">
          Manual Mode
        </span>
      </div>

      <label className="mb-2 block text-xs text-rc-muted">Control Mode</label>
      <div className="mb-4 rounded border border-rc-border-strong bg-rc-shell px-2 py-2 text-sm text-rc-text">
        {modeLabel}
      </div>

      <p className="mb-2 text-xs text-rc-muted">Keyboard Controls</p>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {controlButtons.map((button) => (
          <button
            key={button.label}
            type="button"
            className="rounded border border-rc-border-strong bg-rc-shell/80 py-3 text-sm text-rc-text hover:bg-rc-border/40"
          >
            {button.glyph}
          </button>
        ))}
      </div>

      <p className="mb-3 text-xs text-rc-muted">
        W / A / S / D to move, Q / E to rotate, Space to stop.
      </p>

      <div className="mb-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="rounded bg-rc-border-strong px-3 py-2 text-sm text-rc-text hover:bg-rc-border/80"
        >
          Stand
        </button>
        <button
          type="button"
          className="rounded bg-rc-border-strong px-3 py-2 text-sm text-rc-text hover:bg-rc-border/80"
        >
          Sit
        </button>
      </div>

      <button
        type="button"
        className="w-full rounded bg-rc-danger px-3 py-2 text-sm font-semibold text-white hover:bg-rc-danger-hover"
      >
        Emergency Stop
      </button>
    </aside>
  );
}
