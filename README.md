# ShadowOps Marketing Site

A fast, clean, static marketing site for ShadowOps—operational intelligence for manufacturers. Built with vanilla HTML, CSS, and JavaScript. Production-ready for GitHub Pages.

## Structure

```
/
├── index.html                    # Home page
├── styles/
│   └── main.css                 # Design system & global styles
├── scripts/
│   └── main.js                  # Minimal JavaScript
├── assets/
│   ├── img/                     # Images (placeholder folders)
│   └── icons/                   # Favicon
├── product/index.html           # Product features
├── how-it-works/index.html      # How ShadowOps works
├── use-cases/index.html         # Use case scenarios
├── pilot/index.html             # Pilot program details
├── about/index.html             # About ShadowOps
├── contact/index.html           # Contact form
├── 404.html                     # GitHub Pages 404 fallback
└── README.md                    # This file
```

## Pages

- **Home** (`/`) – Hero, value props, teaser sections, CTA
- **Product** (`/product/`) – Features, capabilities, comparison with ERPs
- **How It Works** (`/how-it-works/`) – Three-phase implementation (Connect → Model → Alert)
- **Use Cases** (`/use-cases/`) – Four detailed manufacturing scenarios
- **Pilot** (`/pilot/`) – Pilot program details, timeline, qualifications
- **About** (`/about/`) – Mission, founder story, values
- **Contact** (`/contact/`) – Simple HTML form with Formspree placeholder
- **404** (`/404.html`) – GitHub Pages error fallback

## Design System

**Colors** (CSS variables):
- `--bg`: #fafafa (light background)
- `--surface`: #ffffff (white cards/surfaces)
- `--text`: #1a1a1a (primary text)
- `--muted`: #666666 (secondary text)
- `--accent`: #2563eb (primary blue)
- `--accent2`: #0f766e (teal)
- `--border`: #e5e5e5 (light borders)

**Typography**:
- System font stack (no external fonts, fast load)
- Responsive sizing (3rem H1 → 1.5rem on mobile)
- Line height optimized for readability

**Components**:
- Buttons (primary, secondary, large)
- Cards with hover effects
- Feature lists with checkmarks
- Comparison table
- Form inputs with focus states
- Hero section with gradient
- CTA band section
- Sticky header nav
- Footer with links

## Quick Start

### Local Development

Simply open `index.html` in your browser or run a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (using http-server)
npx http-server
```

Then navigate to `http://localhost:8000`

### Deploy to GitHub Pages

1. **Enable GitHub Pages** in repository settings:
   - Go to **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose branch: `main`
   - Choose folder: `/ (root)`
   - Click **Save**

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Initial ShadowOps site"
   git push origin main
   ```

3. **GitHub Pages will publish** automatically (usually within 1–2 minutes)
   - Your site is now live at: `https://<username>.github.io/shadowops-site/`

### Custom Domain

After GitHub Pages is live, add a custom domain:

1. **Create a CNAME file** at the root of your repo:
   ```
   shadowops.ai
   ```

2. **Push the CNAME file**:
   ```bash
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

3. **Update DNS records** at your domain registrar to point to GitHub Pages:
   - Add CNAME record: `www` → `<username>.github.io`
   - Or use A records for apex domain (see GitHub docs)

4. **Enable HTTPS** in Pages settings (automatic for GitHub Pages)

## Contact Form

The contact form at `/contact/` uses a placeholder for form submission. To enable:

### Option 1: Formspree (Recommended)

1. Go to [formspree.io](https://formspree.io)
2. Create a free account and new form
3. Get your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
4. Replace in `contact/index.html`:
   ```html
   <form id="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
   ```

### Option 2: Mailto Fallback

The form includes a mailto link for manual email:
```html
<a href="mailto:hello@shadowops.ai">hello@shadowops.ai</a>
```

## Performance

- **No framework dependencies** – pure HTML, CSS, JS
- **No build step required** – edit and deploy
- **Mobile-first** – optimized for all screen sizes
- **Fast load** – ~30KB total (CSS + JS)
- **Lighthouse-friendly** – semantic HTML, ARIA labels, good contrast

## SEO

- **Meta tags** on all pages (title, description, OpenGraph)
- **Semantic HTML** (header, main, section, footer)
- **ARIA labels** for accessibility
- **Clean URL structure** – folder-per-page for readability
- **Mobile-responsive** – Google's mobile-first index

## Customization

### Edit Copy

All copy is in the HTML files. Search and replace:
- "ShadowOps" with your product name
- "hello@shadowops.ai" with your email
- Dates, links, and product details

### Change Colors

Update CSS variables in `styles/main.css`:

```css
:root {
  --accent: #2563eb;        /* Your primary color */
  --accent2: #0f766e;       /* Your secondary color */
  --text: #1a1a1a;          /* Your text color */
}
```

### Add Images

1. Place images in `/assets/img/`
2. Reference with paths like: `<img src="/assets/img/your-image.png">`

### Add More Pages

1. Create new folder: `mkdir /your-page/`
2. Create `index.html` inside
3. Copy header/footer from an existing page
4. Add nav link in header

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Files Not Tracked

- Compiled assets (if you add a build step later)
- Node modules (if you add dependencies)
- Environment files

These are listed in `.gitignore` by default.

## License

All content © 2025 ShadowOps. Use as template for your own product site.

## Next Steps

1. ✅ Replace copy with your real messaging
2. ✅ Add images to `/assets/img/` and update references
3. ✅ Set up contact form (Formspree or alternative)
4. ✅ Enable GitHub Pages (Settings → Pages)
5. ✅ Add custom domain (update CNAME + DNS)
6. ✅ Test on mobile, tablet, desktop
7. ✅ Check Lighthouse (DevTools → Lighthouse)

---

Built with care. No frameworks. No BS.
