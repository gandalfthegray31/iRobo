import { rcPanel } from "@/lib/portal/tokens";
import { severityPillClass } from "@/lib/portal/log-styles";

import type { SessionLogLine } from "@/lib/portal/session-view-model";

type Props = {
  logs: SessionLogLine[];
};

export function LogPanel({ logs }: Props) {
  return (
    <section className={rcPanel}>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-rc-text">Real-time Logs</h3>
        <input
          readOnly
          value="Search logs..."
          className="w-36 rounded border border-rc-border-strong bg-rc-shell px-2 py-1 text-xs text-rc-muted"
        />
      </div>
      <div className="space-y-1 text-xs">
        {logs.map((log) => (
          <div
            key={`${log.timestamp}-${log.message}`}
            className="grid grid-cols-[90px_58px_1fr] gap-2 rounded px-2 py-1 hover:bg-rc-border/30"
          >
            <span className="text-rc-muted">{log.timestamp}</span>
            <span className={`rounded px-1.5 text-center ${severityPillClass(log.level)}`}>
              {log.level}
            </span>
            <span className="truncate text-rc-text/90">{log.message}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
