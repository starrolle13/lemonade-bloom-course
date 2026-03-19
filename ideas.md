# Lemonade Bloom Course Website — Design Brainstorm

## Context
A step-by-step Walmart Seller training course for Lemonade Bloom. The brand is soft retro, feminine but premium, clean and modern. Colors: pink #FDBEC0, orange #D0804A, cream #FEE9CE, soft beige #FEE7DA, white #FFFFFF, text #1A1A1A.

---

<response>
<probability>0.07</probability>
<idea>

**Design Movement:** Warm Retro Zine meets Digital Academy

**Core Principles:**
1. Structured learning flow with a persistent left sidebar showing module progress
2. Warm, tactile feel — paper-like textures, soft grain, rounded card corners
3. Typography contrast: bold retro display font for headings, clean sans for body
4. Every module feels like a "chapter" in a physical workbook

**Color Philosophy:**
Use #FEE9CE as the page background (warm cream), #FDBEC0 for active states and highlights, #D0804A for primary CTAs and section headers, #FEE7DA for card backgrounds. This creates a warm, inviting atmosphere — like a hand-crafted workbook.

**Layout Paradigm:**
Fixed left sidebar (280px) with module list + progress. Main content area scrolls vertically. Each module is a "page" with a large illustrated header, step cards below. Asymmetric — sidebar anchors left, content breathes right.

**Signature Elements:**
- Daisy/flower motifs as section dividers and step markers (matching brand logo)
- Retro badge-style module numbers (circular, orange, bold)
- Warm paper texture overlay on hero sections

**Interaction Philosophy:**
Click module in sidebar → smooth scroll to section. Steps expand/collapse. Checkboxes mark steps complete. Progress bar fills as modules are checked off.

**Animation:**
- Sidebar items slide in on load (staggered, 50ms delay each)
- Step cards fade up when entering viewport
- Progress bar animates fill on checkbox tick
- Hover on cards: subtle lift (translateY -2px) + shadow deepen

**Typography System:**
- Display: Pacifico (Google Fonts) — for module titles and hero text
- Body: Nunito (Google Fonts) — warm, rounded, readable
- Accent: Lobster for decorative callouts
- Scale: 48px hero → 28px module title → 18px step title → 15px body

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement:** Soft Brutalism meets Feminine Productivity

**Core Principles:**
1. Bold typographic hierarchy with thick borders and offset shadows
2. Warm color blocking — sections alternate between cream and pink backgrounds
3. Step-by-step flow feels like a physical checklist / planner page
4. Playful but structured — every element has a clear purpose

**Color Philosophy:**
Heavy use of #D0804A for borders and accent lines. #FDBEC0 fills card backgrounds. White cards with orange offset-box-shadows. The overall feel is bold, confident, and warm.

**Layout Paradigm:**
Top navigation with module tabs. Content in a two-column grid: left column has step list, right column has detail panel. No sidebar — navigation is top-anchored. Very editorial.

**Signature Elements:**
- Thick 2px orange borders on cards with 4px offset shadow
- Retro star/sparkle decorators between sections
- Bold step numbers in large display font

**Interaction Philosophy:**
Tab-based navigation for modules. Clicking a step highlights it in the right panel. Keyboard navigable. Very planner-like.

**Animation:**
- Tab switch: content slides in from right
- Step selection: right panel fades and scales in
- Checkboxes: bouncy spring animation on check

**Typography System:**
- Display: Baloo 2 — bold, rounded, retro
- Body: Poppins — clean, modern
- Step numbers: Lobster — decorative

</idea>
</response>

<response>
<probability>0.05</probability>
<idea>

**Design Movement:** Cottagecore Digital — Warm Minimalism

**Core Principles:**
1. Extreme whitespace — content breathes, nothing feels crowded
2. Soft watercolor-like gradients between sections
3. Micro-illustrations as step markers (tiny flowers, stars, lemons)
4. Linear, single-column scroll with floating progress indicator

**Color Philosophy:**
Pure white backgrounds with #FEE7DA soft blush sections. #D0804A used sparingly for CTAs and key callouts. Very light, airy, premium feel.

**Layout Paradigm:**
Single column, centered, max-width 720px. Progress pill floats at top. Each module is a full-width section with a large illustrated banner. Steps are timeline-style with left line.

**Signature Elements:**
- Timeline connector line between steps (orange dashed)
- Floating progress pill (sticky top)
- Soft gradient section transitions

**Interaction Philosophy:**
Scroll-based progress. Steps auto-highlight as user scrolls past them. Minimal clicks needed.

**Animation:**
- Scroll-triggered fade-in for each step
- Progress pill number ticks up as sections pass
- Section backgrounds smoothly transition color

**Typography System:**
- Display: Pacifico for brand name
- Headings: Montserrat Bold
- Body: Nunito Regular
- Very generous line-height (1.8)

</idea>
</response>

---

## Selected Design: Warm Retro Zine meets Digital Academy (Response 1)

This approach best matches the Lemonade Bloom brand — retro, warm, structured, and premium. The sidebar layout is ideal for a multi-module course experience, providing clear navigation and progress tracking.
