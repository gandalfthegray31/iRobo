# RoboCloud Session Portal — Product Requirements Document

**Version:** 1.0  
**Status:** Draft  
**Owner:** Product  
**Sources:** First-call deck (`RobotCloud_FCD_v3.pdf`), exported product requirements (`01_Product_requirements - Google Docs.pdf`), researcher and enterprise user journeys (`user_journey_research.md`, `user_journey_consultant.md`), session UI mockup (`robot_app_UI`).

---

## 1. Purpose and mission

RoboCloud democratizes access to humanoid robots: developers, researchers, and enterprises run real-world experiments **without owning hardware**, via **usage-based** access, **standardized studios**, and **API-first** control.

This PRD defines requirements for the **Session Portal** — the in-session web experience (layout aligned with the RoboCloud control mockup: multi-camera observation, control, logs, terminal, session chrome) and the **supporting product behaviors** (booking entry points, safety, data export, enterprise controls).

---

## 2. Problem statement

Humanoid robots are **expensive, scarce, and operationally heavy**. Teams share few units, suffer scheduling friction, and spend disproportionate time on setup and integration. Platforms are **fragmented** (different SDKs and control surfaces), which blocks comparable benchmarks. **Simulation alone** cannot close the sim-to-real gap. There is no mature **infrastructure layer** to “spin up” a robot session, run a controlled eval, and export reproducible evidence — analogous to cloud compute for software.

---

## 3. Goals and non-goals

### 3.1 Goals

| ID | Goal | Success signal |
|----|------|----------------|
| G1 | **Time-to-first-frame:** user reaches live observation in a booked session quickly after login | Median time from “session start” to first camera frame ≤ target (see NFR) |
| G2 | **Reproducible evals:** session outputs support papers and client deliverables | Majority of research sessions export a **session bundle**; exports include manifest + checksums |
| G3 | **Cross-robot comparability:** same logical harness works across robot units with embodiment adapters | Zero or minimal code changes when swapping robot in same studio class (per standardized API) |
| G4 | **Safe utilization:** unsafe commands are blocked or recovered without losing the session | Supervisor reject + auto re-home flows logged; session completion rate meets SLO |
| G5 | **Enterprise readiness:** SSO, org structure, auditability, regional/studio constraints | SSO orgs can restrict access; audit trail for control + API actions |
| G6 | **Operator efficiency:** support and ops can diagnose from session id + logs | “Report Issue” attaches session context |

### 3.2 Non-goals (v1)

- Simulating full multi-tenant **fleet ownership** or digital twin of every vendor feature.
- **On-robot large-scale training** (focus: inference, eval, data collection).
- **Guaranteed** global sub-50 ms video latency (targets are documented vs. measured; fallback modes exist).
- **SCIM** provisioning (post-v1 unless enterprise deal requires earlier).
- Full **vendor-native teleop** beyond documented, safety-gated mappings.

---

## 4. Target users and personas

| Segment | Needs | Portal implications |
|---------|--------|---------------------|
| Physical AI labs and researchers | On-demand access, repeatable runs, exports for publications | Credits/hour UX, tagging, bundle export, trial correlation in logs |
| Students / independent learners | Affordable access, guidance | Clear pricing, documentation links, guardrails |
| AI/ML engineers | Pipeline integration, standardized control | API Access view, tokens, SDK examples, CI-friendly flows |
| Enterprise engineering | Benchmark across vendors, evidence for procurement | SSO, PO/billing hooks, residency-aware studios, audit logs |

**Primary detailed personas (journeys):**

- **Researcher (Maya):** short eval windows, latency readout, safety supervisor with recovery, pause/resume, session bundle (multi-cam video, joint state, policy traces, safety events), prepaid credits.
- **Enterprise consultant (Julien):** Azure AD SSO, PO billing, EU-only studios, identical studio + harness across three robots, scorecard-oriented exports, methodology auditability.

---

## 5. Product scope — Session Portal (UI-aligned)

### 5.1 Information architecture (navigation)

Sidebar **primary nav** (mockup parity):

| Route | Purpose (v1) |
|-------|----------------|
| Overview | Session summary, robot/studio context, quick health, links to runbook |
| **Control** | Default heavy-use surface: cameras + control + logs + terminal |
| Files | Upload/download policy artifacts within session policy limits |
| Data Recordings | Start/stop recording, status, retention, link to bundle export |
| API Access | Session-scoped credentials, WebSocket/REST entry points, code snippets |
| Settings | User preferences, keyboard bindings help, notification prefs; org-level when admin |

### 5.2 Global chrome (header)

| UI element | Requirement |
|------------|-------------|
| Brand (RoboCloud) | Link to dashboard/home when policy allows |
| Session ID | Immutable display id for support and exports |
| Connection state | Connected / degraded / disconnected with reason |
| Session timer | Elapsed (and optional remaining if prepaid window) |
| Report Issue | Pre-filled ticket: session id, user, timestamps, last N log lines (PII-safe) |
| Help | Link to documentation |
| Profile | Initials/avatar; sign out |

### 5.3 Sidebar — robot and session context

| UI element | Requirement |
|------------|-------------|
| Robot card | Model name, thumbnail, **Online/Offline**, battery % when available |
| End Session | Confirm dialog; triggers billing stop, recording finalize hooks, export prompt |
| Studio context | Current studio name; **Change studio** only when booking/policy allows |
| Footer link | “Need help? View documentation” |

### 5.4 Control view — observation (2×2 camera grid)

| ID | Requirement |
|----|-------------|
| FR-OBS-1 | Default **four** labeled views (e.g., Front / Back / Left / Right — exact labels configurable per studio preset). |
| FR-OBS-2 | Each tile: **fullscreen** control; exit fullscreen restores grid. |
| FR-OBS-3 | Per-stream **latency indicator** when WebRTC stats available; “unknown” when not. |
| FR-OBS-4 | Degradation: show stale frame badge + reconnect affordance if stream fails. |

### 5.5 Control view — control rail

| ID | Requirement |
|----|-------------|
| FR-CTL-1 | **Control mode** selector: at minimum **Manual (keyboard)** and **API**; disabled states when disconnected or safety hold. |
| FR-CTL-2 | Manual: documented bindings (e.g., W/A/S/D, Q/E, Space stand/stop) — exact map **versioned** in help + API docs. |
| FR-CTL-3 | D-pad UI mirrors keyboard intent for discoverability (optional click-to-send same commands). |
| FR-CTL-4 | **Stand** / **Sit** (or platform-mapped primitives) as explicit actions. |
| FR-CTL-5 | **Emergency stop:** prominent control; **software E-stop** always; **hardware E-stop** state surfaced when gateway reports it. |
| FR-CTL-6 | Switching mode while robot moving requires **explicit confirmation**. |
| FR-CTL-7 | Rate limiting and debouncing on repeated manual commands (NFR). |

### 5.6 Control view — logs panel

| ID | Requirement |
|----|-------------|
| FR-LOG-1 | Stream structured log events with **severity**: All / Info / Warn / Error / Debug. |
| FR-LOG-2 | Search/filter on message text and structured fields (e.g., `trial_id`). |
| FR-LOG-3 | Infinite scroll / virtualized list with export of visible selection (snippet). |
| FR-LOG-4 | Supervisor decisions (reject, clamp, re-home) appear as structured events. |

### 5.7 Control view — terminal panel

| ID | Requirement |
|----|-------------|
| FR-TERM-1 | Session-scoped shell or command bridge with **welcome banner** and model context. |
| FR-TERM-2 | Command history (up arrow); clear screen. |
| FR-TERM-3 | **Bounded resources:** CPU/time/output caps; kill long-running processes per policy. |
| FR-TERM-4 | Upload/download for artifacts (e.g., `policy.pt`) within size and malware scan policy. |
| FR-TERM-5 | Optional **SSH bridge** for enterprise workspaces (feature-flagged). |

### 5.8 Footer — system health strip

| Item | Requirement |
|------|-------------|
| Network | Qualitative or RTT-based indicator from client to realtime gateway |
| Robot status | Healthy / Warning / Fault from telemetry |
| Battery | % from robot telemetry when available |
| CPU temp | From robot/studio telemetry when available (warn threshold in UI) |
| Local time | User’s browser local time for operator context |

### 5.9 Booking and catalog (portal entry)

Minimum to support journeys:

- Browse **fleet** (filters: humanoid, region, price band, capabilities).
- Browse **studios** (modular environment description, lighting, object sets, calibration assets where applicable).
- **Reserve** slot; deduct **prepaid credits** or show invoice/PO path for enterprise.
- Pricing bands aligned with business materials (e.g., pay-per-use hourly ranges by robot + studio tier).

### 5.10 Data recordings and session bundle

| ID | Requirement |
|----|-------------|
| FR-REC-1 | User can start/stop recording; status visible in Data Recordings. |
| FR-REC-2 | **Session bundle** includes: synchronized multi-camera video, joint state (e.g., JSONL), policy I/O traces, safety events; **manifest + checksums**. |
| FR-REC-3 | Tagging session run (e.g., `vla-eval-v3`, `g1-studio-b`) at end. |
| FR-REC-4 | Retention and org-level policies; PII minimization in artifacts. |

### 5.11 Safety and compliance

| ID | Requirement |
|----|-------------|
| FR-SAF-1 | **Safety profile** per session (e.g., `tabletop-only`, `industrial-bench`) constrains workspace and command envelopes. |
| FR-SAF-2 | **Validation + predictive gate** before motion (journey: reject on torque exceed; log; count trial failure; re-home). |
| FR-SAF-3 | **Software E-stop** stops accepted motion queue at gateway. |
| FR-SAF-4 | **Audit log** for manual UI actions and API `execute` calls (who, when, payload hash). |

---

## 6. Functional requirements summary (traceability)

| ID | Name | Summary |
|----|------|---------|
| FR-Session | Session lifecycle | Create, resume, end; timer; reconnect preserving session id when possible |
| FR-Observation | Cameras | Four streams, fullscreen, latency display, degradation UX |
| FR-Control-Manual | Keyboard | Bindings, debounce, hold behavior, mode-switch confirm |
| FR-Control-API | Programmatic | Session-scoped token; observe/execute semantics; idempotency |
| FR-Safety | Supervisor | Envelopes, rejections, re-home, E-stop |
| FR-Logs | Telemetry | Severity filters, search, correlation ids |
| FR-Terminal | Shell | Bounded execution, file transfer, optional SSH |
| FR-Export | Bundle | Manifest, checksums, retention |
| FR-Enterprise | Org | SSO, PO entity hooks, region/studio pinning |
| FR-Support | Issue | Context capture for support |

---

## 7. Non-functional requirements

| Category | Requirement |
|----------|-------------|
| NFR-LAT-CTL | Control/command path: P95 round-trip **documented** (target band e.g. &lt; 150 ms LAN-adjacent; higher over internet). |
| NFR-LAT-VID | Video glass-to-glass: target **150–300 ms** on good paths; LL-HLS fallback higher latency, labeled. |
| NFR-STATE | Robot state updates **10–30 Hz** where SDK allows. |
| NFR-AVAIL | Degraded modes: video-only; control disabled; read-only logs. |
| NFR-SEC | TLS everywhere; session tokens scoped; edge **mTLS**; RBAC. |
| NFR-PRIV | GDPR-aligned processing; EU routing option for studios. |
| NFR-A11Y | Keyboard operable control surfaces; focus order; color-contrast for status (not color-only). |

---

## 8. Metrics and analytics

| Metric | Definition |
|--------|------------|
| Activation | Time from session scheduled start to first camera frame |
| Session completion rate | Sessions ended normally / total started |
| Supervisor FP rate | Rejected commands later deemed safe / total rejects (sampled review) |
| Bundle export rate | Sessions with ≥1 successful bundle download |
| Repeat booking | Second booking within 14 days (same user/org) |
| Enterprise | % orgs on SSO; PO-linked accounts; incident MTTR |

---

## 9. Dependencies and assumptions

- Physical **studios** and **robot gateways** exist per region; portal consumes their capabilities via cloud APIs.
- Vendor SDKs are integrated at **edge**, not in the browser.
- Legal: waivers, studio safety rules, and regional data processing agreements for enterprise.

---

## 10. Open questions

- Exact **keyboard** default map per robot family (version per `RobotModel`).
- Whether **Change studio** is allowed mid-session or only between bookings.
- Minimum viable **terminal** implementation (container vs. SSH) per tier.

---

## 11. Related documents

- [TDD_RoboCloud_Session_Portal.md](./TDD_RoboCloud_Session_Portal.md) — architecture and interfaces  
- [openapi/robocloud-session.yaml](./openapi/robocloud-session.yaml) — REST outline  
- [sdk/python_robocloud_outline.md](./sdk/python_robocloud_outline.md) — Python client surface  
- [adr/0001-video-sfu-choice.md](./adr/0001-video-sfu-choice.md) — WebRTC SFU decision  
- [ROADMAP_MVP_ACCEPTANCE.md](./ROADMAP_MVP_ACCEPTANCE.md) — phased delivery and acceptance tests  
