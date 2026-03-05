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
      <Link to="/projects" className="btn btn-outline-secondary mb-4">
        ← Torna ai progetti
      </Link>

      {/* Titolo e Descrizione */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="mb-3">{project.title}</h1>
          <p className="lead">{project.fullDescription}</p>

          {/* Informazioni di base */}
          <div className="mt-4">
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
          <div className="mt-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="badge bg-secondary me-2">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
      </div>

      {/* Challenges */}
      <div className="mb-5">
        <h3 className="mb-3">Sfide affrontate</h3>
        <ul>
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Galleria Immagini */}
      <div>
        <h3 className="mb-4">Galleria</h3>
        <div className="row">
          {project.gallery.map((img, index) => (
            <div key={index} className="col-md-4 mb-4">
              <img
                src={img}
                alt={`Screenshot ${index + 1}`}
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsDetailsPage;
