# Baúl Chino — HSK & Mandarin learning resources, free and online

**baulchino.com** is a free library of HSK-related material for anyone learning
Mandarin Chinese — especially people who have a hard time getting physical
copies of HSK textbooks, workbooks and audio in their country and end up
searching for a digital version instead. Baulchino gathers that material in one
place and makes it easy to use online: listen to the audios, download the books,
practice the characters, and take mock tests — no matter where you live.

Alongside the HSK material, the site packs a few small tools that help with
day-to-day Mandarin studies.

## What's inside

### HSK study material

| Section | What it offers |
|---|---|
| **HSK Books** | Download HSK textbooks & workbooks (levels 1–6) |
| **New HSK 3.0 Books (2026)** | The updated HSK 3.0 books released in 2026 |
| **HSK Audio Files** | Stream every unit's audio from the HSK textbooks and workbooks |
| **Download all HSK audio** | One-click bundle download of all audio files |
| **New HSK 3.0 Audios (2026)** | Streaming + download for the 2026 edition audios |
| **HSK Mock Test** | Take an HSK mock test in an online simulator or download it for in-person practice |
| **New HSK 3.0 Mock Test** | Same, for the 2026 syllabus |
| **Anki Decks** | Ready-made decks covering HSK 1–4 vocabulary |

### Small tools for Mandarin studies

| Tool | What it does |
|---|---|
| **Hanzi Writing 汉字** | Interactive stroke-order practice with radicals, powered by hanzi-writer |
| **Calligraphy Templates 汉字** | Downloadable practice sheets for stroke order and radicals |
| **Template Generator 汉字** | Build customized practice templates for targeted study |
| **Chinese Learning Channels** | Curated YouTube channels for learning Mandarin, sorted by teaching style |

Plus **About**, **Roadmap** and **Support** pages.

## Tech stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** + **Radix UI** (accessible primitives wrapped into custom components)
- **next-intl** — full English/Spanish localization (both locales kept at key parity)
- **Supabase** (PostgreSQL) for mock-test data · **Cloudflare R2 + CDN** for audio/books
- Self-hosted on a VPS with Coolify · analytics via Umami + PostHog

## Running locally

Requirements: Node.js and pnpm.

```bash
git clone git@github.com:Wichosu/baul-chino.git
cd baul-chino
pnpm install
pnpm dev
```

Then open http://localhost:3000.

**Disclaimer:** some pages need environment variables (data is fetched from my
DB and none of my env will be published), so out of the box you can only
explore part of the site. If you want to make your own version of Baúl Chino
for whatever purpose, feel free to contact me for details.

All HSK books, audio and other study material belong to their respective
publishers and are shared here purely for educational access. If you are a
rights holder and want something removed, please get in touch.

## License

GPLv3 — see [LICENSE](LICENSE).
