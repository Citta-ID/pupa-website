# Korean version — review guide

The site now has a full Korean version at /ko/ (e.g. pupacenter.org/ko/). It was translated by AI and **must be reviewed by a native/fluent Korean speaker before the NISE event**. This guide tells the reviewer exactly where to look.

## What is fully in Korean (please review all of it)
- Site chrome: navigation, footer, accessibility toolbar (src/i18n/ui.ts → the `ko:` block; src/components/AccessibilityToolbar.astro)
- Home (src/i18n/home.ts → `ko:` block)
- About, Programs, Enrollment (incl. all 17 FAQs), Workshops, Contact, Donate, Get Involved, Resources, Growth Journeys intro, Accessibility page (each component's `ko:` block)
- All 6 Growth Journey stories (src/content/stories/ko-*.md)
- All 8 blog articles (src/content/blog/ko-*.md)
- Privacy policy (src/data/privacy-ko.md, served at /ko/privacy/) — legal-adjacent text, please review the register and terminology carefully

## Blog articles (now translated — please review)
All 8 parenting-guidance articles are now in Korean (src/content/blog/ko-*.md). These give practical advice to families about autism, so review them carefully for tone and terminology — alongside the personal bios, they are the highest-priority review items.

## Priority review: the 12 personal bios
The Board and Team bios (BoardPage.astro / TeamPage.astro, `ko:` key in each member's `bio:`) are AI-translated descriptions of real people — please give these the closest read of anything on the site, and adjust anything that does not match how each person would want to be described.

## Next batch: legal identity line (added 27 November 2026)
Short, new text, AI-translated. Please check it reads naturally and matches the English exactly:

- **Legal line**, shown in the footer of every Korean page and in the About page story (src/i18n/ui.ts → `ko:` → `footer.legalLine`, and src/components/AboutPage.astro → `ko:` → `story`, 4th paragraph). The two must stay identical:
  - KO: PUPA 센터는 2014년 12월 2일 설립된 Yayasan Perisai Unggul Pelita Anugrah가 운영하며, 2015년 1월에 문을 열었습니다.
  - EN source: PUPA Center is run by Yayasan Perisai Unggul Pelita Anugrah, established on 2 December 2014, and opened to the public in January 2015.
- **Search-engine description** (not visible on the page; read by Google and AI assistants): src/layouts/Layout.astro → the `lang === 'ko'` description.
  - KO: 인도네시아 탕에랑에서 신경다양성 청년들의 생활 기술과 취업 준비를 돕는 발달 지원 센터입니다.
  - EN source: A development center for life skills and work readiness for neurodivergent young adults in Tangerang, Indonesia.
- **Footer copyright** now uses the legal name in Latin script (`footer.legalName`), replacing "PUPA 재단". The yayasan's legal name stays untranslated, as in the Korean privacy policy.

Points to confirm: 설립된 for the yayasan's legal establishment vs 문을 열었습니다 for the public opening; and whether 가 운영하며 reads well after a long Latin-script name.

## Terminology choices for the reviewer to confirm
- neurodivergent → 신경다양인 / 신경다양성 (adjectival)
- Growth Journeys → 성장 이야기
- work readiness → 취업 준비 · life skills → 생활 기술
- Enrollment → 입학 안내 · probation period → 적응 기간(probation)
- Get Involved → 함께하기 · Donate → 후원하기 · Resources → 자료실
- Program names Mandiri / Karya / Access and "PUPA Bites/Coffee/Tacta/Eggstra" kept in Latin script
- Tone: formal-polite 합니다체 throughout
- Contact/WhatsApp notes ask Korean visitors to write in English or Indonesian (so staff can reply) — confirm this is desired

## How the reviewer edits
All Korean text lives in the `ko:` blocks of the files above — plain text side by side with EN and ID. Edit, then commit/push (or send the edited files back).
