import "../styles/servicioDetalle.css";

export default function Temperatura({ lang }) {
  return (
    <main className="servicio-detalle">

      {/* HERO */}
      <header className="servicio-header">
        <h1>
          {lang === "es"
            ? "Calibración de Instrumentos de Temperatura"
            : "Temperature Instruments Calibration"}
        </h1>

        <p>
          {lang === "es"
            ? "Calibración precisa de instrumentos de medición de temperatura para procesos industriales y de laboratorio."
            : "Accurate calibration of temperature measuring instruments for industrial and laboratory processes."}
        </p>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="servicio-content">
        <p>
          {lang === "es"
            ? "Prestamos servicios de calibración de instrumentos de temperatura garantizando exactitud, confiabilidad metrológica y trazabilidad a patrones reconocidos."
            : "We provide calibration services for temperature instruments ensuring accuracy, metrological reliability and traceability to recognized standards."}
        </p>
      </section>

      {/* INSTRUMENTOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Instrumentos calibrados" : "Calibrated instruments"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Termómetros de líquido en vidrio"
              : "Liquid-in-glass thermometers"}
          </li>
          <li>
            {lang === "es"
              ? "Termómetros de indicación directa"
              : "Direct reading thermometers"}
          </li>
          <li>{lang === "es" ? "Sensores de temperatura" : "Temperature sensors"}</li>
          <li>{lang === "es" ? "Indicadores analógicos y digitales" : "Analog and digital indicators"}</li>
        </ul>
      </section>

      {/* RANGOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Rangos de calibración" : "Calibration ranges"}</h2>
        <ul>
          <li>-15 °C a 140 °C — {lang === "es" ? "Líquido en vidrio" : "Liquid-in-glass"}</li>
          <li>-15 °C a 300 °C — {lang === "es" ? "Indicadores y sensores" : "Indicators and sensors"}</li>
        </ul>
      </section>

      {/* APLICACIONES */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Aplicaciones" : "Applications"}</h2>
        <ul>
          <li>{lang === "es" ? "Procesos industriales" : "Industrial processes"}</li>
          <li>{lang === "es" ? "Laboratorios" : "Laboratories"}</li>
          <li>{lang === "es" ? "Control de calidad" : "Quality control"}</li>
          <li>{lang === "es" ? "Cadena de frío" : "Cold chain"}</li>
        </ul>
      </section>

      {/* METODOLOGÍA */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Metodología" : "Methodology"}</h2>
        <p>
          {lang === "es"
            ? "La calibración se realiza mediante comparación directa con patrones certificados, controlando condiciones ambientales y evaluando la incertidumbre de medición."
            : "Calibration is performed by direct comparison with certified standards, controlling environmental conditions and evaluating measurement uncertainty."}
        </p>
      </section>

      {/* NORMATIVA */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Normatividad" : "Standards"}</h2>
        <ul>
          <li>ISO/IEC 17025:2017</li>
          <li>ITS-90</li>
          <li>{lang === "es" ? "Buenas prácticas metrológicas" : "Good metrological practices"}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="servicio-cta">
        <h2>
          {lang === "es"
            ? "¿Necesitas calibrar instrumentos de temperatura?"
            : "Do you need temperature instruments calibration?"}
        </h2>

        <a href="/contacto" className="btn primary">
          {lang === "es" ? "Solicitar servicio" : "Request service"}
        </a>
      </section>

    </main>
  );
}
