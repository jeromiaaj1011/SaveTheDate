import React from 'react';
import { motion } from 'framer-motion';
import { Butterfly } from '../components/Butterfly';
import { ChristianCross } from '../components/ChristianCross';
import { BotanicalFrame } from '../components/BotanicalBorder';
import { FloralHeaderAccent } from '../components/FloralElements';
import { DistinctiveHeading } from '../components/DistinctiveHeading';

export const InvitationReveal = () => {
  return (
    <section
      id="invitation-reveal"
      className="section-wrapper paper-texture"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(3.5rem, 7vh, 5rem) clamp(0.75rem, 3vw, 1.5rem)',
      }}
      aria-label="Invitation Reveal Scene"
    >
      <div className="invitation-container" style={{ position: 'relative' }}>
        <BotanicalFrame
          style={{
            minHeight: 'clamp(380px, 60vh, 480px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'var(--color-warm-ivory-light)',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Floating Realistic Butterfly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ marginBottom: '1.25rem' }}
          >
            <Butterfly size={42} resting={false} />
          </motion.div>

          {/* Christian Cross Accent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: '0.75rem' }}
          >
            <ChristianCross size={22} color="var(--color-antique-gold)" />
          </motion.div>

          {/* Distinctive Heading: YOU'RE CORDIALLY INVITED */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%', margin: '0.35rem 0' }}
          >
            <DistinctiveHeading
              fontSize="clamp(1.4rem, 5vw, 3.4rem)"
              textColor="var(--color-classic-black)"
              accentColor="var(--color-antique-gold-dark)"
            />
          </motion.div>

          <FloralHeaderAccent size={140} variant="dusty-rose" style={{ margin: '1.25rem auto 0.75rem' }} />

          {/* Editorial Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--color-deep-teal)',
                letterSpacing: '0.04em',
              }}
            >
              to celebrate the solemnisation of holy matrimony
            </p>
          </motion.div>
        </BotanicalFrame>
      </div>
    </section>
  );
};
