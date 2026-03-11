import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

function ContactHome() {
  return (
    <section className="contact-home py-5 text-center">
      <div className="container">
        <motion.h2
          className="project-home-title mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Ti piace il mio lavoro?
        </motion.h2>

        <motion.p
          className="about-intro mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Sono sempre interessata a nuove opportunità e collaborazioni. <br />
          Amo confrontarmi con nuove idee e collaborazioni. <br />
          Scrivimi se vuoi lavorare insieme o semplicemente parlare di un
          progetto! <br />
          Sarò felice di sentirti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link to="/contact" className="btn btn-contact px-4 py-2">
            <FiMail className="me-2" />
            Contattami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHome;
