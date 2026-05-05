import type { operations } from "./generated";

type CreateSessionBody =
  operations["createSession"]["requestBody"]["content"]["application/json"];
type Session =
  operations["getSession"]["responses"][200]["content"]["application/json"];
type RealtimeToken =
  operations["mintRealtimeToken"]["responses"][200]["content"]["application/json"];
type ArtifactsResponse =
  operations["listArtifacts"]["responses"][200]["content"]["application/json"];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.robocloud.example/v1";

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN?.trim();

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {}),
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

export async function createSession(payload: CreateSessionBody): Promise<Session> {
  return request<Session>("/sessions", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getSession(sessionId: string): Promise<Session> {
  return request<Session>(`/sessions/${sessionId}`);
}

export async function mintRealtimeToken(
  sessionId: string,
  capabilities: ("observe" | "control_manual" | "control_api" | "terminal" | "export")[] = [
    "observe",
    "control_manual",
  ],
): Promise<RealtimeToken> {
  return request<RealtimeToken>(`/sessions/${sessionId}/tokens/realtime`, {
    method: "POST",
    body: JSON.stringify({ capabilities }),
  });
}

export async function listArtifacts(sessionId: string): Promise<ArtifactsResponse> {
  return request<ArtifactsResponse>(`/sessions/${sessionId}/artifacts`);
}
