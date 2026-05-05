import { rcPanel } from "@/lib/portal/tokens";

import type { SessionHeaderVM } from "@/lib/portal/session-view-model";

type Props = {
  session: SessionHeaderVM;
  loadError?: string;
};

export function SessionHeader({ session, loadError }: Props) {
  return (
    <header className={`${rcPanel} px-4 py-3`}>
      {loadError ? (
        <div className="mb-3 rounded-md border border-rc-log-error-text/40 bg-rc-log-error-bg px-3 py-2 text-xs text-rc-log-error-text">
          {loadError}
        </div>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-sm text-rc-muted">Session ID: {session.id}</p>
          <p
            className={
              session.connection === "Connected"
                ? "text-xs text-rc-success"
                : "text-xs text-rc-muted"
            }
          >
            {session.connection}
          </p>
        </div>
        <div className="text-sm text-rc-text/90">
          Uptime <span className="font-semibold">{session.uptime}</span>
        </div>
      </div>
    </header>
  );
}
