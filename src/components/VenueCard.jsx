import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { MapPin, Navigation, Clock, Calendar, ExternalLink } from 'lucide-react';
import { ChristianCross } from './ChristianCross';
import { FloralCorner } from './FloralElements';

export const VenueCard = ({
  badge = "CEREMONY",
  title = "St. Stephen Church",
  subtitle = "Nanmangalam",
  addressFull = "St. Stephen Church, Nanmangalam, Chennai",
  time = "4:00 PM",
  timeDescription = "4 in the afternoon",
  date = "Sunday, 06 December 2026",
  mapsUrl = "https://maps.google.com",
  qrLabel = "SCAN FOR VENUE LOCATION",
  theme = "ceremony", // 'ceremony' (sage/gold) or 'reception' (rose/gold)
  mode = "full", // 'full', 'navigation', or 'invitation'
  showQr = true,
  showDateTime = true,
  className = "",
}) => {
  const isReception = theme === 'reception';
  const badgeColor = isReception ? 'var(--color-dusty-rose-dark)' : 'var(--color-deep-teal)';
  const accentBorder = isReception ? 'var(--color-dusty-rose)' : 'var(--color-champagne-gold)';
  const floralVariant = isReception ? 'dusty-rose' : 'ivory';

  // Determine rendering based on mode
  const isNavigationMode = mode === 'navigation';
  const isInvitationMode = mode === 'invitation';

  const shouldRenderDateTime = isNavigationMode ? false : showDateTime;
  const shouldRenderQr = isInvitationMode ? false : showQr;
  const shouldRenderNavButton = isInvitationMode ? false : true;

  return (
    <div
      className={`venue-card ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        margin: '0 auto',
        padding: 'clamp(1.6rem, 4vw, 2.4rem) clamp(0.85rem, 3.5vw, 1.75rem)',
        borderRadius: '12px',
        backgroundColor: 'var(--color-warm-ivory)',
        border: `1px solid ${accentBorder}`,
        boxShadow: 'var(--shadow-card)',
        textAlign: 'center',
      }}
    >
      {/* Corner Botanical Ornaments */}
      <div style={{ position: 'absolute', top: 3, left: 3 }}>
        <FloralCorner position="top-left" size={30} variant={floralVariant} />
      </div>
      <div style={{ position: 'absolute', top: 3, right: 3 }}>
        <FloralCorner position="top-right" size={30} variant={floralVariant} />
      </div>
      <div style={{ position: 'absolute', bottom: 3, left: 3 }}>
        <FloralCorner position="bottom-left" size={30} variant={floralVariant} />
      </div>
      <div style={{ position: 'absolute', bottom: 3, right: 3 }}>
        <FloralCorner position="bottom-right" size={30} variant={floralVariant} />
      </div>

      {/* Top Header Badge */}
      <div style={{ marginBottom: '1.1rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '20px',
            backgroundColor: 'rgba(232, 213, 183, 0.25)',
            border: '1px solid var(--color-champagne-gold)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            color: badgeColor,
            textTransform: 'uppercase',
          }}
        >
          {!isReception && <ChristianCross size={13} color={badgeColor} />}
          <span>{badge}</span>
        </div>
      </div>

      {/* Venue Name & Subtitle */}
      <h3
        style={{
          fontFamily: 'var(--font-couple)',
          fontSize: 'clamp(1.25rem, 4vw, 1.55rem)',
          fontWeight: 600,
          color: 'var(--color-classic-black)',
          letterSpacing: '0.08em',
          marginBottom: '0.35rem',
        }}
      >
        {title}
      </h3>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          color: 'var(--color-deep-teal)',
          fontSize: '0.95rem',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          marginBottom: '1.25rem',
        }}
      >
        <MapPin size={16} color="var(--color-antique-gold)" />
        <span>{subtitle}</span>
      </div>

      {/* Thin Gold Separator */}
      <div
        style={{
          width: '60px',
          height: '1px',
          backgroundColor: 'var(--color-champagne-gold)',
          margin: '0 auto 1.25rem',
        }}
      />

      {/* NAVIGATION MODE: Dedicated Physical Address Card */}
      {isNavigationMode && addressFull && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.65rem',
            backgroundColor: 'var(--color-warm-ivory-light)',
            padding: '0.85rem 1rem',
            borderRadius: '8px',
            border: '1px solid rgba(232, 213, 183, 0.6)',
            marginBottom: '1.25rem',
            textAlign: 'left',
          }}
        >
          <MapPin size={18} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: badgeColor,
                textTransform: 'uppercase',
                marginBottom: '0.2rem',
              }}
            >
              Physical Address
            </span>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.95rem',
                color: 'var(--color-classic-black)',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {addressFull}
            </p>
          </div>
        </div>
      )}

      {/* INVITATION & FULL MODE: Time & Date Details Box */}
      {shouldRenderDateTime && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            backgroundColor: 'var(--color-warm-ivory-light)',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid rgba(232, 213, 183, 0.6)',
            marginBottom: '1.25rem',
          }}
        >
          {date && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-couple)',
                letterSpacing: '0.1em',
                color: 'var(--color-classic-black)',
              }}
            >
              <Calendar size={15} color="var(--color-antique-gold)" />
              <span>{date}</span>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.15rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '1.18rem',
                fontFamily: 'var(--font-couple)',
                fontWeight: 600,
                color: 'var(--color-antique-gold-dark)',
              }}
            >
              <Clock size={16} color="var(--color-antique-gold)" />
              <span>{time}</span>
            </div>
            {timeDescription && (
              <span
                style={{
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-charcoal-muted)',
                }}
              >
                ({timeDescription})
              </span>
            )}
          </div>
        </div>
      )}

      {/* INVITATION MODE: Smooth Jump to Venue Details & Navigation */}
      {isInvitationMode && (
        <a
          href="#find-your-way"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            marginTop: '0.5rem',
            padding: '0.4rem 0.8rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: badgeColor,
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'var(--transition-smooth)',
            opacity: 0.88,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.88';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <span>View Directions &amp; QR Code in Venue Details</span>
          <span style={{ fontSize: '0.85rem' }}>↓</span>
        </a>
      )}

      {/* Dynamic Scannable QR Code */}
      {shouldRenderQr && mapsUrl && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '1.25rem 0',
            padding: '1.1rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid var(--color-champagne-gold)',
            boxShadow: '0 4px 12px rgba(41, 40, 42, 0.05)',
          }}
        >
          <div style={{ padding: '0.35rem', backgroundColor: '#FFFFFF' }}>
            <QRCodeSVG
              value={mapsUrl}
              size={120}
              level="M"
              fgColor="#29282A"
              bgColor="#FFFFFF"
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: 'var(--color-deep-teal)',
              marginTop: '0.65rem',
              textTransform: 'uppercase',
            }}
          >
            {qrLabel}
          </span>
          <span style={{ fontSize: '0.65rem', color: '#777', marginTop: '0.15rem' }}>
            Scan with phone camera to navigate
          </span>
        </div>
      )}

      {/* Google Maps Direction Button */}
      {shouldRenderNavButton && mapsUrl && (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-nav-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            width: '100%',
            padding: '0.8rem clamp(0.65rem, 2.5vw, 1.25rem)',
            borderRadius: '4px',
            backgroundColor: isReception ? 'var(--color-dusty-rose-dark)' : 'var(--color-deep-teal)',
            color: 'var(--color-warm-ivory)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.7rem, 2vw, 0.82rem)',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 12px rgba(49, 91, 86, 0.2)',
            transition: 'var(--transition-smooth)',
            marginTop: '0.5rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(49, 91, 86, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(49, 91, 86, 0.2)';
          }}
        >
          <Navigation size={14} />
          <span>Open in Google Maps</span>
          <ExternalLink size={13} style={{ opacity: 0.7 }} />
        </a>
      )}
    </div>
  );
};
