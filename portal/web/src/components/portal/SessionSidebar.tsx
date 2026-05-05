import { rcSidebarSurface } from "@/lib/portal/tokens";

import type { SessionRobotCard } from "@/lib/portal/session-view-model";

type Props = {
  robot: SessionRobotCard;
  navItems: string[];
  activeNav: string;
};

export function SessionSidebar({ robot, navItems, activeNav }: Props) {
  return (
    <aside className={`hidden w-64 lg:block ${rcSidebarSurface}`}>
      <div className="mb-5 border-b border-rc-border pb-4">
        <p className="text-lg font-semibold tracking-tight text-rc-text">RoboCloud</p>
        <p className="text-xs text-rc-muted">Back to Dashboard</p>
      </div>

      <div className="mb-4 rounded-lg border border-rc-border bg-rc-panel/60 p-3">
        <p className="text-xs uppercase tracking-wide text-rc-muted">Selected Robot</p>
        <p className="mt-1 text-sm font-medium text-rc-text">{robot.name}</p>
        <p className="text-xs text-rc-success">{robot.status}</p>
        <p className="mt-2 text-xs text-rc-text/80">Battery {robot.battery}</p>
      </div>

      <button
        type="button"
        className="mb-5 w-full rounded-md bg-rc-accent px-3 py-2 text-sm font-medium text-white hover:bg-rc-accent-hover"
      >
        End Session
      </button>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`w-full rounded-md px-3 py-2 text-left text-sm ${
              item === activeNav
                ? "bg-rc-nav-active-bg text-rc-nav-active-text"
                : "text-rc-text/80 hover:bg-rc-border/40"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
