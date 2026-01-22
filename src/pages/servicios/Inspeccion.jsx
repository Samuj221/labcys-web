import "../styles/servicioDetalle.css";

export default function Inspeccion({ lang }) {
  return (
    <main className="servicio-detalle">

      {/* HERO */}
      <header className="servicio-header">
        <h1>
          {lang === "es" ? "Servicios de Inspección" : "Inspection Services"}
        </h1>
        <p>
          {lang === "es"
            ? "Evaluación técnica confiable para garantizar la seguridad y operatividad de sus equipos."
            : "Reliable technical evaluation to ensure the safety and operability of your equipment."}
        </p>
      </header>

      {/* INTRO */}
      <section className="servicio-content">
        <p>
          {lang === "es"
            ? "LABCYS ofrece servicios de inspección técnica orientados a verificar el correcto funcionamiento, la seguridad y el cumplimiento normativo de equipos e instalaciones, mediante procesos rigurosos de evaluación y verificación."
            : "LABCYS provides technical inspection services aimed at verifying proper operation, safety, and regulatory compliance of equipment and facilities through rigorous evaluation and verification processes."}
        </p>
      </section>

      {/* TIPOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Tipos de inspección" : "Types of inspection"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Inspección de líneas de vida"
              : "Lifeline inspection"}
          </li>
          <li>
            {lang === "es"
              ? "Pruebas hidrostáticas"
              : "Hydrostatic testing"}
          </li>
          <li>
            {lang === "es"
              ? "Inspección de quinta rueda"
              : "Fifth wheel inspection"}
          </li>
          <li>
            {lang === "es"
              ? "Evaluación de condiciones operativas"
              : "Operational condition assessment"}
          </li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Proceso de inspección" : "Inspection process"}</h2>
        <ol>
          <li>
            {lang === "es"
              ? "Revisión documental y normativa"
              : "Documentation and regulatory review"}
          </li>
          <li>
            {lang === "es"
              ? "Evaluación visual y funcional"
              : "Visual and functional evaluation"}
          </li>
          <li>
            {lang === "es"
              ? "Ejecución de pruebas técnicas"
              : "Execution of technical tests"}
          </li>
          <li>
            {lang === "es"
              ? "Registro de resultados"
              : "Results recording"}
          </li>
          <li>
            {lang === "es"
              ? "Emisión de informe técnico"
              : "Issuance of technical report"}
          </li>
        </ol>
      </section>

      {/* CUMPLIMIENTO */}
      <section className="servicio-content">
        <h2>
          {lang === "es"
            ? "Cumplimiento normativo"
            : "Regulatory compliance"}
        </h2>
        <p>
          {lang === "es"
            ? "Las inspecciones se realizan conforme a normas técnicas y requisitos de seguridad industrial aplicables, garantizando resultados confiables y trazables."
            : "Inspections are performed in accordance with applicable technical standards and industrial safety requirements, ensuring reliable and traceable results."}
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Beneficios" : "Benefits"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Reducción de riesgos operativos"
              : "Reduction of operational risks"}
          </li>
          <li>
            {lang === "es"
              ? "Prevención de fallas y accidentes"
              : "Prevention of failures and accidents"}
          </li>
          <li>
            {lang === "es"
              ? "Cumplimiento de requisitos legales"
              : "Compliance with legal requirements"}
          </li>
          <li>
            {lang === "es"
              ? "Soporte técnico especializado"
              : "Specialized technical support"}
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="servicio-cta">
        <h2>
          {lang === "es"
            ? "¿Requiere un servicio de inspección?"
            : "Do you need an inspection service?"}
        </h2>
        <a href="/contacto" className="btn primary">
          {lang === "es" ? "Solicitar inspección" : "Request inspection"}
        </a>
      </section>

    </main>
  );
}
    