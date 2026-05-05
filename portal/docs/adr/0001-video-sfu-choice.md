# ADR 0001: WebRTC SFU for multi-camera session video

**Status:** Accepted (draft for engineering)  
**Date:** 2026-05-05  
**Context:** RoboCloud Session Portal requires a **2×2 camera grid** with per-tile fullscreen, optional latency readouts, and regional deployment (including **EU data residency**). Enterprise users often sit behind **strict NAT** and require audited connectivity.

## Decision

Use a **WebRTC SFU** (Selective Forwarding Unit) deployed **in-region** with the studio edge stack. Shortlist for v1 implementation:

1. **LiveKit** (managed or self-hosted open-source stack)  
2. **mediasoup** (Node library + custom signaling)

**Default recommendation for fastest v1:** **LiveKit self-hosted in the same region as `RobotGateway`**, with TURN in-region, unless licensing or vendor constraints push to mediasoup.

## Options considered

| Option | Pros | Cons |
|--------|------|------|
| **LiveKit** | Mature SFU, simulcast, built-in recording hooks, agent/ingress patterns, good browser SDK | Ops surface; commercial license for some enterprise features |
| **mediasoup** | Maximum control, no vendor lock for core forwarding | More custom signaling, recording, and ops work |
| **LL-HLS only** | Simpler firewall story | Latency too high for interactive “control while watching” UX |
| **P2P mesh** | No SFU cost | Unacceptable for four HD streams to many subscribers; NAT pain |

## Rationale

- **Four independent tracks** map naturally to SFU fan-out; subscribers (browser, optional cloud recorder) attach without multiplying uplink from cameras.
- **Simulcast** improves WAN without forcing all viewers to max bitrate.
- **TURN** in the same **region** as SFU satisfies common enterprise NAT and keeps media path compliant when combined with EU-only deployment.
- **Fallback** to LL-HLS remains a **degraded mode** (see TDD) without changing core architecture.

## EU residency and compliance

- SFU + TURN + recording workers must run in **EU cells** for EU-pinned orgs; control plane metadata stays in same policy boundary as Postgres.
- Recordings written to **region-local** object storage; cross-region replication **off** unless contract explicitly allows.

## Consequences

- Ops must run **TURN** capacity planning (ports, TLS) per region.
- Portal needs **SFU join token** minting path (REST) and `getStats`-based latency UI.
- If LiveKit is chosen, document **version pinning** and disaster failover (second AZ in same region).

## Review

Revisit when:

- First **non-WebRTC** headless client (e.g., batch eval without browser) needs video ingestion.
- Cost of managed SFU exceeds self-hosted mediasoup economics at scale.
