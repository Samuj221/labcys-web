import "../styles/footer.css";
import logo from "../images/logo-labcys.png";

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col footer-brand">
          <img src={logo} alt="LABCYS logo" className="footer-logo" />

          <p>
            {lang === "es"
              ? "Soluciones metrológicas confiables, trazables y acreditadas bajo estándares internacionales."
              : "Reliable, traceable and internationally accredited metrological solutions."}
          </p>

          {/* SOCIALS */}
          <div className="footer-socials">
            <a href="https://www.instagram.com/labcyssas" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/labcyssas" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/company/labcys-s-a-s" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.labcyssas.com" target="_blank" rel="noreferrer">Web</a>
          </div>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>{lang === "es" ? "Servicios" : "Services"}</h4>
          <ul>
            <li>{lang === "es" ? "Calibración" : "Calibration"}</li>
            <li>{lang === "es" ? "Ensayos" : "Testing"}</li>
            <li>{lang === "es" ? "Consultoría" : "Consulting"}</li>
            <li>{lang === "es" ? "Soporte técnico" : "Technical support"}</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>{lang === "es" ? "Contacto" : "Contact"}</h4>
          <ul>
            <li>📧 comercial.labcys@gmail.com</li>
            <li>📞 +57 312 660 6770</li>
            <li>📍 Cl. 8c #78 – 90, Bogotá</li>
          </ul>
        </div>

        {/* MAP */}
        <div className="footer-col footer-map">
          <h4>{lang === "es" ? "Ubicación" : "Location"}</h4>

          <iframe
            title="LABCYS location"
            src="https://www.google.com/maps?q=Cl.%208c%20%2378-90%2C%20Bogotá&output=embed"
            loading="lazy"
          />
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LABCYS · ISO/IEC 17025 · Bogotá, Colombia
      </div>
    </footer>
  );
}
