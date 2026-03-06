// Importazioni
import { useParams } from "react-router-dom";
import dataProjectsCard from "../data/dataProjectsCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectsDetailsPage() {
  // Ottengo lo slug dai parametri dell'URL e cerco il progetto corrispondente nei dati
  const { slug } = useParams();
  // Trova il progetto con lo slug corrispondente
  const project = dataProjectsCard.find((proj) => proj.slug === slug);

  // Se non viene trovato nessun progetto, mostro un messaggio di errore
  if (!project) {
    return (
      <div>
        <h2>Progetto non trovato</h2>
      </div>
    );
  }

  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Immagine principale */}

      <div className="row project-hero align-items-start mb-5">
        <h1 className="project-detailtitle text-center ">{project.title}</h1>
        <p className="project-detaildescription mt-3 mb-4 text-center ">
          {project.description}
        </p>
        <div className="col-lg-7 mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid project-hero-img"
          />
        </div>

        {/* Info Progetto */}

        <div className="col-lg-5">
          <div className="project-info-card">
            <h1 className="project-semititle">Dettagli progetto</h1>
            <p className="project-fulldescription">{project.fullDescription}</p>

            {/* Meta Info*/}

            <div className="project-meta">
              <p>
                <strong>Anno:</strong> {project.year}
              </p>

              <p>
                <strong>Ruolo:</strong> {project.role}
              </p>

              <p>
                <strong>Durata:</strong> {project.duration}
              </p>
            </div>

            {/* Tecnologie */}

            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* GITHUB */}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-github mt-3"
            >
              Vedi su GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Sfide affrontate */}

      {project.challenges && (
        <div className="project-challenges">
          <h3 className="mb-3">Sfide affrontate</h3>

          <ul>
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Galleria */}

      {project.gallery && (
        <div className="project-gallery mt-5">
          <h3 className="mb-4">Galleria</h3>

          <div className="row">
            {project.gallery.map((img, index) => (
              <div key={index} className="col-md-4 mb-4">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="img-fluid gallery-img"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* TORNA AI PROGETTI */}
      <div className="text-center mb-5 mt-4">
        <Link to="/projects" className="btn btn-back ">
          ← Torna ai progetti
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectsDetailsPage;
