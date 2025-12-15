// Importazioni
import dataProjectsHome from "../data/dataProjectsHome";
import { Link } from "react-router-dom";

// ProjectHomePreview Component
function ProjectHomePreview() {
  return (
    <section className="projects-preview py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {dataProjectsHome.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              {/* Card progetti */}
              <div className="project-card">
                {/* Immagine */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                {/* Titolo e Descrizione */}
                <h5 className="mt-3">{project.title}</h5>
                <p>{project.description}</p>
                {/* Bottone */}
                <Link to="/projects" className="btn btn-outline-pink mt-2">
                  Scopri di più
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectHomePreview;
