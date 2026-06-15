import SectionShell from '@/components/ui/SectionShell';
import { profile } from '@/data/portfolio';
import styles from './ConnectSection.module.css';

const links = [
  { label: 'Gmail', href: `mailto:${profile.email}`, external: false },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'GitHub', href: profile.github, external: true },
  { label: 'Portfolio', href: profile.portfolio, external: true },
] as const;

export default function ConnectSection() {
  return (
    <SectionShell id="connect" number="10" label="Connect" heading="Let's Talk">
      <div className={styles.grid}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.link}
            {...(link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            <span>{link.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
