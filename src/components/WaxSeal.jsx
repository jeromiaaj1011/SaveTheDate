import React from 'react';
import { motion } from 'framer-motion';

// Synthesize a subtle, organic wax crackle/pop sound using Web Audio API
const playWaxCrackSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // Quick noise burst for crack
    const bufferSize = ctx.sampleRate * 0.08;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    // Filter to simulate muffled wax fracture
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();

    // Gentle resonant chime after crack
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime + 0.02); // D5
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.4);
    oscGain.gain.setValueAtTime(0.12, ctx.currentTime + 0.02);
    oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(ctx.currentTime + 0.02);
    osc.stop(ctx.currentTime + 0.5);
  } catch (err) {
    // AudioContext blocked or not supported - fails silently
  }
};

export const WaxSeal = ({
  onClick,
  isBroken = false,
  size = 110,
  text = 'Y ❤️ H',
  className = '',
  disabled = false,
}) => {
  const handleClick = (e) => {
    if (disabled || isBroken) return;
    playWaxCrackSound();
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      type="button"
      className={`wax-seal-btn ${!isBroken ? 'wax-interactive' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled || isBroken}
      aria-label="Antique gold wax seal stamped with Y and H. Click to open invitation."
      whileTap={!isBroken ? { scale: 0.94 } : {}}
      style={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '50%',
        padding: 0,
        outline: 'none',
        border: 'none',
        background: 'transparent',
        cursor: isBroken ? 'default' : 'pointer',
        zIndex: 20,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', filter: 'drop-shadow(0 10px 20px rgba(70, 50, 20, 0.4))' }}
      >
        <defs>
          {/* Radial Gradient for 3D Wax Body */}
          <radialGradient
            id="waxGradient"
            cx="40%"
            cy="35%"
            r="65%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="#D4A759" />
            <stop offset="35%" stopColor="#B08A4A" />
            <stop offset="75%" stopColor="#87652B" />
            <stop offset="100%" stopColor="#5E4316" />
          </radialGradient>

          {/* Inner Stamped Depression Gradient */}
          <radialGradient
            id="innerStampGrad"
            cx="45%"
            cy="40%"
            r="55%"
          >
            <stop offset="0%" stopColor="#8F6D33" />
            <stop offset="60%" stopColor="#A88142" />
            <stop offset="100%" stopColor="#C9A564" />
          </radialGradient>

          {/* Highlight Gradient for glossy rim */}
          <linearGradient id="waxHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 245, 220, 0.65)" />
            <stop offset="45%" stopColor="rgba(255, 245, 220, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.4)" />
          </linearGradient>
        </defs>

        {/* Outer Organic Wax Melt Outline with dripping edges */}
        <path
          d="M60 4C78 3 95 10 107 24C118 37 121 56 116 73C111 90 98 106 82 113C65 120 46 118 31 110C17 101 6 86 4 69C2 52 10 35 22 22C33 10 45 5 60 4Z"
          fill="url(#waxGradient)"
        />

        {/* Outer glossy rim highlight */}
        <path
          d="M60 6C77 5 93 12 104 25C115 37 118 55 113 71C108 87 96 102 81 109C65 116 47 114 33 107C20 98 10 84 8 68C6 52 14 36 25 24C35 12 47 7 60 6Z"
          stroke="url(#waxHighlight)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.8"
        />

        {/* Inner Depressed Stamped Rim */}
        <circle
          cx="60"
          cy="60"
          r="41"
          fill="url(#innerStampGrad)"
          stroke="#5E4316"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="60"
          r="38"
          stroke="url(#waxHighlight)"
          strokeWidth="1.2"
          strokeDasharray="3 2"
          fill="none"
          opacity="0.65"
        />

        {/* Christian Cross Accent at the top of stamp */}
        <path
          d="M60 27V36M56 30H64"
          stroke="#402B0E"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="drop-shadow(0 1px 0 rgba(255, 235, 190, 0.5))"
        />

        {/* Monogram Text Y ❤️ H */}
        <text
          x="60"
          y="66"
          textAnchor="middle"
          fill="#3B2609"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '1px',
            filter: 'drop-shadow(0 1px 0 rgba(255, 235, 190, 0.55))',
          }}
        >
          {text}
        </text>

        {/* Bottom Laurel Flourish inside seal */}
        <path
          d="M44 78C50 83 70 83 76 78"
          stroke="#402B0E"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          filter="drop-shadow(0 1px 0 rgba(255, 235, 190, 0.5))"
        />
      </svg>
    </motion.button>
  );
};
