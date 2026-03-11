import dataProjectsHome from "../data/dataProjectsHome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectHomePreview() {
  return (
    <section className="projects-preview py-5">
      <motion.h2
        className="project-home-title text-center mb-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Progetti in evidenza
      </motion.h2>
      <motion.p
        className="text-center project-home-intro"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        Alcuni dei miei progetti più recenti e significativi. Clicca su "Scopri
        di più" per vedere i dettagli di ciascun progetto 🐱
      </motion.p>

      <div className="container">
        <div className="row">
          {dataProjectsHome.map((project) => (
            <div key={project.slug} className="col-md-4 mb-4">
              <motion.div
                className="project-card card h-100 border-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
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
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectHomePreview;
