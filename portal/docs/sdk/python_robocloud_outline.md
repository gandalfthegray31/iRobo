# Python SDK surface (outline)

Aligned with the enterprise benchmark harness pattern: single client, `safety_profile`, `observe()` / `execute(action)` loop.

This is a **design outline**, not a published package.

## Installation (future)

```text
pip install robocloud
```

## Environment

| Variable | Description |
|----------|-------------|
| `ROBOCLOUD_API_TOKEN` | Org or user API token for REST |
| `ROBOCLOUD_REGION` | Optional region hint (`eu-central-1`, …) |

## Client construction

```python
from robocloud import RoboCloud

client = RoboCloud(
    session_id="sess_7f3a9c2d",
    safety_profile="industrial-bench",
    api_token=None,  # default from env
)
```

Parameters:

- **`session_id`**: active session (created from booking via REST).
- **`safety_profile`**: must match session; enforced server-side.
- **`api_token`**: long-lived org token; exchanged for short-lived realtime token over REST.

## Methods

### `observe() -> Observation`

Returns a **single synchronized observation** (or best-effort sync):

- Multi-camera frames (references or decoded arrays depending on mode).
- Joint state, IMU, gripper, timestamps, `frame_id`.

```python
obs = client.observe()
```

### `execute(action: dict, idempotency_key: str | None = None) -> ExecuteResult`

Sends a **canonical action** (see TDD JSON schema). Gateway applies **safety supervisor** before motion.

```python
result = client.execute(
    {"type": "named_skill", "skill": "stand", "params": {}},
    idempotency_key="trial-12-step-3",
)
```

`ExecuteResult` fields (conceptual):

- `status`: `accepted` | `rejected` | `clamped`
- `reason_code`: optional machine-readable reason
- `supervisor`: optional structured decision payload

### `stream_logs(levels=None)`

Async iterator or callback API for structured log events (`log.event` over shared WS).

### `stream_terminal()` / `terminal_write(data: bytes)`

Optional; for harnesses that need shell access when capability `terminal` is granted.

### Context manager

```python
with RoboCloud(session_id="...", safety_profile="tabletop-only") as client:
    for trial in range(50):
        obs = client.observe()
        action = policy(obs)
        result = client.execute(action, idempotency_key=f"trial-{trial}")
        log.record(trial, obs, action, result)
```

## Internal wiring (implementation note)

1. `POST /v1/sessions/{sessionId}/tokens/realtime` with capabilities `["observe", "control_api"]`.
2. Open WebSocket to `wss://rt.../v1/sessions/{sessionId}/stream`.
3. Send `control.api_command` envelopes; read `telemetry.state`, `log.event`, `supervisor.event`, `control.ack`.

## Versioning

- SDK major version tracks **canonical action schema** major version.
