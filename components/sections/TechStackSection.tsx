import SectionShell, { sectionStyles as s } from '@/components/ui/SectionShell';
import { techStack } from '@/data/portfolio';
import styles from './TechStackSection.module.css';

export default function TechStackSection() {
  return (
    <SectionShell id="tech-stack" number="02" label={techStack.label} heading={techStack.heading}>
      <div className={styles.grid}>
        {techStack.categories.map((category) => (
          <article key={category.title} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={s.tags}>
              {category.items.map((item) => (
                <span key={item} className={styles.skill}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
