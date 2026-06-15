import SectionShell, { sectionStyles as s } from '@/components/ui/SectionShell';
import { certifications } from '@/data/portfolio';
import styles from './CertificationsSection.module.css';

const groups = [
  { provider: 'AWS', items: certifications.aws },
  { provider: 'Oracle', items: certifications.oracle },
  { provider: 'NPTEL', items: certifications.nptel },
  { provider: 'Cisco', items: certifications.cisco },
] as const;

export default function CertificationsSection() {
  return (
    <SectionShell id="certifications" number="07" label="Certifications" heading="Credentials">
      <div className={styles.grid}>
        {groups.map((group) => (
          <article key={group.provider} className={styles.group}>
            <h3 className={styles.provider}>{group.provider}</h3>
            <div className={s.tags}>
              {group.items.map((cert) => (
                <span key={cert} className={styles.badge}>
                  {cert}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
