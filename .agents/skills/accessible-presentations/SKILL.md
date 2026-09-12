---
name: accessible-presentations
description: >-
  Apply accessible-presentation checks to this Marp deck. Use when editing
  slides.md, speaker notes, images, diagrams, QR codes, code on slides, alt
  text, captions, GIFs, video, theme fonts or colors, contrast, layout density,
  acronyms, or inclusive language. Also use when the user mentions
  accessibility, a11y, captions, or describing visuals on stage.
paths:
  - slides.md
  - themes/**
  - images/**
---

# Accessible presentations

Run the checks below on the change you are making. Report failures. Fix what this edit introduced. Do not restyle the whole deck or rewrite the speaker's voice to satisfy a linter.

This skill is **not** a subroutine of `speaker-ai-guidance`. That skill is voice and claims. This one is whether the room can follow the slides. They can both apply to the same `slides.md` edit. If they conflict, keep the speaker's wording and meet accessibility in speaker notes or structure, not by adding corporate filler.

## When to use

- Adding or changing slides, layout, or on-slide density
- Images, SVGs, diagrams, QR codes, video, GIFs
- Alt text, captions, or speaker notes that describe what is on screen
- Theme, fonts, colors, light vs dark, contrast
- Acronyms and inclusive language
- Opening, demo narration, or Q&A notes that affect how the talk is delivered

## Preparing the deck

### Color, type, layout

- Minimum contrast 4.5:1 for normal text, 3:1 for headlines, icons, and illustrations that are essential to understanding.
- Stay in light mode or dark mode for the whole deck. Do not switch mid-talk.
- Sans-serif. Essential information large enough to read from the back of the room (about 24pt / ~32px and up).
- Simple layout. One job per slide.
- Avoid dense text. Slides anchor talking points; they do not replace them.
- Avoid all caps except sparingly.
- No animations, parallax, or motion-heavy transitions. Marp should stay static.
- Nothing may flash more than three times in one second.

Custom theme CSS lives in `themes/`. Do not drop contrast, shrink titles to cram words, or add one-off colors that fail the ratios above.

### Images and multimedia

Meaningful images need alt text that says what the image **conveys**, not a filename.

- Marp: `![what it conveys](images/....png)` — `![w:600px](images/...)` with no description has **no** alt text. That fails.
- HTML: `<img src="..." alt="...">`. Empty `alt=""` only if the image is purely decorative.
- QR codes: expanded URL on the same slide. Never QR-only. Alt can be short (`QR code for nickyt.co`) because the URL is adjacent.
- Videos: open captions, high contrast, large enough for the room. Audio description when the picture is essential.
- Present from HTML if you use GIFs (PDF freezes on frame one). Looping GIFs can disorient: keep them short, describe them while they play, and prefer a still after a few seconds if the loop is not the point.

### Language

- Spell out acronyms on first spoken mention, then the acronym. On-slide shorthand is fine after that; do not bloat titles.
- Plain language. Do not assume the whole room lives in the internals.
- Inclusive language. Do not add inspiration-porn about disability. Person-first and identity-first are both valid; follow the person named.
- Accessibility is clarity and description, not a tone rewrite. Voice and claim checks belong to `speaker-ai-guidance`.

## Delivery notes (HTML comments, not extra slides)

### Opening

Cover notes should include an inclusive introduction the speaker can say in the first 1–2 sentences: name, pronouns, brief visual description. Example shape: "Hi, I'm Jordan, my pronouns are they/them, and I'm a South Asian person with short dark hair and glasses. I'm standing at the podium on the left side of the stage."

Do **not** add a "what you will learn" slide unless they asked for one. A spoken sentence of what the session is can live in the cover notes.

### Describing visuals

Narrate anything on screen that matters: diagrams, code, demo UI, charts.

- Code: say what the snippet is doing, not "this".
- Demo: "I'll select the Settings icon in the top right", never "I'll click here."
- Diagrams: walk the regions (left / middle / right).
- Keep descriptions in HTML comments in `slides.md`, as beats, not a script.

### On stage (reminders in notes only)

- Microphone the whole time, including Q&A. Repeat audience questions into the mic before answering.
- Face the room. Do not cover the mouth.

## After an edit

1. Check images you touched for alt text (or decorative-empty).
2. Check QR slides still show the URL in text.
3. Check you did not mix light and dark or tank contrast.
4. Check the slide did not get denser. If it did, split or cut.
5. Check speaker notes describe new visuals and, on the cover, still have the inclusive intro beats.
6. List a11y issues you did **not** fix because they were already there, unless the user asked for a full pass.
