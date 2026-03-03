// Importazioni
import AboutSection from "./AboutSection";
import aboutSections from "../data/dataAboutMe";

function AboutMePage() {
  return (
    <>
      {aboutSections.map((section, index) => (
        <AboutSection
          key={index}
          title={section.title}
          image={section.image}
          reverse={index % 2 !== 0}
        >
          <p>{section.text}</p>
        </AboutSection>
      ))}
    </>
  );
}

export default AboutMePage;
