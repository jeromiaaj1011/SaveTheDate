# Save The Date — Royal European Luxury Wedding Invitation
### *Yesudas & Helen Cathrin A.J.*

A royal European luxury, romantic botanical, and interactive Christian wedding invitation website crafted with **React**, **Vite**, **Vanilla CSS**, and **Framer Motion**.

---

## 🕊️ Royal Wedding Stationery Concept

This invitation is designed to evoke the tactile sensory experience of unboxing bespoke European physical wedding stationery. Centered around the theme of **Royal European Luxury × Romantic Botanical Fine Art**, the visual design embraces:

* **Warm Ivory (`#F7F1E7`)**: Handcrafted paper surface with delicate micro-fiber textures and soft natural depth.
* **Sage Green (`#82968B`)**: Hand-stitched envelopes with fine fabric weave and champagne-gold botanical embroidery.
* **Antique Gold (`#B08A4A`)**: Dimensional 3D wax seals (`Y ❤️ H`) with organic melting edges and Christian cross accents.
* **Champagne Gold (`#E8D5B7`)**: Ornate filigree borders, corner flourishes, and dividers.
* **Deep Teal (`#315B56`)**: Selective contrast for refined typography.
* **Dusty Rose (`#C99491`)**: Fine-art botanical butterflies, English garden roses, and celebratory evening accents.
* **Classic Black (`#29282A`)**: High-legibility editorial event details.

### Luxury Gradient Palette
* **Dusty Rose → Soft Blush**: `linear-gradient(135deg, #C99491, #DDB0AE, #F4E4E2)`
* **Ivory → Champagne**: `linear-gradient(145deg, #FDFAF5, #F7F1E7, #E8D5B7)`
* **Sage → Deep Teal**: `linear-gradient(135deg, #82968B, #586F63, #315B56)`

---

## ✨ Seven Connected Scenes

1. **Scene 1 — The Sealed Envelope**:
   * Warm ivory textured stationery surface with an embossed Christian cross and Mark 10:9 Bible verse (*"What therefore God hath joined together, let not man put asunder."* — KJV) in Cormorant Garamond italic.
   * Centered sage-green envelope with realistic paper folds and antique-gold wax seal stamped with `Y ❤️ H`.
   * Tapping the wax seal triggers an organic fracture sound (Web Audio API) as the seal smoothly dissolves.
   * Flap unfolds backwards in 3D perspective (`rotateX: -180deg`).
   * A separate warm-ivory invitation card visibly emerges from deep inside the envelope pocket (`translateY: -210px`), settling naturally with a gentle paper movement and revealing *"YOU'RE CORDIALLY INVITED"*.
2. **Scene 2 — You're Cordially Invited**:
   * Authentic decorative typography in **Cinzel Decorative** / **Rosalina** with stylistic swashes and high-contrast letterforms.
   * Botanical gold frame, dusty-rose English garden rose accents, and fluttering fine-art butterfly.
3. **Scene 3 — The Couple**:
   * *"We are getting married"* in elegant Cormorant Garamond.
   * **YESUDAS** in restored original **Cinzel** typography with regal letterspacing.
   * *weds* in restored original **Pinyon Script** calligraphy.
   * **HELEN CATHRIN A.J** in **Cinzel** with floral eucalyptus and rose framing.
4. **Scene 4 — Interactive Save The Date**:
   * Interactive HTML Canvas scratch-card with champagne/antique-gold metallic foil.
   * Touchscreen scroll-prevention (`{ passive: false }`) and mouse dragging.
   * Scratch progression threshold auto-reveals:
     - **SUNDAY, 06 DECEMBER 2026**
     - **4:00 PM (4 in the afternoon)**
     - **St. Stephen Church, Nanmangalam**
   * Accessible tap-to-reveal alternative for screen readers and quick access.
5. **Scene 5 — The Wedding Ceremony**:
   * **St. Stephen Church, Nanmangalam** at **4:00 PM** (4 in the afternoon).
   * Direct Google Maps navigation link and dedicated dynamic scannable QR code.
6. **Scene 6 — The Reception**:
   * **Vani Palace, Sri Ambal Nagar** at **7:00 PM** (7 in the evening).
   * Celebratory dusty-rose styling, navigation button, and dedicated QR code.
7. **Scene 7 — Find Your Way & Closing**:
   * Dual venue navigation cards side-by-side with separate verified QR codes.
   * Closing signature: *"WITH LOVE, YESUDAS & HELEN CATHRIN"*.
   * *"We eagerly anticipate welcoming you"*.

---

## 🎵 Custom Integrated Music Player

* Dedicated custom player designed specifically for Taylor Swift's *"Love Story"* (*Fearless*).
* **Zero External Player Branding**: No Spotify iframes or third-party widgets.
* **Local Audio Integration**:
  - Plays the locally supplied audio file at:
    ```text
    /public/audio/love-story.mp3
    ```
  - When the file is absent, the player displays a clear, honest status banner:
    *"Audio File Awaiting Placement: /public/audio/love-story.mp3"* and disables playback.
* **Controls**:
  - Floating pill toggle in the top-right corner.
  - Play / Pause button.
  - Volume control slider (0% to 100%) with mute toggle.
  - Animated sound-wave bars when playing.
  - Never autoplays before user interaction.

---

## 🛠️ Technology Stack

* **Frontend Framework**: React 19 + Vite 8
* **Language**: JavaScript (ES Modules)
* **Animation Engine**: Framer Motion 12
* **Styling**: Vanilla CSS (Variables, Keyframes, Botanical SVG Gradients)
* **Canvas Interactions**: HTML5 Canvas API (Scratch-to-reveal with touch lock)
* **Sound Design**: Web Audio API (tactile wax crackle) + HTML5 Audio (`/public/audio/love-story.mp3`)
* **QR Generation**: `qrcode.react` (dynamic SVG QR codes for verified map coordinates)
* **Icons**: `lucide-react`
* **Typography**: Google Fonts (*Cinzel, Cinzel Decorative, Pinyon Script, Cormorant Garamond, Montserrat*) with `@font-face` support for proprietary *Rosalina* webfonts.

---

## 📂 Project Architecture

```text
SaveTheDate/
├── public/
│   ├── audio/
│   │   └── README.md              # Instructions for placing love-story.mp3
│   ├── favicon.svg
│   ├── fonts/
│   │   └── README.md              # Instructions for placing Rosalina webfonts
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── AmbientAudio.jsx       # Custom local audio player
│   │   ├── BotanicalBorder.jsx    # Corner flourishes & floral frames
│   │   ├── Butterfly.jsx          # Fine-art botanical butterfly with 3D wings
│   │   ├── ChristianCross.jsx     # Ornate embossed Christian cross vector
│   │   ├── DistinctiveHeading.jsx # Authentic Cinzel Decorative heading
│   │   ├── Envelope.jsx           # 3D physical envelope with emerging card
│   │   ├── FloralElements.jsx     # Layered English garden roses & eucalyptus
│   │   ├── ScratchCard.jsx        # HTML5 Canvas scratch-to-reveal card
│   │   ├── SectionDivider.jsx     # Champagne-gold dividers
│   │   ├── VenueCard.jsx          # Ceremony & Reception cards with QR & Maps
│   │   └── WaxSeal.jsx            # 3D wax seal with sound synthesis
│   ├── config/
│   │   └── weddingDetails.js      # Centralized details (Names, Venues, URLs)
│   ├── sections/
│   │   ├── CoupleSection.jsx      # Scene 3: Restored Cinzel & Pinyon Script
│   │   ├── InvitationReveal.jsx   # Scene 2: Formal invitation heading
│   │   ├── LocationSection.jsx    # Scene 7: Find Your Way & Closing
│   │   ├── ReceptionSection.jsx   # Scene 6: Evening celebration
│   │   ├── SaveTheDate.jsx        # Scene 4: Interactive date card
│   │   └── WeddingSection.jsx     # Scene 5: Church ceremony
│   ├── styles/
│   │   ├── animations.css         # Keyframes & prefers-reduced-motion
│   │   ├── fonts.css              # @font-face Rosalina setup & font utilities
│   │   ├── global.css             # Paper texture, reset & layout utilities
│   │   └── variables.css          # Design tokens & gradient palette
│   ├── App.jsx                    # Root application assembling all 7 scenes
│   └── main.jsx                   # React DOM entry point
├── index.html                     # HTML5 shell & Google Fonts preconnect
├── package.json                   # Dependencies & build scripts
├── vercel.json                    # Vercel zero-config deployment manifest
└── vite.config.js                 # Vite bundler configuration
```

---

## 💻 Local Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🚀 Deployment Instructions

### Deploying to Vercel

The repository is pre-configured with [`vercel.json`](file:///c:/Users/joyso/OneDrive/Desktop/aj_projects/SaveTheDate/vercel.json):
1. Push your changes to GitHub on the `main` branch.
2. In [vercel.com](https://vercel.com), import the `SaveTheDate` repository.
3. Vercel automatically detects the Vite framework with output directory `dist`.
4. Click **Deploy**.

---

## 💒 Centralized Configuration

All event details (names, dates, ceremony timings, venues, and Google Maps destination links) are centralized in [`src/config/weddingDetails.js`](file:///c:/Users/joyso/OneDrive/Desktop/aj_projects/SaveTheDate/src/config/weddingDetails.js) for effortless future updates.
