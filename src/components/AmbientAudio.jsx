import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Volume1, Music, Play, Pause, ChevronUp, ChevronDown, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Custom Luxury Music Player
 * Integrates locally supplied audio file at `/public/audio/love-story.mp3`
 * Features:
 * - 100% custom-designed stationery UI (zero external player branding)
 * - Play/Pause button and volume control slider
 * - Subtle sound wave animation when playing
 * - Transparent unavailable-audio state when file is missing
 * - No autoplay before user gesture
 * - Mobile responsive
 */
export const AmbientAudio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioStatus, setAudioStatus] = useState('checking'); // 'checking' | 'ready' | 'missing'

  const audioRef = useRef(null);

  // Check if `/audio/love-story.mp3` exists on mount
  useEffect(() => {
    const audio = new Audio('/audio/love-story.mp3');

    const handleCanPlay = () => {
      setAudioStatus('ready');
      setDuration(audio.duration || 0);
    };

    const handleError = () => {
      setAudioStatus('missing');
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    // Initial fetch check
    fetch('/audio/love-story.mp3', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setAudioStatus('ready');
        } else {
          setAudioStatus('missing');
        }
      })
      .catch(() => {
        setAudioStatus('missing');
      });

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    if (audioStatus !== 'ready') return;
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
        setIsPlaying(false);
      });
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume > 0 ? volume : 0.8;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      className="custom-music-player-container"
      style={{
        position: 'fixed',
        top: 'clamp(0.75rem, 2.5vw, 1.25rem)',
        right: 'clamp(0.75rem, 2.5vw, 1.25rem)',
        zIndex: 100,
      }}
    >
      {/* Hidden Native Audio Element */}
      {audioStatus === 'ready' && (
        <audio
          ref={audioRef}
          src="/audio/love-story.mp3"
          preload="metadata"
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Floating Pill Trigger */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.5rem clamp(0.65rem, 2vw, 1rem)',
          borderRadius: '30px',
          backgroundColor: 'rgba(247, 241, 231, 0.94)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--color-champagne-gold)',
          color: 'var(--color-classic-black)',
          boxShadow: '0 6px 18px rgba(41, 40, 42, 0.12)',
          cursor: 'pointer',
          fontFamily: 'var(--font-couple)',
          fontSize: 'clamp(0.66rem, 1.8vw, 0.74rem)',
          letterSpacing: '0.12em',
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}
        aria-label="Toggle Wedding Music Player"
      >
        <Music size={15} color="var(--color-antique-gold)" />
        <span style={{ textTransform: 'uppercase' }}>Love Story</span>

        {/* Animated Sound Wave Bars when playing */}
        {isPlaying ? (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px', margin: '0 2px' }}>
            <motion.div
              animate={{ height: ['4px', '14px', '6px'] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
              style={{ width: '2px', backgroundColor: 'var(--color-deep-teal)', borderRadius: '1px' }}
            />
            <motion.div
              animate={{ height: ['12px', '4px', '14px'] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
              style={{ width: '2px', backgroundColor: 'var(--color-antique-gold)', borderRadius: '1px' }}
            />
            <motion.div
              animate={{ height: ['6px', '14px', '8px'] }}
              transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
              style={{ width: '2px', backgroundColor: 'var(--color-deep-teal)', borderRadius: '1px' }}
            />
          </div>
        ) : isMuted ? (
          <VolumeX size={14} color="var(--color-charcoal-muted)" />
        ) : (
          <Volume2 size={14} color="var(--color-deep-teal)" />
        )}

        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </motion.button>

      {/* Expandable Custom Music Player Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 0.5rem)',
              right: 0,
              width: 'min(320px, calc(100vw - 1.5rem))',
              maxWidth: 'calc(100vw - 1.5rem)',
              padding: 'clamp(1rem, 3.5vw, 1.4rem)',
              borderRadius: '12px',
              backgroundColor: 'var(--color-warm-ivory)',
              border: '1px solid var(--color-champagne-gold)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {/* Header info */}
            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.66rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  color: 'var(--color-antique-gold-dark)',
                  textTransform: 'uppercase',
                }}
              >
                OUR WEDDING SONG
              </span>
              <h4
                style={{
                  fontFamily: 'var(--font-couple)',
                  fontSize: '1.25rem',
                  color: 'var(--color-classic-black)',
                  margin: '0.25rem 0 0.1rem',
                  fontWeight: 600,
                }}
              >
                Love Story
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '0.86rem',
                  color: 'var(--color-charcoal-muted)',
                }}
              >
                Taylor Swift &bull; Fearless
              </p>
            </div>

            {/* Audio File Status Handling */}
            {audioStatus === 'ready' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  padding: '1rem',
                  backgroundColor: 'var(--color-warm-ivory-light)',
                  borderRadius: '8px',
                  border: '1px solid rgba(232, 213, 183, 0.7)',
                }}
              >
                {/* Play/Pause & Time */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={togglePlay}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-deep-teal)',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      border: 'none',
                      boxShadow: '0 4px 10px rgba(49, 91, 86, 0.3)',
                    }}
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: 2 }} />}
                  </button>

                  <div style={{ textAlign: 'right' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--color-deep-teal)',
                      }}
                    >
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.65rem',
                        color: '#777',
                        marginTop: '0.1rem',
                      }}
                    >
                      {isPlaying ? 'Playing' : 'Ready'}
                    </span>
                  </div>
                </div>

                {/* Volume Slider Control */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.2rem' }}>
                  <button
                    type="button"
                    onClick={toggleMute}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX size={16} color="var(--color-charcoal-muted)" />
                    ) : volume < 0.5 ? (
                      <Volume1 size={16} color="var(--color-deep-teal)" />
                    ) : (
                      <Volume2 size={16} color="var(--color-deep-teal)" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    style={{
                      flex: 1,
                      accentColor: 'var(--color-antique-gold)',
                      cursor: 'pointer',
                    }}
                    aria-label="Volume slider"
                  />
                  <span style={{ fontSize: '0.68rem', color: '#666', minWidth: '28px', textAlign: 'right' }}>
                    {Math.round((isMuted ? 0 : volume) * 100)}%
                  </span>
                </div>
              </div>
            ) : (
              /* Clear Unavailable State (When local audio file is missing) */
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(232, 213, 183, 0.25)',
                  borderRadius: '8px',
                  border: '1px dashed var(--color-champagne-gold)',
                  textAlign: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: 'var(--color-antique-gold-dark)' }}>
                  <AlertCircle size={15} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.74rem', fontWeight: 600 }}>
                    Audio File Awaiting Placement
                  </span>
                </div>
                <p style={{ fontSize: '0.72rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.45, margin: 0 }}>
                  To enable music playback, place your licensed <strong>love-story.mp3</strong> file in:
                </p>
                <code
                  style={{
                    fontSize: '0.68rem',
                    backgroundColor: '#FFFFFF',
                    padding: '0.35rem 0.5rem',
                    borderRadius: '4px',
                    border: '1px solid var(--color-champagne-gold)',
                    color: 'var(--color-deep-teal)',
                    wordBreak: 'break-all',
                  }}
                >
                  /public/audio/love-story.mp3
                </code>
                <span style={{ fontSize: '0.66rem', color: '#888', fontStyle: 'italic', marginTop: '0.1rem' }}>
                  Playback is disabled until the audio file is added.
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
