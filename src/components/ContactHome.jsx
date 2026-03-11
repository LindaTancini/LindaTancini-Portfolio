import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ContactHome() {
  return (
    <section className="contact-home py-5 text-center">
      <div className="container">
        <motion.h2
          className="mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Ti piace il mio lavoro?
        </motion.h2>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Sono sempre interessata a nuove opportunità e collaborazioni.
        </motion.p>

        <Link to="/contact" className="btn btn-contact px-4 py-2">
          Contattami
        </Link>
      </div>
    </section>
  );
}

export default ContactHome;
