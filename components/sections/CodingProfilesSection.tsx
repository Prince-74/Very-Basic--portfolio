import SectionShell from '@/components/ui/SectionShell';
import { codingProfiles } from '@/data/portfolio';
import styles from './CodingProfilesSection.module.css';

export default function CodingProfilesSection() {
  return (
    <SectionShell id="coding-profiles" number="08" label="Coding Profiles" heading="Problem Solving">
      <div className={styles.grid}>
        {codingProfiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.badge}
          >
            <span className={styles.name}>{profile.badge}</span>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
