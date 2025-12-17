// Importazioni
import skills from "../data/skills";

//
function SkillsCarousel() {
  return (
    <section className="skills-section">
      <h2 className="text-center mb-5">Skill set:</h2>
      {/*  Wrapper per il carosello delle skill */}
      <div className="skills-wrapper overflow-hidden">
        <div className="skills-track d-flex align-items-center">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-item text-center">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsCarousel;
