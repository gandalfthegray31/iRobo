import type { LogLevel } from "./session-view-model";

const levelClasses: Record<LogLevel, string> = {
  INFO: "bg-rc-log-info-bg text-rc-log-info-text",
  DEBUG: "bg-rc-log-debug-bg text-rc-log-debug-text",
  WARN: "bg-rc-log-warn-bg text-rc-log-warn-text",
  ERROR: "bg-rc-log-error-bg text-rc-log-error-text",
};

export function severityPillClass(level: string): string {
  return levelClasses[level as LogLevel] ?? "bg-rc-log-debug-bg text-rc-log-debug-text";
}
