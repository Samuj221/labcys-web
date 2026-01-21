import { useParams, Link } from "react-router-dom";
import "../styles/laboratorioDetalle.css";

export default function LaboratorioDetalle({ lang }) {
  const { slug, lab } = useParams();

  const laboratorios = {
    volumen: {
      titulo: "Laboratorio de Volumen",
      descripcion:
        "Calibración volumétrica de carrotanques, tanques verticales y recipientes.",
    },
    instrumentos: {
      titulo: "Laboratorio de Instrumentos",
      descripcion:
        "Calibración de instrumentos de presión, temperatura, humedad y medición.",
    },
  };

  const laboratorio = laboratorios[lab];

  if (!laboratorio) {
    return (
      <section className="lab-detail">
        <div className="page-container">
          <h2>Laboratorio no encontrado</h2>
          <Link className="back-link" to={`/servicios/${slug}`}>
            ← Volver al servicio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="lab-detail">

      {/* HERO */}
      <div className="page-hero lab-hero">
        <div className="page-container">
          <h1>{laboratorio.titulo}</h1>
          <p>{laboratorio.descripcion}</p>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="page-container lab-content">

        <Link className="back-link" to={`/servicios/${slug}`}>
          ← Volver al servicio
        </Link>

        <div className="lab-info">
          <p>
            Todos nuestros procedimientos cumplen con normas internacionales,
            garantizando resultados confiables, trazables y certificados.
          </p>

          <ul>
            <li>✔ Certificados trazables</li>
            <li>✔ Equipos calibrados</li>
            <li>✔ Personal especializado</li>
            <li>✔ Cumplimiento ISO/IEC 17025</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
