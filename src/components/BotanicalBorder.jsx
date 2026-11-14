import React from 'react';

export const BotanicalCorner = ({
  position = 'top-left',
  size = 64,
  color = 'var(--color-champagne-gold)',
  style = {},
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
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: getTransform(),
        display: 'block',
        pointerEvents: 'none',
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Outer corner frame lines */}
      <path d="M4 96V12C4 7.58172 7.58172 4 12 4H96" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 96V20C12 15.5817 15.5817 12 20 12H96" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" />

      {/* Elegant Botanical Flourish & Leaves */}
      <path
        d="M12 12C28 28 35 45 36 68"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M12 12C28 28 45 35 68 36"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Leaf 1 */}
      <path
        d="M26 26C28 18 36 16 38 22C40 28 32 32 26 26Z"
        fill={color}
        opacity="0.75"
      />
      {/* Leaf 2 */}
      <path
        d="M26 26C18 28 16 36 22 38C28 40 32 32 26 26Z"
        fill={color}
        opacity="0.75"
      />
      {/* Leaf 3 */}
      <path
        d="M38 38C44 32 52 34 50 42C48 48 40 46 38 38Z"
        fill={color}
        opacity="0.65"
      />

      {/* Corner Rosette dot */}
      <circle cx="12" cy="12" r="2.5" fill={color} />
      <circle cx="20" cy="20" r="1.5" fill={color} />
    </svg>
  );
};

export const BotanicalFrame = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={`botanical-frame-container ${className}`}
      style={{
        position: 'relative',
        padding: '2.5rem 1.5rem',
        border: '1px solid var(--color-champagne-gold)',
        borderRadius: '4px',
        backgroundColor: 'var(--color-warm-ivory)',
        ...style,
      }}
    >
      {/* Four Ornamental Corners */}
      <div style={{ position: 'absolute', top: 4, left: 4 }}>
        <BotanicalCorner position="top-left" size={48} />
      </div>
      <div style={{ position: 'absolute', top: 4, right: 4 }}>
        <BotanicalCorner position="top-right" size={48} />
      </div>
      <div style={{ position: 'absolute', bottom: 4, left: 4 }}>
        <BotanicalCorner position="bottom-left" size={48} />
      </div>
      <div style={{ position: 'absolute', bottom: 4, right: 4 }}>
        <BotanicalCorner position="bottom-right" size={48} />
      </div>

      {children}
    </div>
  );
};
