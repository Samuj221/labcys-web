import { NavLink } from "react-router-dom";
import "../styles/serviciosGrid.css";

export default function Calibracion({ lang }) {
  return (
    <main className="servicios-grid-page">

      <header className="servicios-header">
        <h1>
          {lang === "es" ? "Servicios de Calibración" : "Calibration Services"}
        </h1>
        <p>
          {lang === "es"
            ? "Calibración confiable, trazable y alineada con normas internacionales."
            : "Reliable, traceable calibration aligned with international standards."}
        </p>
      </header>

      <section className="servicios-grid">

        <NavLink to="tanques" className="servicio-card">
          <h3>{lang === "es" ? "Tanques y Carrotanques" : "Tanks & Tank Trucks"}</h3>
          <p>
            {lang === "es"
              ? "Aforo de tanques de almacenamiento y carrotanques."
              : "Calibration of storage tanks and tank trucks."}
          </p>
        </NavLink>

        <NavLink to="recipientes-volumetricos" className="servicio-card">
          <h3>
            {lang === "es"
              ? "Recipientes Volumétricos"
              : "Volumetric Containers"}
          </h3>
          <p>
            {lang === "es"
              ? "Serafines y recipientes patrón."
              : "Standard containers and volumetric measures."}
          </p>
        </NavLink>

        <NavLink to="temperatura" className="servicio-card">
          <h3>
            {lang === "es"
              ? "Instrumentos de Temperatura"
              : "Temperature Instruments"}
          </h3>
          <p>
            {lang === "es"
              ? "Termómetros y sensores."
              : "Thermometers and temperature sensors."}
          </p>
        </NavLink>

        <NavLink to="presion" className="servicio-card">
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
        </NavLink>

        <NavLink to="trazabilidad" className="servicio-card">
          <h3>
            {lang === "es"
              ? "Calibración por Trazabilidad"
              : "Traceability Calibration"}
          </h3>
          <p>
            {lang === "es"
              ? "Servicios no cubiertos por acreditación."
              : "Non-accredited calibration services."}
          </p>
        </NavLink>

      </section>
    </main>
  );
}
