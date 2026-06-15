import SectionShell, { sectionStyles as s } from '@/components/ui/SectionShell';
import { aiExpertise } from '@/data/portfolio';

export default function AIMLSection() {
  return (
    <SectionShell id="ai-ml" number="03" label={aiExpertise.label} heading={aiExpertise.heading}>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th scope="col">Domain</th>
              <th scope="col">Proficiency</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {aiExpertise.rows.map((row) => (
              <tr key={row.domain}>
                <td>{row.domain}</td>
                <td>
                  <span className={s.highlight}>{row.proficiency}</span>
                </td>
                <td>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
