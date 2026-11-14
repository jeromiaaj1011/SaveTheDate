import React from 'react';
import { motion } from 'framer-motion';
import { ChristianCross } from '../components/ChristianCross';
import { VenueCard } from '../components/VenueCard';
import { FloralHeaderAccent } from '../components/FloralElements';

export const WeddingSection = ({
  title = "THE WEDDING",
  dateText = "SUNDAY, 06 DECEMBER 2026",
  time = "4:00 PM",
  timeDescription = "4 in the afternoon",
  venueName = "St. Stephen Church",
  location = "Nanmangalam",
  addressFull = "St. Stephen Church, Nanmangalam, Chennai",
  mapsUrl = "https://www.google.com/maps/search/?api=1&query=St.+Stephen%27s+Church+Nanmangalam",
  qrLabel = "SCAN FOR WEDDING LOCATION",
}) => {
  return (
    <section
      id="wedding-ceremony"
      className="section-wrapper paper-texture"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(3.5rem, 7vh, 5.5rem) clamp(0.75rem, 3vw, 1.5rem)',
      }}
      aria-label="Wedding Ceremony Scene"
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
          <ChristianCross size={26} color="var(--color-antique-gold)" embossed />
          
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.24em',
              color: 'var(--color-deep-teal)',
              textTransform: 'uppercase',
              marginTop: '0.75rem',
            }}
          >
            HOLY MATRIMONY
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              color: 'var(--color-classic-black)',
              letterSpacing: '0.14em',
              margin: '0.4rem 0 0',
            }}
          >
            {title}
          </h2>

          <FloralHeaderAccent size={140} variant="ivory" style={{ margin: '0.85rem auto' }} />

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
            We request the honour of your presence as we exchange our sacred vows before God and family.
          </p>
        </motion.div>

        {/* Ceremony Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <VenueCard
            mode="invitation"
            badge="HOLY MATRIMONY"
            title={venueName}
            subtitle={location}
            addressFull={addressFull}
            time={time}
            timeDescription={timeDescription}
            date={dateText}
            theme="ceremony"
            showQr={false}
          />
        </motion.div>
      </div>
    </section>
  );
};
