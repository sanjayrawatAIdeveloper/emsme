# Design Brief

## Direction

eMSME — Modern SaaS fintech platform for Indian MSMEs to access government schemes, funding, and compliance. Clean, minimal, professional with confident high-converting CTAs.

## Tone

Refined minimalism with controlled warmth — professional SaaS credibility paired with accessible, conversational tone to build trust with entrepreneurs.

## Differentiation

Prominent orange accent CTAs with card-based hover lift effects, trust signals (partner logos, stat cards), and prominent "Scheme Discovery" tool positioning as the primary value driver.

## Color Palette

| Token      | OKLCH           | Role                                  |
| ---------- | --------------- | ------------------------------------- |
| background | 0.98 0.008 270  | Page background, light/airy foundation |
| foreground | 0.16 0.01 260   | Primary text, deep navy contrast      |
| card       | 1.0 0.0 0       | Card surfaces, pure white emphasis    |
| primary    | 0.32 0.18 260   | Dark blue headers, sections, branding |
| accent     | 0.55 0.22 30    | Orange CTAs, highlights, calls-to-action |
| muted      | 0.95 0.01 260   | Section alternation, subtle backgrounds |

## Typography

- Display: Space Grotesk — geometric, modern, technical authority for headlines and hero text
- Body: General Sans — clean, readable, accessible for paragraphs, labels, and descriptions
- Scale: Hero `text-5xl md:text-7xl font-bold`, H2 `text-3xl md:text-5xl font-bold tracking-tight`, Label `text-sm font-semibold uppercase tracking-widest`, Body `text-base`

## Elevation & Depth

Subtle multi-layer shadow hierarchy — card hover lifts 4px with soft shadow, sections elevated via background color alternation (white cards, 30% muted backgrounds), no aggressive drop shadows.

## Structural Zones

| Zone    | Background     | Border              | Notes                                    |
| ------- | -------------- | ------------------- | ---------------------------------------- |
| Header  | bg-card        | border-b border-2px | Sticky, solid border for definition      |
| Hero    | primary+gradient| —                   | Dark blue gradient with orange CTA       |
| Content | bg-background  | —                   | Light grey, alternating white card sections |
| Section | bg-muted/30    | —                   | Every other section for rhythm           |
| Footer  | primary        | border-t border-2px | Dark blue, contrasting footer zone       |

## Spacing & Rhythm

Spaciousness over density — 3rem/4rem section gaps, 2rem padding inside cards, 1rem micro-spacing between UI elements. Breathing room elevates professional appearance.

## Component Patterns

- Buttons: Primary orange (accent) for CTAs, secondary dark blue (primary) for secondary actions, 8px radius, font-semibold, hover opacity change
- Cards: Rounded 8-10px, white background, subtle shadows, hover lift +4px transform with shadow depth increase
- Badges: Rounded pills, muted background with foreground text, compact padding (0.5rem 1rem)

## Motion

- Entrance: Fade + slide-up 0.5s ease-out on section scroll or initial load
- Hover: Card lift 0.3s cubic-bezier, opacity on buttons 0.3s smooth
- Decorative: Floating accent elements at hero baseline, no bouncy animations

## Constraints

- No generic AI aesthetics — every color is intentional per OKLCH spec
- No neon glows, no rainbow palettes — max 3-4 semantic colors + neutrals
- Mobile-first responsive from sm: breakpoint, no arbitrary color values
- All buttons use semantic tokens (accent, primary), never raw hex

## Signature Detail

Orange accent buttons with prominent placement and hover lift — the visual signature that communicates action and energy while maintaining professional restraint.
