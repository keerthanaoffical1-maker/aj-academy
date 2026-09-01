# AJ Academy Website

A warm, colorful, human-designed academy site for parents of children aged 5–15, covering Abacus and Bharatanatyam. Five pages, crisp copy, designed image placeholders that are trivial to swap for real photos later.

## Design direction

- Palette: deep royal purple + royal blue as anchors, gold/marigold and coral-pink as accents, cream off-white page background. Colors used as section bands and accent shapes, not gradients everywhere.
- Type: a friendly display face for headings (rounded geometric) and a clean readable body face. Consistent 1.25rem-ish radius, soft low shadows.
- Decorative touches only where they earn it: a few abacus-bead rows, small stars, soft blobs behind the hero, a hand-drawn underline on key headings.
- Motion: gentle fade/rise on section entry, small lift on card hover, button press feedback. Nothing looping or floating everywhere.
- No stat counters, no testimonials, no invented achievements, no "trusted by" strip.

## Pages

- **Home** — hero (Learn. Grow. Shine. / Abacus & Bharatanatyam for Children aged 5–15 / short line / Enquire Now + Explore Programs, large hero image placeholder with playful shapes), short Welcome to AJ Academy block with 4 small highlight chips, What We Teach (two visually distinct program cards), Why AJ Academy (4 icon points), Meet the Founder, Ages 5–15 playful band with colorful age chips, gallery teaser, final CTA.
- **About** — Welcome section expanded slightly, founder bio, ages band. No new claims.
- **Programs** — the two program cards at full size with benefit tags and image placeholders.
- **Gallery** — Life at AJ Academy: 7 placeholders in a lively staggered grid (Abacus Class, Bharatanatyam Practice, Students Learning, Activities, Performances, Academy Moments…).
- **Contact** — email / phone / Instagram as tappable buttons (tel:, mailto:, Instagram in a new tab) plus the enquiry form.

Nav: Home | About | Programs | Gallery | Contact + a prominent Enquire Now button. Mobile gets a hamburger sheet with large tap targets.

## Enquiry form

Fields: Parent Name, Child Name, Child Age, Program (Abacus / Bharatanatyam / Both), Phone Number, Message. Submitting emails ajacademy729@gmail.com and shows a success toast.

This needs Lovable Cloud (backend) plus an email sender. I will enable Cloud and use Resend for delivery — you'll be asked for a Resend API key, and the sending domain must be verified in Resend (until then, delivery is limited to the address that owns the Resend account). If you'd rather avoid that setup, say so and I'll switch to a prefilled WhatsApp handoff instead.

## Technical notes

- Tokens (colors, radius, shadows, fonts) defined in `src/styles.css` under `@theme inline`; fonts loaded via `<link>` in `__root.tsx`. No hardcoded color classes.
- Shared chrome (header, footer, decorative background) in `__root.tsx` + small components under `src/components/`.
- Routes: `src/routes/index.tsx`, `about.tsx`, `programs.tsx`, `gallery.tsx`, `contact.tsx`, each with its own `head()` title/description/og tags.
- `<ImagePlaceholder label="..." aspect="..." tone="..." />` component: styled block with label and pattern; accepts an optional `src` so replacing a placeholder is a one-line change.
- Enquiry: zod-validated on client and inside a `createServerFn` handler; Resend key read from env inside the handler; enquiries also stored in a `enquiries` table (RLS + grants) so nothing is lost if email fails.
- Reusable pieces: `ProgramCard`, `SectionHeading`, `FounderCard`, `AgeChips`, `Reveal` (scroll-reveal wrapper).
