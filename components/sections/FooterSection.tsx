import { footerQuote, profile } from '@/data/portfolio';
import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <p className={styles.quote}>&ldquo;{footerQuote}&rdquo;</p>
      <div className={styles.banner} aria-hidden="true">
        <span>{profile.name.toUpperCase()}</span>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, GSAP & Three.js.
      </p>
    </footer>
  );
}
