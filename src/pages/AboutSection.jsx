function AboutSection({ subtitle, image, children, reverse = false }) {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <div
          className={`row align-items-center ${
            reverse ? "flex-md-row-reverse" : ""
          }`}
        >
          {/* Immagine */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img src={image} alt={subtitle} className="img-fluid rounded" />
          </div>

          {/*  Testo */}
          <div className="col-12 col-md-6">
            <h2 className="h3 mb-3 text-center text-md-start">{subtitle}</h2>
            <div className="about-content">{children}</div>
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
