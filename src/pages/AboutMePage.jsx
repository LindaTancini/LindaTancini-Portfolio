// Importazioni
import AboutSection from "./AboutSection";
import aboutSections from "../data/dataAboutMe";

function AboutMePage() {
  return (
    <>
      {/* Titolo */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-4">About Me</h1>
        </div>
      </section>

      {aboutSections.map((section, index) => (
        <AboutSection
          key={section.id}
          subtitle={section.subtitle}
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
