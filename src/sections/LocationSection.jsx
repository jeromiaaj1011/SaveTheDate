import React from 'react';
import { motion } from 'framer-motion';
import { VenueCard } from '../components/VenueCard';
import { Butterfly } from '../components/Butterfly';
import { ChristianCross } from '../components/ChristianCross';
import { FloralHeaderAccent } from '../components/FloralElements';

export const LocationSection = ({
  heading = "WE LOOK FORWARD TO CELEBRATING WITH YOU",
  signature = "WITH LOVE, YESUDAS & HELEN CATHRIN",
  ceremony,
  reception,
}) => {
  return (
    <section
      id="find-your-way"
      className="section-wrapper paper-texture-dusty-rose"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(3.5rem, 7vh, 5.5rem) clamp(0.75rem, 3vw, 1.25rem) clamp(4rem, 8vh, 6.5rem)',
        borderTop: '1px solid var(--color-champagne-gold)',
        position: 'relative',
        background: 'var(--grad-dusty-rose-stationery)',
      }}
      aria-label="Find Your Way and Closing Scene"
    >
      <div className="invitation-container" style={{ maxWidth: '980px', position: 'relative' }}>
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vh, 3.5rem)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.8rem' }}>
            <ChristianCross size={26} color="var(--color-antique-gold)" embossed />
          </div>

          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.24em',
              color: 'var(--color-deep-teal-dark)',
              textTransform: 'uppercase',
            }}
          >
            VENUE DETAILS &amp; NAVIGATION
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: 'clamp(1.5rem, 4vw, 2.6rem)',
              color: 'var(--color-classic-black)',
              letterSpacing: '0.12em',
              marginTop: '0.5rem',
              lineHeight: 1.3,
            }}
          >
            {heading}
          </h2>

          <FloralHeaderAccent size={150} variant="dusty-rose" style={{ margin: '1rem auto' }} />

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(0.92rem, 2.2vw, 1.05rem)',
              color: 'var(--color-charcoal-muted)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Scan the QR code with another mobile device or tap below to open direct navigation in Google Maps.
          </p>
        </motion.div>

        {/* Two Venue Navigation Cards Side-by-Side (or stacked on mobile) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(270px, 100%), 1fr))',
            gap: 'clamp(1.25rem, 3.5vw, 2rem)',
            width: '100%',
            marginBottom: 'clamp(3rem, 6vh, 4.5rem)',
          }}
        >
          {/* Card 1 — Wedding Ceremony Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <VenueCard
              mode="navigation"
              badge="CEREMONY VENUE"
              title={ceremony.venueName}
              subtitle={ceremony.location}
              addressFull={ceremony.addressFull}
              mapsUrl={ceremony.mapsUrl}
              qrLabel={ceremony.qrLabel}
              theme="ceremony"
              showQr={true}
              showDateTime={false}
            />
          </motion.div>

          {/* Card 2 — Reception Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <VenueCard
              mode="navigation"
              badge="RECEPTION VENUE"
              title={reception.venueName}
              subtitle={reception.location}
              addressFull={reception.addressFull}
              mapsUrl={reception.mapsUrl}
              qrLabel={reception.qrLabel}
              theme="reception"
              showQr={true}
              showDateTime={false}
            />
          </motion.div>
        </div>

        {/* Closing Signature Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{
            textAlign: 'center',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(176, 138, 74, 0.35)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem', marginBottom: '1.25rem' }}>
            <Butterfly size={36} resting={true} />
            <ChristianCross size={22} color="var(--color-antique-gold)" embossed />
            <Butterfly size={36} resting={true} style={{ transform: 'scaleX(-1)' }} />
          </div>

          <p
            style={{
              fontFamily: 'var(--font-couple)',
              fontSize: 'clamp(1.15rem, 3.2vw, 1.55rem)',
              letterSpacing: '0.22em',
              color: 'var(--color-deep-teal-dark)',
              fontWeight: 600,
              textTransform: 'uppercase',
              margin: '0 0 0.5rem',
            }}
          >
            {signature}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '2.5rem',
              color: 'var(--color-antique-gold-dark)',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            We eagerly anticipate welcoming you
          </p>

          <span
            style={{
              display: 'block',
              marginTop: '1.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              color: 'var(--color-charcoal-muted)',
              textTransform: 'uppercase',
              opacity: 0.75,
            }}
          >
            St. Stephen Church &bull; Vani Palace &bull; Chennai
          </span>
        </motion.div>
      </div>
    </section>
  );
};
