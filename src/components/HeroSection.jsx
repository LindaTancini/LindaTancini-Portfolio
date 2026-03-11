// Importazoni
import { Link } from "react-router-dom";
import catsHero from "../assets/cats-hero.png";

// Hero Component
function HeroSection() {
  const skillshome = ["CSS", "React", "JS", "Storybook"];

  return (
    <section className="hero">
      <div className="container h-100 d-flex align-items-center">
        <div className="row w-100 align-items-center justify-content-between">
          {/* Testo */}
          <div className="col-md-6 text-center text-md-start hero-text">
            <h1 className="fw-bold m-0">Ciao, sono Linda!</h1>
            <h2 className="fw-bold mb-3 sub-headline">
              Web Developer in crescita, appassionata di Design.
            </h2>
            <p className="lead mb-4">
              Tra codice, design e un po’ di magia felina, creo esperienze
              digitali delicate e curate.
            </p>
            <Link to="/projects" className="btn btn-pink px-4 py-2 mb-4">
              Guarda i miei progetti
            </Link>
            <div className="hero-skills-wrapper">
              {skillshome.map((skill, index) => (
                <span key={index} className="skill-home-chip">
                  {skill}
                </span>
              ))}

              <Link
                to="/about"
                className="btn btn-outline-pink hero-about-arrow"
              >
                Scopri di più su di me <span>➜</span>
              </Link>
            </div>
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
