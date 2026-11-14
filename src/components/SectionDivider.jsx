import React from 'react';
import { ChristianCross } from './ChristianCross';

export const SectionDivider = ({
  variant = 'cross',
  color = 'var(--color-antique-gold)',
  lineColor = 'var(--color-champagne-gold)',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`section-divider ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        margin: '2rem auto',
        width: '100%',
        maxWidth: '300px',
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        style={{
          flex: 1,
          height: '1px',
          background: `linear-gradient(to right, transparent, ${lineColor})`,
        }}
      />

      {variant === 'cross' && (
        <ChristianCross size={18} color={color} />
      )}

      {variant === 'diamond' && (
        <div
          style={{
            width: 7,
            height: 7,
            backgroundColor: color,
            transform: 'rotate(45deg)',
          }}
        />
      )}

      {variant === 'flower' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="6" r="2.2" opacity="0.75" />
          <circle cx="12" cy="18" r="2.2" opacity="0.75" />
          <circle cx="6" cy="12" r="2.2" opacity="0.75" />
          <circle cx="18" cy="12" r="2.2" opacity="0.75" />
        </svg>
      )}

      <div
        style={{
          flex: 1,
          height: '1px',
          background: `linear-gradient(to left, transparent, ${lineColor})`,
        }}
      />
    </div>
  );
};
