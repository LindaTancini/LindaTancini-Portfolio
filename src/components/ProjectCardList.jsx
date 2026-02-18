// Importazioni
import ProjectCard from "./ProjectCard";
import dataProjectsCard from "../data/dataProjectsCard";

function ProjectCardList() {
  return (
    <div className="container">
      <div className="row g-4">
        {dataProjectsCard.map((project) => (
          <div className="col-md-4" key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCardList;
