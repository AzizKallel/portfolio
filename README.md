# Personal Brand Portfolio

A modern, bold, animated portfolio site built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing your content

Almost everything on the site (your name, bio, services, projects, testimonials, social links) lives in **one file**:

```
data/content.ts
```

Open it and replace every `[PLACEHOLDER]` with your real info. You should not need to touch any component files just to update text.

## Adding real brand logos (Trusted By section)

The scrolling row of client circles near the top also reads from `data/content.ts`:

```ts
{ name: "Acme Inc", logo: "/brands/acme.png" },
```

Drop the logo/photo into `/public/brands/` and set the path. Leave `logo` empty and it shows the brand's initials in a circle instead — so nothing looks broken while you're still collecting real logos. Square images work best (they get cropped into a circle).

## Adding real project videos

The "Projects" section and each project page are already wired for video:

1. Drop your video files into `/public/work/` (e.g. `public/work/project-one.mp4`).
2. Open `data/content.ts` and set the `video` field on the matching project, e.g.:
   ```ts
   video: "/work/project-one.mp4",
   poster: "/work/project-one-poster.jpg", // optional, shown before it loads
   ```
3. That's it — the card on the homepage will autoplay that clip on loop, and the project's detail page will show a full player with controls.

Until you add a video, a card shows a placeholder telling you where to drop the file, so nothing looks broken.

**Tip:** keep clips short (5–15s) and compressed (H.264 mp4, under a few MB each) so the page stays fast — a tool like [HandBrake](https://handbrake.fr) or `ffmpeg` works well for this.

## Adding real testimonial photos

Testimonials also live in `data/content.ts`. Each one has an optional `avatar` field:

```ts
avatar: "/testimonials/foued.jpg",
```

Drop the photo into `/public/testimonials/` and set the path. Leave it empty and the card shows the client's initials instead.

## Changing colors

All brand colors are defined in `tailwind.config.ts` under `theme.extend.colors`:

- `coral` — primary accent
- `violet` — secondary accent
- `yellow` — highlight accent
- `ink` — background
- `cream` — text on dark background

Change the hex values there and the whole site updates.

## Wiring up the contact form

The contact form posts to `app/api/contact/route.ts`, which currently just logs the submission. To actually receive emails:

1. `npm install resend` (or your email service of choice)
2. Add your API key to `.env.local` (and to your Vercel project's environment variables)
3. Uncomment the Resend code block in `app/api/contact/route.ts`

## Deploying

The fastest path is [Vercel](https://vercel.com):

1. Push this project to a GitHub repo
2. Import it in Vercel
3. Add any environment variables (e.g. `RESEND_API_KEY`) in the Vercel dashboard
4. Deploy

## Tech stack

- Next.js 16 (App Router) + TypeScript, React 19
- Tailwind CSS
- Framer Motion
- lucide-react icons
- Self-hosted fonts via `@fontsource` (Bricolage Grotesque, Inter, JetBrains Mono) — no external font requests at build or runtime

## About the `npm audit` warning

Running `npm install` may still show one moderate warning about `postcss`. This comes from a copy of `postcss` bundled *inside* Next.js itself (not the one in your own `package.json`), and Next.js hasn't shipped a stable release with the fix yet (only a canary/preview build has it). It's a build-tool-only issue with no exposure in the deployed site, so it's safe to ignore for now.

**Do not run `npm audit fix --force`** — it will try to downgrade Next.js to a very old, broken version (9.x) to "fix" this, which would break the whole site. Just wait for the next stable Next.js release, then run `npm install next@latest` to pick it up.
