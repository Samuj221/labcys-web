import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo-labcys.png";
import "../styles/Header.css";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { servicesMenu } from "../data/navigation";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setOpenServices(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <NavLink to="/" className="logo" onClick={closeAll}>
          <img src={logo} alt="LABCYS" />
        </NavLink>

        {/* MENU BTN MOBILE */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* NAV */}
        <nav className={`nav ${open ? "open" : ""}`}>

          <NavLink to="/" end onClick={closeAll}>
            {lang === "es" ? "Inicio" : "Home"}
          </NavLink>

          {/* SERVICIOS */}
          <div className="nav-group">
            <button
              className="nav-parent"
              onClick={() => setOpenServices(!openServices)}
            >
              {lang === "es" ? "Servicios" : "Services"}
            </button>

            {openServices && (
              <div className="nav-submenu">

                {servicesMenu.map(service => (
                  <div key={service.id} className="submenu-group">

                    <NavLink
                      to={`/servicios/${service.id}`}
                      onClick={closeAll}
                      className="submenu-title"
                    >
                      {service.label[lang]}
                    </NavLink>

                    {service.labs && (
                      <ul>
                        {service.labs.map(lab => (
                          <li key={lab.slug}>
                            <NavLink
                              to={`/servicios/${service.id}/${lab.slug}`}
                              onClick={closeAll}
                            >
                              {lab[lang]}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

              </div>
            )}
          </div>

          <NavLink to="/nosotros" onClick={closeAll}>
            {lang === "es" ? "Nosotros" : "About"}
          </NavLink>

          <NavLink to="/contacto" className="contact" onClick={closeAll}>
            {lang === "es" ? "Contacto" : "Contact"}
          </NavLink>

        </nav>

        {/* ACTIONS */}
        <div className="header-actions">
          <button onClick={toggleTheme}>
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
          <button onClick={toggleLang}>
            {lang.toUpperCase()}
          </button>
        </div>

      </div>
    </header>
  );
}
