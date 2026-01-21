import { NavLink } from "react-router-dom";
import "../styles/home.css";

export default function Home({ lang }) {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>
            {lang === "es"
              ? "Metrología confiable para la industria moderna"
              : "Reliable metrology for modern industry"}
          </h1>

          <p>
            {lang === "es"
              ? "En LABCYS brindamos servicios de calibración acreditados, trazables y alineados con estándares internacionales, asegurando precisión, confiabilidad y cumplimiento normativo."
              : "At LABCYS we provide accredited and traceable calibration services aligned with international standards, ensuring precision, reliability and regulatory compliance."}
          </p>

          <div className="home-hero-actions">
            <NavLink to="/servicios" className="btn-primary">
              {lang === "es" ? "Ver servicios" : "View services"}
            </NavLink>

            <NavLink to="/contacto" className="btn-outline">
              {lang === "es" ? "Solicitar cotización" : "Request a quote"}
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="home-trust">
        <div className="trust-grid">
          <div>
            <h3>ISO/IEC 17025</h3>
            <p>
              {lang === "es"
                ? "Cumplimiento con normas internacionales"
                : "Compliance with international standards"}
            </p>
          </div>

          <div>
            <h3>+10 años</h3>
            <p>
              {lang === "es"
                ? "Experiencia en metrología industrial"
                : "Industrial metrology experience"}
            </p>
          </div>

          <div>
            <h3>Trazabilidad</h3>
            <p>
              {lang === "es"
                ? "Resultados confiables y verificables"
                : "Reliable and traceable results"}
            </p>
          </div>

          <div>
            <h3>Industria</h3>
            <p>
              {lang === "es"
                ? "Soluciones para múltiples sectores"
                : "Solutions for multiple industries"}
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="home-services">
        <h2>
          {lang === "es" ? "Nuestros servicios" : "Our services"}
        </h2>

        <div className="services-grid">

          {/* CALIBRACIÓN */}
          <article className="service-card">
            <img src="/images/calibracion.jpg" alt="Calibración" />
            <div className="service-content">
              <h3>Calibración</h3>
              <p>
                {lang === "es"
                  ? "Servicios de calibración acreditados bajo ISO/IEC 17025, garantizando trazabilidad metrológica, exactitud y confiabilidad en instrumentos de medición."
                  : "Accredited calibration services under ISO/IEC 17025, ensuring metrological traceability, accuracy and reliability."}
              </p>
              <NavLink to="/servicios/calibracion">
                {lang === "es" ? "Ver más" : "Learn more"}
              </NavLink>
            </div>
          </article>

          {/* INSPECCIÓN */}
          <article className="service-card">
            <img src="/images/inspeccion.jpg" alt="Inspección" />
            <div className="service-content">
              <h3>Inspección</h3>
              <p>
                {lang === "es"
                  ? "Inspección técnica de equipos e instrumentos, verificación dimensional y funcional, asegurando cumplimiento normativo y reducción de riesgos."
                  : "Technical inspection of equipment and instruments, dimensional and functional verification ensuring regulatory compliance."}
              </p>
              <NavLink to="/servicios/inspeccion">
                {lang === "es" ? "Ver más" : "Learn more"}
              </NavLink>
            </div>
          </article>

          {/* ASESORÍAS */}
          <article className="service-card">
            <img src="/images/asesorias.jpg" alt="Asesorías" />
            <div className="service-content">
              <h3>Asesorías</h3>
              <p>
                {lang === "es"
                  ? "Acompañamiento técnico especializado para la implementación, mantenimiento y mejora de sistemas de gestión ISO/IEC 17025."
                  : "Specialized technical consulting for implementation, maintenance and improvement of ISO/IEC 17025 management systems."}
              </p>
              <NavLink to="/servicios/asesorias">
                {lang === "es" ? "Ver más" : "Learn more"}
              </NavLink>
            </div>
          </article>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="home-about">
        <div className="about-content">
          <h2>
            {lang === "es" ? "¿Por qué LABCYS?" : "Why LABCYS?"}
          </h2>

          <p>
            {lang === "es"
              ? "LABCYS es un laboratorio especializado en metrología industrial, enfocado en ofrecer soluciones confiables que fortalezcan la calidad, seguridad y competitividad de nuestros clientes."
              : "LABCYS is a laboratory specialized in industrial metrology, focused on delivering reliable solutions that strengthen quality, safety and competitiveness."}
          </p>

          <p>
            {lang === "es"
              ? "Nuestro equipo está conformado por profesionales altamente calificados, tecnología de vanguardia y una filosofía basada en la mejora continua."
              : "Our team is made up of highly qualified professionals, cutting-edge technology and a continuous improvement philosophy."}
          </p>
        </div>

        <div className="about-image">
          <img src="/images/lab.jpg" alt="Laboratorio LABCYS" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="home-cta">
        <h2>
          {lang === "es"
            ? "¿Listo para asegurar la confiabilidad de tus mediciones?"
            : "Ready to ensure measurement reliability?"}
        </h2>

        <p>
          {lang === "es"
            ? "Contáctanos y recibe asesoría personalizada para tus necesidades metrológicas."
            : "Contact us and receive personalized advice for your metrology needs."}
        </p>

        <NavLink to="/contacto" className="btn-primary large">
          {lang === "es" ? "Contáctanos" : "Contact us"}
        </NavLink>
      </section>

    </main>
  );
}
