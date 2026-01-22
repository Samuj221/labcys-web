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
            ? "Evaluación técnica y verificación del estado de equipos e infraestructuras críticas."
            : "Technical evaluation and verification of the condition of critical equipment and infrastructure."}
        </p>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="servicio-content">
        <p>
          {lang === "es"
            ? "Ofrecemos servicios de inspección que garantizan que los elementos evaluados se encuentren en óptimas condiciones de funcionamiento, mediante procesos meticulosos de evaluación y verificación, cumpliendo criterios técnicos y normativos."
            : "We provide inspection services that ensure evaluated elements are in optimal operating condition through meticulous evaluation and verification processes, meeting technical and regulatory criteria."}
        </p>
      </section>

      {/* ALCANCE */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Alcance del servicio" : "Service scope"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Verificación visual y funcional"
              : "Visual and functional verification"}
          </li>
          <li>
            {lang === "es"
              ? "Evaluación estructural y operativa"
              : "Structural and operational evaluation"}
          </li>
          <li>
            {lang === "es"
              ? "Inspección conforme a normativas técnicas"
              : "Inspection in accordance with technical regulations"}
          </li>
        </ul>
      </section>

      {/* SERVICIOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Tipos de inspección" : "Inspection types"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Líneas de vida"
              : "Lifeline systems"}
          </li>
          <li>
            {lang === "es"
              ? "Prueba hidrostática"
              : "Hydrostatic testing"}
          </li>
          <li>
            {lang === "es"
              ? "Quinta rueda"
              : "Fifth wheel systems"}
          </li>
        </ul>
      </section>

      {/* METODOLOGÍA */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Metodología de inspección" : "Inspection methodology"}</h2>
        <p>
          {lang === "es"
            ? "Las inspecciones se realizan mediante procedimientos técnicos documentados, personal competente y herramientas certificadas, garantizando resultados confiables."
            : "Inspections are performed using documented technical procedures, qualified personnel, and certified tools, ensuring reliable results."}
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Beneficios para tu empresa" : "Benefits for your company"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Prevención de fallas y accidentes"
              : "Prevention of failures and accidents"}
          </li>
          <li>
            {lang === "es"
              ? "Cumplimiento normativo"
              : "Regulatory compliance"}
          </li>
          <li>
            {lang === "es"
              ? "Mayor vida útil de equipos"
              : "Extended equipment lifespan"}
          </li>
          <li>
            {lang === "es"
              ? "Reducción de riesgos operativos"
              : "Reduced operational risks"}
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="servicio-cta">
        <h2>
          {lang === "es"
            ? "¿Necesitas un servicio de inspección?"
            : "Do you need inspection services?"}
        </h2>

        <a href="/contacto" className="btn primary">
          {lang === "es" ? "Solicitar inspección" : "Request inspection"}
        </a>
      </section>

    </main>
  );
}
