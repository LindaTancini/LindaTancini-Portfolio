// Importazioni
import { useParams } from "react-router-dom";
import dataProjectsCard from "../data/dataProjectsCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectsDetailsPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
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

  // Funzioni per gestire l'apertura e la chiusura dell'overlay, e per navigare tra le immagini della galleria
  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  // Funzioni per navigare tra le immagini della galleria
  const prevImage = (e) => {
    e.stopPropagation(); // impedisce di chiudere l'overlay
    setSelectedIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  // Funzione per passare all'immagine successiva
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  // ESC per chiudere l'overlay
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeImage();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Immagine principale */}

      <div className="row project-hero align-items-start mb-5">
        <motion.h1
          className="project-detailtitle text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {project.title}
        </motion.h1>
        <motion.p
          className="project-detaildescription mt-3 mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          {project.description}
        </motion.p>
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
          <h3 className="project-semititle mb-3">Sfide affrontate</h3>
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
          <motion.h3
            className="project-semititle text-center mb-4 fs-1"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Galleria
          </motion.h3>
          <motion.p
            className="project-detaildescription text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Vuoi dare un’occhiata più da vicino al progetto? Ecco alcune
            immagini!
          </motion.p>

          <div
            id="projectCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {project.gallery.map((imgObj, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={imgObj.src}
                    className="d-block w-100 gallery-carousel-img"
                    alt={imgObj.title}
                    onClick={() => openImage(index)}
                  />

                  <div className="carousel-caption">
                    <p>{imgObj.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Freccia sinistra */}

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            {/* Freccia destra */}

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      )}

      {/* Lightbox Overlay */}

      {selectedIndex !== null && (
        <div className="image-overlay" onClick={closeImage}>
          <button className="lightbox-arrow left" onClick={prevImage}>
            &#10094;
          </button>

          <div className="lightbox-content">
            <img
              src={project.gallery[selectedIndex].src}
              alt={project.gallery[selectedIndex].title}
              className="image-preview"
            />

            <p className="lightbox-title">
              {project.gallery[selectedIndex].title}
            </p>
          </div>

          <button className="lightbox-arrow right" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      )}

      {/* TORNA AI PROGETTI */}

      <div className="text-center mb-5 mt-5">
        <Link to="/projects" className="btn btn-back">
          ← Torna ai progetti
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectsDetailsPage;
