// Importazioni
import ProjectCard from "./ProjectCard";
import dataProjectsCard from "../data/dataProjectsCard";
import { useState } from "react";
import { motion } from "framer-motion";

function ProjectCardList() {
  const [category, setCategory] = useState("all");

  const filteredProjects =
    category === "all"
      ? dataProjectsCard
      : dataProjectsCard.filter((project) => project.category === category);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      {/* Filtri */}
      <div className="project-filters mb-5 text-center">
        <button
          className={`btn btn-filter ${category === "all" ? "active" : ""}`}
          onClick={() => setCategory("all")}
        >
          Tutti
        </button>

        <button
          className={`btn btn-filter ${category === "Front-end" ? "active" : ""}`}
          onClick={() => setCategory("Front-end")}
        >
          Front-end
        </button>

        <button
          className={`btn btn-filter ${category === "Design System" ? "active" : ""}`}
          onClick={() => setCategory("Design System")}
        >
          Design System
        </button>

        <button
          className={`btn btn-filter ${category === "Full-stack" ? "active" : ""}`}
          onClick={() => setCategory("Full-stack")}
        >
          Full-stack
        </button>
      </div>

      {/* Card */}
      <motion.div
        className="row g-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {filteredProjects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ProjectCardList;
