export type LogLevel = "INFO" | "DEBUG" | "WARN" | "ERROR";

export type SessionLogLine = {
  timestamp: string;
  level: LogLevel;
  message: string;
};

export type SessionCameraTile = {
  name: string;
  latency: string;
};

export type SessionRobotCard = {
  name: string;
  status: string;
  battery: string;
};

export type SessionHeaderVM = {
  id: string;
  connection: string;
  uptime: string;
};

export type SessionStatusFooter = {
  network: string;
  robot: string;
  battery: string;
  cpuTemp: string;
  localTime: string;
};

/**
 * Single shape consumed by the session dashboard (mock or API-backed).
 */
export type SessionPageViewModel = {
  navItems: string[];
  activeNav: string;
  session: SessionHeaderVM;
  robot: SessionRobotCard;
  cameras: SessionCameraTile[];
  logs: SessionLogLine[];
  terminalLines: string[];
  status: SessionStatusFooter;
  controlModeLabel: string;
  /** When set, header shows a non-blocking error banner (e.g. API unreachable). */
  loadError?: string;
};
