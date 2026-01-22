import { useParams } from "react-router-dom";
import laboratories from "../data/laboratories";
import { motion } from "framer-motion";
import "../styles/laboratorio.css";

export default function LaboratorioDetalle() {
  const { slug } = useParams();
  const lab = laboratories.find(l => l.slug === slug);

  if (!lab) return <h2>Laboratorio no encontrado</h2>;

  return (
    <section className="lab-container">

      {/* HERO */}
      <motion.div
        className="lab-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>{lab.name}</h1>
        <p>{lab.hero}</p>
      </motion.div>

      {/* DESCRIPCIÓN */}
      <motion.p
        className="lab-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {lab.description}
      </motion.p>

      {/* SERVICIOS */}
      <motion.div
        className="lab-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2>Servicios de calibración</h2>
        <ul>
          {lab.services.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </motion.div>

      {/* RANGOS */}
      <motion.div
        className="lab-section highlight"
        whileHover={{ scale: 1.02 }}
      >
        <h2>Rangos de medición</h2>
        <ul>
          {lab.ranges.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="lab-cta"
        whileHover={{ scale: 1.05 }}
      >
        <a href="/contacto">Solicitar calibración</a>
      </motion.div>

    </section>
  );
}
