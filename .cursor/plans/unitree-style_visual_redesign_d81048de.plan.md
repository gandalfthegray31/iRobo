---
name: Unitree-style visual redesign
overview: "Apply a Unitree-inspired dark, minimal tech aesthetic across the iRobo site: dark-first theme, clean typography, full-width sections, and an About page structure that mirrors Unitree's (Company Profile, key sections, optional timeline). No content or plan file edits; styling and layout only."
todos: []
isProject: false
---

# Unitree-Style Visual Redesign

## Design direction (inferred from Unitree)

[Unitree's about page](https://www.unitree.com/about) and main site use a **dark, minimal, tech-forward** look:

- **Dark theme**: Black or near-black backgrounds (`#0a0a0a`–`#111`), white and light gray text.
- **Typography**: Clean sans-serif; generous line height and spacing; clear section headings (large, bold) and readable body.
- **Layout**: Full-width sections, content centered with a comfortable max-width; clear vertical rhythm; minimal decoration (no heavy shadows or rounded cards).
- **Navigation**: Minimal header (logo + links), dark bar, often fixed/sticky.
- **Footer**: Dark, multi-column links (e.g. Company Profile, Cultural Concept, Social Contributions).
- **CTAs**: High contrast (e.g. white or light button on dark, or outlined).

The About page is structured as: intro paragraph(s), then **Company Profile**-style blocks, **Cultural Concept** (vision/mission), **Social Contributions**, and **Company Development** as a **year-by-year timeline** (2025, 2024, 2023…). We will mirror this structure and apply the same visual language site-wide.

---

## 1. Global theme (dark-first)

**File: [src/app/globals.css](src/app/globals.css)**

- Set CSS variables for a **dark-first** palette:
  - Background: `#0a0a0a` (or `#111`).
  - Foreground/text: `#fafafa` for primary, `#a1a1aa` (zinc-400) for secondary.
  - Optional accent: keep neutral or add a single accent (e.g. cyan/white for links or buttons) for consistency with tech brands.
- Remove or invert the `prefers-color-scheme: dark` block so the **default is dark**; optionally support a light mode later via a class on `html`.
- Ensure `body` uses the new background and foreground; keep `font-family` from layout (Geist is fine).

**File: [src/app/layout.tsx](src/app/layout.tsx)**

- Add a class on `<html>` to force dark theme for now, e.g. `className="dark"` (if using Tailwind dark mode), or rely on globals.css so the default is always dark. This avoids mixed light/dark sections.

---

## 2. Tailwind / theme alignment

- In [src/app/globals.css](src/app/globals.css), ensure `@theme inline` (or Tailwind config if used) maps to the new CSS variables so `bg-background`, `text-foreground`, and existing utilities stay consistent.
- Use a single source of truth: e.g. `--background: #0a0a0a`, `--foreground: #fafafa`, and any `--muted` for secondary text. Use these in Tailwind theme so components can use `bg-background`, `text-foreground`, `text-muted-foreground` (or equivalent).

---

## 3. Header and Footer

**File: [src/components/Header.tsx](src/components/Header.tsx)**

- Background: solid dark (e.g. `bg-[#0a0a0a]` or `bg-background`), minimal border if any (`border-b border-white/10`).
- Logo and nav links: white or near-white (`text-white` / `text-zinc-100`), hover state subtle (e.g. `text-zinc-300` or underline).
- Keep existing nav structure; adjust padding and font weight for a cleaner, Unitree-like bar.
- Ensure sticky behavior and z-index remain so it overlays content correctly.

**File: [src/components/Footer.tsx](src/components/Footer.tsx)**

- Dark background (same as site), subtle top border (`border-white/10`).
- Footer links in columns: white or light gray text, hover state consistent with header.
- Optional: add a second row of links to mirror Unitree’s “Company Profile | Cultural Concept | Social Contributions” (e.g. map to About, Solutions, Case Studies, Insights) so the structure feels similar.

---

## 4. CTA and shared components

**File: [src/components/CTA.tsx](src/components/CTA.tsx)**

- **Primary**: White (or light) background, dark text (e.g. `bg-white text-black hover:bg-zinc-200`) for contrast on dark sections.
- **Secondary / outline**: Transparent with light border and light text (`border border-white/30 text-white hover:bg-white/10`).
- Sizing and padding can stay; ensure rounded style is subtle (e.g. `rounded-md` or `rounded-lg`) to match minimal look.

---

## 5. Homepage ([src/app/(marketing)/page.tsx](src/app/(marketing)/page.tsx))

- **Hero**: Full-width dark section; large headline (white), subtext (muted); CTAs using updated primary/outline styles. Remove or soften light-only gradients (e.g. `from-zinc-50 to-white`); use dark gradients if any (e.g. `from-background` to a slightly lighter dark).
- **All sections**: Replace light backgrounds (`bg-zinc-50`, `bg-white`) with dark variants (`bg-background`, `bg-white/[0.03]` or a slightly elevated dark). Text: headings white/light, body muted.
- **Cards** (e.g. What We Do, Industries, Featured Insights, Upcoming Training): Dark cards with subtle border (`border-white/10`) or very subtle background lift; avoid bright white cards.
- **Partners**: Same dark section styling; partner names in muted or white.
- **Final CTA block**: Keep dark; ensure buttons use the new CTA styles (white primary, outline secondary).

---

## 6. About page – structure and style like Unitree

**File: [src/app/(marketing)/about/page.tsx](src/app/(marketing)**/about/page.tsx)

- **Layout**: Single column, max-width content (e.g. `max-w-4xl` or `max-w-5xl`), consistent vertical spacing between sections.
- **Structure** (mirroring [Unitree About](https://www.unitree.com/about)):
  - **Intro**: One or two short paragraphs (company profile) — already present; restyle for dark (headline + muted body).
  - **“What we specialize in”**: Keep as a short list or bullet block; style as a clear subsection with a bold heading.
  - **“Where we operate”**: Keep regions; style as pills or a simple list on dark.
  - **“Our team”**: Keep copy; style as another subsection.
  - **Optional “Vision / Mission” block**: Add a small “Cultural concept”–style block (e.g. one line each for vision and mission) to align with Unitree’s “Vision of Unitree”, “Mission of Unitree”.
  - **Optional “Company development”**: If you have milestones or years, add a timeline (year as H3, events as paragraphs). If no timeline data exists, skip or add a single “Looking ahead” paragraph; the plan can note “add timeline when content exists”.
- **Visual style**: Dark background; section headings large and bold (white); body and lists muted; CTAs at bottom using updated CTA component.

---

## 7. Other marketing pages (Solutions, Industries, Partners, Case Studies, Contact, Insights, Training)

- Apply the same dark theme and typography:
  - Page background: `bg-background` (dark).
  - Headings: white or `text-foreground`.
  - Body and secondary text: `text-muted-foreground` or `text-zinc-400`.
- **Cards and lists**: Dark with subtle borders or background; no white cards.
- **Forms (Contact)**: Dark form container; inputs with dark background and light border (`border-white/20`), light text; button uses CTA primary style.
- **Tables (Training schedule)**: Dark table, light borders, header row slightly emphasized (e.g. `text-white font-semibold`).

---

## 8. Images and assets

- No new images required for this task. If hero or section images are added later, use dark-friendly visuals or overlays so they don’t clash with the dark theme.

---

## 9. Implementation order

1. **globals.css** – Dark-first CSS variables and theme; optional `html.dark` or default dark.
2. **layout.tsx** – Ensure root uses dark theme (class or variables).
3. **Header** and **Footer** – Dark styling and link colors.
4. **CTA** – Primary (white) and outline (light border) variants for dark.
5. **Homepage** – All sections switched to dark; cards and gradients updated.
6. **About** – Restructure with Unitree-like sections; apply dark style; add optional Vision/Mission and timeline placeholder.
7. **Remaining pages** – Solutions, Industries, Partners, Case Studies, Contact, Insights, Training – apply dark theme and component styles consistently.

---

## Summary


| Area              | Change                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Theme**         | Dark-first (black/near-black bg, white/muted text) in globals and layout                                           |
| **Header/Footer** | Dark bar, light links, minimal borders                                                                             |
| **CTA**           | White primary, outline with light border on dark                                                                   |
| **Homepage**      | All sections dark; cards with subtle borders or dark elevation                                                     |
| **About**         | Unitree-like sections (intro, specialize, operate, team, optional vision/mission, optional timeline); dark styling |
| **Other pages**   | Same dark palette, typography, and card/table/form styles                                                          |


Result: a cohesive, Unitree-inspired dark tech aesthetic across the site without changing URLs, content intent, or plan file.