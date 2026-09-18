# QR codes

Use the QR code generator when a talk needs a closing slide with a scannable link.

## Where it lives

- `qr-codes.json` — deck-specific QR targets
- `scripts/generate-qr.mts` — generator script
- `npm run generate:qr` — generates the images

## Config shape

```json
{
  "outputDir": "images",
  "codes": [
    { "name": "slides", "url": "https://example.com" },
    { "name": "github", "url": "https://github.com" }
  ]
}
```

## Behavior

- Each entry must include both `name` and `url`.
- Images are written as `qr-${name}.png` in the configured output directory.
- If `codes` is empty, the script warns and exits without generating images.
- If a deck does not want QR codes, remove the block from the slide template instead of leaving the config empty.

## Use in a deck

- Keep the generated QR code in `images/`
- reference it in the slide like `![QR code](images/qr-slides.png)` or as an `<img>` tag
- prefer a small set of high-value links: deck URL, profile, resources, or repo

## Rules

- Keep URLs intentional and useful to the audience.
- Do not generate QR codes for dead links or placeholder URLs.
- Prefer a single source of truth in `qr-codes.json` rather than hard-coding URLs in the generator.
