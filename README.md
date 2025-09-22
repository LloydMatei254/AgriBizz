# AgriBizz

This repository contains the AgriBizz solution and a new landing page template.

## Quick Start

- View the landing page source here: `landing/`
- Open the landing page locally: `landing/index.html`
- Live preview (serve locally):
  - Python: `python -m http.server 8080` then open `http://localhost:8080/landing/`

## Landing Page (Look‑Alike Template)

An original, responsive landing page inspired by a men’s wellness product layout. It uses unique copy and styling.

Key files:
- `landing/index.html`
- `landing/css/styles.css`
- `landing/js/main.js`

Customize:
- Update prices and buttons in `landing/index.html` (`#pricing` section)
- Set affiliate/checkout in `landing/js/main.js` (replace `AFFILIATE_ID` and `CHECKOUT_BASE`)
- Replace footer policy links in `landing/index.html`

## Project Structure

```
AgriBizz/
  AgriBizz.AppHost/
  AgriBizz.ServiceDefaults/
  landing/
    index.html
    css/
      styles.css
    js/
      main.js
  AgriBizz.sln
  README.md