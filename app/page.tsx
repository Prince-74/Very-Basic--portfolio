import VideoIntro from '@/components/VideoIntro';
import AboutSection from '@/components/sections/AboutSection';
import TechStackSection from '@/components/sections/TechStackSection';
import AIMLSection from '@/components/sections/AIMLSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import CodingProfilesSection from '@/components/sections/CodingProfilesSection';
import CurrentFocusSection from '@/components/sections/CurrentFocusSection';
import ConnectSection from '@/components/sections/ConnectSection';
import FooterSection from '@/components/sections/FooterSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <VideoIntro videoSrc="/talking-head.mp4" />
      <div className={styles.sections}>
        <AboutSection />
        <TechStackSection />
        <AIMLSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <CertificationsSection />
        <CodingProfilesSection />
        <CurrentFocusSection />
        <ConnectSection />
        <FooterSection />
      </div>
    </main>
  );
}
