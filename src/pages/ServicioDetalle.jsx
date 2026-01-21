import { useParams, Link } from "react-router-dom";
import "../styles/servicioDetalle.css";

export default function ServicioDetalle({ lang }) {
  const { slug } = useParams();

  const servicios = {
    calibracion: {
      titulo: "Servicios de Calibración",
      descripcion:
        "Calibraciones confiables y trazables alineadas con estándares internacionales.",
    },
    inspeccion: {
      titulo: "Inspección & Aseguramiento",
      descripcion:
        "Servicios de inspección técnica, pruebas y auditorías especializadas.",
    },
  };

  const servicio = servicios[slug];

  if (!servicio) {
    return (
      <section className="service-detail">
        <div className="page-container">
          <h2>Servicio no encontrado</h2>
          <Link className="back-link" to="/servicios">
            ← Volver a Servicios
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="service-detail">

      {/* HERO */}
      <div className="page-hero service-hero">
        <div className="page-container">
          <h1>{servicio.titulo}</h1>
          <p>{servicio.descripcion}</p>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="page-container service-content">

        <Link className="back-link" to="/servicios">
          ← Volver a Servicios
        </Link>

        <div className="labs-grid">
          <Link to={`/servicios/${slug}/volumen`} className="lab-card">
            <h3>Laboratorio de Volumen</h3>
            <p>Calibración volumétrica de tanques y recipientes.</p>
            <span className="lab-link">Ver laboratorio →</span>
          </Link>

          <Link to={`/servicios/${slug}/instrumentos`} className="lab-card">
            <h3>Laboratorio de Instrumentos</h3>
            <p>Calibración de presión, temperatura y medición.</p>
            <span className="lab-link">Ver laboratorio →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
