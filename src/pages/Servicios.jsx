import { Link } from "react-router-dom";
import "../styles/servicios.css";

export default function Servicios({ lang }) {
  return (
    <main className="servicios">

      {/* HERO */}
      <section className="servicios-hero">
        <h1>{lang === "es" ? "Servicios" : "Services"}</h1>
        <p>
          {lang === "es"
            ? "Soluciones metrológicas para el fortalecimiento de su empresa."
            : "Metrological solutions to strengthen your company."}
        </p>
      </section>

      {/* INTRO */}
      <section className="servicios-intro">
        <p>
          {lang === "es" ? (
            <>
              Somos un laboratorio que presta servicios de <strong>calibración</strong>,
              <strong> inspección</strong>, <strong>suministro de equipos</strong> y
              <strong> asesorías técnicas</strong>, siguiendo criterios de normas
              internacionales y cumpliendo los requisitos de la
              <strong> ISO/IEC 17025:2017</strong>.
            </>
          ) : (
            <>
              We are a laboratory providing <strong>calibration</strong>,
              <strong> inspection</strong>, <strong>equipment supply</strong> and
              <strong> technical consulting</strong> services, following
              international standards and complying with
              <strong> ISO/IEC 17025:2017</strong>.
            </>
          )}
        </p>
      </section>

      {/* CALIBRACIÓN */}
      <section className="servicios-section">
        <h2>{lang === "es" ? "Servicios de Calibración" : "Calibration Services"}</h2>

        <div className="servicios-grid">
          <Link to="calibracion/tanques" className="servicio-card">
            <h3>{lang === "es" ? "Tanques y Carrotanques" : "Tanks and Tank Trucks"}</h3>
            <p>
              {lang === "es"
                ? "Calibración de tanques de almacenamiento y carrotanques."
                : "Calibration of storage tanks and tank trucks."}
            </p>
          </Link>

          <Link
            to="calibracion/recipientes-volumetricos"
            className="servicio-card"
          >
            <h3>
              {lang === "es"
                ? "Recipientes Volumétricos"
                : "Volumetric Containers"}
            </h3>
            <p>
              {lang === "es"
                ? "Calibración de recipientes y serafines."
                : "Calibration of volumetric containers."}
            </p>
          </Link>

          <Link to="calibracion/temperatura" className="servicio-card">
            <h3>
              {lang === "es"
                ? "Instrumentos de Temperatura"
                : "Temperature Instruments"}
            </h3>
            <p>
              {lang === "es"
                ? "Termómetros, sensores y equipos de temperatura."
                : "Thermometers, sensors and temperature equipment."}
            </p>
          </Link>

          <Link to="calibracion/presion" className="servicio-card">
            <h3>
              {lang === "es"
                ? "Instrumentos de Presión"
                : "Pressure Instruments"}
            </h3>
            <p>
              {lang === "es"
                ? "Manómetros analógicos y digitales."
                : "Analog and digital pressure gauges."}
            </p>
          </Link>

          <Link to="calibracion/trazabilidad" className="servicio-card">
            <h3>
              {lang === "es"
                ? "Calibración por Trazabilidad"
                : "Traceability Calibration"}
            </h3>
            <p>
              {lang === "es"
                ? "Servicios no cubiertos por acreditación."
                : "Services not covered by accreditation."}
            </p>
          </Link>
        </div>
      </section>

      {/* INSPECCIÓN */}
      <section className="servicios-section">
        <h2>{lang === "es" ? "Inspección" : "Inspection"}</h2>
        <Link to="inspeccion" className="servicio-card wide">
          <p>
            {lang === "es"
              ? "Servicios de inspección mediante procesos meticulosos de evaluación y verificación."
              : "Inspection services through meticulous evaluation and verification processes."}
          </p>
        </Link>
      </section>

      {/* PRODUCTOS */}
      <section className="servicios-section">
        <h2>
          {lang === "es"
            ? "Productos y Suministros"
            : "Products and Supplies"}
        </h2>
        <Link to="productos" className="servicio-card wide">
          <p>
            {lang === "es"
              ? "Kits de derrames, varas de medición y equipos para la industria."
              : "Spill kits, measuring rods and industrial equipment."}
          </p>
        </Link>
      </section>

      {/* ASESORÍAS */}
      <section className="servicios-section">
        <h2>{lang === "es" ? "Asesorías" : "Consulting"}</h2>
        <Link to="asesorias" className="servicio-card wide">
          <p>
            {lang === "es"
              ? "Acompañamiento técnico, auditorías y capacitación ISO/IEC 17025."
              : "Technical support, audits and ISO/IEC 17025 training."}
          </p>
        </Link>
      </section>

    </main>
  );
}
