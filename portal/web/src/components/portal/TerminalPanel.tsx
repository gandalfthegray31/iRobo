import { rcPanel } from "@/lib/portal/tokens";

type Props = {
  lines: string[];
};

export function TerminalPanel({ lines }: Props) {
  return (
    <section className={rcPanel}>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-rc-text">Terminal</h3>
        <button
          type="button"
          className="rounded border border-rc-border-strong px-2 py-1 text-xs text-rc-text/80"
        >
          Clear
        </button>
      </div>
      <div className="rounded-md bg-rc-terminal-bg p-2 font-mono text-xs text-rc-terminal-fg">
        {lines.map((line, i) => (
          <p key={`${i}-${line}`}>{line}</p>
        ))}
      </div>
    </section>
  );
}
