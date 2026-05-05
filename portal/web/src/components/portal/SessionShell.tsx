import { rcShellInner } from "@/lib/portal/tokens";

import { CameraGrid } from "./CameraGrid";
import { ControlPanel } from "./ControlPanel";
import { LogPanel } from "./LogPanel";
import { SessionHeader } from "./SessionHeader";
import { SessionSidebar } from "./SessionSidebar";
import { StatusFooter } from "./StatusFooter";
import { TerminalPanel } from "./TerminalPanel";

import type { SessionPageViewModel } from "@/lib/portal/session-view-model";

type Props = {
  model: SessionPageViewModel;
};

export function SessionShell({ model }: Props) {
  return (
    <main className="min-h-screen bg-rc-app p-3 text-rc-text md:p-4">
      <div
        className={`mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1500px] gap-3 ${rcShellInner}`}
      >
        <SessionSidebar
          robot={model.robot}
          navItems={model.navItems}
          activeNav={model.activeNav}
        />

        <section className="flex min-w-0 flex-1 flex-col gap-3">
          <SessionHeader session={model.session} loadError={model.loadError} />

          <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 xl:grid-cols-[1fr_320px]">
            <div className="grid min-h-0 grid-rows-[1fr_auto] gap-3">
              <CameraGrid cameras={model.cameras} />

              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                <LogPanel logs={model.logs} />
                <TerminalPanel lines={model.terminalLines} />
              </div>
            </div>

            <ControlPanel modeLabel={model.controlModeLabel} />
          </div>

          <StatusFooter status={model.status} />
        </section>
      </div>
    </main>
  );
}
