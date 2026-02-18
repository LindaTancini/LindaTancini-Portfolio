function AboutSection({ title, image, children, reverse = false }) {
  return (
    <section className="py-4 py-md-5">
      <div className="container">
        <h2 className="mb-4 text-center">{title}</h2>

        <div
          className={`row align-items-center ${
            reverse ? "flex-md-row-reverse" : ""
          }`}
        >
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img src={image} alt={title} className="img-fluid rounded" />
          </div>

          <div className="col-12 col-md-6">{children}</div>
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
