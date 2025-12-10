// Importazoni
import catsHero from "../assets/cats-hero.png";

// Hero Component
function HeroSection() {
  return (
    <section className="hero">
      <div className="container h-100 d-flex align-items-center">
        <div className="row w-100 align-items-center justify-content-between">
          {/* Testo */}
          <div className="col-md-6 text-center text-md-start hero-text">
            <h1 className="fw-bold mb-3">Ciao, sono Linda</h1>
            <p className="lead mb-4">
              Web Developer in crescita, tra design, creatività e molto codice.
            </p>
            <a href="/projects" className="btn btn-pink px-4 py-2">
              Guarda i miei progetti
            </a>
          </div>

          {/* Immagine */}
          <div className="col-md-5 text-center hero-img-wrapper">
            <img src={catsHero} alt="Gatti" className="img-fluid hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
