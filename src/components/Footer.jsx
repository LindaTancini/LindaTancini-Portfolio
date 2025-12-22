function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        {/* Testo principale */}
        <div className="text-center mb-4">
          <h5 className="mb-2">Linda Tancini</h5>
          <p className="footer-subtitle mb-0">
            Front-end Developer · Specializzata in Design System
          </p>
        </div>

        {/* Social */}
        <div className="d-flex justify-content-center gap-4 mb-4">
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

        {/* Copyright */}
        <div className="text-center small opacity-75">
          © {new Date().getFullYear()} · Tutti i diritti riservati
        </div>
      </div>
    </footer>
  );
}

export default Footer;
