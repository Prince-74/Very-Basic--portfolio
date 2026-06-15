import SectionShell from '@/components/ui/SectionShell';
import { profile } from '@/data/portfolio';
import styles from './GitHubAnalyticsSection.module.css';

const username = profile.githubUsername;
const theme = 'radical';

const stats = [
  {
    alt: 'GitHub stats',
    src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0d1117&title_color=c4b5fd&icon_color=ff9d55&text_color=f8efe3`,
  },
  {
    alt: 'GitHub streak stats',
    src: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=0d1117&ring=c4b5fd&fire=ff9d55&currStreakLabel=c4b5fd&sideLabels=f8efe3&dates=f8efe3`,
  },
  {
    alt: 'Top languages',
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&bg_color=0d1117&title_color=c4b5fd&text_color=f8efe3`,
  },
];

export default function GitHubAnalyticsSection() {
  return (
    <>
      <SectionShell id="github-analytics" number="09" label="GitHub Analytics" heading="Code Activity">
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <img key={stat.alt} src={stat.src} alt={stat.alt} className={styles.stat} loading="lazy" />
          ))}
        </div>
      </SectionShell>

      <SectionShell id="github-trophies" number="10" label="GitHub Trophies" heading="Milestones">
        <div className={styles.trophyWrap}>
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&no-frame=true&column=4&margin-w=8&margin-h=8`}
            alt="GitHub profile trophies"
            className={styles.trophy}
            loading="lazy"
          />
        </div>
      </SectionShell>

      <SectionShell id="contributions" number="11" label="Contribution Activity" heading="Commit Graph">
        <div className={styles.graphWrap}>
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=0d1117&color=c4b5fd&line=ff9d55&point=f8efe3&area=true`}
            alt="GitHub contribution activity graph"
            className={styles.graph}
            loading="lazy"
          />
        </div>
      </SectionShell>

      <SectionShell id="contribution-snake" number="12" label="Contribution Snake" heading="Year in Motion">
        <div className={styles.snakeWrap}>
          <img
            src={`https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg`}
            alt="GitHub contribution snake animation"
            className={styles.snake}
            loading="lazy"
          />
          <p className={styles.snakeNote}>
            Requires the contribution snake GitHub Action on your profile repo. Update{' '}
            <code>githubUsername</code> in <code>data/portfolio.ts</code> to match your account.
          </p>
        </div>
      </SectionShell>
    </>
  );
}
