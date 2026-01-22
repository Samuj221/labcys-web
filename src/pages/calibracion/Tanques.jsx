import "../styles/servicioDetalle.css";

export default function Tanques({ lang }) {
  return (
    <main className="servicio-detalle">

      {/* HERO */}
      <header className="servicio-header">
        <h1>
          {lang === "es"
            ? "Calibración de Tanques y Carrotanques"
            : "Calibration of Tanks and Tank Trucks"}
        </h1>

        <p>
          {lang === "es"
            ? "Servicios de calibración (aforo) para tanques de almacenamiento y carrotanques, garantizando trazabilidad y confiabilidad metrológica."
            : "Calibration (gauging) services for storage tanks and tank trucks, ensuring traceability and metrological reliability."}
        </p>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="servicio-content">
        <p>
          {lang === "es"
            ? "Prestamos servicios de calibración de carrotanques y tanques de almacenamiento subterráneos, elevados, irregulares, verticales y horizontales, con capacidades desde 42 galones hasta 21.000 galones."
            : "We provide calibration services for underground, elevated, irregular, vertical and horizontal storage tanks and tank trucks, with capacities from 42 gallons up to 21,000 gallons."}
        </p>
      </section>

      {/* TIPOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Tipos de tanques calibrados" : "Types of calibrated tanks"}</h2>
        <ul>
          <li>{lang === "es" ? "Tanques verticales" : "Vertical tanks"}</li>
          <li>{lang === "es" ? "Tanques horizontales" : "Horizontal tanks"}</li>
          <li>{lang === "es" ? "Tanques de forma irregular" : "Irregular shape tanks"}</li>
          <li>{lang === "es" ? "Marmitas" : "Kettles"}</li>
          <li>{lang === "es" ? "Tanques farmacéuticos" : "Pharmaceutical tanks"}</li>
          <li>{lang === "es" ? "Carrotanques" : "Tank trucks"}</li>
        </ul>
      </section>

      {/* ALCANCE */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Alcance del servicio" : "Service scope"}</h2>
        <p>
          {lang === "es"
            ? "La calibración se realiza mediante métodos metrológicos reconocidos, asegurando exactitud volumétrica, trazabilidad a patrones nacionales e internacionales y cumplimiento de requisitos técnicos."
            : "Calibration is performed using recognized metrological methods, ensuring volumetric accuracy, traceability to national and international standards, and technical compliance."}
        </p>
      </section>

      {/* NORMATIVA */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Normatividad" : "Standards"}</h2>
        <ul>
          <li>ISO/IEC 17025:2017</li>
          <li>{lang === "es" ? "Criterios metrológicos internacionales" : "International metrological criteria"}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="servicio-cta">
        <h2>
          {lang === "es"
            ? "¿Necesitas calibrar tus tanques?"
            : "Do you need to calibrate your tanks?"}
        </h2>

        <a href="/contacto" className="btn primary">
          {lang === "es" ? "Solicitar servicio" : "Request service"}
        </a>
      </section>

    </main>
  );
}
