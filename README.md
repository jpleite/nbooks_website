# nBooks Website

Marketing website for nBooks - accounting services for SMEs and freelancers in Porto.

## Quick Start

1. Clone the repo
2. Open `index.html` in your browser (or use Live Server for dev)

## Structure

```
nbooks_website/
├── index.html          # Main page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── css/
│   ├── main.css        # Styles
│   └── responsive.css  # Mobile breakpoints
├── js/
│   └── main.js         # All the JS
├── locales/
│   ├── pt.json         # Portuguese
│   └── en.json         # English
├── images/             # Logo, favicon
└── videos/             # Hero videos (PT/EN)
```

## Features

- Responsive (mobile, tablet, desktop)
- Bilingual (PT/EN) with browser detection
- Smooth scroll, animations
- No frameworks, just vanilla JS

## Theming

Colors are in CSS variables in `main.css`:

```css
--primary-blue: #3AADCC;
--primary-green: #42D686;
```

## Adding a Language

1. Create `locales/xx.json` (copy structure from `en.json`)
2. Add option to the language dropdown in HTML

## Browser Support

Chrome 60+, Firefox 60+, Safari 12+, Edge 79+

---

© 2026 nBooks, Lda. All rights reserved.
