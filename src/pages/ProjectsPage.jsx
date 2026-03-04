//Importazioni
import ProjectCardList from "../components/ProjectCardList";
import { motion } from "framer-motion";

function ProjectsPage() {
  return (
    <div className="container py-5">
      <motion.h1
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        I miei progetti
      </motion.h1>

      <motion.p
        className="text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        Ecco alcuni dei progetti a cui ho lavorato di recente.
      </motion.p>

      <ProjectCardList />
    </div>
  );
}

export default ProjectsPage;
