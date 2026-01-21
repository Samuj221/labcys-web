import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({ theme, setTheme, lang, setLang }) {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="logo">
          LABCYS
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>{lang === "es" ? "Inicio" : "Home"}</NavLink>
          <NavLink to="/servicios">{lang === "es" ? "Servicios" : "Services"}</NavLink>
          <NavLink to="/nosotros">{lang === "es" ? "Nosotros" : "About"}</NavLink>
          <NavLink to="/contacto">{lang === "es" ? "Contacto" : "Contact"}</NavLink>
        </nav>

        <div className="nav-actions">
          <button className="lang-btn" onClick={() => setLang(lang === "es" ? "en" : "es")}>
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button className="theme-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </header>
  );
}
