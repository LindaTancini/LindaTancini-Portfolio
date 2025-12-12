//Importazioni
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// NavBar Component
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" style={{ width: "60px" }} />
        </Link>
        {/* LINK */}
        <div
          className="collapse navbar-collapse order-2 order-lg-1"
          id="mainNav"
        >
          <ul className="navbar-nav mx-auto gap-5 ">
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

        {/* HAMBURGER MOBILE */}
        <button
          className="navbar-toggler ms-auto order-1"
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
