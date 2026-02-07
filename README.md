# StepLock Marketing Site

Premium marketing website for the Android app **StepLock** (walk-to-dismiss alarm), built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- `next-themes` for system dark mode + toggle

## Routes

- `/` Home (marketing)
- `/privacy` Privacy Policy
- `/support` Support
- `/terms` Terms of Use

Also included:

- `robots.txt` via `app/robots.ts`
- `sitemap.xml` via `app/sitemap.ts`

## 1) Install

```bash
npm install
```

## 2) Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## 3) Production build

```bash
npm run build
```

Project is configured for static export in `next.config.mjs` (`output: "export"`).

## 4) Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import project into Vercel.
3. Framework preset: **Next.js**.
4. (Optional) set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://yourdomain.com`) for sitemap/metadata canonical links.
5. Deploy.

## 5) Add your assets

Pages are wired to these asset paths. Add/replace:

- `public/logo.png`
- `public/screenshots/1. Your alarms, at a glance..jpg`
- `public/screenshots/2. Set time, steps and difficulty.jpg`
- `public/screenshots/3. Normal, Hard or Brutal.jpg`
- `public/screenshots/4. Choose a sound per alarm.jpg`
- `public/screenshots/5. Stop stays locked until you walk.jpg`
- `public/screenshots/6. Walk, unlock, done.jpg`
- `public/screenshots/7. Test in 5 seconds anytime.jpg`

## Notes

- Google Play button currently uses a placeholder URL:
  - `https://play.google.com/store/apps/details?id=com.example.steplock`
- Support email is set to:
  - `twinthinkai@gmail.com`
- Privacy policy "Last updated" is set to:
  - `2026-02-07`
