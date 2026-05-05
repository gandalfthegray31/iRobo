import { rcPanel } from "@/lib/portal/tokens";

import type { SessionStatusFooter } from "@/lib/portal/session-view-model";

type Props = {
  status: SessionStatusFooter;
};

export function StatusFooter({ status }: Props) {
  return (
    <footer
      className={`${rcPanel} grid grid-cols-2 gap-2 px-4 py-3 text-xs text-rc-text/80 md:grid-cols-5`}
    >
      <p>Network: {status.network}</p>
      <p>Robot: {status.robot}</p>
      <p>Battery: {status.battery}</p>
      <p>CPU Temp: {status.cpuTemp}</p>
      <p>Local: {status.localTime}</p>
    </footer>
  );
}
