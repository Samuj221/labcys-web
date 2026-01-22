import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/navbar.css";

export default function Navbar({ theme, setTheme }) {
  // 🌍 idioma desde contexto
  const { lang, setLang } = useLanguage();

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <NavLink to="/" className="logo" aria-label="LABCYS home">
          LABCYS
        </NavLink>

        {/* NAV */}
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end>
            {lang === "es" ? "Inicio" : "Home"}
          </NavLink>

          <NavLink to="/servicios">
            {lang === "es" ? "Servicios" : "Services"}
          </NavLink>

          <NavLink to="/nosotros">
            {lang === "es" ? "Nosotros" : "About us"}
          </NavLink>

          <NavLink to="/contacto">
            {lang === "es" ? "Contacto" : "Contact"}
          </NavLink>
        </nav>

        {/* ACTIONS */}
        <div className="nav-actions">
          <button
            className="lang-btn"
            onClick={toggleLang}
            aria-label="Change language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </header>
  );
}
