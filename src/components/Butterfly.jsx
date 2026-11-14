import React from 'react';
import { motion } from 'framer-motion';

/**
 * Royal Fine-Art Botanical Butterfly Illustration
 * Characteristics:
 * - Natural European swallowtail morphology
 * - Detailed wing venation & scalloped borders
 * - Dusty rose (#C99491), warm ivory (#F7F1E7), soft blush (#F4E4E2), and antique gold (#B08A4A) accents
 * - Anatomically refined segmented body, realistic thorax and clubbed antennae
 * - Natural gentle 3D wing movement with resting & flying modes
 */
export const Butterfly = ({
  size = 48,
  style = {},
  className = '',
  animate = true,
  resting = false,
  interactive = true,
}) => {
  const leftWingAnimate = animate
    ? {
        rotateY: resting ? [0, 14, 0] : [0, 38, 4, 32, 0],
        transition: {
          duration: resting ? 4.2 : 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }
    : {};

  const rightWingAnimate = animate
    ? {
        rotateY: resting ? [0, -14, 0] : [0, -38, -4, -32, 0],
        transition: {
          duration: resting ? 4.2 : 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }
    : {};

  return (
    <motion.div
      className={`fine-art-butterfly ${className}`}
      style={{
        display: 'inline-block',
        position: 'relative',
        width: size,
        height: size * 0.76,
        perspective: '900px',
        transformStyle: 'preserve-3d',
        userSelect: 'none',
        pointerEvents: interactive ? 'auto' : 'none',
        ...style,
      }}
      whileHover={interactive ? { scale: 1.08 } : {}}
      aria-label="Fine-art botanical butterfly"
    >
      <svg
        width={size}
        height={size * 0.76}
        viewBox="0 0 130 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', filter: 'drop-shadow(0 4px 10px rgba(41, 40, 42, 0.16))' }}
      >
        <defs>
          {/* Subtle Wing Shading Gradients */}
          <linearGradient id="fineWingGradLeft" x1="100%" y1="50%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3E2B20" stopOpacity="0.9" />
            <stop offset="20%" stopColor="#6E4A3E" />
            <stop offset="48%" stopColor="#C99491" />
            <stop offset="78%" stopColor="#EADBCC" />
            <stop offset="100%" stopColor="#FDFAF5" />
          </linearGradient>

          <linearGradient id="fineWingGradRight" x1="0%" y1="50%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3E2B20" stopOpacity="0.9" />
            <stop offset="20%" stopColor="#6E4A3E" />
            <stop offset="48%" stopColor="#C99491" />
            <stop offset="78%" stopColor="#EADBCC" />
            <stop offset="100%" stopColor="#FDFAF5" />
          </linearGradient>

          {/* Antique Gold Veining & Highlight Accent */}
          <linearGradient id="goldVeinGleam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B08A4A" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#E8D5B7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8F6D33" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* LEFT WING COMPLEX */}
        <motion.g
          style={{ transformOrigin: '63px 50px', transformStyle: 'preserve-3d' }}
          animate={leftWingAnimate}
        >
          {/* Left Forewing */}
          <path
            d="M63 48 C51 32 26 12 8 16 C-2 19 -1 34 11 48 C22 60 41 64 63 54 Z"
            fill="url(#fineWingGradLeft)"
            stroke="#3E2B20"
            strokeWidth="0.85"
            strokeOpacity="0.8"
          />

          {/* Left Hindwing with Scalloped Margin & Delicate Swallowtail */}
          <path
            d="M63 52 C48 56 28 60 23 72 C20 80 29 88 38 86 C43 85 45 90 49 89 C55 87 59 70 63 52 Z"
            fill="url(#fineWingGradLeft)"
            stroke="#3E2B20"
            strokeWidth="0.85"
            strokeOpacity="0.8"
          />

          {/* Left Forewing & Hindwing Fine Anatomical Veining */}
          <path
            d="M63 50 C46 38 30 27 16 23 M63 50 C38 42 24 40 14 38 M63 50 C40 50 26 54 20 52 M63 54 C48 64 36 74 30 80 M63 54 C53 70 48 80 46 86"
            stroke="#3E2B20"
            strokeWidth="0.6"
            strokeOpacity="0.55"
            fill="none"
          />

          {/* Gold Shimmer Edge Lunules */}
          <circle cx="12" cy="24" r="1.5" fill="#E8D5B7" opacity="0.85" />
          <circle cx="8" cy="32" r="1.5" fill="#E8D5B7" opacity="0.85" />
          <circle cx="12" cy="42" r="1.5" fill="#E8D5B7" opacity="0.85" />
          <circle cx="26" cy="76" r="1.3" fill="#E8D5B7" opacity="0.85" />
          <circle cx="34" cy="84" r="1.3" fill="#E8D5B7" opacity="0.85" />
        </motion.g>

        {/* RIGHT WING COMPLEX */}
        <motion.g
          style={{ transformOrigin: '67px 50px', transformStyle: 'preserve-3d' }}
          animate={rightWingAnimate}
        >
          {/* Right Forewing */}
          <path
            d="M67 48 C79 32 104 12 122 16 C132 19 131 34 119 48 C108 60 89 64 67 54 Z"
            fill="url(#fineWingGradRight)"
            stroke="#3E2B20"
            strokeWidth="0.85"
            strokeOpacity="0.8"
          />

          {/* Right Hindwing with Scalloped Margin & Delicate Swallowtail */}
          <path
            d="M67 52 C82 56 102 60 107 72 C110 80 101 88 92 86 C87 85 85 90 81 89 C75 87 71 70 67 52 Z"
            fill="url(#fineWingGradRight)"
            stroke="#3E2B20"
            strokeWidth="0.85"
            strokeOpacity="0.8"
          />

          {/* Right Forewing & Hindwing Fine Anatomical Veining */}
          <path
            d="M67 50 C84 38 100 27 114 23 M67 50 C92 42 106 40 116 38 M67 50 C90 50 104 54 110 52 M67 54 C82 64 94 74 100 80 M67 54 C77 70 82 80 84 86"
            stroke="#3E2B20"
            strokeWidth="0.6"
            strokeOpacity="0.55"
            fill="none"
          />

          {/* Gold Shimmer Edge Lunules */}
          <circle cx="118" cy="24" r="1.5" fill="#E8D5B7" opacity="0.85" />
          <circle cx="122" cy="32" r="1.5" fill="#E8D5B7" opacity="0.85" />
          <circle cx="118" cy="42" r="1.5" fill="#E8D5B7" opacity="0.85" />
          <circle cx="104" cy="76" r="1.3" fill="#E8D5B7" opacity="0.85" />
          <circle cx="96" cy="84" r="1.3" fill="#E8D5B7" opacity="0.85" />
        </motion.g>

        {/* REFINED ANATOMICAL BUTTERFLY BODY */}
        <g id="anatomical-body">
          {/* Segmented Abdomen */}
          <ellipse cx="65" cy="60" rx="2.4" ry="12" fill="#2E1F16" />
          <path
            d="M63 54H67 M63 58H67 M63 62H67 M63 66H67"
            stroke="#4A3428"
            strokeWidth="0.8"
          />
          {/* Thorax */}
          <ellipse cx="65" cy="45" rx="3.2" ry="4.5" fill="#3E2B20" />
          {/* Head */}
          <circle cx="65" cy="38" r="2.4" fill="#2E1F16" />

          {/* Curved Antennae with Clubbed Amber/Gold Tips */}
          <path
            d="M64 36 C59 27 48 21 44 22"
            stroke="#2E1F16"
            strokeWidth="0.85"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="43.5" cy="22.5" r="1.3" fill="#B08A4A" />

          <path
            d="M66 36 C71 27 82 21 86 22"
            stroke="#2E1F16"
            strokeWidth="0.85"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="86.5" cy="22.5" r="1.3" fill="#B08A4A" />
        </g>
      </svg>
    </motion.div>
  );
};
