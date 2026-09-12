# Themes

Marp’s built-in `default` theme is used until you add a CSS file here.

```css
/* @theme your-theme */

@import "default";
```

Then set `theme: your-theme` in `slides.md`, and add `themeSet: ./themes` to `.marprc.yml` so the CLI loads it.
