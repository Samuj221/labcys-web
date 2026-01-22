import "../styles/servicioDetalle.css";

export default function RecipientesVolumetricos({ lang }) {
  return (
    <main className="servicio-detalle">

      {/* HERO */}
      <header className="servicio-header">
        <h1>
          {lang === "es"
            ? "Calibración de Recipientes Volumétricos"
            : "Calibration of Volumetric Containers"}
        </h1>

        <p>
          {lang === "es"
            ? "Calibración de recipientes volumétricos utilizados en procesos de medición, almacenamiento y control de volumen."
            : "Calibration of volumetric containers used in measurement, storage and volume control processes."}
        </p>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="servicio-content">
        <p>
          {lang === "es"
            ? "Prestamos servicios de calibración de recipientes volumétricos (serafines y patrones volumétricos) asegurando exactitud, trazabilidad y confiabilidad metrológica para la industria."
            : "We provide calibration services for volumetric containers (seraphins and volumetric standards), ensuring accuracy, traceability and metrological reliability for industry."}
        </p>
      </section>

      {/* RANGOS */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Rango de calibración" : "Calibration range"}</h2>
        <ul>
          <li>{lang === "es" ? "Desde 0,5 galones hasta 750 galones" : "From 0.5 gallons up to 750 gallons"}</li>
          <li>{lang === "es" ? "Desde 1 litro hasta 2800 litros" : "From 1 liter up to 2800 liters"}</li>
        </ul>
      </section>

      {/* APLICACIONES */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Aplicaciones" : "Applications"}</h2>
        <ul>
          <li>{lang === "es" ? "Industria de hidrocarburos" : "Oil & gas industry"}</li>
          <li>{lang === "es" ? "Laboratorios de calibración" : "Calibration laboratories"}</li>
          <li>{lang === "es" ? "Control de inventarios volumétricos" : "Volumetric inventory control"}</li>
          <li>{lang === "es" ? "Procesos industriales" : "Industrial processes"}</li>
        </ul>
      </section>

      {/* METODOLOGÍA */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Metodología" : "Methodology"}</h2>
        <p>
          {lang === "es"
            ? "La calibración se realiza mediante métodos volumétricos reconocidos, asegurando incertidumbres controladas y trazabilidad a patrones nacionales e internacionales."
            : "Calibration is performed using recognized volumetric methods, ensuring controlled uncertainties and traceability to national and international standards."}
        </p>
      </section>

      {/* NORMATIVA */}
      <section className="servicio-content">
        <h2>{lang === "es" ? "Normatividad" : "Standards"}</h2>
        <ul>
          <li>ISO/IEC 17025:2017</li>
          <li>{lang === "es" ? "Buenas prácticas metrológicas" : "Good metrological practices"}</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="servicio-cta">
        <h2>
          {lang === "es"
            ? "¿Requieres calibrar recipientes volumétricos?"
            : "Do you need volumetric container calibration?"}
        </h2>

        <a href="/contacto" className="btn primary">
          {lang === "es" ? "Solicitar servicio" : "Request service"}
        </a>
      </section>

    </main>
  );
}
