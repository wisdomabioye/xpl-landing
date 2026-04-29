# XPL Developers — Landing Site

Production landing site for **XPL Developers**. We Build. You Scale.

**Stack:** Vite 8 · React 19 · TypeScript · React Router v6 · Tailwind v4 · Lucide · EmailJS

---

## Quick start

```bash
cp .env.example .env.local      # then fill in the values you have
npm install
npm run dev                     # http://localhost:5173/
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run ESLint over `src/` |

Restart the dev server after editing `.env.local` — Vite reads env vars at startup only.

---

## Folder layout

```
xpl-landing/
├── content/                 ← editorial JSON. Edit here to update content. No code edits.
│   ├── projects.json        ← portfolio items (add/remove freely)
│   ├── services.json        ← 6 services
│   ├── values.json
│   ├── team.json
│   ├── process.json
│   ├── stats.json           ← hero KPIs + Why-XPL KPIs
│   └── budgets.json         ← contact form budget options
│
├── public/
│   ├── favicon.svg
│   └── portfolio/           ← drop project screenshots here as <slug>.webp
│
├── src/
│   ├── config/              ← single source of truth for app config
│   │   ├── site.ts          ← brand metadata + env-driven URLs (contact, social)
│   │   ├── navigation.ts    ← primary nav links
│   │   └── content.ts       ← typed loader for everything in /content
│   │
│   ├── components/
│   │   ├── layout/          ← Layout, Navbar, Footer, ScrollToTop
│   │   ├── ui/              ← Button, Card, Field, Icon, Logo, Page,
│   │   │                       Pill, Reveal, SectionLabel
│   │   ├── mockups/         ← BrowserFrame, PhoneFrame, GeoMark,
│   │   │                       HeroBackdrop, CornerTicks
│   │   ├── sections/        ← CTABanner, FilterBar, ProcessTimeline,
│   │   │                       ServiceBlock, StatStrip
│   │   └── cards/           ← ServiceCard, ProjectCard, FeaturedProjectCard,
│   │                           ValueCard, TeamCard
│   │
│   ├── pages/               ← Home, About, Services, Portfolio, Contact, NotFound
│   ├── hooks/               ← useScrolled, usePrefersReducedMotion
│   ├── lib/                 ← cn (className util), emailjs (form submission)
│   └── styles/globals.css   ← Tailwind v4 @theme block + component CSS
│
├── .env.example             ← committed
├── .env.local               ← your secrets (gitignored)
├── index.html
├── tsconfig.app.json        ← path aliases: @/* → src, @content/* → content
└── vite.config.ts
```

---

## Updating content (no code edits)

| Need to… | Edit |
| --- | --- |
| Add or remove a portfolio project | `content/projects.json` |
| Update services list | `content/services.json` |
| Add a team member | `content/team.json` |
| Tweak company values | `content/values.json` |
| Update process steps | `content/process.json` |
| Change KPI numbers (hero + Why XPL) | `content/stats.json` |
| Adjust contact-form budget options | `content/budgets.json` |

Schema lives in `src/config/content.ts`. Malformed entries fail at `npm run build`, not at runtime.

### Adding a new portfolio project
1. Drop a screenshot into `public/portfolio/<slug>.webp` (recommended: 1200 × 800 for browser shots, 600 × 1200 for phone shots).
2. Add an entry to `content/projects.json`:
   ```json
   {
     "slug": "ledgerlight",
     "name": "Ledgerlight",
     "category": "Web3",          // "Web" | "Mobile" | "Web3"
     "kind": "browser",            // "browser" | "phone"
     "domain": "app.ledgerlight.xyz",
     "description": "Cross-chain treasury dashboard for DAOs.",
     "stack": ["Solana", "Anchor", "React"],
     "year": "2025",
     "url": "https://...",         // optional — adds "View project" link
     "image": "/portfolio/ledgerlight.webp"  // optional — falls back to placeholder
   }
   ```
3. Save. Image renders inside the existing browser/phone chrome with no design change. No image set = striped placeholder.

---

## Environment variables

All public — exposed to the browser by Vite's `VITE_` prefix. Anything truly secret should be on a backend, not here.

```
# Contact form (EmailJS — free tier, ~200 emails/mo)
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx     # from EmailJS → Email Services
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx   # from EmailJS → Email Templates
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx       # from EmailJS → Account → API Keys

# Public contact channels — leave blank to hide that channel from the UI
VITE_CONTACT_EMAIL=
VITE_WHATSAPP_NUMBER=
VITE_CALENDLY_URL=

# Social links — leave blank to hide that icon from the footer
VITE_SOCIAL_X=
VITE_SOCIAL_INSTAGRAM=
VITE_SOCIAL_TIKTOK=
VITE_SOCIAL_LINKEDIN=
```

**Calendly** and each **social icon** are conditionally rendered. Leave the env var blank and the channel/icon disappears from the UI — no code change needed.

**Form behavior without EmailJS configured:** the form shows a `FORM NOT CONFIGURED` notice instead of attempting to send. Fill all three `VITE_EMAILJS_*` values and restart the dev server to enable it.

---

## EmailJS setup (one-time, ~5 minutes)

1. Sign up at [emailjs.com](https://www.emailjs.com).
2. **Email Services tab** → connect Gmail / Outlook / SMTP. Copy the `service_…` ID into `VITE_EMAILJS_SERVICE_ID`.
3. **Email Templates tab** → New Template. Paste the contents of [`xpl-landing-design/start_a_project.html`](../xpl-landing-design/start_a_project.html). In template settings:
   - **To Email**: your inbox (e.g. `hello@xpldevelopers.com`)
   - **Reply To**: `{{email}}` ← important, makes Reply work
   - **Subject**: `New brief — {{name}} ({{service}})`

   Copy the `template_…` ID into `VITE_EMAILJS_TEMPLATE_ID`.
4. **Account → API Keys** → copy the **Public Key** into `VITE_EMAILJS_PUBLIC_KEY`. Ignore the Private Key (browser SDK doesn't use it).
5. Restart `npm run dev`.

---

## Design system

The page is built on a **warm-charcoal + ember + cream** palette. All tokens live in `src/styles/globals.css` under the Tailwind v4 `@theme` block:

| Token | Hex | Role |
| --- | --- | --- |
| `--color-bg` | `#1c1813` | Body — warm charcoal |
| `--color-bg-soft` | `#241d16` | Alternating section breaks |
| `--color-bg-card` | `#221c16` | Cards |
| `--color-accent` | `#fb923c` | Ember — primary accent |
| `--color-accent-soft` | `#fed7aa` | Cream — secondary highlight |
| `--color-text` | `#faf6f0` | Warm white — never pure |
| `--color-muted` | `#b8a896` | Warm taupe — never gray |
| `--color-mockup-bg` | `#0d0a08` | Mockup chrome |

**Fonts:** Clash Display (display), DM Sans (body), JetBrains Mono (eyebrows / labels) — loaded via Google Fonts + Fontshare in `index.html`.

For full brand rules (voice, imagery, social templates, do/don't), see [`../xpl-landing-design/BRAND.md`](../xpl-landing-design/BRAND.md).

For the original implementation handoff, see [`../xpl-landing-design/IMPLEMENTATION.md`](../xpl-landing-design/IMPLEMENTATION.md).

---

## Routing

React Router v6 with `createBrowserRouter` in `src/App.tsx`:

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/portfolio` | Portfolio (filterable by Web / Mobile / Web3) |
| `/contact` | Contact |
| `*` | NotFound |

`ScrollToTop` resets scroll on every route change. Page wrappers fade-in via `.page-fade` (420 ms). All animations honor `prefers-reduced-motion`.

---

## Deployment

Designed for static hosting (Vercel, Netlify, Cloudflare Pages). For SPA fallback on direct route access (e.g. visiting `/about` directly), configure the host to rewrite all paths to `/index.html`.

**Vercel** — add `vercel.json`:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**Netlify** — add `public/_redirects`:
```
/*    /index.html   200
```

Set the same `VITE_*` env vars in the host's dashboard before deploying.

---

## Conventions

- **Path aliases**: `@/*` → `src/*`, `@content/*` → `content/*`. Use these instead of relative imports.
- **No inline `style={{ background: "#xxxxxx" }}`** with literals — reach for `var(--color-…)` so a palette change stays one-file.
- **JSON for content, TS for config.** JSON is editor-safe for non-engineers. TS is for shape, behavior, and env wiring.
- **Conditional channel rendering**: if a channel (Calendly, WhatsApp, social) doesn't have an env var, it's hidden — never show empty UI.
- **Components stay small.** Add a new file per concern (sections/, cards/, ui/) before extending an existing one past ~150 lines.

---

*XPL Developers · We Build. You Scale.*
