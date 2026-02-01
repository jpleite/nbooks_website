# nBooks Website

A modern, responsive website for nBooks - Accounting solutions for SMEs and freelancers in Porto, Portugal.

## Project Structure

```
nbooks_website/
├── index.html              # Main HTML file
├── css/
│   ├── main.css            # Main stylesheet
│   └── responsive.css      # Responsive design styles
├── js/
│   └── main.js             # JavaScript functionality
├── locales/
│   ├── pt.json             # Portuguese translations
│   └── en.json             # English translations
├── images/                 # Image assets folder
└── README.md              # This file
```

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **JSON-Based Localization**: Clean separation of content and code with external JSON files
- **Multilingual Support**: Portuguese and English languages with automatic browser detection
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Separated CSS and JS files for better loading
- **Accessibility**: ARIA labels and keyboard navigation support

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+ with async/await)
- JSON for localization
- CSS Variables for theming
- Local Storage for language preferences
- Fetch API for loading translations

## Setup Instructions

1. Clone or download the project files
2. Ensure all files maintain the folder structure shown above
3. Open `index.html` in a web browser
4. For development, use a local server (e.g., Live Server in VS Code)

## Customization

### Colors
The website uses CSS custom properties for easy theming. Main colors are defined in `:root` in `css/main.css`:

```css
:root {
    --primary-blue: #3AADCC;
    --primary-green: #42D686;
    --dark-blue: #2C8FAB;
    --light-green: #5FE09A;
    /* ... other colors */
}
```

### Content
- Text content is managed through the translations object in `js/main.js`
- Images should be placed in the `images/` folder
- Update the logo source in the HTML file as needed

### Adding New Languages
1. Create a new JSON file in the `locales/` folder (e.g., `fr.json`)
2. Follow the same structure as `pt.json` and `en.json`
3. Add a new language option in the HTML dropdown
4. The JavaScript will automatically load the new translation file

### Localization Structure
Translations are organized in nested JSON objects:
```json
{
  "nav": {
    "home": "Home",
    "services": "Services"
  },
  "hero": {
    "title": "Page Title",
    "subtitle": "Page Subtitle"
  }
}
```

Use dot notation in HTML: `data-i18n="nav.home"`

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

- Optimized CSS with efficient selectors
- Minimal JavaScript for core functionality
- Lazy loading for animations
- Compressed and optimized assets

## Contact

For questions about this website or nBooks services:
- Email: info@nbooks.pt
- Location: Porto, Portugal

## License

© 2024 nBooks, Lda. All rights reserved.
NIF: 517827131