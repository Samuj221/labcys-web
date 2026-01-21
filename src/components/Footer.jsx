import "../styles/footer.css";

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>LABCYS</h3>
          <p>
            {lang === "es"
              ? "Soluciones metrológicas confiables, trazables y acreditadas."
              : "Reliable, traceable and accredited metrological solutions."}
          </p>
        </div>

        <div className="footer-col">
          <h4>{lang === "es" ? "Servicios" : "Services"}</h4>
          <ul>
            <li>Calibración</li>
            <li>Ensayos</li>
            <li>Consultoría</li>
            <li>Soporte técnico</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{lang === "es" ? "Contacto" : "Contact"}</h4>
          <ul>
            <li>info@labcys.com</li>
            <li>+57 300 000 0000</li>
            <li>Bogotá – Colombia</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LABCYS · ISO/IEC 17025
      </div>
    </footer>
  );
}
