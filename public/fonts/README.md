# Custom Fonts Directory

To use the custom proprietary **Rosalina** font for the wedding invitation:
1. Place your licensed font file here with one of the following names:
   - `Rosalina.woff2` (Recommended for modern web browsers)
   - `Rosalina.woff`
   - `Rosalina.otf`
   - `Rosalina-Bold.woff2` (Optional bold weight)
2. The `@font-face` declaration in `src/styles/fonts.css` is already pre-configured to bind directly to these files.
3. In the absence of the Rosalina font file, the application gracefully falls back to the Google Font serif stack (*Cinzel Decorative* & *Cormorant Garamond*).
