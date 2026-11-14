import React from 'react';

export const ChristianCross = ({
  size = 28,
  color = 'var(--color-antique-gold)',
  className = '',
  embossed = false,
}) => {
  return (
    <svg
      width={size}
      height={size * 1.45}
      viewBox="0 0 40 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`christian-cross ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        filter: embossed
          ? 'drop-shadow(0 1px 1px rgba(255, 255, 255, 0.4)) drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.3))'
          : 'none',
      }}
      aria-label="Christian Cross"
    >
      {/* Central Cross Vertical Beam */}
      <path
        d="M18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4V54C22 55.1046 21.1046 56 20 56C18.8954 56 18 55.1046 18 54V4Z"
        fill={color}
      />
      {/* Horizontal Beam */}
      <path
        d="M6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22H34C35.1046 22 36 21.1046 36 20C36 18.8954 35.1046 18 34 18H6Z"
        fill={color}
      />
      {/* Delicate Filigree Endpoints */}
      <circle cx="20" cy="4" r="2.5" fill={color} />
      <circle cx="20" cy="54" r="2.5" fill={color} />
      <circle cx="6" cy="20" r="2.5" fill={color} />
      <circle cx="34" cy="20" r="2.5" fill={color} />
      
      {/* Center Intersection Flourish */}
      <circle cx="20" cy="20" r="4.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="20" cy="20" r="1.5" fill={color} />
    </svg>
  );
};
