import SectionShell, { sectionStyles as s } from '@/components/ui/SectionShell';
import { achievements } from '@/data/portfolio';
import styles from './AchievementsSection.module.css';

export default function AchievementsSection() {
  return (
    <SectionShell id="achievements" number="06" label="Achievements" heading="Recognition">
      <div className={styles.centered}>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th scope="col">Recognition</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((item) => (
                <tr key={item.recognition}>
                  <td>
                    <span className={s.highlight}>{item.recognition}</span>
                  </td>
                  <td>{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionShell>
  );
}
