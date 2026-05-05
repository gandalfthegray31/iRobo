---
name: Video recording cockpit panel
overview: Add a separate aircraft-style "Video / Recording" annunciator panel below the Robot Control module in the right rail, using existing RC tokens and local client state for REC/timer UX until backend wiring exists.
todos:
  - id: recording-panel-component
    content: "Add VideoRecordingPanel.tsx (client): bezel layout, REC toggle, timer, status rows, a11y"
    status: completed
  - id: session-shell-stack
    content: Wrap right rail in flex col; render ControlPanel + VideoRecordingPanel in SessionShell.tsx
    status: completed
  - id: verify-web-build
    content: Run npm run lint && npm run build in web/
    status: completed
isProject: false
---

# Video recording panel (aircraft-style) under Robot Control

## Placement

- In [`SessionShell.tsx`](file:///Users/saif/Projects/iRobo/portal/web/src/components/portal/SessionShell.tsx), replace the single right-rail child with a **vertical stack** (`flex flex-col gap-3 min-w-0`) containing:
  1. Existing [`ControlPanel`](file:///Users/saif/Projects/iRobo/portal/web/src/components/portal/ControlPanel.tsx) (unchanged API).
  2. New **`VideoRecordingPanel`** component below it, full width of the `~320px` column.

This keeps the recording UI as a **distinct module** (separate bordered chassis) rather than embedding it inside `ControlPanel`, matching “separate panel” intent and simplifying layout.

## New component: `VideoRecordingPanel`

- **File:** [`web/src/components/portal/VideoRecordingPanel.tsx`](file:///Users/saif/Projects/iRobo/portal/web/src/components/portal/VideoRecordingPanel.tsx)
- **`"use client"`** for interactive prototype behavior:
  - **ARM / REC** toggle: primary action starts/stops a local recording timer (no real WebRTC yet).
  - **Elapsed timer** displayed as `HH:MM:SS` or `MM:SS` (monospace, large readout like avionics).
  - **Annunciator row:** “REC” label + red indicator lamp when recording (CSS circle, `aria-pressed` on toggle).
  - **Status rows** (static or derived from simple local state): e.g. resolution `1080p`, frame rate `30 fps`, codec placeholder `H.264`, storage hint `Est. 12.4 GB free` (dummy strings aligned with PRD “session bundle” story).
- **Visual language (“aircraft panel”):**
  - Outer **bezel**: `rounded-lg` / `rounded-md`, double-border feel via `ring-1 ring-rc-border` + inner `border border-rc-border-strong`, background `bg-rc-controller-chassis` or `bg-rc-panel` (reuse tokens from [`globals.css`](file:///Users/saif/Projects/iRobo/portal/web/src/app/globals.css)).
  - **Title bar**: small caps label e.g. `VIDEO RECORDER` or `DECK REC` in same weight as other sidebar headings (`text-sm font-semibold`).
  - **Segmented rows** with subtle horizontal rules (`border-t border-rc-border/60`) between sections.
  - Optional **two mini “toggle” strips** (purely visual buttons) for “AUDIO” / “MULTICAM” as cockpit-style toggles—no backend.

## View model (optional extension)

- **Default:** keep all recording strings/timer **inside the client component** so [`SessionShell`](file:///Users/saif/Projects/iRobo/portal/web/src/components/portal/SessionShell.tsx) stays a Server Component without prop drilling.
- **Optional follow-up (not required for first ship):** extend [`session-view-model.ts`](file:///Users/saif/Projects/iRobo/portal/web/src/lib/portal/session-view-model.ts) + mock mapper with `recordingDefaults` if you want API-driven labels later.

## Accessibility

- Toggle uses `role="switch"` or `aria-pressed` on the record control; timer region `aria-live="polite"` while recording so screen readers get updates.

## Verification

- `npm run lint` and `npm run build` in `web/`.
- Manual: at `xl`, right column shows controller then recording panel with no horizontal overflow; start/stop updates lamp + timer.
