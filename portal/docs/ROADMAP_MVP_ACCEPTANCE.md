# Phased delivery and MVP acceptance tests

**Companion:** [PRD_RoboCloud_Session_Portal.md](./PRD_RoboCloud_Session_Portal.md), [TDD_RoboCloud_Session_Portal.md](./TDD_RoboCloud_Session_Portal.md)

This document ties phased delivery to **testable acceptance criteria**.

---

## Phase 0 — Foundations (1–2 weeks)

**Deliverables**

- OIDC login path; org/workspace skeleton.
- Design tokens aligned with dark dashboard mockup.
- Postgres schema for `Session`, `RobotUnit`, `Studio` (catalog read path).

**Acceptance**

- [ ] User can sign in and see empty shell with correct layout regions (header, sidebar, main, footer).
- [ ] Catalog API returns at least one mock robot and studio.

---

## Phase 1 — Session shell + simulated robot (2–3 weeks)

**Deliverables**

- Control page: **2×2 grid** with placeholder or looped MP4 streams.
- WebSocket channel with typed messages (`telemetry.state`, `log.event`, `control.ack`, `supervisor.event`) from mock server.
- Session timer + session id in header.

**Acceptance — layout parity**

- [ ] All mockup regions present: session chrome, robot card, nav items, four camera labels, control rail (mode, keys help, Stand/Sit, E-stop), logs with severity filters, terminal with welcome line, footer metrics row.
- [ ] Fullscreen per camera tile works and restores grid.

**Acceptance — reconnect**

- [ ] Kill WS server process: UI shows **degraded/disconnected**; automatic reconnect succeeds within configured backoff without losing session id display.
- [ ] After reconnect, log stream resumes; no duplicate `session.ready` without idempotency handling documented in client.

**Acceptance — supervisor (mock)**

- [ ] Inject mock `supervisor.event` reject: UI logs reason; trial correlation field visible when present.
- [ ] Inject mock re-home sequence: UI shows info log + state returns to nominal.

---

## Phase 2 — Real robot path (4–8 weeks, parallelizable)

**Deliverables**

- Edge `RobotGateway` for first robot family; safety supervisor MVP.
- Manual keyboard → canonical intent → adapter → SDK.
- WebRTC ingress from studio cameras to SFU (per ADR 0001).

**Acceptance**

- [ ] First camera frame reaches browser under target SLO on lab network (document measured P95).
- [ ] Software E-stop stops motion within bounded time (measured and documented).
- [ ] Mode switch confirmation appears when `telemetry.state` indicates motion.

---

## Phase 3 — API + SDK (3–5 weeks)

**Deliverables**

- REST token mint + WS protocol as in TDD.
- Python SDK outline implemented as thin wrapper (see [sdk/python_robocloud_outline.md](./sdk/python_robocloud_outline.md)).

**Acceptance**

- [ ] External script can run **20-trial** loop using only API (no manual clicks), with idempotency keys honored.
- [ ] `observe()` and `execute()` return structured errors on capability mismatch.

---

## Phase 4 — Recording + export (3–6 weeks)

**Deliverables**

- Start/stop recording; bundle builder; manifest + checksums in object storage.

**Acceptance — bundle export**

- [ ] End session flow offers download links within **N minutes** of stop.
- [ ] Bundle contains: ≥1 multi-cam video artifact, joint JSONL, safety events, manifest with SHA-256 for each file.
- [ ] Re-download uses signed URL; expired URL returns 403 with refresh path.

---

## Phase 5 — Enterprise hardening (ongoing)

**Deliverables**

- SAML/OIDC enterprise SSO, PO billing hooks, EU region pinning, audit export.

**Acceptance**

- [ ] SSO-only org cannot use password login.
- [ ] Session and artifacts metadata prove **region** for compliance checklist.

---

## Cross-phase regression suite (CI)

- Contract tests for OpenAPI routes in [openapi/robocloud-session.yaml](./openapi/robocloud-session.yaml).
- WS golden-frame tests for envelope parsing.
- Static a11y checks on Control page (roles/labels for camera tiles and E-stop).
