# Pravin Chaturvedi — AI Product Manager Portfolio

Premium PM portfolio built with Next.js, TypeScript, Framer Motion and Lucide.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Content model

Update profile, projects, experience, metrics and testimonials under `/data` without changing UI components.

## Important setup before deployment

1. Set `NEXT_PUBLIC_SITE_URL` to the final deployment domain before production.
2. Replace placeholder GitHub URL in `data/profile.ts`.
3. Add a real analytics provider in the analytics abstraction if desired.
4. Connect the contact form to a server/email provider for server-side submissions; the current version opens a prefilled email draft without exposing an API key.
5. Verify every quantified case-study metric before public launch. Resume-derived metrics are used only where the supplied resume supports them.
