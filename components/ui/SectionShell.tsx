import type { ReactNode } from 'react';
import styles from './SectionShell.module.css';

type SectionShellProps = {
  id: string;
  number: string;
  label: string;
  heading: string;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({ id, number, label, heading, children, className }: SectionShellProps) {
  return (
    <section id={id} className={`${styles.section} ${className ?? ''}`.trim()} aria-labelledby={`${id}-heading`}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.header}>
            <p className={styles.label}>{label}</p>
            <p className={styles.number} aria-hidden="true">
              {number}
            </p>
          </div>
          <h2 id={`${id}-heading`} className={styles.heading}>
            {heading}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export { styles as sectionStyles };
