import React from 'react';

/**
 * Royal European Botanical Fine-Art Illustrations
 * Theme: Romantic Botanical Fine Art × European Luxury Stationery
 * Components:
 * - Layered English garden roses (Ivory & Dusty Rose)
 * - Sage eucalyptus stems with natural leaves
 * - Champagne-gold botanical stems & berry accents
 * - Asymmetrical floral garlands & framing corners
 */

// Layered English Garden Rose Petal Group
export const EnglishGardenRose = ({
  size = 28,
  variant = 'dusty-rose', // 'dusty-rose' or 'ivory'
  className = '',
  style = {},
}) => {
  const isDustyRose = variant === 'dusty-rose';
  const cOuter = isDustyRose ? '#DDB0AE' : '#FDFAF5';
  const cMid = isDustyRose ? '#C99491' : '#F5ECD9';
  const cInner = isDustyRose ? '#A8716E' : '#E8D5B7';
  const cCenter = isDustyRose ? '#7D4F4C' : '#B08A4A';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', overflow: 'visible', ...style }}
      aria-hidden="true"
    >
      {/* Outer Petals Layer */}
      <path
        d="M25 4 C34 4 46 12 46 25 C46 38 34 46 25 46 C16 46 4 38 4 25 C4 12 16 4 25 4 Z"
        fill={cOuter}
        stroke="#E8D5B7"
        strokeWidth="0.7"
      />
      {/* Secondary Overlapping Petals */}
      <path
        d="M25 8 C33 9 41 16 40 26 C39 36 31 42 23 41 C15 40 9 32 10 23 C11 14 18 8 25 8 Z"
        fill={cMid}
        opacity="0.9"
      />
      {/* Tertiary Inner Cup Petals */}
      <path
        d="M26 13 C32 14 36 20 35 27 C34 33 28 37 22 36 C16 35 13 29 14 23 C15 17 20 12 26 13 Z"
        fill={cInner}
      />
      {/* Center Rose Swirl & Stamen */}
      <path
        d="M25 18 C28 19 30 23 29 26 C28 29 25 31 22 30 C19 29 18 26 19 23 C20 20 22 18 25 18 Z"
        fill={cCenter}
      />
      <circle cx="24.5" cy="24.5" r="2.2" fill="#5E4316" />
    </svg>
  );
};

// Asymmetrical Symmetrical Botanical Garland Header Accent
export const FloralHeaderAccent = ({
  size = 200,
  variant = 'dusty-rose',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`floral-header-accent ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0.85rem auto',
        width: size,
        pointerEvents: 'none',
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size * 0.28}
        viewBox="0 0 220 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="eucalyptusSageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9BB0A5" />
            <stop offset="65%" stopColor="#82968B" />
            <stop offset="100%" stopColor="#586F63" />
          </linearGradient>

          <linearGradient id="antiqueGoldVine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="25%" stopColor="#B08A4A" />
            <stop offset="50%" stopColor="#E8D5B7" />
            <stop offset="75%" stopColor="#B08A4A" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Delicate Golden Curved Vine Line */}
        <path
          d="M8 30 C45 22 75 34 110 30 C145 26 175 36 212 30"
          stroke="url(#antiqueGoldVine)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Left Eucalyptus Foliage (Asymmetric natural paired leaves) */}
        <g transform="translate(48, 24)">
          <path
            d="M0 0 C-12 -14 -28 -8 -22 6 C-18 16 -4 12 0 0 Z"
            fill="url(#eucalyptusSageGrad)"
            opacity="0.9"
          />
          <path d="M0 0 C-9 -4 -18 -1 -15 6" stroke="#40544A" strokeWidth="0.65" fill="none" opacity="0.65" />
        </g>
        <g transform="translate(74, 34)">
          <path
            d="M0 0 C-10 12 -24 10 -20 -2 C-16 -10 -4 -8 0 0 Z"
            fill="url(#eucalyptusSageGrad)"
            opacity="0.85"
          />
          <path d="M0 0 C-8 5 -15 3 -14 -2" stroke="#40544A" strokeWidth="0.65" fill="none" opacity="0.65" />
        </g>

        {/* Right Eucalyptus Foliage */}
        <g transform="translate(172, 24)">
          <path
            d="M0 0 C12 -14 28 -8 22 6 C18 16 4 12 0 0 Z"
            fill="url(#eucalyptusSageGrad)"
            opacity="0.9"
          />
          <path d="M0 0 C9 -4 18 -1 15 6" stroke="#40544A" strokeWidth="0.65" fill="none" opacity="0.65" />
        </g>
        <g transform="translate(146, 34)">
          <path
            d="M0 0 C10 12 24 10 20 -2 C16 -10 4 -8 0 0 Z"
            fill="url(#eucalyptusSageGrad)"
            opacity="0.85"
          />
          <path d="M0 0 C8 5 15 3 14 -2" stroke="#40544A" strokeWidth="0.65" fill="none" opacity="0.65" />
        </g>

        {/* Champagne-Gold Botanical Sprigs & Berries */}
        <path d="M35 28 C28 20 22 24 18 20" stroke="#B08A4A" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="18" cy="20" r="2.2" fill="#B08A4A" />
        <circle cx="26" cy="18" r="1.6" fill="#E8D5B7" />

        <path d="M185 28 C192 20 198 24 202 20" stroke="#B08A4A" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="202" cy="20" r="2.2" fill="#B08A4A" />
        <circle cx="194" cy="18" r="1.6" fill="#E8D5B7" />

        {/* Center English Garden Rose Bloom */}
        <g transform="translate(97, 17)">
          <EnglishGardenRose size={26} variant={variant} />
        </g>
      </svg>
    </div>
  );
};

// Royal Botanical Corner for Stationery & Cards
export const FloralCorner = ({
  position = 'top-left',
  size = 76,
  variant = 'dusty-rose',
  style = {},
  className = '',
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      default:
        return 'none';
    }
  };

  return (
    <div
      className={`floral-corner ${className}`}
      style={{
        display: 'block',
        width: size,
        height: size,
        transform: getTransform(),
        pointerEvents: 'none',
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`cornerEucalyptusGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9BB0A5" />
            <stop offset="100%" stopColor="#586F63" />
          </linearGradient>
        </defs>

        {/* Fine-Art Stationery Corner Border Lines */}
        <path d="M4 92V16C4 9.37 9.37 4 16 4H92" stroke="#E8D5B7" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M12 92V24C12 17.37 17.37 12 24 12H92" stroke="#E8D5B7" strokeWidth="0.65" strokeDasharray="3 3" opacity="0.6" />

        {/* Sage Eucalyptus Stem Arching Inward */}
        <path
          d="M12 12 C32 30 44 56 46 84"
          stroke="#586F63"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Eucalyptus Leaf Pairs */}
        <path
          d="M26 26 C30 16 42 14 44 22 C46 30 36 34 26 26 Z"
          fill={`url(#cornerEucalyptusGrad-${position})`}
          opacity="0.88"
        />
        <path
          d="M36 42 C44 34 52 38 50 46 C48 54 38 50 36 42 Z"
          fill={`url(#cornerEucalyptusGrad-${position})`}
          opacity="0.88"
        />
        <path
          d="M26 26 C16 30 14 42 22 44 C30 46 34 36 26 26 Z"
          fill={`url(#cornerEucalyptusGrad-${position})`}
          opacity="0.88"
        />

        {/* Champagne-Gold Berry Sprigs */}
        <path d="M16 16 C30 20 36 30 40 32" stroke="#B08A4A" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="40" cy="32" r="2.2" fill="#B08A4A" />
        <circle cx="35" cy="24" r="1.6" fill="#E8D5B7" />
        <circle cx="28" cy="18" r="1.8" fill="#B08A4A" />

        {/* Corner English Garden Rose Bloom */}
        <g transform="translate(6, 6)">
          <EnglishGardenRose size={26} variant={variant} />
        </g>
      </svg>
    </div>
  );
};
