// Importazioni
import leftImg from "../assets/footer-left.png";
import rightImg from "../assets/footer-right.png";

// Footer component
function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row align-items-center text-center">
          {/* Immagine sinistra */}
          <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <img
              src={leftImg}
              alt="Decorazione sinistra"
              className="footer-img footer-img-left"
            />
          </div>

          {/* Contenuto */}
          <div className="col-12 col-md-6">
            <h5 className="mb-2">Linda Tancini</h5>
            <p className="footer-subtitle">
              Front-end Developer · Specializzata in Design System
            </p>

            <div className="d-flex justify-content-center gap-4 mb-3">
              <a
                href="https://github.com/LindaTancini"
                className="footer-icon"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/linda-tancini-2ba649388/"
                className="footer-icon"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/_linda.ta_/"
                className="footer-icon"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="small opacity-75">
              © {new Date().getFullYear()} · Tutti i diritti riservati
            </div>
          </div>

          {/* Immagine destra */}
          <div className="col-12 col-md-3 mt-4 mt-md-0 d-flex justify-content-center justify-content-md-end">
            <img
              src={rightImg}
              alt="Decorazione destra"
              className="footer-img footer-img-right"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
