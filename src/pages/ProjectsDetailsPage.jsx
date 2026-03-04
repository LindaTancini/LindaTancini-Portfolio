// Importazioni
import { useParams } from "react-router-dom";
import dataProjectsCard from "../data/dataProjectsCard";

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
    <div className="container py-5">
      <h1 className="text-center">{project.title}</h1>
      <img src={project.image} alt={project.title} className="img-fluid my-4" />
      <p>{project.description}</p>
      <p>Categoria: {project.category}</p>
    </div>
  );
}

export default ProjectsDetailsPage;
