import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "/images/logo-labcys.png";
import "../styles/Header.css";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const t = {
    es: {
      inicio: "Inicio",
      servicios: "Servicios",
      nosotros: "Nosotros",
      contacto: "Contacto",
    },
    en: {
      inicio: "Home",
      servicios: "Services",
      nosotros: "About",
      contacto: "Contact",
    },
  };

  return (
    <header className="header">
      <div className="header-container">

        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="LABCYS" />
        </NavLink>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            {t[lang].inicio}
          </NavLink>
          <NavLink to="/servicios" onClick={() => setOpen(false)}>
            {t[lang].servicios}
          </NavLink>
          <NavLink to="/nosotros" onClick={() => setOpen(false)}>
            {t[lang].nosotros}
          </NavLink>
          <NavLink
            to="/contacto"
            className="contact"
            onClick={() => setOpen(false)}
          >
            {t[lang].contacto}
          </NavLink>
        </nav>

        <div className="header-actions">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          <button className="lang-btn" onClick={toggleLang}>
            {lang.toUpperCase()}
          </button>
        </div>

      </div>
    </header>
  );
}
