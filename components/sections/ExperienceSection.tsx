import SectionShell, { sectionStyles as s } from '@/components/ui/SectionShell';
import { experience } from '@/data/portfolio';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <SectionShell id="experience" number="05" label="Experience" heading="Career Journey">
      <div className={styles.timeline}>
        {experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className={styles.job}>
            <div className={styles.jobHeader}>
              <div>
                <h3 className={styles.title}>{job.title}</h3>
                <p className={styles.company}>{job.company}</p>
              </div>
              <time className={styles.period}>{job.period}</time>
            </div>
            <p className={s.bodyText}>{job.description}</p>
            <ul className={styles.bullets}>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className={s.tags}>
              {job.skills.map((skill) => (
                <span key={skill} className={s.tag}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
