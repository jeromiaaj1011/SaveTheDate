import React, { useState } from 'react';
import { weddingDetails } from './config/weddingDetails';
import { Envelope } from './components/Envelope';
import { AmbientAudio } from './components/AmbientAudio';
import { InvitationReveal } from './sections/InvitationReveal';
import { CoupleSection } from './sections/CoupleSection';
import { SaveTheDate } from './sections/SaveTheDate';
import { WeddingSection } from './sections/WeddingSection';
import { ReceptionSection } from './sections/ReceptionSection';
import { LocationSection } from './sections/LocationSection';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
    // Smooth scroll down into the invitation reveal after card emerges
    setTimeout(() => {
      const target = document.getElementById('invitation-reveal');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1800);
  };

  return (
    <div className="wedding-app-root" style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      {/* Ambient Audio Player: Taylor Swift - Love Story */}
      <AmbientAudio />

      {/* SCENE 1 — THE SEALED ENVELOPE (With Physical Emerging Card) */}
      <Envelope
        isOpen={isEnvelopeOpen}
        onOpen={handleEnvelopeOpen}
        verseText={weddingDetails.bibleVerse.text}
        verseRef={weddingDetails.bibleVerse.reference}
        monogram={weddingDetails.couple.monogram}
      />

      {/* CONTINUOUS WEDDING INVITATION FLOW */}
      <main id="main-invitation-flow" style={{ width: '100%', position: 'relative' }}>
        {/* SCENE 2 — YOU'RE CORDIALLY INVITED (Distinctive Rosalina Heading) */}
        <InvitationReveal />

        {/* SCENE 3 — THE COUPLE (Cinzel & Pinyon Script) */}
        <CoupleSection
          tagline={weddingDetails.couple.tagline}
          groom={weddingDetails.couple.groom}
          bride={weddingDetails.couple.bride}
        />

        {/* SCENE 4 — INTERACTIVE SAVE THE DATE (SCRATCH CARD) */}
        <SaveTheDate
          dayOfWeek={weddingDetails.date.dayOfWeek}
          day={weddingDetails.date.day}
          month={weddingDetails.date.month}
          year={weddingDetails.date.year}
          time={weddingDetails.ceremony.timeDisplay}
          venue={`${weddingDetails.ceremony.venueName}, ${weddingDetails.ceremony.location}`}
        />

        {/* SCENE 5 — THE WEDDING CEREMONY */}
        <WeddingSection
          title={weddingDetails.ceremony.title}
          dateText={weddingDetails.date.fullDateText}
          time={weddingDetails.ceremony.timeDisplay}
          timeDescription={weddingDetails.ceremony.timeDescription}
          venueName={weddingDetails.ceremony.venueName}
          location={weddingDetails.ceremony.location}
          addressFull={weddingDetails.ceremony.addressFull}
          mapsUrl={weddingDetails.ceremony.mapsUrl}
          qrLabel={weddingDetails.ceremony.qrLabel}
        />

        {/* SCENE 6 — THE RECEPTION */}
        <ReceptionSection
          title={weddingDetails.reception.title}
          dateText={weddingDetails.date.fullDateText}
          time={weddingDetails.reception.timeDisplay}
          timeDescription={weddingDetails.reception.timeDescription}
          venueName={weddingDetails.reception.venueName}
          location={weddingDetails.reception.location}
          addressFull={weddingDetails.reception.addressFull}
          mapsUrl={weddingDetails.reception.mapsUrl}
          qrLabel={weddingDetails.reception.qrLabel}
        />

        {/* SCENE 7 — FIND YOUR WAY & CLOSING */}
        <LocationSection
          heading={weddingDetails.closing.title}
          signature={weddingDetails.closing.signature}
          ceremony={weddingDetails.ceremony}
          reception={weddingDetails.reception}
        />
      </main>
    </div>
  );
}
