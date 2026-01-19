import "../styles/Footer.css";
import logo from "../images/logo-labcys.png";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const t = {
    es: {
      desc: "Soluciones metrológicas confiables bajo estándares internacionales.",
      links: "Enlaces",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      location: "Ubicación",
      rights: "Todos los derechos reservados",
      follow: "Síguenos",
    },
    en: {
      desc: "Reliable metrology solutions under international standards.",
      links: "Links",
      services: "Services",
      about: "About us",
      contact: "Contact",
      location: "Location",
      rights: "All rights reserved",
      follow: "Follow us",
    },
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <img src={logo} alt="LABCYS Logo" />
          <p>{t[lang].desc}</p>

          <div className="social">
            <span>{t[lang].follow}</span>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>{t[lang].links}</h4>
          <a href="/servicios">{t[lang].services}</a>
          <a href="/nosotros">{t[lang].about}</a>
          <a href="/contacto">{t[lang].contact}</a>
        </div>

        {/* INFO */}
        <div className="footer-info">
          <h4>LABCYS</h4>
          <p>📧 contacto@labcys.com</p>
          <p>📞 +57 300 000 0000</p>
          <p>📍 Bogotá, Colombia</p>
        </div>

        {/* MAP */}
        <div className="footer-map">
          <iframe
            title="LABCYS Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Cl.+8c+%2378-90,+Bogotá&output=embed"
          />
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LABCYS · {t[lang].rights}
      </div>
    </footer>
  );
}
