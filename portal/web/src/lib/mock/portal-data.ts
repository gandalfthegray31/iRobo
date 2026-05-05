import type { SessionPageViewModel } from "@/lib/portal/session-view-model";

/** Static demo content for UI-first development (`NEXT_PUBLIC_API_MODE=mock`). */
export function buildMockSessionPageViewModel(): SessionPageViewModel {
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
    session: {
      id: "sess_7f3a9c2d",
      connection: "Connected",
      uptime: "00:12:47",
    },
    robot: {
      name: "Unitree G1",
      status: "Online",
      battery: "85%",
    },
    cameras: [
      { name: "Front View", latency: "182 ms" },
      { name: "Back View", latency: "176 ms" },
      { name: "Left View", latency: "191 ms" },
      { name: "Right View", latency: "188 ms" },
    ],
    logs: [
      { timestamp: "10:24:32.451", level: "INFO", message: "System initialized successfully" },
      { timestamp: "10:24:33.002", level: "INFO", message: "Motor mode enabled" },
      { timestamp: "10:24:35.210", level: "DEBUG", message: "Camera stream (front) connected" },
      { timestamp: "10:24:37.981", level: "INFO", message: "Control mode: MANUAL" },
      { timestamp: "10:24:39.104", level: "WARN", message: "High CPU temperature: 72C" },
      { timestamp: "10:24:40.301", level: "ERROR", message: "Obstacle detected: stopping movement" },
    ],
    terminalLines: [
      "Welcome to Unitree G1 Terminal",
      "Type 'help' for available commands.",
      "",
      "g1@robot:~$ status",
      "Robot Model: Unitree G1",
      "Battery: 85%",
      "Mode: Manual",
      "Sensors: OK",
      "g1@robot:~$",
    ],
    status: {
      network: "Good",
      robot: "Healthy",
      battery: "85%",
      cpuTemp: "72C",
      localTime: "10:24:41 AM",
    },
    controlModeLabel: "Manual (Keyboard)",
  };
}
