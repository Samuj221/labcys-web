import { Link } from "react-router-dom";
import "../styles/servicios.css";

const servicios = [
  {
    title: "Calibración",
    desc: "Servicios de calibración acreditados y por trazabilidad bajo la norma ISO/IEC 17025:2017, garantizando resultados confiables y reconocidos internacionalmente.",
    image: "/images/services/calibracion.jpg",
    slug: "calibracion",
  },
  {
    title: "Tanques y Carrotanques",
    desc: "Aforo y calibración volumétrica de tanques desde 42 hasta 21.000 galones, cumpliendo criterios técnicos y normativos.",
    image: "/images/services/tanques.jpg",
    slug: "tanques",
  },
  {
    title: "Recipientes Volumétricos",
    desc: "Calibración de serafines desde 0.5 gal hasta 750 gal y recipientes hasta 2800 litros, asegurando exactitud metrológica.",
    image: "/images/services/recipientes.jpg",
    slug: "recipientes",
  },
  {
    title: "Temperatura y Presión",
    desc: "Calibración de instrumentos térmicos y de presión hasta 1000 psi con trazabilidad metrológica garantizada.",
    image: "/images/services/temperatura.jpg",
    slug: "temperatura-presion",
  },
  {
    title: "Inspección Técnica",
    desc: "Inspecciones técnicas bajo criterios internacionales para verificar el desempeño y seguridad de los equipos.",
    image: "/images/services/inspeccion.jpg",
    slug: "inspeccion",
  },
  {
    title: "Asesorías ISO/IEC 17025",
    desc: "Implementación, auditorías internas, diagnóstico y acompañamiento técnico para sistemas de gestión metrológica.",
    image: "/images/services/asesorias.jpg",
    slug: "asesorias",
  },
];

export default function Servicios() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Servicios Metrológicos Especializados</h1>
          <p>
            En LABCYS ofrecemos soluciones técnicas de alto nivel para garantizar
            la calidad, confiabilidad y cumplimiento normativo de sus procesos
            de medición.
          </p>

          <Link to="/contacto" className="btn primary">
            Solicitar Cotización
          </Link>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="services-section">
        <h2>Nuestros Servicios</h2>

        <div className="services-grid">
          {servicios.map((s, i) => (
            <div className="service-card" key={i}>
              <div
                className="service-image"
                style={{ backgroundImage: `url(${s.image})` }}
              />

              <div className="service-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={`/servicios/${s.slug}`}>Ver detalle →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUE COMERCIAL */}
      <section className="services-marketing">
        <h2>¿Por qué contratar los servicios de LABCYS?</h2>
        <div className="marketing-grid">
          <div>
            ✔ Cumplimiento de la norma ISO/IEC 17025  
          </div>
          <div>
            ✔ Resultados trazables y confiables  
          </div>
          <div>
            ✔ Personal técnico altamente calificado  
          </div>
          <div>
            ✔ Acompañamiento técnico especializado  
          </div>
          <div>
            ✔ Soporte metrológico integral  
          </div>
          <div>
            ✔ Reconocimiento nacional e internacional  
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Confíe su metrología en expertos</h2>
        <p>
          Nuestro equipo está listo para asesorarle y ofrecerle la solución
          adecuada para su empresa.
        </p>

        <Link to="/contacto" className="btn primary">
          Contáctanos ahora
        </Link>
      </section>

    </main>
  );
}
