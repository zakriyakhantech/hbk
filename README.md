# hbk

> **HBK Blankets (Haji Bahadur Khan Blankets) — Factory Direct Luxury Blankets**  
> Pakistan's premier integrated blanket manufacturing mill and e-commerce experience.

[![Deploy to GitHub Pages](https://github.com/zakriyakhantech/hbk/actions/workflows/deploy.yml/badge.svg)](https://github.com/zakriyakhantech/hbk/actions/workflows/deploy.yml)
[![Live GitHub Pages Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=flat-square)](https://zakriyakhantech.github.io/hbk/)

---

## 🌟 Overview

**HBK Blankets** (`hbkblankets.com`) is Pakistan's largest integrated manufacturer of luxury Korean-grade embossed acrylic mink blankets, micro-flannel fleece, and nursery swaddles.

This modern web application features factory-direct shopping, interactive tactile fabric simulators, warmth calculators, order consignment tracking, B2B wholesale quotation, and a community review engine connected directly to a public JSON database.

---

## ✨ Features

- 🛋️ **Catalog & Faceted Filtering**:
  - Filter by Category (2-Ply Heavyweight, 1-Ply Flannel, Baby Cuddle, Summer Polar Fleece, Bedspread Sets, Institutional packs)
  - Filter by Warmth Rating (`Light Summer`, `Medium All-Season`, `Heavy Winter`, `Arctic Ultra-Warm`)
  - Filter by Weight (<2 kg up to 6 kg+) and Price Range slider
- 💬 **Verified Reviews Engine (`public/reviews.json`)**:
  - Reviews dynamically loaded from `/public/reviews.json`
  - Real-time customer review submissions with star rating selector, city, verified buyer tag, and local persistence
  - Instant **"Download reviews.json"** button to export submissions and commit updates to the repository
- 🔥 **Warmth TOG Quiz**: Interactive recommendation tool calculating optimal blanket ply based on bedroom climate and heating
- 🔬 **Textile & Texture Lab**: High-resolution microscopic comparison of 3D Embossed Korean Mink, Brushed Flannel, Lamb-Touch Sherpa, and Polar Fleece
- 📦 **Live Consignment Tracker (CN)**: Multi-stage tracking modal with pre-loaded demo CN codes (`HBK-98421-LHE`, `HBK-44210-KHI`, `HBK-71052-ISB`)
- 🏢 **B2B Margin & Dealership Hub**: Wholesale carton tier calculator (15% to 35% discount) and RFQ generator with WhatsApp integration
- 💰 **Multi-Currency Converter**: Live currency switching between PKR (₨), USD ($), AED (AED), and SAR (SAR)
- 🛒 **Slide-Out Cart & COD Checkout**: Real-time coupon codes (`HBK10`, `WINTER15`), free shipping threshold meter, and Cash on Delivery order invoice modal

---

## 🚀 GitHub Pages Deployment

This project is configured out-of-the-box for **GitHub Pages**:

1. Relative asset paths configured in `vite.config.ts` (`base: './'`).
2. SPA redirect handler included in `public/404.html`.
3. Automated GitHub Actions workflow included in `.github/workflows/deploy.yml`.

### Enable GitHub Pages in your repository:
1. Go to your repository on GitHub: `https://github.com/zakriyakhantech/hbk`
2. Click **Settings** ➔ **Pages** (in the left sidebar).
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
4. That's it! Every push to `main` will automatically build and publish your site at:
   ```
   https://zakriyakhantech.github.io/hbk/
   ```

---

## 🛠️ Local Development

Clone and start the development server locally:

```bash
# Clone the repository
git clone https://github.com/zakriyakhantech/hbk.git
cd hbk

# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Build for production
npm run build
```

---

## 🏭 HBK Mill Network

- **Faisalabad Mega Mill**: 50-Acre Integrated Carding, Warp Knitting & Embossing Plant
- **Peshawar Headquarters**: Main G.T. Road, Nasir Pur Hub, KP
- **Karachi Finishing Plant**: Al-Imdad Textile Finishing & Export Port Facility
- **Lahore & Multan**: Regional Wholesale & Quick-Dispatch Depots

---

© 2025–2026 HBK Blankets (Pvt.) Ltd. All rights reserved.
