/**
 * Data source for the session dashboard.
 *
 * Env:
 * - NEXT_PUBLIC_API_MODE: `mock` | `real` (default: `mock`)
 * - NEXT_PUBLIC_SESSION_ID: required when mode is `real`
 * - NEXT_PUBLIC_API_BASE_URL: REST base (see `src/lib/api/client.ts`)
 * - NEXT_PUBLIC_API_TOKEN: optional Bearer for real mode
 */
import { buildMockSessionPageViewModel } from "@/lib/mock/portal-data";
import { getSession } from "@/lib/api/client";

import { mapApiSessionToViewModel } from "./map-session";
import type { SessionPageViewModel } from "./session-view-model";

function apiMode(): "mock" | "real" {
  const raw = (process.env.NEXT_PUBLIC_API_MODE ?? "mock").toLowerCase();
  return raw === "real" ? "real" : "mock";
}

function requiredSessionId(): string {
  const id = process.env.NEXT_PUBLIC_SESSION_ID?.trim();
  if (!id) {
    throw new Error(
      "NEXT_PUBLIC_SESSION_ID is required when NEXT_PUBLIC_API_MODE=real",
    );
  }
  return id;
}

function buildConfigErrorViewModel(message: string): SessionPageViewModel {
  const base = buildMockSessionPageViewModel();
  return {
    ...base,
    session: {
      ...base.session,
      id: "—",
      connection: "Disconnected",
      uptime: "—",
    },
    loadError: message,
    logs: [
      {
        timestamp: new Date().toISOString().slice(11, 23),
        level: "ERROR",
        message: message,
      },
      ...base.logs,
    ],
  };
}

function buildFetchErrorViewModel(sessionId: string, err: unknown): SessionPageViewModel {
  const msg = err instanceof Error ? err.message : String(err);
  const base = buildMockSessionPageViewModel();
  return {
    ...base,
    session: {
      id: sessionId,
      connection: "Disconnected",
      uptime: "—",
    },
    robot: {
      name: "Unknown",
      status: "Offline",
      battery: "—",
    },
    loadError: `API unreachable: ${msg}`,
    logs: [
      {
        timestamp: new Date().toISOString().slice(11, 23),
        level: "ERROR",
        message: `Failed to load session: ${msg}`,
      },
    ],
    terminalLines: [
      "# Real mode error",
      `# Session: ${sessionId}`,
      "",
      msg,
    ],
    status: {
      ...base.status,
      network: "Poor",
      robot: "Unknown",
    },
  };
}

export async function loadSessionPageViewModel(): Promise<SessionPageViewModel> {
  if (apiMode() === "mock") {
    return buildMockSessionPageViewModel();
  }

  let sessionId: string;
  try {
    sessionId = requiredSessionId();
  } catch (e) {
    return buildConfigErrorViewModel(
      e instanceof Error ? e.message : String(e),
    );
  }

  try {
    const apiSession = await getSession(sessionId);
    return mapApiSessionToViewModel(apiSession);
  } catch (e) {
    return buildFetchErrorViewModel(sessionId, e);
  }
}
