import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Butterfly } from './Butterfly';
import { ChristianCross } from './ChristianCross';
import { FloralCorner } from './FloralElements';
import { CheckCircle2, Clock, MapPin } from 'lucide-react';

export const ScratchCard = ({
  dayOfWeek = "SUNDAY",
  day = "06",
  month = "DECEMBER",
  year = "2026",
  time = "4:00 PM",
  venue = "St. Stephen Church, Nanmangalam",
  onRevealed,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);

  // Initialize Metallic Champagne-Gold Foil Layer
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rect = canvas.getBoundingClientRect();
    
    // Support High DPI
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Luxury Champagne/Antique Gold Metallic Gradient
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, '#C9A564');
    grad.addColorStop(0.25, '#E8D5B7');
    grad.addColorStop(0.5, '#B08A4A');
    grad.addColorStop(0.75, '#F5ECD9');
    grad.addColorStop(1, '#8F6D33');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Subtle Decorative Double Border on Foil
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 1;
    ctx.strokeRect(10, 10, rect.width - 20, rect.height - 20);
    ctx.strokeStyle = 'rgba(143, 109, 51, 0.35)';
    ctx.strokeRect(14, 14, rect.width - 28, rect.height - 28);

    // Subtle Monogram & Scratch Prompt
    ctx.fillStyle = '#3E2A10';
    ctx.font = '600 13px "Cinzel", "Cinzel Decorative", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ SCRATCH WITH FINGER OR MOUSE ✨', rect.width / 2, rect.height / 2 - 12);

    ctx.font = '400 11px "Montserrat", sans-serif';
    ctx.fillStyle = 'rgba(62, 42, 16, 0.78)';
    ctx.fillText('TO REVEAL THE SACRED DATE', rect.width / 2, rect.height / 2 + 14);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  // Scratch Drawing
  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rect = canvas.getBoundingClientRect();

    const x = (clientX - rect.left);
    const y = (clientY - rect.top);

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 44;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    lastPointRef.current = { x, y };
  };

  // Calculate Scratched Percentage
  const calculateScratchedArea = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const { width, height } = canvas;
    
    const step = 8;
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    let transparentCount = 0;
    let totalSamples = 0;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        if (data[index + 3] < 128) {
          transparentCount++;
        }
        totalSamples++;
      }
    }

    const percent = Math.round((transparentCount / totalSamples) * 100);
    setScratchPercent(percent);

    if (percent > 40) {
      handleCompleteReveal();
    }
  }, [isRevealed]);

  const handleCompleteReveal = () => {
    if (isRevealed) return;
    setIsRevealed(true);
    setScratchPercent(100);
    if (onRevealed) onRevealed();
  };

  // Touch and Mouse listeners with scroll prevention during drag
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleTouchStart = (e) => {
      if (isRevealed) return;
      e.preventDefault();
      isDrawingRef.current = true;
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e) => {
      if (!isDrawingRef.current || isRevealed) return;
      e.preventDefault();
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
      isDrawingRef.current = false;
      lastPointRef.current = null;
      calculateScratchedArea();
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isRevealed, calculateScratchedArea]);

  const handleMouseDown = (e) => {
    if (isRevealed) return;
    isDrawingRef.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawingRef.current || isRevealed) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
    calculateScratchedArea();
  };

  return (
    <div
      ref={containerRef}
      className="scratch-card-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '440px',
        margin: '0 auto',
        padding: 'clamp(1.6rem, 4vw, 2rem) clamp(0.85rem, 3.5vw, 1.5rem)',
        borderRadius: '10px',
        backgroundColor: 'var(--color-warm-ivory)',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--color-champagne-gold)',
      }}
    >
      {/* Botanical Corner Flourishes */}
      <div style={{ position: 'absolute', top: 3, left: 3 }}>
        <FloralCorner position="top-left" size={30} variant="dusty-rose" />
      </div>
      <div style={{ position: 'absolute', top: 3, right: 3 }}>
        <FloralCorner position="top-right" size={30} variant="dusty-rose" />
      </div>
      <div style={{ position: 'absolute', bottom: 3, left: 3 }}>
        <FloralCorner position="bottom-left" size={30} variant="dusty-rose" />
      </div>
      <div style={{ position: 'absolute', bottom: 3, right: 3 }}>
        <FloralCorner position="bottom-right" size={30} variant="dusty-rose" />
      </div>

      {/* Subtle Realistic Butterfly Resting Near Scratch Area */}
      <div
        style={{
          position: 'absolute',
          top: '-16px',
          right: '18px',
          zIndex: 15,
        }}
      >
        <Butterfly size={36} resting={true} />
      </div>

      {/* Card Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <ChristianCross size={20} color="var(--color-antique-gold)" />
        <h3
          style={{
            fontFamily: 'var(--font-couple)',
            fontSize: 'clamp(1.05rem, 3.5vw, 1.25rem)',
            letterSpacing: 'clamp(0.14em, 2vw, 0.22em)',
            color: 'var(--color-classic-black)',
            fontWeight: 600,
            textTransform: 'uppercase',
            margin: '0.35rem 0 0.15rem',
          }}
        >
          SAVE THE DATE
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '0.85rem',
            color: 'var(--color-charcoal-muted)',
            letterSpacing: '0.04em',
          }}
        >
          Scratch or tap to uncover our wedding day details
        </p>
      </div>

      {/* Interactive Foil & Underlying Revealed Date Box */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '210px',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'var(--color-warm-ivory-light)',
          border: '1px solid var(--color-champagne-gold)',
          boxShadow: 'inset 0 2px 8px rgba(41, 40, 42, 0.06)',
        }}
      >
        {/* Underlying Revealed Date Content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: '1.1rem',
              letterSpacing: '0.28em',
              color: 'var(--color-deep-teal)',
              fontWeight: 600,
            }}
          >
            {dayOfWeek}
          </span>

          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.6rem',
              margin: '0.2rem 0',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-couple)',
                fontSize: '3.6rem',
                fontWeight: 700,
                lineHeight: 1,
                color: 'var(--color-antique-gold)',
              }}
            >
              {day}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-couple)',
                fontSize: '1.45rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: 'var(--color-classic-black)',
              }}
            >
              {month}
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.26em',
              color: 'var(--color-sage-green-deep)',
              marginBottom: '0.75rem',
            }}
          >
            {year}
          </span>

          {/* Time & Venue Reveal Details */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem',
              paddingTop: '0.6rem',
              borderTop: '1px solid rgba(232, 213, 183, 0.7)',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-serif)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--color-deep-teal)',
              }}
            >
              <Clock size={14} color="var(--color-antique-gold)" />
              <span>{time} (4 in the afternoon)</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '0.88rem',
                color: 'var(--color-charcoal-muted)',
              }}
            >
              <MapPin size={14} color="var(--color-antique-gold)" />
              <span>{venue}</span>
            </div>
          </div>
        </div>

        {/* Scratchable Canvas Foil Layer */}
        <AnimatePresence>
          {!isRevealed && (
            <motion.canvas
              ref={canvasRef}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                cursor: 'grab',
                touchAction: 'none',
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Progress / Accessibility Tap-to-Reveal */}
      <div
        style={{
          marginTop: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.45rem',
        }}
      >
        {isRevealed ? (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              color: 'var(--color-deep-teal)',
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={16} color="var(--color-antique-gold)" />
            <span>Date Revealed — We await your presence!</span>
          </motion.div>
        ) : (
          <>
            <div
              style={{
                width: '100%',
                height: '4px',
                backgroundColor: 'rgba(176, 138, 74, 0.15)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${scratchPercent}%`,
                  height: '100%',
                  backgroundColor: 'var(--color-antique-gold)',
                  transition: 'width 0.2s ease',
                }}
              />
            </div>
            
            <button
              type="button"
              onClick={handleCompleteReveal}
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-antique-gold-dark)',
                textDecoration: 'underline',
                letterSpacing: '0.06em',
                padding: '0.35rem 0.75rem',
                cursor: 'pointer',
              }}
            >
              Or tap here to reveal date directly
            </button>
          </>
        )}
      </div>
    </div>
  );
};
