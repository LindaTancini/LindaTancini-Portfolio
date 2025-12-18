// Importazioni
import skills from "../data/skills";

// Skills component
function SkillsCarousel() {
  return (
    <section className="py-4">
      <h2 className="text-center mb-4">Skill set</h2>

      <div className="overflow-hidden">
        <div className="d-flex align-items-center skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="text-center flex-shrink-0 px-3">
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon mx-auto d-block"
              />
              <small className="skill-text d-block mt-2">{skill.name}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsCarousel;
