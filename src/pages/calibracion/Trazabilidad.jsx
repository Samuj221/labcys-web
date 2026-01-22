import "../styles/servicioDetalle.css";

export default function Trazabilidad({ lang }) {
  return (
    <main className="servicio-detalle">

      {/* HERO */}
      <header className="servicio-header">
        <h1>
          {lang === "es"
            ? "Servicios de Calibración por Trazabilidad"
            : "Calibration Services by Traceability"}
        </h1>

        <p>
          {lang === "es"
            ? "Servicios de calibración para instrumentos no cubiertos por acreditación, garantizando trazabilidad metrológica."
            : "Calibration services for instruments not covered by accreditation, ensuring metrological traceability."}
        </p>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="servicio-content">
        <p>
          {lang === "es"
            ? "Para la industria, prestamos servicios de calibración por trazabilidad siguiendo criterios de normas internacionales y cumpliendo los requisitos establecidos en la ISO/IEC 17025 para laboratorios de calibración, aunque estos servicios no se encuentran cubiertos por nuestra acreditación."
            : "For industry, we provide traceability-based calibration services following international standards and complying with ISO/IEC 17025 requirements, although these services are not covered by accreditation."}
        </p>
      </section>

      {/* ALCANCE */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Alcance del servicio" : "Service scope"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Instrumentos especiales o de uso específico"
              : "Special or application-specific instruments"}
          </li>
          <li>
            {lang === "es"
              ? "Equipos fuera del alcance acreditado"
              : "Equipment outside accredited scope"}
          </li>
          <li>
            {lang === "es"
              ? "Instrumentos sin norma específica de acreditación"
              : "Instruments without specific accreditation standards"}
          </li>
        </ul>
      </section>

      {/* MAGNITUDES */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Magnitudes atendidas" : "Measured quantities"}</h2>
        <ul>
          <li>{lang === "es" ? "Volumen" : "Volume"}</li>
          <li>{lang === "es" ? "Temperatura" : "Temperature"}</li>
          <li>{lang === "es" ? "Presión" : "Pressure"}</li>
          <li>{lang === "es" ? "Humedad" : "Humidity"}</li>
          <li>{lang === "es" ? "Longitud" : "Length"}</li>
          <li>{lang === "es" ? "Masa" : "Mass"}</li>
          <li>pH</li>
          <li>{lang === "es" ? "Conductividad" : "Conductivity"}</li>
        </ul>
      </section>

      {/* METODOLOGÍA */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Metodología de calibración" : "Calibration methodology"}</h2>
        <p>
          {lang === "es"
            ? "Los procesos de calibración se realizan mediante comparación con patrones certificados, controlando las condiciones ambientales y evaluando la incertidumbre de medición asociada al proceso."
            : "Calibration processes are performed by comparison with certified standards, controlling environmental conditions and evaluating measurement uncertainty."}
        </p>
      </section>

      {/* IMPORTANTE */}
      <section className="servicio-content highlight">
        <h2>{lang === "es" ? "Importante" : "Important"}</h2>
        <p>
          {lang === "es"
            ? "Estos servicios no se encuentran cubiertos por acreditación, sin embargo, garantizan trazabilidad metrológica y confiabilidad técnica en los resultados."
            : "These services are not covered by accreditation; however, they guarantee metrological traceability and technical reliability of the results."}
        </p>
      </section>

      {/* NORMAS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Normatividad aplicada" : "Applied standards"}</h2>
        <ul>
          <li>ISO/IEC 17025</li>
          <li>{lang === "es" ? "Normas internacionales aplicables" : "Applicable international standards"}</li>
          <li>{lang === "es" ? "Buenas prácticas metrológicas" : "Good metrological practices"}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="servicio-cta">
        <h2>
          {lang === "es"
            ? "¿Requieres calibración por trazabilidad?"
            : "Do you need traceability-based calibration?"}
        </h2>

        <a href="/contacto" className="btn primary">
          {lang === "es" ? "Solicitar información" : "Request information"}
        </a>
      </section>

    </main>
  );
}
