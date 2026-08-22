# Poorna Danushka Jayasundara — Portfolio

Personal developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Lucide, and Motion.

## Configure content

Edit `src/data/portfolio.ts` to update:

- name, title, intro, university, location
- GitHub, LinkedIn, email, phone
- education, skills, journey, services
- projects (title, copy, image path, technologies, GitHub, live URL)
- profile image path (`person.profileImage`)

Replace any `YOUR_*` placeholder before sharing the live site.

## Contact form

Optional Formspree (or compatible) endpoint:

1. Copy `.env.example` to `.env`
2. Set `VITE_FORMSPREE_ENDPOINT`
3. Restart the dev server

If the endpoint is empty, the form uses a `mailto:` fallback once `YOUR_EMAIL` is replaced.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

Production output is `dist/` and is ready for Vercel.

## Images

Put screenshots in `public/images/projects/` and point each project `image` field at the new path. Keep `public/images/profile.svg` until a real portrait is available.
