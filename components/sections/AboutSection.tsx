import SectionShell, { sectionStyles as s } from '@/components/ui/SectionShell';
import { about } from '@/data/portfolio';

type BioPart = string | { highlight: string };

function renderBio(parts: readonly BioPart[]) {
  return parts.map((part, index) =>
    typeof part === 'string' ? (
      part
    ) : (
      <span key={index} className={s.highlight}>
        {part.highlight}
      </span>
    ),
  );
}

export default function AboutSection() {
  return (
    <SectionShell id="about" number="01" label={about.label} heading={about.heading}>
      <p className={s.bodyText}>{renderBio(about.bio)}</p>
      <hr className={s.divider} />
      <p className={s.label}>Open To</p>
      <div className={s.tags}>
        {about.openTo.map((item) => (
          <span key={item} className={s.tag}>
            {item}
          </span>
        ))}
      </div>
      <div className={s.tags}>
        {about.tags.map((tag) => (
          <span key={tag} className={s.tag}>
            {tag}
          </span>
        ))}
      </div>
    </SectionShell>
  );
}
