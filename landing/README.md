# Vigor Plus – Landing Page (Look‑Alike Template)

An original landing page inspired by the structure and UX of a men’s wellness product page. This project uses unique copy and styling; no third‑party content was copied verbatim.

## Tech Stack
- Static HTML/CSS/JS
- No build step required

## Local Setup
1. Open `landing/index.html` directly in your browser, or
2. Serve the folder with a simple server (recommended for correct relative paths):
   - Python: `python -m http.server 8080` (then open http://localhost:8080/landing/)
   - VS Code Live Server or any static server works too.

## Customize
- Branding: Update logo text in `index.html` (search for `Vigor Plus`) and colors in `css/styles.css`.
- Copy: Edit the headings and paragraphs in each section.
- Pricing: In `index.html`, update price values and button links under the `#pricing` section.
- Checkout & Affiliate: In `js/main.js`, set `AFFILIATE_ID` and `CHECKOUT_BASE` to your real values.
- Policy Links: In the footer of `index.html`, replace `#` placeholders with your Contact, Terms, Privacy, Shipping, and Refund URLs.
- Analytics: Paste your GA4 or Meta Pixel snippet in `index.html` inside `<head>` (or through your host) as needed.

## Deployment
- Any static hosting will work: Vercel, Netlify, GitHub Pages, Cloudflare Pages, or cPanel.
- Upload the `landing/` folder contents and point your domain to the deployed site.

## Notes on Compliance
- This template is an original work with a similar layout to the referenced page. Do not copy third‑party text, images, or trademarks without permission.

## File Structure
```
landing/
  index.html
  css/
    styles.css
  js/
    main.js
```
