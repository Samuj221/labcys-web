import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { laboratories } from "../data/laboratories";

export default function Calibracion() {
  return (
    <section>
      <motion.h1>Laboratorios de Calibración</motion.h1>

      <div className="services-grid">
        {laboratories.map(lab => (
          <motion.div key={lab.slug} className="service-card">
            <h2>{lab.name}</h2>
            <p>{lab.description}</p>
            <Link to={`/laboratorios/${lab.slug}`}>
              Ver laboratorio
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
