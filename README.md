# marp-kit

[Marp](https://marp.app/) slide decks, plus a local dev server and a build you can deploy.

This is my go-to workflow for talks. Start the Marp dev server, open the deck in a browser or in your agent's in-app browser, and build the slides in conversation: copy, structure, CSS. The agent can see the deck as it changes. That loop is the point of this kit.

`slides.md` is Marp’s empty starter (built-in `default` theme). Write the talk there.

| Path | What goes there |
| --- | --- |
| `slides.md` | The deck. Speaker notes in HTML comments. |
| `images/` | Screenshots, GIFs, QR codes. Copied into `dist/` on build. |
| `themes/` | Custom Marp CSS. Leave empty to keep the built-in default. |
| `public/` | Netlify `/pdf` and `/powerpoint` download rules. |

If you rename the deck file, update the `build:*` scripts and the filenames in `public/`.

Project skills live in `.agents/skills/`: speaker AI guidance (own the claims, keep your voice) and accessible presentations (can the room follow the slides). Both are genericized from GitHub Universe speaker materials: [AI guidance for speakers](https://static.rainfocus.com/github/universe26/static/staticfile/staticfile/Universe%202026%20AI%20Guidance%20for%20Speakers_1785247787108001NbTV.pdf) and [Guide to accessible presentations](https://static.rainfocus.com/github/universe26/static/staticfile/staticfile/Universe%202026%20-%20Guide%20to%20Accessible%20Presentations_1785334302728001W9Bq.pdf).

## Dev

```bash
npm install
npm run dev
```

Watch server. Leave it running while you and the agent iterate.

## Build

```bash
npm run build       # dist/index.html, dist/slides.pdf, dist/slides.pptx
npm run build:ci    # same, after installing Chrome (for hosts with no browser)
```

Present from the HTML. GIFs freeze on frame one in PDF. Speaker notes stay in Markdown and the HTML presenter view; the PPTX build strips them so a download is not a notes leak.

## Deploy

I ship talks on [Netlify](https://www.netlify.com/), so this repo includes that setup:

- `netlify.toml` — `npm run build:ci`, publish `dist/`
- `public/_redirects` and `public/_headers` — `/pdf` and `/powerpoint` as attachment downloads

The Marp dev server does not serve those URLs. They exist after a Netlify deploy.

If you are on Vercel, Cloudflare, or something else, ignore or delete those three files and map the PDF/PPTX however that host does it. The build still drops `slides.pdf` and `slides.pptx` in `dist/`.
