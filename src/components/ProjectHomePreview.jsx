import dataProjectsHome from "../data/dataProjectsHome";
import { Link } from "react-router-dom";

function ProjectHomePreview() {
  return (
    <section className="projects-preview py-5">
      <h2 className="project-home-title text-center mb-3">
        Progetti in evidenza
      </h2>
      <p className="text-center project-home-intro">
        Alcuni dei miei progetti più recenti e significativi. Clicca su "Scopri
        di più" per vedere i dettagli di ciascun progetto 🐱
      </p>

      <div className="container">
        <div className="row">
          {dataProjectsHome.map((project) => (
            <div key={project.slug} className="col-md-4 mb-4">
              <div className="project-card card h-100 border-0">
                {/* Immagine */}
                <img
                  src={project.image}
                  className="card-img-top project-img"
                  alt={project.title}
                />

                <div className="card-body d-flex flex-column p-4">
                  {/* Titolo */}
                  <h5 className="card-title project-title">{project.title}</h5>

                  {/* Badge */}
                  <span className="badge project-badge mb-2">
                    {project.category}
                  </span>

                  {/* Descrizione */}
                  <p className="card-text project-description">
                    {project.description}
                  </p>

                  {/* Bottone */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="btn btn-project mt-auto"
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectHomePreview;
