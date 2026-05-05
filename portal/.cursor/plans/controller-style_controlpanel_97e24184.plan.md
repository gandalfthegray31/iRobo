---
name: Controller-style ControlPanel
overview: Redesign the Robot Control sidebar into a flat, front-facing handheld-controller layout (left grip, center screen, right grip) using existing RC design tokens, and add a top-right expand control that opens a larger fullscreen-style overlay with the same layout—implemented as a client component with keyboard/backdrop dismissal.
todos:
  - id: tokens-controller
    content: "Optional: add rc-controller-* CSS vars + @theme if chassis/screen need named colors"
    status: completed
  - id: controller-body
    content: Build ControllerBody (3 cols + E-stop) with compact vs expanded sizing props
    status: completed
  - id: control-panel-client
    content: "Refactor ControlPanel to client: header + expand SVG + overlay + Escape/backdrop close"
    status: completed
  - id: verify-web
    content: Run npm run lint && npm run build in web/
    status: completed
isProject: false
---

# Robot Control: handheld layout + expand overlay

## Goals

- Replace the current vertical stack in [`ControlPanel.tsx`](file:///Users/saif/Projects/iRobo/portal/web/src/components/portal/ControlPanel.tsx) with a **three-column, front-facing “controller” layout** inspired by the handheld reference (no bitmap assets): left grip, center “display”, right grip, plus a **full-width Emergency Stop** under the chassis for parity with the existing RoboCloud mock.
- Add a **top-right control** (icon button with accessible label) that toggles an **expanded** view: fixed overlay (`fixed inset-0 z-50`), dimmed backdrop, larger controller body, **Escape** and **backdrop click** to close.
- Reuse existing semantic colors from [`globals.css`](file:///Users/saif/Projects/iRobo/portal/web/src/app/globals.css) (`rc-shell`, `rc-panel`, `rc-border-strong`, `rc-danger`, etc.). Optionally add 2–3 CSS variables (e.g. `--rc-controller-chassis`, `--rc-controller-screen`) only if needed to avoid magic hex in the new markup.

## Layout spec (CSS-only, flat 2D)

**Outer chassis** (replaces plain `rcPanel` wrapper for this section):

- Rounded outer shell (`rounded-2xl`), subtle border, slightly darker fill than `rc-panel` to read as “hardware shell”.
- Inner flex/grid: **3 columns** on `xl` (sidebar width); allow stacked **Left / Center / Right** on very narrow widths inside the sidebar so it does not overflow the fixed `~320px` rail—use `min-w-0` and slightly smaller joysticks when not expanded.

**Left column (“grip”)**

- **Analog stick**: circular control (nested divs + `shadow-inner`) — visual only for now; same for expanded view unless you later wire pointer events.
- **D-pad**: compact cross (existing arrow glyphs / center dot pattern), same semantics as today (movement affordance).
- **Two pill buttons** at bottom (placeholders, e.g. “L1” / “L2” or “Shift” / “Alt”) — non-functional labels unless you want them mapped later.

**Center column (“screen”)**

- Rectangular **black-ish** inset (`bg-black` or token), monospace / small sans for “status lines”.
- Move **Control mode** here: show `modeLabel` as the primary line; optional `<select>` later—v1 can keep read-only text styled like the mock dropdown for simplicity and zero new deps.
- Include the **W/A/S/D** hint as on-screen copy.

**Right column (“grip”)**

- Second **analog stick** (mirror of left).
- **Diamond** of four circular face buttons (CSS `rotate-45` wrapper + counter-rotated labels, or simple 2×2 offset grid). Map two to **Stand** / **Sit** and two to **Q** / **E** (or generic A/B) to preserve current actions.
- **Two pill buttons** mirroring the left column.

**Below the 3-column row**

- **Emergency Stop**: full-width red button (existing `rc-danger` classes), unchanged behavior (still `type="button"`).

**Header row**

- Title **Robot Control** left; **Manual Mode** badge can stay; **Expand** icon button at **top-right** of this section (not inside the center screen), `aria-expanded`, `aria-controls` pointing at overlay id.

## Expand / overlay behavior

- Convert [`ControlPanel.tsx`](file:///Users/saif/Projects/iRobo/portal/web/src/components/portal/ControlPanel.tsx) to **`"use client"`** with `useState(false)` for expanded.
- Render **two instances** of the same presentational subtree is error-prone; prefer **one** `ControllerBody` component that accepts a `size: "compact" | "expanded"` prop (or `className` scale) and render it twice only if needed—or render once in portal with `createPortal` (heavier). **Recommended:** single `ControllerBody` used in normal column and again inside overlay with larger padding / min widths (duplicated JSX is OK if extracted to a function component in the same file to avoid drift).
- Overlay: `fixed inset-0`, `bg-rc-overlay` (or `bg-black/60`), flex center, `max-w-4xl` (or `max-w-5xl`) inner chassis, `onClick` on backdrop stops propagation on inner container via `e.stopPropagation()`.
- **Escape** listener via `useEffect` when `expanded` is true; cleanup on unmount.

No new npm dependencies (no icon pack): use a small **inline SVG** for expand/collapse (e.g. “maximize” / “minimize” pair).

## Files to change

| File | Change |
|------|--------|
| [`web/src/components/portal/ControlPanel.tsx`](file:///Users/saif/Projects/iRobo/portal/web/src/components/portal/ControlPanel.tsx) | Main implementation: chassis, columns, overlay, client state, a11y |
| [`web/src/app/globals.css`](file:///Users/saif/Projects/iRobo/portal/web/src/app/globals.css) | Optional 1–3 `--rc-controller-*` tokens + `@theme` mappings if we need named Tailwind colors |
| [`web/src/components/portal/SessionShell.tsx`](file:///Users/saif/Projects/iRobo/portal/web/src/components/portal/SessionShell.tsx) | No structural change expected; `ControlPanel` remains a child of the right rail (client boundary stays local to `ControlPanel`) |

## Verification

- `npm run lint` and `npm run build` in `web/`.
- Manual: default rail shows controller layout without horizontal scroll at `xl`; expand opens overlay, Escape and backdrop close, focus not trapped in a broken way (basic tab order acceptable for v1).
