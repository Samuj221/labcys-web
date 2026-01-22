import "../styles/servicioDetalle.css";

export default function Productos({ lang }) {
  return (
    <main className="servicio-detalle">

      {/* HERO */}
      <header className="servicio-header">
        <h1>
          {lang === "es" ? "Productos y Suministros" : "Products and Supplies"}
        </h1>
        <p>
          {lang === "es"
            ? "Soluciones industriales para medición, seguridad y control de derrames."
            : "Industrial solutions for measurement, safety, and spill control."}
        </p>
      </header>

      {/* INTRO */}
      <section className="servicio-content">
        <p>
          {lang === "es"
            ? "En LABCYS suministramos equipos, insumos y herramientas especializadas que cumplen estándares de calidad para la industria de hidrocarburos, laboratorios y procesos industriales."
            : "At LABCYS we supply specialized equipment, supplies, and tools that meet quality standards for the hydrocarbons industry, laboratories, and industrial processes."}
        </p>
      </section>

      {/* KITS DERRAME */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Kits de derrames" : "Spill kits"}</h2>

        <h3>Kit Derrame Carrotanque DVOIL-02</h3>
        <ul>
          <li>Absorbente oleofílico (hidrófugo e ignífugo)</li>
          <li>Guantes de nitrilo</li>
          <li>Almohadillas absorbentes 25x25 cm</li>
          <li>Barreras de contención</li>
          <li>Espátula, martillo y bolsas para residuos</li>
          <li>Masilla Durepoxi</li>
          <li>Gafas de protección y respirador doble cartucho</li>
          <li>Cinta de marcación y elementos de seguridad</li>
        </ul>

        <h3>Kit Derrame Caneca #2</h3>
        <ul>
          <li>Absorbente oleofílico y tela absorbente</li>
          <li>Almohadillas y barreras de control</li>
          <li>Respirador doble cartucho</li>
          <li>Herramientas plásticas antichispa</li>
          <li>Caneca plástica 15 GL</li>
          <li>Elementos de protección personal</li>
        </ul>
      </section>

      {/* VARAS DE MEDICIÓN */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Varas de medición" : "Measuring rods"}</h2>
        <ul>
          <li>Varas de medición desde 1 m hasta 6 m</li>
          <li>Varas rígidas, anchas y escualizables</li>
          <li>Varas especiales para canecas de 55 GL</li>
          <li>Varas con marcación en centímetros y galones</li>
        </ul>
      </section>

      {/* EQUIPOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Equipos e instrumentos" : "Equipment and instruments"}</h2>
        <ul>
          <li>Instrumentos de temperatura</li>
          <li>Instrumentos de presión</li>
          <li>Equipos de humedad</li>
          <li>Instrumentos volumétricos y dimensionales</li>
          <li>pH-metros y conductímetros</li>
          <li>Balanzas, masas patrón y caudalímetros</li>
        </ul>
      </section>

      {/* FABRICACIÓN */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Fabricación y mantenimiento" : "Manufacturing and maintenance"}</h2>
        <p>
          {lang === "es"
            ? "Fabricación y mantenimiento de recipientes volumétricos en acero inoxidable, marmitas y mezcladores para la industria de hidrocarburos."
            : "Manufacturing and maintenance of volumetric containers in stainless steel, kettles, and mixers for the hydrocarbons industry."}
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "¿Por qué elegirnos?" : "Why choose us?"}</h2>
        <ul>
          <li>
            {lang === "es"
              ? "Productos industriales certificados"
              : "Certified industrial products"}
          </li>
          <li>
            {lang === "es"
              ? "Asesoría técnica especializada"
              : "Specialized technical advice"}
          </li>
          <li>
            {lang === "es"
              ? "Compatibilidad con servicios de calibración"
              : "Compatible with calibration services"}
          </li>
          <li>
            {lang === "es"
              ? "Soporte técnico postventa"
              : "Post-sales technical support"}
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="servicio-cta">
        <h2>
          {lang === "es"
            ? "¿Deseas cotizar un producto o suministro?"
            : "Would you like to request a quote?"}
        </h2>

        <a href="/contacto" className="btn primary">
          {lang === "es" ? "Solicitar cotización" : "Request a quote"}
        </a>
      </section>

    </main>
  );
}
