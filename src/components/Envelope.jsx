import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WaxSeal } from './WaxSeal';
import { ChristianCross } from './ChristianCross';
import { Butterfly } from './Butterfly';
import { FloralCorner, FloralHeaderAccent } from './FloralElements';
import { ChevronDown } from 'lucide-react';

export const Envelope = ({
  isOpen = false,
  onOpen,
  verseText = "What therefore God hath joined together, let not man put asunder.",
  verseRef = "MARK 10:9 — KJV",
  monogram = "Y ❤️ H",
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [sealCracked, setSealCracked] = useState(false);
  const [cardEmerged, setCardEmerged] = useState(false);
  const [sealSize, setSealSize] = useState(106);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 360) {
        setSealSize(76);
      } else if (w < 480) {
        setSealSize(88);
      } else {
        setSealSize(106);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSealClick = () => {
    if (isOpen || isOpening) return;
    setIsOpening(true);

    // Step 1: Wax seal cracks and dissolves
    setSealCracked(true);

    // Step 2: Envelope flap opens with 3D movement, then card emerges
    setTimeout(() => {
      setCardEmerged(true);
    }, 750);

    // Step 3: Trigger onOpen callback to unlock page flow smoothly
    if (onOpen) {
      setTimeout(() => {
        onOpen();
      }, 1900);
    }
  };

  return (
    <section
      id="envelope-scene"
      className="envelope-viewport paper-texture"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-warm-ivory)',
        padding: 'clamp(2rem, 5vh, 3rem) clamp(0.75rem, 3vw, 1.25rem) clamp(2.5rem, 6vh, 4rem)',
        overflow: 'hidden',
      }}
      aria-label="Royal European Wedding Envelope Opening Scene"
    >
      {/* Background Atmosphere: Warm Ivory Gradient with Subtle Lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 32%, rgba(253, 250, 245, 0.98) 0%, rgba(247, 241, 231, 0.85) 60%, rgba(234, 219, 204, 0.5) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Asymmetrical Botanical Floral Arrangements Framing the Envelope Stage */}
      <div
        className="envelope-floral-corner top-left"
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 5,
          opacity: 0.85,
        }}
      >
        <FloralCorner position="top-left" size={typeof window !== 'undefined' && window.innerWidth < 450 ? 50 : 80} variant="dusty-rose" />
      </div>
      <div
        className="envelope-floral-corner bottom-right"
        style={{
          position: 'absolute',
          bottom: 14,
          right: 14,
          zIndex: 5,
          opacity: 0.85,
        }}
      >
        <FloralCorner position="bottom-right" size={typeof window !== 'undefined' && window.innerWidth < 450 ? 50 : 80} variant="dusty-rose" />
      </div>

      {/* Floating Botanical Butterfly */}
      <motion.div
        initial={{ opacity: 0, y: 15, x: 20 }}
        animate={{
          opacity: 1,
          y: [-6, 6, -6],
          x: [0, 8, 0],
          rotate: [-2, 3, -2],
        }}
        transition={{
          y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 6.2, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 5.4, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.2 },
        }}
        style={{
          position: 'absolute',
          top: '7%',
          right: 'clamp(4%, 7vw, 11%)',
          zIndex: 25,
          pointerEvents: 'none',
        }}
      >
        <Butterfly size={typeof window !== 'undefined' && window.innerWidth < 450 ? 38 : 50} resting={false} />
      </motion.div>

      {/* Embossed Christian Cross & Bible Verse */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          textAlign: 'center',
          maxWidth: '540px',
          marginBottom: 'clamp(2rem, 5vh, 3.2rem)',
          zIndex: 10,
          padding: '0 0.5rem',
        }}
      >
        {/* Embossed Cross in Antique Gold */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.65rem' }}>
          <ChristianCross size={26} color="var(--color-antique-gold)" embossed />
        </div>

        {/* Mark 10:9 Verse in Cormorant Garamond */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(0.95rem, 2.7vw, 1.2rem)',
            fontStyle: 'italic',
            lineHeight: 1.65,
            color: 'var(--color-classic-black)',
            letterSpacing: '0.03em',
            margin: '0 auto',
          }}
        >
          &ldquo;{verseText}&rdquo;
        </p>

        <span
          style={{
            display: 'block',
            marginTop: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.24em',
            color: 'var(--color-antique-gold-dark)',
            textTransform: 'uppercase',
          }}
        >
          {verseRef}
        </span>

        <FloralHeaderAccent size={130} variant="ivory" style={{ marginTop: '0.5rem' }} />
      </motion.div>

      {/* Realistic Textured Sage-Green Envelope Assembly with Floating Drift */}
      <motion.div
        animate={
          !isOpening && !isOpen
            ? { y: [-4, 4, -4] }
            : { y: 0 }
        }
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          aspectRatio: '540 / 350',
          perspective: '1200px',
          zIndex: 15,
        }}
      >
        {/* Dimensional Envelope Shadow on Surface */}
        <div
          style={{
            position: 'absolute',
            bottom: '-22px',
            left: '6%',
            right: '6%',
            height: '34px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(41, 40, 42, 0.28) 0%, transparent 72%)',
            filter: 'blur(8px)',
            zIndex: 1,
          }}
        />

        {/* 1. BACK INTERIOR LINER (Inside Wall of the Envelope Pocket) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--color-sage-green-deep)',
            borderRadius: '10px',
            boxShadow: 'var(--shadow-envelope)',
            overflow: 'hidden',
            border: '1px solid rgba(176, 138, 74, 0.45)',
            zIndex: 2,
          }}
        >
          {/* Champagne-Gold Damask Interior Texture */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(var(--color-champagne-gold) 0.65px, transparent 0.65px), radial-gradient(rgba(232, 213, 183, 0.2) 0.65px, var(--color-sage-green-deep) 0.65px)',
              backgroundSize: '16px 16px, 8px 8px',
              opacity: 0.55,
            }}
          />
        </div>

        {/* 2. THE PHYSICAL WARM-IVORY INVITATION CARD (Visibly slides up from deep inside) */}
        <motion.div
          initial={{ y: '0%', opacity: 0, scale: 0.95, rotate: 0 }}
          animate={
            cardEmerged
              ? {
                  y: ['-10%', '-46%', '-42%'],
                  opacity: 1,
                  scale: [0.96, 1.01, 1],
                  rotate: [0, -1.2, -0.6],
                  transition: {
                    duration: 1.15,
                    times: [0, 0.8, 1],
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
              : isOpening
              ? { y: '-10%', opacity: 0.8, scale: 0.96, rotate: 0 }
              : { y: '0%', opacity: 0, scale: 0.95, rotate: 0 }
          }
          style={{
            position: 'absolute',
            top: '5%',
            left: '4%',
            right: '4%',
            height: '88%',
            backgroundColor: 'var(--color-warm-ivory-light)',
            borderRadius: '8px',
            boxShadow: '0 20px 48px -10px rgba(41, 40, 42, 0.26), inset 0 0 0 1px var(--color-champagne-gold)',
            zIndex: cardEmerged ? 25 : 3, // Pops above the pocket once slid up
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(0.6rem, 2.5vw, 1.6rem) clamp(0.5rem, 2vw, 1.25rem)',
            textAlign: 'center',
            transformOrigin: 'bottom center',
          }}
        >
          {/* Subtle Botanical Frame Accents on Card */}
          <div style={{ position: 'absolute', top: 3, left: 3 }}>
            <FloralCorner position="top-left" size={26} variant="ivory" />
          </div>
          <div style={{ position: 'absolute', top: 3, right: 3 }}>
            <FloralCorner position="top-right" size={26} variant="ivory" />
          </div>
          <div style={{ position: 'absolute', bottom: 3, left: 3 }}>
            <FloralCorner position="bottom-left" size={26} variant="ivory" />
          </div>
          <div style={{ position: 'absolute', bottom: 3, right: 3 }}>
            <FloralCorner position="bottom-right" size={26} variant="ivory" />
          </div>

          <ChristianCross size={18} color="var(--color-antique-gold)" />

          {/* Genuine Decorative Typography: YOU'RE CORDIALLY INVITED */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontFeatureSettings: '"swsh" 1, "dlig" 1',
              fontWeight: 700,
              fontSize: 'clamp(0.82rem, 2.6vw, 1.38rem)',
              letterSpacing: 'clamp(0.12em, 1.8vw, 0.22em)',
              lineHeight: 1.28,
              color: 'var(--color-classic-black)',
              textTransform: 'uppercase',
              margin: '0.35rem 0 0.15rem',
            }}
          >
            YOU&apos;RE CORDIALLY INVITED
          </div>

          {/* Restored Cinzel Couple Names */}
          <div
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: 'clamp(0.85rem, 2.5vw, 1.18rem)',
              fontWeight: 600,
              letterSpacing: 'clamp(0.08em, 1.5vw, 0.14em)',
              color: 'var(--color-deep-teal)',
              marginTop: '0.2rem',
            }}
          >
            YESUDAS &amp; HELEN CATHRIN
          </div>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.64rem, 1.8vw, 0.74rem)',
              letterSpacing: '0.22em',
              color: 'var(--color-antique-gold-dark)',
              marginTop: '0.25rem',
              fontWeight: 600,
            }}
          >
            06 . 12 . 2026
          </span>
        </motion.div>

        {/* 3. ENVELOPE FRONT POCKET (Realistic Folds & Paper Thickness) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 8,
            pointerEvents: 'none',
          }}
        >
          <svg
            viewBox="0 0 540 350"
            width="100%"
            height="100%"
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'visible',
              display: 'block',
            }}
          >
            <defs>
              <filter id="shadowLeftFold" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="3" dy="0" stdDeviation="3" floodColor="#29282A" floodOpacity="0.16" />
              </filter>
              <filter id="shadowRightFold" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="-3" dy="0" stdDeviation="3" floodColor="#29282A" floodOpacity="0.16" />
              </filter>
              <filter id="shadowBottomFold" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="-4" stdDeviation="6" floodColor="#29282A" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* Left Side Fold Triangle with realistic drop shadow */}
            <polygon
              points="0,0 270,175 0,350"
              fill="var(--color-sage-green-light)"
              opacity="0.98"
              filter="url(#shadowLeftFold)"
            />

            {/* Right Side Fold Triangle */}
            <polygon
              points="540,0 270,175 540,350"
              fill="var(--color-sage-green-light)"
              opacity="0.98"
              filter="url(#shadowRightFold)"
            />

            {/* Bottom Fold Triangle (folds up from the base with gold-bordered edge) */}
            <polygon
              points="0,350 270,155 540,350"
              fill="var(--color-sage-green)"
              filter="url(#shadowBottomFold)"
            />

            {/* Bottom Gold Fold Piping */}
            <path
              d="M0 350L270 155L540 350"
              stroke="var(--color-champagne-gold)"
              strokeWidth="1.2"
              opacity="0.65"
            />
          </svg>

          {/* Bottom Gold Botanical Filigree Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '3.5%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              opacity: 0.85,
            }}
          >
            <ChristianCross size={18} color="var(--color-champagne-gold)" embossed />
          </div>
        </div>

        {/* 4. ENVELOPE TOP FLAP (Realistic 3D Opening with Gold Trim) */}
        <motion.div
          animate={
            isOpening || isOpen
              ? { rotateX: -180, zIndex: 4 }
              : { rotateX: 0, zIndex: 20 }
          }
          transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '54.3%',
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d',
            pointerEvents: isOpen ? 'none' : 'auto',
          }}
        >
          {/* Triangular Top Flap Face */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
            }}
          >
            <svg
              viewBox="0 0 540 190"
              width="100%"
              height="100%"
              style={{
                display: 'block',
                filter: 'drop-shadow(0 8px 16px rgba(41, 40, 42, 0.28))',
              }}
            >
              <polygon points="0,0 540,0 270,188" fill="var(--color-sage-green-dark)" />
              <path
                d="M0 0L270 186L540 0"
                stroke="var(--color-champagne-gold)"
                strokeWidth="1.8"
                opacity="0.9"
              />
              <path
                d="M12 0L270 178L528 0"
                stroke="var(--color-champagne-gold)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                opacity="0.75"
              />
            </svg>
          </div>

          {/* Central Wax Seal */}
          <div
            style={{
              position: 'absolute',
              top: '97%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 30,
              backfaceVisibility: 'hidden',
            }}
          >
            <AnimatePresence>
              {!sealCracked && (
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  exit={{
                    scale: 1.18,
                    opacity: 0,
                    rotate: 10,
                    transition: { duration: 0.5 },
                  }}
                >
                  <WaxSeal
                    onClick={handleSealClick}
                    isBroken={sealCracked}
                    text={monogram}
                    size={sealSize}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Understated Instruction / Scroll Guidance */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center', zIndex: 20 }}>
        {!isOpening && !isOpen ? (
          <motion.div
            animate={{ y: [0, 5, 0], opacity: [0.85, 1, 0.85] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            onClick={handleSealClick}
            style={{ cursor: 'pointer' }}
          >
            <p
              className="gold-text-shimmer"
              style={{
                fontFamily: 'var(--font-couple)',
                fontSize: '0.86rem',
                letterSpacing: '0.24em',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              ✨ Tap to open your invitation ✨
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '0.84rem',
                letterSpacing: '0.08em',
                color: 'var(--color-charcoal-muted)',
                marginTop: '0.3rem',
              }}
            >
              Touch the antique-gold wax seal
            </p>
          </motion.div>
        ) : (
          <motion.a
            href="#couple-section"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'var(--color-deep-teal)',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-couple)',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}
            >
              Scroll to discover our story
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={22} color="var(--color-antique-gold)" />
            </motion.div>
          </motion.a>
        )}
      </div>
    </section>
  );
};
