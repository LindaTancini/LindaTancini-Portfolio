import SkillsBlock from "../components/SkillsBlock";
import { aboutSections, skills } from "../data/dataAboutMe";
import AboutSection from "./AboutSection";
import { motion } from "framer-motion";

function AboutMePage() {
  return (
    <>
      {/* Titolo  */}
      <section className="py-5 text-center">
        <div className="container">
          <motion.h1
            className="display-4 mb-3"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Un mondo di pixel e fusa
          </motion.h1>
          <motion.p
            className="about-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Linda è una sviluppatrice front-end appassionata di interfacce
            moderne, animazioni e design pulito.
          </motion.p>
        </div>
      </section>

      {/* Sezioni narrative */}
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

      {/* Sezione Skills */}
      <section className="py-5">
        <div className="container">
          <h2 className="about-title text-center mb-5">
            Competenze tecniche e Soft Skill
          </h2>

          {/* Hard Skills */}
          {Object.entries(skills.hard).map(([category, skillList]) => (
            <div key={category} className="mb-4">
              <h3 className="mb-3 text-category">{category}</h3>

              <div className="skills-grid">
                {skillList.map((skill, index) => (
                  <SkillsBlock
                    key={index}
                    icon="🌸"
                    skill={skill}
                    type="hard"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills */}
          <div className="mt-5">
            <h3 className="mb-3 text-category">Soft Skills</h3>
            <div className="skills-grid">
              {skills.soft.map((skill, index) => (
                <SkillsBlock key={index} icon="🐾" skill={skill} type="soft" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMePage;
