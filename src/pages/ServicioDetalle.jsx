import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import serviciosDetalle from "../data/serviciosDetalle";
import "../styles/servicioDetalle.css";

export default function ServicioDetalle() {
  const { slug } = useParams();
  const servicio = serviciosDetalle[slug];

  if (!servicio) {
    return <Navigate to="/404" />;
  }

  return (
    <motion.section
      className="servicio-detalle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header className="servicio-header">
        <h1>{servicio.title}</h1>
        <p>{servicio.description}</p>
      </header>

      <div className="servicio-image">
        <img src={servicio.image} alt={servicio.title} />
      </div>

      <ul className="servicio-list">
        {servicio.content.map((item, i) => (
          <motion.li
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
