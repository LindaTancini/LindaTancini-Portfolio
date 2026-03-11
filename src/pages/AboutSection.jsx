import { motion } from "framer-motion";

function AboutSection({ subtitle, image, children, reverse = false }) {
  return (
    <section className="py-5 about-section">
      <div className="container">
        <div
          className={`row align-items-start ${
            reverse ? "flex-md-row-reverse" : ""
          }`}
        >
          {/* Immagine */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <motion.img
              src={image}
              alt={subtitle}
              className="img-fluid rounded about-image"
              initial={{ opacity: 0, x: reverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Testo */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <motion.h2
              className="h3 mb-3 text-center text-lg-start about-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.h2>

            <motion.div
              className="about-content flex-grow-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

{
  /* 
        SPIEGAZIONE PROPS USATE:

        - children:
          rappresenta tutto il contenuto JSX passato tra i tag
          <AboutSection>...</AboutSection>.
          Serve per rendere il componente riutilizzabile con testi
          diversi senza duplicare la struttura.

        - reverse:
          prop booleana usata per invertire l'ordine di immagine e testo.
          Viene applicata solo da breakpoint md in su grazie alla classe
          Bootstrap "flex-md-row-reverse", mantenendo un layout
          mobile-first (immagine sopra, testo sotto).
      */
}
