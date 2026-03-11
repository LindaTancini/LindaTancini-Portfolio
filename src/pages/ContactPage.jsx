// Importazioni
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <motion.h1
          className="fw-bold contact-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Contattami con un colpo di zampa!
        </motion.h1>
        <motion.p
          className="text-muted mt-3 contact-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Hai un progetto in mente o vuoi collaborare? <br />
          Scrivimi, non morderò (probabilmente) 😼
        </motion.p>
      </div>

      <motion.div
        className="row justify-content-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <form action="https://formspree.io/f/mwvndzjb" method="POST">
              {/* Nome */}
              <div className="mb-3">
                <label className="form-label">Nome:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Inserisci il tuo nome..."
                  className="form-control"
                  required
                />
              </div>

              {/* Cognome */}
              <div className="mb-3">
                <label className="form-label">Cognome:</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Inserisci il tuo cognome..."
                  className="form-control"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Inserisci la tua email..."
                  className="form-control"
                  required
                />
              </div>

              {/* Oggetto */}
              <div className="mb-3">
                <label className="form-label">Oggetto:</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Inserisci l'oggetto del messaggio..."
                  className="form-control"
                  required
                />
              </div>

              {/* Messaggio */}
              <div className="mb-4">
                <label className="form-label">Messaggio:</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Inserisci il tuo messaggio..."
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="btn btn-contact w-100">
                Invia messaggio
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <div className="text-center mt-5">
        <motion.p
          className="text-muted mb-2 contact-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Seguimi sui social, mi piacerebbe condividere il mio mondo con te 💕🐱
        </motion.p>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <a
            href="https://github.com/LindaTancini?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/linda-tancini-2ba649388/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
