---
name: speaker-ai-guidance
description: >-
  Run speaker AI-guidance checks on talk content. Use when editing slides.md,
  speaker notes, slide copy, titles, claims, demos, or any spoken or on-slide
  wording. Apply automatically before finishing content edits: own every claim,
  keep the speaker's voice, gut-check conversational delivery, and preserve
  lived experience over generated polish.
paths:
  - slides.md
  - themes/**
  - images/**
---

# Speaker AI guidance

AI is fine for outlines, titles, pacing, and finding holes. The stage still has to sound like the speaker, and every claim has to be theirs to own.

Run the checks below on every content edit, including the slides themselves and the HTML speaker-note comments in `slides.md`.

Do not turn this into a style rewrite. Flag problems. Cut unsupported claims. Restore voice. Leave the rest alone.

## When to use

- Editing `slides.md` slide copy or speaker notes
- Rewriting titles, hooks, statements, or the close
- Adding stats, product claims, dates, architecture claims, or demo outcomes
- Smoothing wording, generating alternatives, or "cleaning up" the talk
- Reviewing whether a slide is still something the speaker could talk through without a script

## Checks

Run all four after the edit. Report failures. Do not ship a change that fails Accuracy.

### 1. Accuracy — own every claim

If a slide or note states a fact, the speaker has to be able to defend it from row three.

- Stats, percentages, and "X cut Y by Z": require a source they actually understand (study, dates, sample, criteria). No source → cut the claim.
- Product behavior, ship dates, protocol details, tool names: must match something in this repo, a cited doc, or a live demo they have run. Do not invent precision.
- Internal or vendor data: dates, sample, criteria, source, or cut it.
- Demo outcomes: do not imply the demo proves more than the notes say it shows.
- If you cannot back a claim, delete it. Do not soften it into a weasel sentence.

### 2. Delivery — make it sound like them

The audience works with these tools every day. Generated stage copy is obvious.

- Notes, outline, and speaker cards are good. A read-aloud script is not.
- Slide titles should be speakable in one breath. Speaker notes should be beats, not paragraphs they would recite.
- Prefer short, opinionated lines over balanced corporate phrasing.
- Keep first person and the job-of-the-slide already in the notes.
- Do not add "In this talk we will…" / "Let's dive in" / "It is important to note" scaffolding.

Gut check: could they sit down with an attendee and talk through this slide with no script? If not, rewrite the notes into talking points and shrink the slide until they could.

### 3. Voice — keep the parts that are actually them

Let AI help with structure. Substance has to come from lived experience.

Watch for and rewrite:

- Oddly polished or suspiciously balanced sentences
- Confident claims about work they did not do
- Generic conference cadence that could belong to any talk on this topic
- Hedging that sands off the opinion

Protect the point of view already in the deck. A little weird is in scope. An unexpected demo and an honest failure are energy, not bugs to smooth away.

Read new copy out loud. If it is not something they would say to a coworker, rewrite until it is.

### 4. Do not launder the talk through a model

- Do not replace a rough, specific note with a smoother, more generic one.
- Do not add motivational filler, recap slides, or "key takeaways" lists unless they asked for them.
- Do not invent anecdotes, quotes, or bits. Bring only stories that are already in the deck or that they supplied.
- Structure help is allowed: pacing, cutting a slide that repeats, tightening a title. The story stays theirs.

## After an edit

1. Diff the wording, not just the layout.
2. List every factual claim you added or changed, with the source or `CUT`.
3. Call out any line that sounds generated, over-balanced, or not their voice.
4. If they only asked for a wording tweak, do not expand the talk.

## Related skill

Accessibility is a separate skill: `accessible-presentations`. Do not run that checklist as part of a voice or claim-only edit.

If this change adds or alters images, diagrams, QR codes, layout density, alt text, or how visuals are described in notes, follow that skill too. Do not satisfy it by adding a "what you will learn" slide or by sanding off the speaker's voice.
