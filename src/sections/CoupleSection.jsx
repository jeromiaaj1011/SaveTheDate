import React from 'react';
import { motion } from 'framer-motion';
import { ChristianCross } from '../components/ChristianCross';
import { Butterfly } from '../components/Butterfly';
import { FloralHeaderAccent } from '../components/FloralElements';

export const CoupleSection = ({
  tagline = "We are getting married",
  groom = "YESUDAS",
  bride = "HELEN CATHRIN A.J",
}) => {
  return (
    <section
      id="couple-section"
      className="section-wrapper paper-texture"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(3.5rem, 7vh, 5.5rem) clamp(0.75rem, 3vw, 1.5rem)',
      }}
      aria-label="The Couple Scene"
    >
      <div className="invitation-container" style={{ position: 'relative', textAlign: 'center' }}>
        {/* Top Christian Cross & Botanical Flourish */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: '1rem' }}
        >
          <ChristianCross size={26} color="var(--color-antique-gold)" embossed />
        </motion.div>

        {/* Introductory Sentence: Cormorant Garamond */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.12em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.28em' }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(0.85rem, 2.2vw, 1.15rem)',
            fontStyle: 'italic',
            color: 'var(--color-deep-teal)',
            textTransform: 'uppercase',
            letterSpacing: 'clamp(0.14em, 2.5vw, 0.28em)',
            marginBottom: 'clamp(1.5rem, 4vh, 2.5rem)',
          }}
        >
          {tagline}
        </motion.p>

        {/* Groom's Name: Restored Original Cinzel Typography */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 }}
          style={{ marginBottom: '0.35rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: 'clamp(1.9rem, 7vw, 4.4rem)',
              fontWeight: 600,
              letterSpacing: 'clamp(0.08em, 2vw, 0.14em)',
              color: 'var(--color-classic-black)',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {groom}
          </h2>
        </motion.div>

        {/* Transition: weds in Restored Original Pinyon Script */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.6rem, 2.5vw, 1.5rem)',
            margin: '0.5rem auto',
            maxWidth: '360px',
            width: '100%',
          }}
        >
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(to right, transparent, var(--color-champagne-gold))',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
              color: 'var(--color-antique-gold)',
              lineHeight: 0.9,
              padding: '0 0.4rem',
              transform: 'translateY(-2px)',
            }}
          >
            weds
          </span>
          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'linear-gradient(to left, transparent, var(--color-champagne-gold))',
            }}
          />
        </motion.div>

        {/* Bride's Name: Restored Original Cinzel Typography */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.8 }}
          style={{ marginTop: '0.35rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: 'clamp(1.55rem, 5.5vw, 3.8rem)',
              fontWeight: 600,
              letterSpacing: 'clamp(0.05em, 1.6vw, 0.14em)',
              color: 'var(--color-classic-black)',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {bride}
          </h2>
        </motion.div>

        <FloralHeaderAccent size={180} variant="dusty-rose" style={{ marginTop: '2.5rem' }} />

        {/* Resting Botanical Butterfly Ornament */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1.25rem',
          }}
        >
          <Butterfly size={42} resting={true} />
        </motion.div>
      </div>
    </section>
  );
};
