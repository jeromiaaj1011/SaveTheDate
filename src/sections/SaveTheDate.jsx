import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScratchCard } from '../components/ScratchCard';
import { SectionDivider } from '../components/SectionDivider';
import { FloralHeaderAccent } from '../components/FloralElements';

export const SaveTheDate = ({
  dayOfWeek = "SUNDAY",
  day = "06",
  month = "DECEMBER",
  year = "2026",
  time = "4:00 PM",
  venue = "St. Stephen Church, Nanmangalam",
}) => {
  const [hasRevealed, setHasRevealed] = useState(false);

  return (
    <section
      id="save-the-date-scene"
      className="section-wrapper paper-texture"
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(3.5rem, 7vh, 5rem) clamp(0.75rem, 3vw, 1.25rem)',
      }}
      aria-label="Save The Date Scratch Section"
    >
      <div className="invitation-container" style={{ position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 4vh, 2.5rem)' }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.26em',
              color: 'var(--color-antique-gold)',
              textTransform: 'uppercase',
            }}
          >
            INTERACTIVE WEDDING INVITATION
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: 'clamp(1.65rem, 4.8vw, 2.7rem)',
              color: 'var(--color-classic-black)',
              letterSpacing: '0.14em',
              marginTop: '0.4rem',
            }}
          >
            SAVE OUR DATE
          </h2>

          <FloralHeaderAccent size={140} variant="ivory" style={{ margin: '0.85rem auto' }} />
        </motion.div>

        {/* HTML Canvas Scratch Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ScratchCard
            dayOfWeek={dayOfWeek}
            day={day}
            month={month}
            year={year}
            time={time}
            venue={venue}
            onRevealed={() => setHasRevealed(true)}
          />
        </motion.div>

        {/* Subtext after reveal */}
        {hasRevealed && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              marginTop: '2rem',
              textAlign: 'center',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: 'var(--color-deep-teal)',
            }}
          >
            Save this sacred day on your calendar. Details of our holy ceremony and evening reception follow below.
          </motion.p>
        )}
      </div>
    </section>
  );
};
