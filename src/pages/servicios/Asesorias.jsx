import "../styles/servicioDetalle.css";

export default function Asesorias({ lang }) {
  return (
    <main className="servicio-detalle">

      {/* HERO */}
      <header className="servicio-header">
        <h1>
          {lang === "es" ? "Asesorías Técnicas" : "Technical Consulting"}
        </h1>
        <p>
          {lang === "es"
            ? "Acompañamiento especializado en metrología, calidad y normas internacionales."
            : "Specialized support in metrology, quality, and international standards."}
        </p>
      </header>

      {/* INTRO */}
      <section className="servicio-content">
        <p>
          {lang === "es"
            ? "En LABCYS brindamos asesorías técnicas enfocadas en fortalecer la competencia técnica, el cumplimiento normativo y la confiabilidad de los procesos de medición de su empresa."
            : "At LABCYS we provide technical consulting services focused on strengthening technical competence, regulatory compliance, and the reliability of your company’s measurement processes."}
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Servicios de asesoría" : "Consulting services"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Auditoría de diagnóstico del sistema de gestión"
              : "Management system diagnostic audit"}
          </li>
          <li>
            {lang === "es"
              ? "Identificación de necesidades técnicas y metrológicas"
              : "Identification of technical and metrological needs"}
          </li>
          <li>
            {lang === "es"
              ? "Sensibilización y capacitación del personal"
              : "Staff awareness and training"}
          </li>
          <li>
            {lang === "es"
              ? "Requisitos de la norma ISO/IEC 17025"
              : "ISO/IEC 17025 requirements"}
          </li>
          <li>
            {lang === "es"
              ? "Metrología básica y aplicada"
              : "Basic and applied metrology"}
          </li>
          <li>
            {lang === "es"
              ? "Selección y control de equipos de medición"
              : "Selection and control of measuring equipment"}
          </li>
          <li>
            {lang === "es"
              ? "Aseguramiento metrológico"
              : "Metrological assurance"}
          </li>
          <li>
            {lang === "es"
              ? "Calibración, incertidumbre y confirmación de métodos"
              : "Calibration, uncertainty, and method confirmation"}
          </li>
        </ul>
      </section>

      {/* ISO */}
      <section className="servicio-content">
        <h2>
          {lang === "es"
            ? "Adopción de la norma ISO/IEC 17025"
            : "ISO/IEC 17025 implementation"}
        </h2>
        <p>
          {lang === "es"
            ? "Acompañamos a su organización en todo el proceso de adopción e implementación de la norma ISO/IEC 17025, garantizando el cumplimiento de los requisitos técnicos y del sistema de gestión."
            : "We support your organization throughout the adoption and implementation of ISO/IEC 17025, ensuring compliance with technical and management system requirements."}
        </p>
      </section>

      {/* METODOLOGÍA */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Nuestra metodología" : "Our methodology"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Acompañamiento y seguimiento continuo"
              : "Continuous guidance and follow-up"}
          </li>
          <li>
            {lang === "es"
              ? "Planeación estratégica del proceso de adopción"
              : "Strategic planning of the adoption process"}
          </li>
          <li>
            {lang === "es"
              ? "Capacitación permanente del personal"
              : "Ongoing staff training"}
          </li>
          <li>
            {lang === "es"
              ? "Evaluación de procesos y mejora continua"
              : "Process evaluation and continuous improvement"}
          </li>
          <li>
            {lang === "es"
              ? "Auditorías internas ISO/IEC 17025"
              : "Internal ISO/IEC 17025 audits"}
          </li>
          <li>
            {lang === "es"
              ? "Seguimiento a acciones correctivas y preventivas"
              : "Monitoring of corrective and preventive actions"}
          </li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Beneficios para su empresa" : "Benefits for your company"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Mejora en la confiabilidad de los resultados"
              : "Improved reliability of results"}
          </li>
          <li>
            {lang === "es"
              ? "Cumplimiento normativo y técnico"
              : "Regulatory and technical compliance"}
          </li>
          <li>
            {lang === "es"
              ? "Fortalecimiento de la competencia técnica"
              : "Strengthening technical competence"}
          </li>
          <li>
            {lang === "es"
              ? "Preparación para procesos de acreditación"
              : "Preparation for accreditation processes"}
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="servicio-cta">
        <h2>
          {lang === "es"
            ? "¿Necesita una asesoría especializada?"
            : "Do you need specialized consulting?"}
        </h2>

        <a href="/contacto" className="btn primary">
          {lang === "es" ? "Solicitar asesoría" : "Request consulting"}
        </a>
      </section>

    </main>
  );
}
