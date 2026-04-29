# XPL Developers — Brand Guide for Content Creators

> Quick reference for anyone making social posts, video thumbnails, ad creative,
> case studies, or written content for XPL Developers. Match what's already
> shipping on **xpldevelopers.com**. When in doubt: less navy, more ember,
> warm not cool.

---

## 1. Identity in one line

> **We Build. You Scale.** — A software agency engineering web, mobile, and Web3 products for ambitious teams. Nigerian roots. Available worldwide.

Brand mood: **a moody, fire-lit craft studio at dusk.** Premium, calm, confident, warm. Not corporate. Not playful. Not "tech-bro neon."

---

## 2. Color palette

All hex literals — copy/paste safe.

| Role | Hex | Where to use |
| --- | --- | --- |
| **Body / background** | `#1c1813` | Slide backgrounds, card bg, video lower-third bg |
| **Section break / soft bg** | `#241d16` | Alternating sections, secondary panels |
| **Card / surface** | `#221c16` | Quote cards, stat cards, post cards |
| **Elevated / hover** | `#2a221b` | Highlights, focus state |
| **🟧 Ember (PRIMARY ACCENT)** | `#fb923c` | Buttons, headlines accent words, eyebrows, KPI numbers, single bold callouts |
| **Ember strong (hover)** | `#fdba74` | Hover/active states only |
| **Cream (SECONDARY)** | `#fed7aa` | Quiet highlights, decorative dots, secondary callouts |
| **Warm white (TEXT)** | `#faf6f0` | All headlines and primary body copy. **Never use pure white `#ffffff`.** |
| **Warm taupe (MUTED)** | `#b8a896` | Sub-headlines, body small, caption copy. **Never use cool gray.** |
| **Deeper taupe** | `#8a7a6a` | Mono labels, timestamps, fine print |
| **Hairline (warm)** | `rgba(255, 246, 240, 0.06)` | Subtle dividers |
| **Ember hairline** | `rgba(251, 146, 60, 0.16)` | Card borders, accent dividers |
| **Ember glow** | `rgba(251, 146, 60, 0.22)` | Soft halos behind hero text or product shots |

### Rules
- **Ember is a spark, not a wall.** Use it on ≤ 20% of any composition. Buttons, eyebrows, single accented words, KPI numbers — never as a full background.
- **Warm white text. Warm taupe muted.** Replacing every gray with taupe is the brand's secret weapon. Cool gray = generic.
- **Cream is a quiet second tone.** Reserve for moments where you'd otherwise reach for a second accent color — quotes, decorative ticks, soft highlights. Never as a button.
- **No navy. No purple. No cyan. No neon.** The whole point of this palette is warm-only. Mixing in cool tones breaks the system instantly.

### When you need contrast
- **Light copy on warm-charcoal**: `#faf6f0` headlines, `#b8a896` body — ratio passes WCAG AAA.
- **Highlight a single word**: change its color to `#fb923c`. Don't bold it. Don't underline.
- **Background image overlay**: warm-charcoal `#1c1813` at 65–80% opacity over imagery to keep text legible without going dead-flat.

---

## 3. Typography

Three families. Don't introduce a fourth.

| Use | Font | Weight | Notes |
| --- | --- | --- | --- |
| **Display headlines** | Clash Display | 600 | Tight letter-spacing (-0.02em). Line-height 0.96–1.05. Big, confident, never italic. |
| **Body / paragraphs / buttons** | DM Sans | 400 / 500 / 600 | 16–18 px body. 14 px buttons. Line-height 1.55–1.65. |
| **Eyebrows / labels / mono captions** | JetBrains Mono | 400 | 10–12 px, **UPPERCASE**, letter-spacing 0.16–0.18em. Always for: section labels, timestamps, IDs, "ENCRYPTED · NO SPAM" type captions. |

### Type rules
- **Never mix more than two type sizes per asset.** Display + body. Or display + eyebrow + body.
- **Eyebrows always have a leading 24-px ember rule** (`──`) before the text on web. Recreate this on social posts with a small dash or pipe.
- **No drop-shadows on text.** No outlines (except the giant outline-only "WW" / "NG" treatment on the website). No gradients on type.
- **Numbers and metrics in Clash Display.** "50+", "98%", "24h" — always display font, always at least 2× the surrounding body size.

---

## 4. Voice & tone

The brand voice mirrors the palette — warm, confident, terse, never theatrical.

### What it sounds like
- **Direct.** "We commit to ship dates and we hit them." Not "We strive to deliver projects on time."
- **Specific.** "98% on-time delivery" beats "highly reliable."
- **Quietly confident.** "Engineers who have shipped at scale" beats "world-class engineers."
- **Honest.** "If a feature is a bad idea, you will hear it from us."
- **Free of jargon.** No "synergy," no "leveraging," no "best-in-class," no "solutions."
- **Sentence-fragment punctuation is fine** for impact. "We Build. You Scale." "Process over chaos."

### Tone signature lines from the website
> We Build. You Scale.
> Operating principles over marketing copy.
> Strategy through to maintenance — one team, one source of accountability, one bar for craft.
> Distributed by design. Delivered worldwide.
> Boring tech, ruthlessly applied.

### What to avoid
- Exclamation marks (use them at most once per long-form post, for impact)
- Emoji in body copy (allowed sparingly in social captions, never in product copy)
- "Excited to announce…" / "Thrilled to share…" — every other agency starts posts this way. We don't.
- Hashtag stuffing. Max 3 per post, all lowercase.
- Empty superlatives ("amazing," "incredible," "game-changing")

---

## 5. Visual concept — what every asset should evoke

**Mental image:** a senior engineer's desk at 9 PM. Warm-temperature lamp. A laptop with a screen showing real production code. A coffee cup. No clutter. Cinematic.

| Asset feels like | Examples |
| --- | --- |
| **Editorial print on dark stock** | Stripe Press, Apple TV+ marketing, Are.na |
| **Cinematic dusk** | Blade Runner 2049 grading without the cyan |
| **Modern coffee shop branding** | Onyx, Verve, Stumptown — warm + considered |

**Avoid:** glassmorphism, neon edges, holographic gradients, isometric illustrations, generic "tech grid" backdrops, AI-generated humanoid faces, stock-photo handshakes.

---

## 6. Composition rules

### Layout
- **Generous breathing room.** Default to ≥ 64 px (or 8% of canvas) on all sides.
- **Square corners.** No rounded corners anywhere. No circles for buttons. Pills are rectangular.
- **Hairline borders, not heavy strokes.** 1 px ember-tinted dividers do more work than 4 px solid lines.
- **Asymmetric balance.** Headline left, supporting visual right. Avoid centering everything.
- **Single focal point.** One headline, one accent word, one KPI per composition.

### Geometry kit (for decorative elements)
- **Corner ticks** (10 × 10 px ember L-shapes at four corners of a frame) — repeatable pattern from the website. Use sparingly to "ground" a composition.
- **24-px leading rule** before mono eyebrows.
- **Outline-only large letterforms** (transparent fill, 1 px ember stroke) — for hero text variations like "WW" / "NG" / project codes.
- **Dot grid** at 32 × 32 px, 5% warm-cream opacity — okay as a distant background texture only.

---

## 7. Imagery — photography & video

### Photography do's
- **Real screens.** Macros of real production code, real dashboards, real wallets.
- **Hands at work.** Hands on keyboard, on a phone, on a notebook — face-less, action-focused.
- **Warm lamp light.** Single warm light source (3000K), shadows allowed.
- **Negative space.** Leave room for type to land.
- **Tight crops.** 50% subject, 50% breathing room.

### Photography don'ts
- ❌ Stock-photo "diverse team in conference room"
- ❌ Office shots of laptops with fake code
- ❌ Cool/blue tungsten lighting
- ❌ Heavy bokeh / shallow-depth-of-field that hides everything
- ❌ Anything with a clearly American/European corporate setting (we're worldwide, not specifically Western)

### Color grading (post)
- **Lift shadows toward warm brown** (not blue/teal — that's the cinematic cliché).
- **Crush highlights toward cream**, not pure white.
- **Saturation slightly desaturated** (~85%) — premium not punchy.
- **Add an ember warm-tint** to mid-tones (gentle).
- **Reference LUTs:** "Kodak Vision 2383" or "Cinematic Warm" — both default toward this look.

### Video specifics
- **Color grade matches above.** Warm lift, cream highlights.
- **Title cards = warm-charcoal `#1c1813` bg + Clash Display warm-white text + ember accent word.**
- **Lower-thirds = JetBrains Mono UPPERCASE name + DM Sans role**, ember leading dash.
- **Cuts:** medium-paced. No rapid jump-cuts. No swipe transitions. Cross-dissolves at 240 ms okay.
- **Music:** ambient electronic, lo-fi piano, modern instrumental hip-hop. **Not** corporate stock orchestral. **Not** EDM.
- **Length:** 15–45 s for social, ≤ 90 s for case studies, ≤ 3 min for deep dives.

---

## 8. Logo treatment

The wordmark is **`XPL`** in Clash Display 700 + **`Developers`** in JetBrains Mono 9 px tracked +0.36em UPPERCASE.

| Letter | Color | Why |
| --- | --- | --- |
| **`XP`** | Ember `#fb923c` | The brand's signature warmth |
| **`L`** | Warm white `#faf6f0` | Quiet handoff |
| **`Developers`** label | Warm taupe `#b8a896` | Subtitle, never compete with mark |

### Logo rules
- Always on warm-charcoal or darker backgrounds.
- Never on a busy photograph — put it on a flat warm-charcoal panel, then place that panel on the photo.
- Minimum size: 24 px tall for the wordmark. Below that, use the standalone "XPL" mark without the "Developers" label.
- **Never recolor.** Ember stays ember. White stays warm white. Taupe stays taupe.
- **Never add effects.** No drop shadow, no glow, no embossing, no gradient fill.

---

## 9. Iconography

- **Lucide line icons**, stroke 1.5 (use 1.2 for sizes ≥ 32 px to keep them airy).
- **Color = ember `#fb923c`** when standalone. Warm white inside ember-filled buttons.
- **Boxed in 36 × 36 hairline frames** when sitting next to copy (matches site service cards).
- **No emoji** in place of icons. Use Lucide.

---

## 10. Social-post templates (copy-ready)

### Single-image post (square 1080 × 1080)
```
[ ── eyebrow text in mono caps, ember ]

Display headline.
Two lines max.
Accent word in ember.

Body sentence in warm white, max 18 words.

[ XPL footer mark bottom-right, taupe ]
```

### Carousel cover slide
- Slide 1: massive headline, eyebrow, no body
- Slides 2–4: one stat or quote each, generous space
- Final slide: CTA + URL

### Story / vertical (1080 × 1920)
- Top third: eyebrow + headline (warm white + one ember word)
- Middle third: full-bleed photograph or product shot, warm-graded
- Bottom third: warm-charcoal panel with body copy + "xpldevelopers.com"

### Reel / short video opening frame
- 1 s — **Warm-charcoal full bleed** with **ember "XPL" mark** centered
- 2 s — Cut to subject (hands / screen / detail shot)
- Captions in **Clash Display warm-white**, animated word-by-word, accent word turns ember as it appears

### CTA line that works everywhere
> Start a project → xpldevelopers.com

---

## 11. Quick "do / don't"

| Do | Don't |
| --- | --- |
| Warm-charcoal `#1c1813` bg | Pure black `#000` |
| Warm white `#faf6f0` text | Pure white `#fff` text |
| Warm taupe `#b8a896` for body small | Cool gray for anything |
| Ember `#fb923c` on ≤ 20% of composition | Ember as a full-page background |
| Cream `#fed7aa` as a quiet second tone | Cream as a primary accent |
| Square corners, hairline borders | Rounded corners, heavy strokes |
| Real screens, real hands, real work | Stock photos of teams in conference rooms |
| Clash Display + DM Sans + JetBrains Mono | A fourth font |
| "We commit to ship dates and we hit them." | "Excited to announce we ship on time!" |
| 1–3 lowercase hashtags | #all #the #hashtags #stuffed #everywhere |

---

## 12. When in doubt

1. **More space.**
2. **Less ember.**
3. **Warmer, not cooler.**
4. **Warm white, not pure white.**
5. **Taupe, not gray.**
6. **One headline, one accent, one breath.**

If a piece of content reads like it could have come from any other agency, reset and start over.

---

*XPL Developers · We Build. You Scale.*
