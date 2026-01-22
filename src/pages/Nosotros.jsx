import "../styles/nosotros.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

// IMÁGENES (Vite)
import inspectorImg from "../images/inspector.jpg";
import engineerImg from "../images/engineer.jpg";
import auditorImg from "../images/auditor.jpg";
import labImg from "../images/lab.jpg";

export default function Nosotros() {
  const { lang } = useLanguage();
  const t = translations[lang].nosotros;

  return (
    <main className="nosotros">

      {/* HERO */}
      <section
        className="nosotros-hero"
        style={{ backgroundImage: `url(${labImg})` }}
      >
        <div className="overlay" />
        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="nosotros-section">
        <h2>{t.historyTitle}</h2>
        <p>{t.historyText1}</p>
        <p>{t.historyText2}</p>
      </section>

      {/* MISIÓN / VISIÓN / VALORES */}
      <section className="mvv">
        <div className="card">
          <h3>{t.mission}</h3>
          <p>{t.missionText}</p>
        </div>

        <div className="card">
          <h3>{t.vision}</h3>
          <p>{t.visionText}</p>
        </div>

        <div className="card">
          <h3>{t.values}</h3>
          <ul>
            <li>✔ Ethics</li>
            <li>✔ Reliability</li>
            <li>✔ Quality commitment</li>
            <li>✔ Continuous improvement</li>
            <li>✔ Customer focus</li>
          </ul>
        </div>
      </section>

      {/* DIFERENCIA */}
      <section className="nosotros-section dark">
        <h2>{t.difference}</h2>
        <div className="diferenciales">
          <div>
            <h4>🔬 Technical focus</h4>
            <p>ISO/IEC 17025 aligned methodologies.</p>
          </div>
          <div>
            <h4>📈 Business value</h4>
            <p>Process optimization and risk reduction.</p>
          </div>
          <div>
            <h4>🤝 Real support</h4>
            <p>Continuous support before, during and after service.</p>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="nosotros-section">
        <h2>{t.teamTitle}</h2>
        <p>{t.teamText}</p>

        <div className="team">
          <div className="team-card">
            <img src={engineerImg} alt="Metrology Specialist" />
            <h4>Metrology Specialist</h4>
            <span>Calibration & Traceability</span>
          </div>

          <div className="team-card">
            <img src={auditorImg} alt="ISO Auditor" />
            <h4>ISO/IEC 17025 Auditor</h4>
            <span>Management systems</span>
          </div>

          <div className="team-card">
            <img src={inspectorImg} alt="Technical Inspector" />
            <h4>Technical Inspector</h4>
            <span>Inspection & verification</span>
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="trust">
        <h2>{t.trustTitle}</h2>
        <div className="trust-grid">
          <div>ISO/IEC 17025</div>
          <div>Metrological traceability</div>
          <div>Documented procedures</div>
          <div>Continuous technical support</div>
        </div>
      </section>

      {/* CTA */}
      <section className="nosotros-cta">
        <h2>{t.cta}</h2>
        <a href="/contacto" className="btn primary">
          {t.contact}
        </a>
      </section>

    </main>
  );
}
