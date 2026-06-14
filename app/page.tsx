import VideoIntro from '@/components/VideoIntro';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <VideoIntro videoSrc="/talking-head.mp4" />
      <section id="story" className={styles.storySection} aria-label="Portfolio overview">
        <p className={styles.eyebrow}>Beyond the intro</p>
        <h2>Building human-centered AI products with cinematic care.</h2>
        <p>
          I craft interfaces where engineering discipline meets emotional storytelling — from intelligent systems to polished frontend experiences.
        </p>
      </section>
    </main>
  );
}
