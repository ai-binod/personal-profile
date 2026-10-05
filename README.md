# Binod Sthapit — AI Marketing Expert Portfolio Website

A complete, professional, fully responsive personal portfolio website for **Binod Sthapit**, an AI Marketing Expert helping small and medium business owners attract qualified customers, generate leads, and increase sales through practical AI tools and proven digital marketing strategies.

Built with **HTML5, Bootstrap 5.3, WOW.js & Animate.css, jQuery 3.7, Vanilla JS, and DataTables**.

---

## 🌟 Key Features

1. **Clean Visual Branding**: Light background, deep navy text (`#0f172a`), refined teal (`#0d9488`) and blue accents, high-contrast CTA buttons, and generous whitespace.
2. **Central Configuration File (`assets/js/config.js`)**: Single place to update name, contact details, headshot, consultation booking link, social links, services, and form endpoint.
3. **Five Complete Pages & Navigation**:
   - **Home (`index.html`)**: Hero with primary CTA, who I help, common business challenges, benefits of AI marketing, 4-step process, services preview, about preview, latest articles, consultation offer, FAQ, and closing CTA.
   - **About (`about.html`)**: Positioning, mission, disciplined 4-pillar approach, core values, headshot with graceful SVG fallback, clearly labeled editable placeholders for story and credentials, and closing CTA.
   - **Services (`services.html`)**: All 7 services with what it involves, challenges addressed, deliverables, and benefits. Includes "Who I Work With" and an interactive **DataTables-powered Services & Deliverables Matrix** with instant search and pagination.
   - **Blog (`blog.html`)**: Real-time keyword search, category filter pills, reading time, publication dates, empty state, and 3 starter articles with dedicated reader pages:
     - `article-small-business-ai.html`
     - `article-digital-marketing-plan.html`
     - `article-ai-social-media.html`
   - **Contact (`contact.html`)**: Welcoming introduction, prominent free consultation section with exact primary CTA, direct contact details (Kathmandu, Nepal), accessible validation, privacy disclaimer, and an honest submission flow (with direct mailto launcher and clipboard copy).
   - **Custom 404 Page (`404.html`)**: Helpful error page with direct quick links.
4. **Accessible & Responsive**:
   - Tested for mobile, tablet, and desktop viewports.
   - No horizontal overflow (`overflow-x: hidden`).
   - Accessible keyboard focus indicators (`:focus-visible`) and skip links.
   - Respects `prefers-reduced-motion` settings.
5. **SEO & Social Ready**:
   - Semantic HTML5.
   - Unique title and meta descriptions on all pages.
   - Open Graph & Twitter Cards with SVG social graphic (`assets/images/og-image.svg`).
   - `sitemap.xml` and `robots.txt`.
   - Valid Schema.org `ProfessionalService` structured data.

---

## 🚀 How to Run the Website Locally

Since the website is built using standard, standards-compliant HTML, CSS, and JavaScript, it requires no build compilation step or heavy tooling.

### Option 1: Direct Browser Opening
Simply double-click `index.html` or open any `.html` file directly in your web browser.

### Option 2: Using Node.js / npx (Recommended for exact URL routing)
Run a local static server from the project directory:
```bash
npx serve .
# or
npx http-server .
```

### Option 3: Using Python
If Python is installed:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## ⚙️ How to Customize Personal Details & Configuration

All personal information and global settings are centralized in **[`assets/js/config.js`](assets/js/config.js)**:

```javascript
const SITE_CONFIG = {
  personal: {
    name: "Binod Sthapit",
    brandName: "Binod Sthapit",
    professionalTitle: "AI Marketing Expert",
    location: "Kathmandu, Nepal",
    email: "mail@binodsthapit.com.np",
    phone: "+977 9812345678",
    whatsapp: "+977 9812345678",

    // Brand Logo path (used in header navbar)
    logo: "assets/images/logo.png",
    // Brand Logo path (used in dark footer)
    logoFooter: "assets/images/logo-footer.png",

    // Headshot profile photo path
    headshot: "assets/images/headshot.jpg",

    // Primary Consultation Booking Link (Google Calendar appointment scheduling)
    bookingUrl: "https://calendar.app.google/n4R95r7LdRjVfTHD9", 

    // Social Profile Links (Empty strings are automatically omitted)
    socialProfiles: {
      linkedin: "",
      twitter: "",
      facebook: "",
      instagram: "",
      youtube: ""
    }
  },
  // ...
};
```

### Adding Your Headshot Photo
1. Place your headshot photo (e.g. `headshot.jpg`) into `assets/images/`.
2. In `assets/js/config.js`, set `headshot: "assets/images/headshot.jpg"`.
3. In `index.html` and `about.html`, update the `src` attribute of the `<img class="headshot-img">` to `"assets/images/headshot.jpg"`.

### Setting Up Your Consultation Booking Link
The consultation booking link is already wired to Google Calendar:
```javascript
bookingUrl: "https://calendar.app.google/n4R95r7LdRjVfTHD9"
```
All `"Book a Free Consultation Call"` buttons across all pages directly open this booking link in a new tab.

### Contact Form Delivery (Email App Dispatch)
The contact form on `contact.html` is configured to directly validate user input, format a structured consultation inquiry message with all details, and immediately launch the visitor's default email client (`mailto:mail@binodsthapit.com.np?subject=...&body=...`).
It also provides an in-page status card with a "Copy Formatted Message" button for quick copy-pasting if the visitor uses webmail without default client associations.
If you prefer a headless form backend in the future (e.g. Formspree or Web3Forms), you can supply an endpoint in `assets/js/config.js`.

---

## 📝 How to Add or Edit Blog Articles

Articles are maintained in two formats for flexibility:

1. **Markdown Files (`articles/`)**:
   - `articles/7-ai-tools-every-small-business-owner-should-use-in-2026.md`
   - `articles/how-to-get-more-customers-from-facebook-and-instagram.md`
   - `articles/small-business-ai-marketing.md`
   - `articles/digital-marketing-plan-guide.md`
   - `articles/ai-social-media-content.md`
   Edit these files directly in Markdown.

2. **Blog Registry (`assets/js/articles-data.js`)**:
   To add a new article to the blog listing, search, and category filter, add an entry to the `BLOG_ARTICLES` array:
   ```javascript
   {
     id: "your-article-slug",
     title: "Your Article Title",
     slug: "article-your-slug.html",
     category: "AI Strategy", // or "Digital Planning", "Content & Social"
     date: "2026-10-02",
     formattedDate: "October 2, 2026",
     readTime: "5 min read",
     author: "Binod Sthapit",
     isStarterContent: false,
     excerpt: "Brief summary of the article.",
     tags: ["AI", "Marketing"]
   }
   ```
3. Duplicate one of the existing `article-*.html` files to create the reader page for your new post.

---

## 📋 Summary of Built Components & Placeholders

### What Has Been Built:
- [x] **5 Core Pages**: Home (`index.html`), About (`about.html`), Services (`services.html`), Blog (`blog.html`), Contact (`contact.html`).
- [x] **5 Dedicated Article Reader Pages**: All 5 articles fully written with practical advice and end-of-article consultation CTAs.
- [x] **DataTables Matrix**: Interactive searchable deliverables explorer on the Services page.
- [x] **Live Blog Search & Filter**: Real-time category filtering and empty state handling.
- [x] **Accessible Contact Form**: Validation, error feedback, mailto launcher, and clipboard copy.
- [x] **Headshot / Profile Photo**: Real professional portrait photo placed across hero sections, about page, and author bio widgets (`assets/images/headshot.jpg` and `assets/images/headshot-square.jpg`).
- [x] **Call Booking Link**: Connected to Google Calendar (`https://calendar.app.google/n4R95r7LdRjVfTHD9`) across all primary CTAs.
- [x] **Custom 404 Page** (`404.html`).
- [x] **SEO**: `sitemap.xml`, `robots.txt`, Open Graph images, Twitter cards, and Schema.org structured data.

### Remaining Placeholders to Fill When Available:
- `socialProfiles` in `assets/js/config.js` (add LinkedIn, X/Twitter, or Facebook URLs; currently omitted cleanly).
- Qualifications & Story placeholders on `about.html` (lines clearly commented with `<!-- EDITABLE PLACEHOLDER -->` for your formal degrees or accreditations).
- `contactForm.endpoint` in `assets/js/config.js` (add Formspree endpoint when ready for production).

---

## 🚢 Deployment Instructions

This website is a modern, static web application ready for instant deployment to any standard hosting service:

- **GitHub Pages**: Push this directory to a GitHub repository, go to **Settings > Pages**, and select `main` branch root `/`.
- **Vercel / Netlify**: Drag-and-drop the directory or connect your git repository. No build command required; publish directory is `./`.
- **cPanel / Apache / Nginx**: Upload all files to your `public_html` or webroot directory.
