// Importazioni
import NavBar from "./NavBar";

// Header Component
function Header() {
  return (
    <header className="text-center py-3">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="My Logo"
        className="mb-3"
        style={{ width: "80px" }}
      />

      {/* Componente NavBar*/}
      <NavBar />
    </header>
  );
}

export default Header;
