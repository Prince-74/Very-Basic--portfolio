'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { profile } from '@/data/portfolio';
import CinematicLayer from './CinematicLayer';
import styles from './VideoIntro.module.css';

type VideoIntroProps = { videoSrc: string };

export default function VideoIntro({ videoSrc }: VideoIntroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(true);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo(`.${styles.videoWrap}`, { opacity: 0, scale: 1.045 }, { opacity: 1, scale: 1, duration: 1.7 })
        .fromTo(`.${styles.eyebrow}, .${styles.nameLine}, .${styles.subtitle}`, { y: 42, opacity: 0, filter: 'blur(16px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.15, stagger: 0.13 }, '-=1.0')
        .fromTo(`.${styles.controls}, .${styles.scrollCue}`, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 }, '-=0.55');
    }, rootRef);

    const timer = window.setTimeout(() => setShowSoundHint(false), 5200);
    return () => {
      window.clearTimeout(timer);
      context.revert();
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    setShowSoundHint(false);
    if (!nextMuted && video.paused) {
      await video.play();
      setIsPlaying(true);
    }
  };

  const scrollToSection = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section ref={rootRef} className={styles.hero} aria-label="Cinematic portfolio introduction">
      <div className={styles.videoWrap}>
        <video className={styles.ambientVideo} src={videoSrc} autoPlay muted loop playsInline aria-hidden="true" />
        <video ref={videoRef} className={styles.heroVideo} src={videoSrc} autoPlay muted={isMuted} loop playsInline onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      </div>
      <div className={styles.gradientBase} />
      <div className={styles.gradientReadability} />
      <CinematicLayer />

      <div className={styles.content}>
        {profile.openToWork && (
          <span className={styles.openBadge}>
            <span className={styles.openDot} aria-hidden="true" />
            Open to work
          </span>
        )}
        <p className={styles.eyebrow}>{profile.eyebrow}</p>
        <h1 className={styles.title}>
          <span className={styles.nameLine}>{profile.firstName}</span>
          <span className={styles.nameLine}>{profile.lastName}</span>
        </h1>
        <p className={styles.role}>{profile.title}</p>
        <div className={styles.heroTags}>
          {profile.heroTags.map((tag) => (
            <span key={tag} className={styles.heroTag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.subtitle}>{profile.tagline}</p>
        <div className={styles.ctaRow}>
          <button type="button" onClick={() => scrollToSection('#projects')} className={styles.primaryCta}>
            View Projects
          </button>
          <a href={profile.github} target="_blank" rel="noreferrer noopener" className={styles.secondaryCta}>
            GitHub ↗
          </a>
        </div>
      </div>

      <div className={styles.controls} aria-label="Video controls">
        <button type="button" onClick={togglePlayback} className={styles.controlButton} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button type="button" onClick={toggleMute} className={styles.controlButton} aria-label={isMuted ? 'Unmute video' : 'Mute video'}>
          {isMuted ? 'Sound on' : 'Mute'}
        </button>
      </div>

      {showSoundHint && <button type="button" onClick={toggleMute} className={styles.soundHint}>Tap for sound</button>}

      <button type="button" onClick={() => scrollToSection('#about')} className={styles.scrollCue} aria-label="Scroll to next section">
        <span />
        <small>Scroll</small>
      </button>
    </section>
  );
}
