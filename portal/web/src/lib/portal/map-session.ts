import type { components } from "@/lib/api/generated";

import type {
  SessionCameraTile,
  SessionHeaderVM,
  SessionLogLine,
  SessionPageViewModel,
  SessionRobotCard,
  SessionStatusFooter,
} from "./session-view-model";

type ApiSession = components["schemas"]["Session"];

function connectionLabel(state: ApiSession["state"]): string {
  switch (state) {
    case "active":
      return "Connected";
    case "pending":
      return "Connecting";
    case "degraded":
      return "Degraded";
    case "ended":
      return "Ended";
    default:
      return state;
  }
}

function formatUptime(startedAt?: string): string {
  if (!startedAt) return "—";
  const start = Date.parse(startedAt);
  if (Number.isNaN(start)) return "—";
  const ms = Date.now() - start;
  if (ms < 0) return "00:00:00";
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function robotNameFromUnitId(robotUnitId: string): string {
  const short = robotUnitId.replace(/[^a-zA-Z0-9]/g, "").slice(0, 10);
  return short ? `Robot unit ${short}` : "Robot unit";
}

function placeholderCameras(): SessionCameraTile[] {
  return [
    { name: "Front View", latency: "n/a" },
    { name: "Back View", latency: "n/a" },
    { name: "Left View", latency: "n/a" },
    { name: "Right View", latency: "n/a" },
  ];
}

function robotHealthFromState(state: ApiSession["state"]): string {
  if (state === "active") return "Healthy";
  if (state === "degraded") return "Warning";
  if (state === "pending") return "Starting";
  return "Offline";
}

function isoTimestamp(): string {
  return new Date().toISOString().slice(11, 23);
}

export function mapApiSessionToViewModel(
  api: ApiSession,
  options?: { loadError?: string },
): SessionPageViewModel {
  const session: SessionHeaderVM = {
    id: api.id,
    connection: options?.loadError ? "Disconnected" : connectionLabel(api.state),
    uptime: formatUptime(api.started_at),
  };

  const robot: SessionRobotCard = {
    name: robotNameFromUnitId(api.robot_unit_id),
    status: api.state === "ended" ? "Offline" : api.state === "pending" ? "Starting" : "Online",
    battery: "—",
  };

  const logs: SessionLogLine[] = [
    {
      timestamp: isoTimestamp(),
      level: "INFO",
      message: `Session state: ${api.state}; safety_profile=${api.safety_profile}`,
    },
    {
      timestamp: isoTimestamp(),
      level: "DEBUG",
      message: `robot_unit_id=${api.robot_unit_id} studio_id=${api.studio_id}`,
    },
  ];
  if (api.capabilities?.length) {
    logs.push({
      timestamp: isoTimestamp(),
      level: "INFO",
      message: `Capabilities: ${api.capabilities.join(", ")}`,
    });
  }
  if (options?.loadError) {
    logs.push({
      timestamp: isoTimestamp(),
      level: "ERROR",
      message: options.loadError,
    });
  }

  const terminalLines = [
    "RoboCloud session shell (API mode)",
    "",
    JSON.stringify(api, null, 2),
    "",
    "robocloud:~$",
  ];

  const status: SessionStatusFooter = {
    network: options?.loadError ? "Poor" : "Good",
    robot: robotHealthFromState(api.state),
    battery: "—",
    cpuTemp: "—",
    localTime: new Date().toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    }),
  };

  return {
    navItems: [
      "Overview",
      "Control",
      "Files",
      "Data Recordings",
      "API Access",
      "Settings",
    ],
    activeNav: "Control",
    session,
    robot,
    cameras: placeholderCameras(),
    logs,
    terminalLines,
    status,
    controlModeLabel: "Manual (Keyboard)",
    loadError: options?.loadError,
  };
}
