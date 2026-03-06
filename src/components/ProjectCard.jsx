//Importazioni
import { Link } from "react-router-dom";

function ProjectCard({ title, description, image, category, slug }) {
  return (
    <div className="project-card card h-100 border-0">
      {/* Immagine */}
      <img src={image} className="card-img-top project-img" alt={title} />

      <div className="card-body d-flex flex-column p-4">
        {/* Titolo */}
        <h5 className="card-title project-title">{title}</h5>

        {/* Badge */}
        <span className="badge project-badge mb-2">{category}</span>

        {/* Descrizione */}
        <p className="card-text project-description">{description}</p>

        {/* Bottone */}
        <Link to={`/projects/${slug}`} className="btn btn-project mt-auto">
          Scopri di più
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
