import { useParams, Link } from "react-router-dom";
import "../styles/servicioDetalle.css";

const serviciosData = {
  calibracion: {
    title: "Calibración Metrológica",
    image: "/images/services/calibracion-lg.jpg",
    overview: `
      La calibración metrológica es un proceso de verificación de la exactitud de
      instrumentos de medición. En LABCYS calibramos equipos bajo la norma
      internacional ISO/IEC 17025:2017, asegurando trazabilidad y confiabilidad.
    `,
    applications: [
      "Instrumentos de medición industrial",
      "Balanzas y masas patrón",
      "Sensores de presión y temperatura",
      "Equipos electrónicos de precisión",
    ],
    benefits: [
      "Resultados trazables y certificados",
      "Mayor confiabilidad en mediciones críticas",
      "Cumplimiento con estándares internacionales",
      "Reducción de errores operativos y no conformidades",
    ],
    details: `
      Nuestra calibración se basa en procedimientos estandarizados con equipos
      de última generación. Cada certificado emitido por LABCYS contiene la
      historia de medición, incertidumbre y condiciones operativas bajo las
      cuales participaron los ensayos.
    `,
  },

  tanques: {
    title: "Calibración de Tanques y Carrotanques",
    image: "/images/services/tanques-lg.jpg",
    overview: `
      Ofrecemos servicios de aforo y calibración volumétrica de tanques
      estacionarios y carrotanques, garantizando el registro exacto de volúmenes
      en procesos logísticos, almacenamiento e hidrocarburos.
    `,
    applications: [
      "Tanques de almacenamiento industrial",
      "Carrotanques de transporte",
      "Sistema de medición en planta",
      "Control de inventario y balanzas fiscales",
    ],
    benefits: [
      "Exactitud en volumen real vs volumen nominal",
      "Certificación conforme a normas de hidrocarburos",
      "Optimización logística y control de pérdidas",
      "Reportes claros para auditorías internas",
    ],
    details: `
      Utilizamos patrones volumétricos certificados y métodos gravimétricos
      para asegurar precisión absoluta en el volumen de tanques y carrotanques.
      Ideal para industrias químicas, petroleras y almacenamiento.
    `,
  },

  recipientes: {
    title: "Recipientes Volumétricos",
    image: "/images/services/recipientes-lg.jpg",
    overview: `
      La calibración de recipientes volumétricos (como cilindros, frascos y
      probetas) asegura que el volumen marcado sea técnicamente preciso para
      laboratorios y procesos productivos.
    `,
    applications: [
      "Laboratorios químicos y farmacéuticos",
      "Procesos productivos con dosificación exacta",
      "Validación en control de calidad",
      "Instrumentación educativa y técnica",
    ],
    benefits: [
      "Mediciones reproducibles y confiables",
      "Protocolos documentados por técnico",
      "Compatibilidad con sistemas automatizados",
      "Mejor control en procesos de producción",
    ],
    details: `
      LABCYS realiza verificación y ajuste de recipientes en diferentes
      magnitudes volumétricas con equipo trazable y procedimientos validados,
      lo que garantiza resultados que cumplen con las exigencias de calidad.
    `,
  },

  "temperatura-presion": {
    title: "Temperatura y Presión",
    image: "/images/services/temperatura-lg.jpg",
    overview: `
      Medición precisa de temperatura y presión es crítica en industrias como
      la alimentaria, petroquímica y farmacéutica. Calibramos sensores,
      transductores y manómetros con estándares líderes.
    `,
    applications: [
      "Hornos industriales y autoclaves",
      "Procesos térmicos",
      "Sistemas hidráulicos y neumáticos",
      "Control de calidad en TT/TP",
    ],
    benefits: [
      "Trazabilidad metrológica completa",
      "Minimización de fallas debido a variación térmica",
      "Informes técnicos con incertidumbre",
      "Soporte técnico post-servicio",
    ],
    details: `
      Los ensayos de temperatura y presión se realizan con referencias
      calibradas, comparadores de alta precisión y procedimientos ajustados a
      normas técnicas aplicables.
    `,
  },

  inspeccion: {
    title: "Inspección Técnica",
    image: "/images/services/inspeccion-lg.jpg",
    overview: `
      Inspección técnica de equipos, sistemas y procesos, garantizando
      conformidad con estándares industriales y criterios de seguridad.
    `,
    applications: [
      "Equipos en planta industrial",
      "Evaluación de conformidad operativa",
      "Control documental y de estado",
      "Planes de mantenimiento preventivo",
    ],
    benefits: [
      "Evaluación integral de equipos",
      "Informes detallados de estado",
      "Reducción de riesgos operacionales",
      "Plan de acciones correctivas",
    ],
    details: `
      El proceso de inspección técnica combina evaluación visual, operativa y
      documental para garantizar que sus equipos funcionen como se espera y
      estén listos para auditorías y controles regulatorios.
    `,
  },

  asesorias: {
    title: "Asesorías ISO/IEC 17025",
    image: "/images/services/asesorias-lg.jpg",
    overview: `
      Servicios de asesoría para implementación, auditoría interna,
      diagnóstico y acompañamiento en sistemas de gestión metrológica
      conforme a ISO/IEC 17025.
    `,
    applications: [
      "Implementación de procesos normativos",
      "Auditorías internas preparatorias",
      "Capacitación técnica al personal",
      "Optimización de gestión metrológica",
    ],
    benefits: [
      "Reducción de no conformidades",
      "Mejor preparación para auditorías externas",
      "Documentación técnica robusta",
      "Acompañamiento experto continuo",
    ],
    details: `
      Nuestro equipo brinda acompañamiento especializado para asegurar que su
      sistema de gestión cumpla con los requisitos normativos, aplicando
      buenas prácticas y experiencia técnica.
    `,
  },
};

export default function ServicioDetalle() {
  const { slug } = useParams();
  const servicio = serviciosData[slug];

  if (!servicio) {
    return (
      <section className="servicio-detalle">
        <h1>Servicio no encontrado</h1>
        <Link to="/servicios">← Volver a servicios</Link>
      </section>
    );
  }

  return (
    <main className="servicio-detalle">

      {/* CABECERA CON IMAGEN */}
      <section
        className="detalle-hero"
        style={{ backgroundImage: `url(${servicio.image})` }}
      >
        <div className="detalle-hero-dark" />
        <div className="detalle-hero-content">
          <h1>{servicio.title}</h1>
        </div>
      </section>

      {/* DESCRIPCIÓN GENERAL */}
      <section className="detalle-overview">
        <div className="detalle-text">
          <h2>Descripción general</h2>
          <p>{servicio.overview}</p>
        </div>
      </section>

      {/* APLICACIONES */}
      <section className="detalle-applications">
        <h2>Aplicaciones destacadas</h2>
        <ul>
          {servicio.applications.map((app, index) => (
            <li key={index}>✔ {app}</li>
          ))}
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="detalle-benefits">
        <h2>Beneficios del servicio</h2>
        <ul>
          {servicio.benefits.map((b, i) => (
            <li key={i}>✔ {b}</li>
          ))}
        </ul>
      </section>

      {/* DETALLES TÉCNICOS */}
      <section className="detalle-details">
        <h2>Detalles técnicos</h2>
        <p>{servicio.details}</p>
      </section>

      {/* CTA */}
      <section className="detalle-cta">
        <h2>¿Quieres más información?</h2>
        <p>
          Ponte en contacto con nuestros expertos para cotizar este servicio o
          resolver tus dudas.
        </p>
        <Link to="/contacto" className="btn primary">
          Contáctanos
        </Link>
      </section>

    </main>
  );
}
