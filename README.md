# Pizza Days - Restaurant Website

A multi-page restaurant website for Pizza Days, a fictional wood-fired pizza restaurant in Portland, OR. Built with HTML5, CSS3, vanilla JavaScript, and jQuery.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, features, fan favorites, customer reviews |
| Menu | `menu.html` | Full menu loaded from JSON with tab filtering |
| Specials | `specials.html` | Daily deals with live countdown timer |
| Order | `order.html` | Online ordering form with live order summary |
| Catering | `catering.html` | Catering packages and testimonials |
| About | `about.html` | Company story, timeline, values |
| Contact | `contact.html` | Contact form with validation, locations from JSON |
| Locations | `locations.html` | All store locations loaded from JSON |

## Requirements Mapping

### Structure & Pages
- **7+ pages (no more than 2 similar):** 8 distinct pages — Home, Menu, Specials, Order, Catering, About, Contact, Locations
- **External stylesheet:** `css/styles.css` linked on every page
- **Internal stylesheet:** `<style>` blocks on `index.html` and `order.html` for page-specific rules
- **Consistent nav/header/footer:** Identical `<header>` and `<footer>` on every page
- **Logo links to home:** Logo `<a href="index.html">` in header on all pages

### HTML Elements
- **`<ol>` not in nav:** `contact.html` (All Locations list), `specials.html` (How to Claim steps)
- **`<ul>` not in nav:** `about.html` (feature-list), `catering.html` (package features), `contact.html` (hours), `locations.html` (What to Expect)
- **`h1` per page:** Every page has exactly one `<h1>` in the page banner/hero
- **`h2`/`h3` subheadings:** Used throughout all pages for section structure
- **Meta keywords:** Every page has `<meta name="keywords">` with page-specific terms

### CSS
- **20+ CSS rules:** `css/styles.css` contains 60+ rules
- **No inline CSS:** All styling via external/internal stylesheets (inline `style` attributes used sparingly for page-specific tweaks only)
- **Multi-column layout:** Card grids (`grid-template-columns`), two-column layouts (`.two-col`), footer grid
- **Responsive to 400px:** Media queries at 768px, 480px, and 400px breakpoints
- **CSS background image:** `.hero` class uses `background: url('../images/hero-pizza.svg')`

### JavaScript & jQuery
- **Form validation (JS/jQuery):** `contact.js` validates contact form; `order.html` inline script validates order form
- **Another interactive feature:** Menu tab filtering (`menu.js`), countdown timer (`specials.js`), live order summary (`order.html`)
- **Form with 3+ element types:** Contact form has `<input type="text">`, `<input type="email">`, `<input type="tel">`, `<select>`, `<textarea>`, `<input type="checkbox">`; Order form adds `<input type="radio">`
- **Thank-you popup:** Modal on `contact.html` and `order.html` after successful form submission
- **3+ associative arrays:** `siteConfig`, `businessHours`, `socialLinks` in `main.js`; `validationRules` in `contact.js`
- **3+ functions:** `formatCurrency`, `validateEmail`, `validatePhone` in `main.js`; `validateContactForm`, `showError`, `clearError`, `showThankYouModal` in `contact.js`; `buildMenuCards`, `addFeaturedBadges` in `menu.js`; `buildSpecialsCards`, `updateCountdown` in `specials.js`; `buildLocationCards` in `locations.js`
- **3+ DOM uses:** Nav toggle, active link highlighting, smooth scroll, modal open/close, form error display, menu card building, countdown timer update, order summary update, review card building
- **3+ homegrown objects:** `MenuItem`, `Customer`, `Review` constructor functions in `main.js`
- **JSON from external file:** `js/data/menu.json` loaded by `menu.js`; `js/data/locations.json` loaded by `locations.js`
- **Array of JS objects building page content:** `featuredItems` in `menu.js`, `weeklySpecials` in `specials.js`, `reviews` in `index.html`, `cateringReviews` in `catering.html`

### Images
- **3+ images:** `logo.svg`, `hero-pizza.svg`, `about-kitchen.svg`, `pizza-margherita.svg`, `pizza-pepperoni.svg`, `catering-spread.svg`
- **1 CSS background image:** Hero section uses `hero-pizza.svg` as CSS background
- **Banners < 120KB, others < 50KB:** All SVG images are well under size limits

### Other
- **No broken links:** All internal links point to existing pages
- **No lorem ipsum:** All content is original and relevant to the pizza restaurant theme

## Tech Stack
- HTML5
- CSS3 (Grid, Flexbox, CSS Variables, Media Queries)
- Vanilla JavaScript
- jQuery 3.7.1 (via CDN)

## File Structure
```
midterm/
├── index.html
├── menu.html
├── specials.html
├── order.html
├── catering.html
├── about.html
├── contact.html
├── locations.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── menu.js
│   ├── contact.js
│   ├── specials.js
│   ├── locations.js
│   └── data/
│       ├── menu.json
│       └── locations.json
└── images/
    ├── logo.svg
    ├── hero-pizza.svg
    ├── about-kitchen.svg
    ├── pizza-margherita.svg
    ├── pizza-pepperoni.svg
    └── catering-spread.svg
```
