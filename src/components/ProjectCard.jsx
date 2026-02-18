function ProjectCard({ title, description, image, category }) {
  return (
    <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
      {/* Immagine */}
      <img src={image} className="card-img-top" alt={title} />

      <div className="card-body d-flex flex-column p-4">
        {/* Titolo */}
        <h5 className="card-title fw-bold mb-2">{title}</h5>

        {/* Badge */}
        <span className="badge bg-dark align-self-start mb-3">{category}</span>

        {/* Descrizione */}
        <p className="card-text text-muted flex-grow-1">{description}</p>

        {/* Bottone */}
        <button className="btn btn-outline-dark mt-3">Scopri di più</button>
      </div>
    </div>
  );
}

export default ProjectCard;
