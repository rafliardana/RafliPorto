# M. Rafli Ardhana — Portfolio

A responsive personal portfolio based on the visual language and component architecture of
[Magic UI Portfolio](https://github.com/magicuidesign/portfolio). It presents Rafli's profile,
work experience, education, technical skills, selected projects, and contact form in a compact
single-page experience.

## Live site

[https://rafliard.my.id](https://rafliard.my.id)

## Features

- Seven focused sections: Hero, About, Work Experience, Education, Skills, Projects, and Contact
- Responsive single-column layout with a two-column project grid
- Magic UI blur/fade motion and flickering-grid details
- Expandable, keyboard-accessible work experience entries
- Fixed dock navigation with social links and Light/Dark/System theme support
- Five project cards with local preview artwork and verified website/source links
- Web3Forms contact form with validation, loading, success, and error states
- Reduced-motion support, visible focus states, semantic headings, and accessible labels
- Static export for Figma Make deployment and the `rafliard.my.id` custom domain

## Tech stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- shadcn/ui primitives and Magic UI components
- Motion, Radix UI, next-themes, and Lucide icons
- Web3Forms
- pnpm

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Run checks:

```bash
pnpm lint
pnpm build
```

`pnpm build` creates a static export in `out/`.

## Project structure

```text
src/
├── app/                    # Page, layout, metadata routes, and global theme
├── components/
│   ├── magicui/            # Motion, dock, and flickering-grid components
│   ├── ui/                 # Reusable shadcn/Radix primitives
│   └── *.tsx               # Portfolio-specific components
├── data/resume.tsx         # Central portfolio content and links
└── lib/utils.ts            # Shared utility helpers
public/
├── projects/               # Local project preview artwork
├── CNAME                   # Custom domain for the static output
└── og-card.png             # Social sharing image
```

## Updating content

- Edit personal details, work, education, skills, projects, and links in
  `src/data/resume.tsx`.
- Replace project artwork in `public/projects/` while retaining its filename, or update the
  associated `image` path in the data file.
- To add a profile photo, put it in `public/` and add an `AvatarImage` inside the Hero avatar;
  the `MRA` initials remain a safe fallback.
- The Web3Forms form behavior is implemented in `src/components/contact-form.tsx`.

## Figma Make lifecycle

The scripts in `.figma/make/` install pnpm dependencies, run the supervised Next.js development
server, build the static export, and deploy the `out/` directory for production or preview.

## Credits

The interface is adapted from the MIT-licensed
[magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) project. See `LICENSE`.
