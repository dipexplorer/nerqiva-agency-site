# Design System: Nerqiva Agency Official Site

## 1. Overview
The official Nerqiva Agency website employs a **Technical Brutalism & Engineering Authority** design language. The aesthetic is strictly engineered to convey technical competence, precision, and high-end software development capabilities. It uses harsh contrasts, mono-spaced typography, and sleek scroll-scrub animations to stand out from generic corporate agencies.

---

## 2. Technical Stack
| Layer | Technology |
|---|---|
| Framework | Next.js (App Router), TypeScript |
| Styling | Tailwind CSS (Strict Config) |
| Scroll Animations | Framer Motion `useScroll`, GSAP (optional) |
| Fonts | Plus Jakarta Sans (UI), Space Grotesk (Mono) |

---

## 3. Color Palette
The color system relies on extreme contrast and avoids soft gradients.

| Token | Hex | Usage |
|---|---|---|
| `bg-primary` | `#08080C` | Deep OLED black for the main background. |
| `bg-secondary` | `#111116` | Slightly lighter surface for cards and elevated panels. |
| `text-primary` | `#FAFAFA` | Off-white for high-contrast primary headings. |
| `text-muted` | `#8A8A93` | Muted slate for secondary body text. |
| `accent-primary` | `#E52E2D` | Engineering Crimson for status dots, links, and CTAs. |

**Borders:** Use `border-white/5` or `border-white/10` to create ultra-thin, sharp panel separations without relying on box-shadows.

---

## 4. Typography
- **Headings / Eyebrows / Stats:** **Space Grotesk**. A geometric, mono-like sans-serif. Use it for data, numbers, technical metadata, and section eyebrows. Typically `uppercase` and `tracking-widest`.
- **Body / Primary UI:** **Plus Jakarta Sans**. A highly readable, clean geometric sans-serif for long-form text and button labels.

---

## 5. UI Mechanics & Components
- **Bento Grids:** Use CSS Grid with sharp corners (`rounded-none` or `rounded-sm`) to display capabilities and tech stacks.
- **Scroll-Scrubbing:** Bind element opacity, translation, or rotation to the viewport scroll position.
- **Vignette Masking:** Use radial gradients (`bg-radial`) to fade out the edges of images or background elements seamlessly into the `#08080C` background.
- **Micro-interactions:** Interactive elements should have immediate, snappy transitions rather than slow, soft fades.

---

## 6. How to use this file for new projects:
When starting a new project that requires a "Technical Authority" or "Software Agency" vibe:
1. **Copy the colors:** Copy the hex codes into your new `tailwind.config.ts`.
2. **Import the fonts:** Load Space Grotesk and Plus Jakarta Sans from Google Fonts.
3. **Follow the rules:** Refer to Section 5 to ensure your new components match the sharp, high-contrast aesthetic instead of accidentally drifting into a soft, rounded aesthetic.
