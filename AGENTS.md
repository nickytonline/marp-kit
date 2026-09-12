# AGENTS.md

Marp talk kit. Layout, scripts, and deploy notes are in `README.md`. Do not edit `dist/` or `node_modules/`.

## How to work

1. Start `npm run dev` if it is not already running. Open the deck in a browser or the in-app browser.
2. Edit `slides.md` (and theme CSS if needed). Watch the preview.
3. Smallest complete change. Do not expand the talk unless asked.

Custom themes: see `themes/README.md`.

## Skills

- Slide copy, notes, claims, titles: `.agents/skills/speaker-ai-guidance/SKILL.md`
- Images, QR, alt text, contrast, density, how visuals are described: `.agents/skills/accessible-presentations/SKILL.md`

Both can apply to the same edit. Voice wins over linter-style rewrites.

## Done when

- `npm run dev` still serves the deck.
- Content edits pass the skill checks that apply. Report failures; cut unsupported claims.
- You did not add a host flag, extra theme pack, recap slide, or "what you will learn" filler unless asked.
