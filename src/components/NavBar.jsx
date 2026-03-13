// Importazioni
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import MusicPlayer from "./MusicPlayer";

function NavBar() {
  // Stato per gestire l'effetto di scorrimento
  const [scrolled, setScrolled] = useState(false);

  // Effetto per rilevare lo scroll e aggiornare lo stato
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    // Aggiungi l'evento di scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        {/* Logo e link alla home */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" style={{ width: "60px" }} />
        </Link>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto gap-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Progetti
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contatti
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className="music-text d-flex align-items-center">
            <span className="music-label d-none d-lg-inline">
              Play Music <span className="music-arrow">→</span>
            </span>

            <MusicPlayer />
          </div>
        </div>

        {/* Bottone per il menu a tendina su dispositivi mobili */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
