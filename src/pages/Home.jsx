import { Link } from "react-router-dom";
import "../styles/home.css";
import { useLanguage } from "../context/LanguageContext";

const servicesData = {
  es: [
    {
      title: "Calibración",
      desc: "Calibración acreditada y por trazabilidad conforme a ISO/IEC 17025.",
      slug: "calibracion",
      image: "/images/service-calibration.jpg",
    },
    {
      title: "Tanques y Carrotanques",
      desc: "Aforo volumétrico desde 42 hasta 21.000 galones.",
      slug: "tanques",
      image: "/images/service-tanks.jpg",
    },
    {
      title: "Recipientes Volumétricos",
      desc: "Serafines, probetas y patrones volumétricos.",
      slug: "recipientes",
      image: "/images/service-volume.jpg",
    },
    {
      title: "Temperatura y Presión",
      desc: "Instrumentos térmicos y de presión hasta 1000 psi.",
      slug: "temperatura-presion",
      image: "/images/service-temp.jpg",
    },
    {
      title: "Inspección Técnica",
      desc: "Evaluación metrológica bajo normas internacionales.",
      slug: "inspeccion",
      image: "/images/service-inspection.jpg",
    },
    {
      title: "Asesorías",
      desc: "Implementación y auditorías ISO/IEC 17025.",
      slug: "asesorias",
      image: "/images/service-consulting.jpg",
    },
  ],
  en: [
    {
      title: "Calibration",
      desc: "Accredited and traceable calibration under ISO/IEC 17025.",
      slug: "calibracion",
      image: "/images/service-calibration.jpg",
    },
    {
      title: "Tanks & Tank Trucks",
      desc: "Volumetric calibration from 42 to 21,000 gallons.",
      slug: "tanques",
      image: "/images/service-tanks.jpg",
    },
    {
      title: "Volumetric Measures",
      desc: "Standards, flasks and volumetric equipment.",
      slug: "recipientes",
      image: "/images/service-volume.jpg",
    },
    {
      title: "Temperature & Pressure",
      desc: "Thermal and pressure instruments up to 1000 psi.",
      slug: "temperatura-presion",
      image: "/images/service-temp.jpg",
    },
    {
      title: "Technical Inspection",
      desc: "Metrological evaluation under international standards.",
      slug: "inspeccion",
      image: "/images/service-inspection.jpg",
    },
    {
      title: "Consulting",
      desc: "ISO/IEC 17025 implementation and audits.",
      slug: "asesorias",
      image: "/images/service-consulting.jpg",
    },
  ],
};

export default function Home() {
  const { lang } = useLanguage();
  const services = servicesData[lang];

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            {lang === "es"
              ? "Soluciones\nMetrológicas\nConfiables"
              : "Reliable\nMetrology\nSolutions"}
          </h1>

          <p>
            {lang === "es"
              ? "Servicios de calibración, inspección y asesoría técnica bajo estándares internacionales."
              : "Calibration, inspection and technical consulting services under international standards."}
          </p>

          <div className="hero-buttons">
            <Link to="/contacto" className="btn primary">
              {lang === "es" ? "Contáctanos" : "Contact us"}
            </Link>
            <Link to="/servicios" className="btn outline">
              {lang === "es" ? "Nuestros Servicios" : "Our Services"}
            </Link>
          </div>
        </div>
      </section>

      {/* CERTIFICADOS */}
      <section className="cert-validate">
        <div className="cert-wrapper">

          <div className="cert-text">
            <h2>
              {lang === "es"
                ? "Valida tu certificado de calibración"
                : "Validate your calibration certificate"}
            </h2>

            <p>
              {lang === "es"
                ? "Plataforma oficial para verificar la autenticidad de los certificados emitidos por LABCYS."
                : "Official platform to verify calibration certificates issued by LABCYS."}
            </p>

            <a href="https://labcyscert.com/" target="_blank" rel="noreferrer">
              {lang === "es" ? "Ir al sistema →" : "Go to platform →"}
            </a>
          </div>

          <div className="cert-card">
            <h3>{lang === "es" ? "Acceso seguro" : "Secure access"}</h3>
            <p>
              {lang === "es"
                ? "Consulta rápida, confiable y disponible 24/7."
                : "Fast, reliable and 24/7 available consultation."}
            </p>
            <span>
              {lang === "es" ? "Validar ahora →" : "Validate now →"}
            </span>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>{lang === "es" ? "¿Quiénes somos?" : "Who we are"}</h2>
        <p>
          {lang === "es"
            ? "LABCYS es un laboratorio especializado en servicios metrológicos, enfocado en la confiabilidad y trazabilidad de las mediciones."
            : "LABCYS is a laboratory specialized in metrology services, focused on measurement reliability and traceability."}
        </p>
      </section>

      {/* MISION / VISION */}
      <section className="mv">
        <div>
          <h3>{lang === "es" ? "Misión" : "Mission"}</h3>
          <p>
            {lang === "es"
              ? "Garantizar resultados confiables que respalden la calidad de nuestros clientes."
              : "Guarantee reliable results that support our clients' quality."}
          </p>
        </div>

        <div>
          <h3>{lang === "es" ? "Visión" : "Vision"}</h3>
          <p>
            {lang === "es"
              ? "Ser referentes en metrología aplicada a nivel internacional."
              : "To be an international reference in applied metrology."}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>{lang === "es" ? "Servicios Especializados" : "Specialized Services"}</h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div
                className="service-image"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              <div className="service-info">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={`/servicios/${s.slug}`}>
                  {lang === "es" ? "Ver más →" : "Learn more →"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>
          {lang === "es"
            ? "¿Necesitas soporte metrológico confiable?"
            : "Need reliable metrology support?"}
        </h2>

        <Link to="/contacto" className="btn outline">
          {lang === "es" ? "Habla con nosotros" : "Get in touch"}
        </Link>
      </section>

    </main>
  );
}
