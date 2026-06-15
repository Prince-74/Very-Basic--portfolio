import SectionShell, { sectionStyles as s } from '@/components/ui/SectionShell';
import { currentFocus } from '@/data/portfolio';
import styles from './CurrentFocusSection.module.css';

const yaml = `learning:
${currentFocus.learning.map((item) => `  - ${item}`).join('\n')}
building:
${currentFocus.building.map((item) => `  - ${item}`).join('\n')}
exploring:
${currentFocus.exploring.map((item) => `  - ${item}`).join('\n')}
open_to:
${currentFocus.openTo.map((item) => `  - ${item}`).join('\n')}`;

export default function CurrentFocusSection() {
  return (
    <SectionShell id="current-focus" number="09" label="Current Focus" heading="Now">
      <pre className={styles.yaml}>
        <code>{yaml}</code>
      </pre>
      <hr className={s.divider} />
      <div className={s.gridTwo}>
        <div>
          <p className={s.label}>Learning</p>
          <div className={s.tags}>
            {currentFocus.learning.map((item) => (
              <span key={item} className={s.tag}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className={s.label}>Building</p>
          <div className={s.tags}>
            {currentFocus.building.map((item) => (
              <span key={item} className={s.tag}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className={s.label}>Exploring</p>
          <div className={s.tags}>
            {currentFocus.exploring.map((item) => (
              <span key={item} className={s.tag}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className={s.label}>Open To</p>
          <div className={s.tags}>
            {currentFocus.openTo.map((item) => (
              <span key={item} className={s.tag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
