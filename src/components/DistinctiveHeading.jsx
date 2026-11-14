import React from 'react';

/**
 * Authentic Luxury Invitation Heading Component
 * Uses genuine decorative typeface hierarchy (Cinzel Decorative / Rosalina)
 * with OpenType stylistic swashes and ligatures.
 * Completely avoids symbol replacements or pseudo-glyphe hacks.
 */
export const DistinctiveHeading = ({
  textColor = 'var(--color-classic-black)',
  accentColor = 'var(--color-antique-gold-dark)',
  fontSize = 'clamp(1.4rem, 4.8vw, 3.4rem)',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`distinctive-invitation-heading ${className}`}
      style={{
        fontFamily: 'var(--font-heading)',
        fontFeatureSettings: '"swsh" 1, "dlig" 1, "ss01" 1',
        fontWeight: 700,
        letterSpacing: 'clamp(0.12em, 2.2vw, 0.22em)',
        lineHeight: 1.28,
        textAlign: 'center',
        textTransform: 'uppercase',
        ...style,
      }}
      aria-label="YOU'RE CORDIALLY INVITED"
    >
      <div
        style={{
          fontSize,
          color: textColor,
          textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
        }}
      >
        YOU&apos;RE
      </div>

      <div
        style={{
          fontSize: `calc(${fontSize} * 0.88)`,
          color: accentColor,
          margin: '0.2em 0',
          letterSpacing: 'clamp(0.14em, 2.6vw, 0.26em)',
          textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
        }}
      >
        CORDIALLY
      </div>

      <div
        style={{
          fontSize,
          color: textColor,
          textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
        }}
      >
        INVITED
      </div>
    </div>
  );
};
