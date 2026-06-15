import SectionShell, { sectionStyles as s } from '@/components/ui/SectionShell';
import { projects } from '@/data/portfolio';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  return (
    <SectionShell id="projects" number="04" label="Featured Projects" heading="Selected Work">
      <div className={styles.list}>
        {projects.map((project) => (
          <details key={project.name} className={styles.project}>
            <summary className={styles.summary}>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.chevron} aria-hidden="true" />
            </summary>
            <div className={styles.body}>
              <p className={s.bodyText}>{project.description}</p>
              <div className={s.tableWrap}>
                <table className={s.table}>
                  <tbody>
                    <tr>
                      <th scope="row">Stack</th>
                      <td>{project.stack}</td>
                    </tr>
                    <tr>
                      <th scope="row">Scale</th>
                      <td>{project.scale}</td>
                    </tr>
                    <tr>
                      <th scope="row">Performance</th>
                      <td>{project.performance}</td>
                    </tr>
                    <tr>
                      <th scope="row">Security</th>
                      <td>{project.security}</td>
                    </tr>
                    <tr>
                      <th scope="row">Impact</th>
                      <td>{project.impact}</td>
                    </tr>
                    <tr>
                      <th scope="row">Repository</th>
                      <td>
                        <a href={project.repository} target="_blank" rel="noreferrer noopener" className={styles.link}>
                          View on GitHub ↗
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
