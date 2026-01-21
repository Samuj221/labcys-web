import "../styles/services.css";

export default function Servicios({ lang }) {
  return (
    <section className="services">

      {/* HERO */}
      <div className="page-hero services-hero">
        <div className="page-container">
          <h1>
            {lang === "es"
              ? "Centro de Atención Integral"
              : "Integrated Service Center"}
          </h1>

          <p>
            {lang === "es"
              ? "Soluciones técnicas, metrológicas y operativas alineadas con estándares internacionales."
              : "Technical, metrological and operational solutions aligned with international standards."}
          </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="page-container">
        <div className="services-grid">

          <article className="service-card">
            <h3>Calibración Volumétrica</h3>
            <ul>
              <li>Carrotanques (42 – 21.000 gal)</li>
              <li>Tanques verticales y horizontales</li>
              <li>Recipientes volumétricos y serafines</li>
              <li>Contadores de volumen</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Calibración de Instrumentos</h3>
            <ul>
              <li>Presión, temperatura y humedad</li>
              <li>Caudalímetros y alcoholímetros</li>
              <li>Balanzas y masas</li>
              <li>Instrumentos de longitud</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Inspección & Aseguramiento</h3>
            <ul>
              <li>Inspección King Pin y quinta rueda</li>
              <li>Pruebas hidrostáticas</li>
              <li>Auditorías metrológicas</li>
              <li>Implementación ISO/IEC 17025</li>
            </ul>
          </article>

        </div>
      </div>

    </section>
  );
}
