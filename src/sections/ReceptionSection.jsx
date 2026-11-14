import React from 'react';
import { motion } from 'framer-motion';
import { Butterfly } from '../components/Butterfly';
import { VenueCard } from '../components/VenueCard';
import { FloralHeaderAccent } from '../components/FloralElements';

export const ReceptionSection = ({
  title = "RECEPTION TO FOLLOW",
  dateText = "SUNDAY, 06 DECEMBER 2026",
  time = "7:00 PM",
  timeDescription = "7 in the evening",
  venueName = "Vani Palace",
  location = "Sri Ambal Nagar",
  addressFull = "Vani Palace, Sri Ambal Nagar, Chennai",
  mapsUrl = "https://www.google.com/maps/search/?api=1&query=Vani+Palace+Sri+Ambal+Nagar",
  qrLabel = "SCAN FOR RECEPTION LOCATION",
}) => {
  return (
    <section
      id="reception-scene"
      className="section-wrapper paper-texture"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(3.5rem, 7vh, 5.5rem) clamp(0.75rem, 3vw, 1.5rem)',
        background: 'linear-gradient(180deg, var(--color-warm-ivory) 0%, rgba(201, 148, 145, 0.08) 50%, var(--color-warm-ivory) 100%)',
      }}
      aria-label="Reception Scene"
    >
      <div className="invitation-container" style={{ position: 'relative' }}>
        {/* Section Header with celebratory dusty rose accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(1.75rem, 4vh, 2.5rem)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <Butterfly size={40} resting={true} />
          </div>

          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.24em',
              color: 'var(--color-dusty-rose-dark)',
              textTransform: 'uppercase',
            }}
          >
            EVENING CELEBRATION
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: 'clamp(1.65rem, 4.8vw, 2.8rem)',
              color: 'var(--color-classic-black)',
              letterSpacing: '0.14em',
              margin: '0.4rem 0 0',
            }}
          >
            {title}
          </h2>

          <FloralHeaderAccent size={140} variant="dusty-rose" style={{ margin: '0.85rem auto' }} />

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: 'var(--color-charcoal-muted)',
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            Join us for an evening of joyous dining, music, fellowship, and celebration.
          </p>
        </motion.div>

        {/* Reception Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <VenueCard
            mode="invitation"
            badge="EVENING CELEBRATION"
            title={venueName}
            subtitle={location}
            addressFull={addressFull}
            time={time}
            timeDescription={timeDescription}
            date={dateText}
            theme="reception"
            showQr={false}
          />
        </motion.div>
      </div>
    </section>
  );
};
