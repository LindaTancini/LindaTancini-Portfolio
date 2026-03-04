function SkillsBlock({ icon, skill, type }) {
  return (
    <div className={`skill-block ${type}`}>
      <span className="skill-icon">{icon}</span>
      <span className="skill-name">{skill}</span>
    </div>
  );
}

export default SkillsBlock;
