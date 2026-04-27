# Handoff: Cabinet Cardiologie Dr. Olariu Ioan — Website Redesign

## Overview

Redesign of the existing Gatsby site `cabinet-cardiologie-bocsa` (currently a dated, dense single-page Gatsby v2 site at `website_fra_gatsby/`). The new design is built specifically for **elderly Romanian patients** in Bocșa and the surrounding area, whose primary task is **calling the cabinet to book an appointment**.

The design strips the site down to one focused, single-page flow with extra-large type, prominent phone CTAs, a clear weekly schedule, full pricing transparency, photos of the clinic, an FAQ for first-time patients, and an embedded Google Map. A small accessibility panel (the "Tweaks" panel in the prototype) lets users change text size and turn on high-contrast mode — these should be implemented as proper accessibility controls in the production app.

## About the Design Files

The files in this bundle are **design references created in HTML** — they are a working prototype that demonstrates the intended look, content, hierarchy, and behavior. **They are not meant to be deployed as-is.**

The task is to **recreate this design in the existing codebase**, which is a Gatsby v2 site (`website_fra_gatsby/`). Replace the existing `Description.jsx`, `Cabinet.jsx`, `Cabinete.jsx`, `Header.jsx`, `Layout.jsx`, `GeneralSlideshow.jsx`, and `pages/index.js` with components that follow the new design. Reuse `gatsby-image` for optimized image loading, the existing image folders, and the existing Gatsby build pipeline.

If migrating to a newer framework is preferred (e.g., Astro or Next.js for better static performance), that is acceptable — but the priority is shipping the new design, not the framework migration.

## Fidelity

**High-fidelity.** All colors, typography, spacing, copy, and interaction states are final and should be matched pixel-perfectly. The only intentional placeholders are the FAQ answers — clinic staff should review and adjust those before launch.

## Tech & target environment

- **Current stack**: Gatsby 2.23, React 16, gatsby-image, gatsby-plugin-sharp, react-grid-gallery (for photo lightbox), gatsby-plugin-offline (PWA), `<html lang="ro">` via `gatsby-plugin-html-attributes`.
- **Target language**: Romanian only.
- **Target audience**: elderly users (~60+), often on phones, often with reduced vision, low technical literacy. **Mobile-first is non-negotiable.**
- **Browser support**: modern evergreen + iOS Safari 14+. No IE.
- **PWA**: keep `gatsby-plugin-offline` and the existing manifest.

## Page structure (single page, ordered top to bottom)

1. **Sticky topbar** — brand mark + "Programări: 0740 016 561" pill (always visible, click-to-call).
2. **Hero** — eyebrow ("Medic Primar Cardiolog"), H1, lead paragraph, two CTAs (Sunați acum / Vezi adresa și programul), portrait of Dr. Olariu with caption.
3. **3-step explainer** — "Cum vă programați la consult": (1) Sunați la telefon, (2) Veniți la cabinet, (3) Consultul propriu-zis.
4. **About the doctor** — portrait + credentials list (4 bullet points).
5. **Visit info** — three cards: Address, Weekly schedule, Phone (full-width).
6. **Embedded Google Map** of the Bocșa cabinet.
7. **Services & prices table** — 7 service rows.
8. **Photo gallery** — 10 photos of the cabinet, click to open lightbox with prev/next/Esc keyboard support.
9. **FAQ** — 4 collapsible items (placeholders for clinic to review).
10. **External profiles** — Facebook + șoimiisănătății profile cards.
11. **Footer** — contact info, quick links

## Design tokens

All defined in `styles.css` as CSS custom properties on `:root`. Reproduce these exactly.

### Colors (oklch with sRGB-safe values)

| Token              | Value                          | Usage                                            |
|--------------------|--------------------------------|--------------------------------------------------|
| `--bg`             | `oklch(0.985 0.006 85)`        | Page background — warm cream                     |
| `--bg-card`        | `#ffffff`                      | Card background                                  |
| `--bg-soft`        | `oklch(0.965 0.012 85)`        | Banded sections, alternating table rows          |
| `--ink`            | `oklch(0.18 0.015 240)`        | Primary text (near black, slight cool tint)      |
| `--ink-2`          | `oklch(0.36 0.02 240)`         | Secondary text                                   |
| `--ink-3`          | `oklch(0.55 0.015 240)`        | Tertiary text (closed-day hours)                 |
| `--line`           | `oklch(0.88 0.012 85)`         | Borders, dividers                                |
| `--line-strong`    | `oklch(0.78 0.015 85)`         | Stronger borders (e.g. secondary button)         |
| `--primary`        | `oklch(0.42 0.085 220)`        | Deep clinical teal-blue — links, eyebrow, accents|
| `--primary-soft`   | `oklch(0.94 0.025 220)`        | Hero gradient top, icon bubbles, highlight rows  |
| `--accent`         | `oklch(0.55 0.13 35)`          | Warm terracotta — phone pill + primary CTA only  |
| `--success`        | `oklch(0.5 0.09 155)`          | (Reserved — not used in current design)          |

**High-contrast mode** (`html[data-contrast="high"]`) overrides:
- `--bg: #ffffff`, `--ink: #000000`, `--line: #555`, `--line-strong: #000`, `--primary: #003b6f`, `--accent: #8a2c12`.

### Typography

- **Body / UI**: `'Source Sans 3'`, `system-ui`, `-apple-system`, Segoe UI, Roboto, sans-serif. Weights: 400, 500, 600, 700.
- **Headings**: `'Source Serif 4'`, Georgia, serif. Weights: 400, 500, 600, 700.
- Both loaded from Google Fonts with `display=swap`.
- Body line-height: **1.55**. Heading line-height: **1.15**. H1 letter-spacing: `-0.02em`.

### Type scale (responsive)

The scale has two multipliers:
- `--scale` (user-controlled accessibility): `1` (XL, default) / `0.88` (Large) / `0.78` (Normal).
- `--vp-scale` (viewport-driven): `1` desktop / `0.82` ≤880px / `0.72` ≤540px.
- `--eff-scale = --scale * --vp-scale`.

| Token       | Base px (× --eff-scale) |
|-------------|-------------------------|
| `--fs-xs`   | 17                      |
| `--fs-sm`   | 19                      |
| `--fs-base` | 22                      |
| `--fs-lg`   | 26                      |
| `--fs-xl`   | 34                      |
| `--fs-2xl`  | 46                      |
| `--fs-3xl`  | 60                      |

### Spacing & shape

- `--radius`: 14px · `--radius-sm`: 10px · `--radius-lg`: 22px
- `--shadow-1`: `0 1px 2px rgba(20, 30, 50, 0.04), 0 4px 14px rgba(20, 30, 50, 0.05)`
- `--shadow-2`: `0 2px 6px rgba(20, 30, 50, 0.06), 0 12px 32px rgba(20, 30, 50, 0.08)`
- `--max-w`: 1080px (main content column)
- `--gutter`: `clamp(20px, 4vw, 40px)` (18px ≤540px)

## Content (verbatim Romanian copy)

### Topbar
- Brand: **Dr. Olariu Ioan** / "Cabinet de Cardiologie · Bocșa"
- Phone pill: "Programări: 0740 016 561" → `tel:+40740016561`

### Hero
- Eyebrow: `MEDIC PRIMAR CARDIOLOG`
- H1: **Sănătatea inimii dumneavoastră, în mâini bune.**
- Lead: Consultații cardiologice de specialitate la cabinetul din Bocșa. Programări simple, prin telefon.
- CTA 1 (primary, terracotta): **Sunați acum** → `tel:+40740016561`
- CTA 2 (secondary, outline): **Vezi adresa și programul** → `#vizita`
- Hero photo caption: **Dr. Olariu Ioan** / Medic Primar Cardiolog

### 3 steps
- Eyebrow: `ÎN 3 PAȘI SIMPLI`
- Title: **Cum vă programați la consult**
- Subtitle: Nu este nevoie de internet sau formulare. Sunați la telefon, alegem împreună o dată, și veniți la cabinet.

| # | Title              | Body                                                                                                                            | Link                              |
|---|--------------------|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| 1 | Sunați la telefon  | Vă răspunde personalul cabinetului și vă propune o zi de miercuri când doctorul are program.                                   | `0740 016 561` → `tel:+40740016561` |
| 2 | Veniți la cabinet  | Aduceți buletinul, biletul de trimitere (dacă aveți) și actele medicale anterioare. Cabinetul este în Bocșa, str. Carpați nr. 2. | "Vezi adresa →" `#vizita`         |
| 3 | Consultul propriu-zis | Examen clinic, EKG și, după caz, ecocardiografie. La final primiți o scrisoare medicală cu diagnostic și tratament.          | "Vezi servicii →" `#servicii`     |

### About the doctor
- Eyebrow: `DESPRE MEDIC`
- H2: **Dr. Olariu Ioan**
- Body: Medic primar cardiolog cu experiență vastă în tratamentul intervențional al bolilor cardiovasculare, dobândită la **Institutul de Boli Cardiovasculare din Timișoara**.
- Credentials list (each item has a checkmark icon):
  1. **Medic Primar Cardiolog**
  2. Institutul de Boli Cardiovasculare Timișoara
  3. Competență în Cardiologie Invazivă
  4. Competență în Ecocardiografie

### Visit (id="vizita")
- Eyebrow: `VIZITA LA CABINET`
- H2: **Adresă, program și programări**
- Subtitle: Toate informațiile de care aveți nevoie ca să ajungeți la cabinet.

**Address card**: title "Unde ne găsiți" / **Bocșa**, Str. Carpați, nr. 2, Bl. 2 / Județul Caraș-Severin / button "Deschide harta Google" → `https://g.page/CardiologieBocsa?share` (target=_blank).

**Schedule card**: title "Programul cabinetului". 7 rows. Days closed are dimmed; **Miercuri 15:00 — 17:00** is highlighted with `--primary-soft` background and primary-colored bold hours.

**Phone card** (spans full width): title "Pentru programări sunați la" centered. Single huge serif phone number `0740 016 561` linking to `tel:+40740016561`. Subtext: "Vă răspundem în zilele lucrătoare. Programările se fac din timp."

### Map
Embedded Google Maps iframe — keep the existing URL from `pages/index.js`:
`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11211.816667956942!2d21.694567214128103!3d45.369919918273474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474fd9446ce8b2c1%3A0x4972f9adc2aa9c78!2sOLARIU%20MED%20CARDIOLOGIE-BOCSA!5e0!3m2!1sen!2suk!4v1648983785697!5m2!1sen!2suk`

16:9 aspect ratio, rounded corners, 1px border. `loading="lazy"`.

### Services & prices (id="servicii")
- Eyebrow: `SERVICII ȘI TARIFE`
- H2: **Ce investigații se fac la cabinet**
- Subtitle: Tarifele de mai jos sunt valabile la cabinetul din Bocșa. Plata se face la cabinet, în numerar.

| Label                                                                                                | Price    |
|------------------------------------------------------------------------------------------------------|----------|
| **Consult cardiologic** + EKG + Pulsoximetrie                                                        | 300 RON  |
| Consult Cardiologic + Monitorizare Holter EKG / 24H                                                  | 450 RON  |
| Consult Cardiologic + Monitorizare Holter TA / 24H                                                   | 450 RON  |
| Consult Cardiologic + EKG + Ecocardiografie Doppler 2D color + Pulsoximetrie                         | 500 RON  |
| Consult Cardiologic + Monitorizare Holter TA + EKG / 24H                                             | 550 RON  |
| Consult Cardiologic + Test de efort cardiovascular                                                   | 550 RON  |
| Consult complet: EKG + Ecocardiografie + Pulsoximetrie + Test de efort                               | 750 RON  |

Alternating row backgrounds: even rows (0-indexed) plain, odd rows `--bg-soft`. Price right-aligned, serif, `--primary` color.

### Gallery
- Eyebrow: `CABINETUL`
- H2: **Cum arată cabinetul din Bocșa**
- Subtitle: Apăsați pe orice fotografie pentru a o vedea mai mare.
- 10 images from `assets/cabinet/` — see Assets section. 4-column grid desktop, 2-column mobile, square aspect ratio with `object-fit: cover`. Click → lightbox.

### FAQ
- Eyebrow: `ÎNTREBĂRI FRECVENTE`
- H2: **Răspunsuri la cele mai dese întrebări**
- Subtitle: Apăsați pe o întrebare ca să vedeți răspunsul.

Use native `<details>/<summary>`. Chevron rotates 180° when open.

1. **Ce trebuie să aduc cu mine la consult?**
   > Vă rugăm să aduceți:
   > • Cartea de identitate (buletinul)
   > • Biletul de trimitere de la medicul de familie, dacă aveți
   > • Analize și documente medicale anterioare (EKG-uri, scrisori medicale, ecografii)
   > • Lista cu medicamentele pe care le luați zilnic

2. **Cu cât timp înainte trebuie să mă programez?**
   > De obicei programările se fac cu o lună înainte. Cabinetul are program o singură zi pe săptămână (miercuri), așa că vă recomandăm să sunați din timp.

3. **Există loc de parcare?**
   > Da, există spații de parcare pe stradă și în apropierea blocului 2 de pe strada Carpați. Accesul în cabinet se face de la parter.

### External profiles
- Facebook: `https://www.facebook.com/CabinetCardiologic/` — title "Pagina de Facebook" / sub "Vedeți noutăți și anunțuri"
- șoimiisănătății: `https://www.soimiisanatatii.ro/profile-94603-cmp/` — title "Profil pe șoimiisănătății.ro" / sub "Recenzii și informații suplimentare"

### Footer
- Column 1: brand line
- Column 2: phone `0740 016 561`, address.
- Column 3: anchor links (Adresa, Servicii, Clinica din Timișoara → `https://www.olariu-med.ro`).
- Bottom strip: `© <year> Cabinet Cardiologie Dr. Olariu Ioan. Toate drepturile rezervate.`

## Interactions & behavior

- **Click-to-call** everywhere a phone number appears (`tel:+40740016561`).
- **Smooth scroll** for in-page anchors (`#vizita`, `#servicii`).
- **FAQ** uses native `<details>` — no JS framework needed; the chevron rotates via CSS `[open]` selector.
- **Lightbox**: button → opens modal with current image. Keyboard: `Esc` closes, `←/→` navigate. Click on backdrop closes. Wraps around (last → first).
- **Schedule highlight**: Wednesday row has `--primary-soft` background and bold colored time.
- **Hover**: buttons translate `-1px` and switch to `--shadow-2`. Gallery images scale 1.04 on hover.
- **Focus**: 3px solid `--primary` outline, 3px offset on all focusable elements.
- **Skip link**: visible on focus, links to `#main`.
- **Sticky topbar**: `position: sticky; top: 0; z-index: 50` with bottom border.

## Accessibility (critical for elderly users)

- Body text starts at **22px** (XL) by default. The Tweaks panel maps to a real settings menu — implement as a button in the topbar or footer that toggles between **Normal (17px) / Mare (19px) / Foarte mare (22px)** and a **Contrast ridicat** toggle. Persist choice in `localStorage`.
- Tap targets ≥ 44px (all buttons, schedule rows, FAQ summaries comply).
- All interactive elements keyboard-reachable; visible focus rings.
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<details>/<summary>`, headings in order.
- All decorative SVG icons have `aria-hidden="true"`. All icon-only buttons have `aria-label`.
- `<html lang="ro">` (already configured in `gatsby-config.js`).
- Phone numbers wrapped in `<a href="tel:...">` for screen readers and one-tap dialing.

## Responsive behavior

| Viewport         | Behavior                                                                                                                                    |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| ≥ 881px          | Full layout: 2-col hero, 3-col steps, 2-col visit cards, 4-col gallery, 3-col footer. Phone pill in topbar right.                          |
| ≤ 880px          | All grids → single column. Hero photo aspect 4:3, max 480px. Phone pill becomes full-width below brand. `--vp-scale: 0.82`. CTA buttons full-width.|
| ≤ 540px          | `--vp-scale: 0.72`, `--gutter: 18px`. Services rows stack label / price. Lightbox nav buttons smaller. Hero H1: `clamp(30px, 8.5vw, 40px)`.|

The hero H1 uses `clamp()` so it never overflows tiny screens. All `<p>` get `max-width: none` on mobile (otherwise the 64ch desktop cap clips text awkwardly when font scales down).

## State management

Minimal — almost everything is static markup. State needed:
- Lightbox: `currentIndex: number | null`. Open/close + prev/next handlers.
- Accessibility settings: `{ textSize: 'normal' | 'large' | 'xl', highContrast: boolean }` persisted to `localStorage`. Apply by setting `--scale` on `:root` and `data-contrast="high"` on `<html>`.
- FAQ: native `<details>` — no React state needed.

## Assets

All in `assets/`:

```
assets/
├── dr_olariu.jpeg                     # Hero + about photo (1076×1081)
├── logo.png                           # Available but not used in new design
└── cabinet/
    ├── pancarda.jpeg                  # Exterior signage
    ├── intrare.jpeg                   # Entrance
    ├── sala_asteptare.jpg             # Waiting room
    ├── sala_asteptare_1.jpeg
    ├── sala_asteptare_2.jpeg
    ├── sala_asteptare_3.jpeg
    ├── cabinet.jpeg                   # Interior
    ├── cabinet1.jpeg
    ├── cabinet2.jpeg
    └── cabinet3.jpeg
```

These were copied from `website_fra_gatsby/src/images/cabinetBocsa/` and `website_fra_gatsby/src/images/doctors/`. In the production Gatsby site, **use `gatsby-image` / `gatsby-plugin-image`** instead of plain `<img>` for these to get responsive srcsets and lazy loading. The hero portrait benefits most — it's the largest image above the fold.

Icons in the prototype are inline SVG (Feather icon set: phone, map-pin, send/paper-plane, clock, chevron, check, star). Keep them inline; no icon library needed.

## Files in this bundle

- `index.html` — the prototype, fully working standalone (open in any browser).
- `styles.css` — all design tokens and component styles, ~17KB.
- `app.jsx` — gallery render + lightbox + Tweaks panel React app.
- `tweaks-panel.jsx` — supporting framework for the prototype's Tweaks panel; **do not port this** — implement the accessibility menu natively in the production app.
- `assets/` — all images.

## Implementation notes for Gatsby

1. Replace `src/components/Layout.jsx` with a layout that includes the new sticky `<Topbar>` and `<Footer>`.
2. Convert each section to its own component: `Hero`, `Steps`, `About`, `Visit`, `Map`, `Services`, `Gallery`, `Faq`, `Profiles`.
3. Move `styles.css` into `src/styles/global.css` or use CSS Modules per component (the existing project does inline styles — switching to a single global stylesheet is recommended for maintainability).
4. Drop `react-grid-gallery` — use a tiny custom lightbox like the one in `app.jsx` to avoid the dependency.
5. Replace `<img src="assets/...">` with `<StaticImage>` from `gatsby-plugin-image` or the existing `gatsby-image` `<Img fluid={...}>` pattern already used in `Header.jsx`.
6. Update `gatsby-plugin-manifest` config: `theme_color` and `background_color` should change from `#6b37bf` (the unused purple from the starter) to the new primary `oklch(0.42 0.085 220)` (≈`#2c5e7a`).
7. Add `<Helmet>` meta tags for description, og:title, og:description, og:image (use a hero photo crop), and Schema.org `MedicalClinic` JSON-LD with name, address, telephone, and openingHours: `We 15:00-17:00`. This will significantly help local SEO for elderly users searching "cardiolog Bocșa".

## Things explicitly removed from the old site

- The dense "list of all doctors" block (only Dr. Olariu remains).
- The Timișoara cabinet section (kept as a single footer link instead — there's a separate site at olariu-med.ro).
- The two large external badges (clinica-olariu-timisoara.jpeg and the șoimii laureate image) — replaced by the simpler profile cards.
- The second phone number `0742 421 032` — confirmed by client this number does not exist.
- Multiple FAQ items the client asked to drop (à jeun, însoțitor, plata cu cardul, CAS, sfat fără programare).

## Open questions for the client before launch

1. **FAQ answers**: confirm parking instructions and any other details.
2. **Pricing**: confirm 7 service prices are still current.
3. **Schedule**: confirm Wednesday 15:00-17:00 is still the only program day, or whether more days should be added.
4. **Photos**: confirm the existing photos still represent the cabinet (some look slightly older).
5. **Other contact channels**: should WhatsApp or SMS be added next to the phone number? (Common in Romania.)
