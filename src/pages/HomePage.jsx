import HeroSection from "../components/HeroSection";
import ProjectHomePreview from "../components/ProjectHomePreview";
import SkillsCarousel from "../components/SkillsCarousel";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <SkillsCarousel />
      <ProjectHomePreview />
    </div>
  );
}

export default HomePage;
