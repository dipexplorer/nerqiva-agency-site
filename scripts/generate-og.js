const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateOG() {
  const width = 1200;
  const height = 630;

  const publicDir = path.join(__dirname, "../public");
  const appDir = path.join(__dirname, "../src/app");

  // 1. Prepare rounded corner project cards with browser window header bar
  const cardW = 510;
  const cardH = 320;
  const headerH = 28;

  // LabLink (Front Card)
  const lablinkImg = await sharp(path.join(publicDir, "images/projects/lablink/desktop.png"))
    .resize(cardW, cardH - headerH, { fit: "cover", position: "top" })
    .png()
    .toBuffer();

  const lablinkWindow = await sharp({
    create: {
      width: cardW,
      height: cardH,
      channels: 4,
      background: { r: 18, g: 18, b: 24, alpha: 1 }
    }
  })
  .composite([
    // Window header SVG
    {
      input: Buffer.from(`
        <svg width="${cardW}" height="${headerH}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${cardW}" height="${headerH}" fill="#16161f"/>
          <circle cx="16" cy="14" r="4.5" fill="#ef4444"/>
          <circle cx="30" cy="14" r="4.5" fill="#f59e0b"/>
          <circle cx="44" cy="14" r="4.5" fill="#10b981"/>
          <rect x="68" y="6" width="240" height="16" rx="4" fill="rgba(255,255,255,0.06)"/>
          <text x="80" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="500" fill="rgba(255,255,255,0.5)">lablinkguwahati.in — Live Client</text>
        </svg>
      `),
      top: 0,
      left: 0
    },
    // Screenshot
    {
      input: lablinkImg,
      top: headerH,
      left: 0
    }
  ])
  .png()
  .toBuffer();

  // Apply rounded mask & border to LabLink window
  const roundedLablink = await sharp(lablinkWindow)
    .composite([
      {
        input: Buffer.from(`
          <svg width="${cardW}" height="${cardH}" xmlns="http://www.w3.org/2000/svg">
            <rect width="${cardW}" height="${cardH}" rx="14" ry="14" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ])
    .png()
    .toBuffer();

  // Krishav Mehendi (Back Card)
  const backW = 450;
  const backH = 270;
  const krishavImg = await sharp(path.join(publicDir, "images/projects/krishavmehendi/bridal.png"))
    .resize(backW, backH - headerH, { fit: "cover", position: "top" })
    .png()
    .toBuffer();

  const krishavWindow = await sharp({
    create: {
      width: backW,
      height: backH,
      channels: 4,
      background: { r: 18, g: 18, b: 24, alpha: 1 }
    }
  })
  .composite([
    {
      input: Buffer.from(`
        <svg width="${backW}" height="${headerH}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${backW}" height="${headerH}" fill="#16161f"/>
          <circle cx="16" cy="14" r="4.5" fill="#ef4444"/>
          <circle cx="30" cy="14" r="4.5" fill="#f59e0b"/>
          <circle cx="44" cy="14" r="4.5" fill="#10b981"/>
          <rect x="68" y="6" width="200" height="16" rx="4" fill="rgba(255,255,255,0.06)"/>
          <text x="80" y="18" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="500" fill="rgba(255,255,255,0.5)">krishavmehendi.com — Bridal</text>
        </svg>
      `),
      top: 0,
      left: 0
    },
    {
      input: krishavImg,
      top: headerH,
      left: 0
    },
    {
      input: Buffer.from(`
        <svg width="${backW}" height="${backH}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${backW}" height="${backH}" rx="12" ry="12" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="2"/>
        </svg>
      `),
      top: 0,
      left: 0
    }
  ])
  .png()
  .toBuffer();

  // Logo
  const logo = await sharp(path.join(publicDir, "brand/logo-clean-white.png"))
    .resize(46, 46, { fit: "contain" })
    .png()
    .toBuffer();

  // Base SVG Background with Typography & Badges
  const baseSvg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="20%" cy="25%" r="55%">
          <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.36"/>
          <stop offset="60%" stop-color="#0f172a" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="cyanGlow" cx="82%" cy="85%" r="48%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
        </radialGradient>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.06)"/>
        </pattern>
        <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#818cf8"/>
        </linearGradient>
      </defs>

      <!-- Deep Obsidian Background -->
      <rect width="${width}" height="${height}" fill="#08080a"/>
      <!-- Ambient Glows -->
      <rect width="${width}" height="${height}" fill="url(#bgGlow)"/>
      <rect width="${width}" height="${height}" fill="url(#cyanGlow)"/>
      <!-- Subtle Grid Dots -->
      <rect width="${width}" height="${height}" fill="url(#grid)"/>

      <!-- Outer Luxury Border -->
      <rect x="18" y="18" width="${width - 36}" height="${height - 36}" rx="22" fill="none" stroke="rgba(255,255,255,0.09)" stroke-width="1.5"/>

      <!-- Top Brand Row -->
      <text x="128" y="93" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="900" fill="#ffffff" letter-spacing="3">NERQIVA</text>
      <text x="256" y="93" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="400" fill="rgba(255,255,255,0.45)" letter-spacing="3">STUDIO</text>

      <!-- Verified Studio Pill -->
      <rect x="368" y="73" width="206" height="28" rx="14" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
      <circle cx="384" cy="87" r="4" fill="#10b981"/>
      <text x="396" y="91" font-family="monospace, -apple-system, sans-serif" font-size="10.5" font-weight="700" fill="#34d399" letter-spacing="1.2">DIGITAL SYSTEMS STUDIO</text>

      <!-- Main Headline (Emotional, Revenue-Oriented) -->
      <text x="68" y="174" font-family="-apple-system, BlinkMacSystemFont, 'Georgia', serif, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
        Websites Built to
      </text>
      <text x="68" y="226" font-family="-apple-system, BlinkMacSystemFont, 'Georgia', serif, sans-serif" font-size="44" font-weight="800" fill="url(#blueAccent)" letter-spacing="-0.5">
        Bring You Real
      </text>
      <text x="68" y="278" font-family="-apple-system, BlinkMacSystemFont, 'Georgia', serif, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
        Paying Clients.
      </text>

      <!-- Subheadline -->
      <text x="68" y="328" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#94a3b8">
        For business owners who refuse to look amateur online.
      </text>

      <!-- 3 Feature Pills -->
      <!-- Pill 1: 7-10 Day Delivery -->
      <rect x="68" y="364" width="168" height="34" rx="8" fill="#14141a" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="82" y="386" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="12.5" font-weight="600" fill="#e2e8f0">⚡ 7–10 Day Delivery</text>

      <!-- Pill 2: 1-Click WhatsApp Routing -->
      <rect x="246" y="364" width="202" height="34" rx="8" fill="#14141a" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="260" y="386" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="12.5" font-weight="600" fill="#e2e8f0">💬 1-Click WhatsApp Leads</text>

      <!-- Pill 3: Google Local SEO -->
      <rect x="68" y="410" width="210" height="34" rx="8" fill="#14141a" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="82" y="432" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="12.5" font-weight="600" fill="#e2e8f0">📈 Google Local SEO Dominance</text>

      <!-- Pill 4: Handcrafted Systems -->
      <rect x="288" y="410" width="160" height="34" rx="8" fill="#14141a" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="302" y="432" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="12.5" font-weight="600" fill="#e2e8f0">✦ Handcrafted Systems</text>

      <!-- Bottom Meta Line -->
      <line x1="68" y1="520" x2="560" y2="520" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <text x="68" y="552" font-family="monospace, -apple-system, sans-serif" font-size="12.5" font-weight="500" fill="#64748b" letter-spacing="0.5">
        nerqivastudio.in · High-Converting Web Architecture
      </text>
    </svg>
  `;

  // Composite everything
  const finalImage = await sharp(Buffer.from(baseSvg))
    .composite([
      // Logo
      {
        input: logo,
        top: 62,
        left: 68
      },
      // Back Card (Krishav) with soft shadow
      {
        input: krishavWindow,
        top: 85,
        left: 690
      },
      // Front Card (LabLink) with prominent position
      {
        input: roundedLablink,
        top: 235,
        left: 630
      }
    ])
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(path.join(publicDir, "og-image.png"));

  console.log("Generated public/og-image.png successfully:", finalImage);

  // Mirror to src/app/opengraph-image.png & src/app/twitter-image.png
  fs.copyFileSync(path.join(publicDir, "og-image.png"), path.join(appDir, "opengraph-image.png"));
  fs.copyFileSync(path.join(publicDir, "og-image.png"), path.join(appDir, "twitter-image.png"));
  console.log("Successfully mirrored to src/app/opengraph-image.png & twitter-image.png");
}

generateOG().catch(console.error);

