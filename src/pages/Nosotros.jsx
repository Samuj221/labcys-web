import "../styles/nosotros.css";

export default function Nosotros() {
  return (
    <main className="nosotros">

      {/* HERO */}
      <section className="nosotros-hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1>Quiénes Somos</h1>
          <p>
            Expertos en metrología, calibración e inspección técnica con enfoque
            internacional.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="nosotros-section">
        <h2>Nuestra historia</h2>
        <p>
          <strong>LABCYS</strong> nace con el propósito de brindar soluciones
          metrológicas confiables a la industria, apoyando a empresas en el
          cumplimiento de estándares internacionales y asegurando la calidad de
          sus procesos de medición.
        </p>
        <p>
          A lo largo de nuestra trayectoria, hemos acompañado a organizaciones
          de distintos sectores, convirtiéndonos en aliados estratégicos para
          laboratorios, industrias y entidades que requieren resultados
          confiables y trazables.
        </p>
      </section>

      {/* MISIÓN, VISIÓN, VALORES */}
      <section className="mvv">
        <div className="card">
          <h3>Misión</h3>
          <p>
            Prestar servicios de calibración, inspección, asesoría técnica y
            suministro de equipos de medición, garantizando resultados
            confiables, trazables y acordes a las necesidades de nuestros
            clientes.
          </p>
        </div>

        <div className="card">
          <h3>Visión</h3>
          <p>
            Ser un laboratorio de referencia a nivel nacional e internacional,
            reconocido por su excelencia técnica, confiabilidad metrológica y
            acompañamiento profesional.
          </p>
        </div>

        <div className="card">
          <h3>Valores</h3>
          <ul>
            <li>✔ Ética profesional</li>
            <li>✔ Confiabilidad</li>
            <li>✔ Compromiso con la calidad</li>
            <li>✔ Mejora continua</li>
            <li>✔ Orientación al cliente</li>
          </ul>
        </div>
      </section>

      {/* DIFERENCIA */}
      <section className="nosotros-section dark">
        <h2>¿Qué nos diferencia?</h2>
        <div className="diferenciales">
          <div>
            <h4>🔬 Enfoque técnico</h4>
            <p>
              Aplicamos metodologías metrológicas alineadas con normas ISO/IEC
              17025 y buenas prácticas internacionales.
            </p>
          </div>
          <div>
            <h4>📈 Valor para tu negocio</h4>
            <p>
              No solo calibramos equipos, ayudamos a optimizar procesos y reducir
              riesgos operativos.
            </p>
          </div>
          <div>
            <h4>🤝 Acompañamiento real</h4>
            <p>
              Asesoramos a nuestros clientes antes, durante y después de cada
              servicio.
            </p>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="nosotros-section">
        <h2>Nuestro equipo</h2>
        <p>
          Contamos con profesionales altamente calificados en metrología,
          ingeniería y gestión de la calidad, con experiencia en diferentes
          magnitudes físicas y sectores industriales.
        </p>

        <div className="team">
          <div className="team-card">
            <img src="/images/team/engineer.jpg" alt="Especialista metrología" />
            <h4>Especialista Metrológico</h4>
            <span>Calibración y trazabilidad</span>
          </div>

          <div className="team-card">
            <img src="/images/team/auditor.jpg" alt="Auditor ISO" />
            <h4>Auditor ISO/IEC 17025</h4>
            <span>Sistemas de gestión</span>
          </div>

          <div className="team-card">
            <img src="/images/team/inspector.jpg" alt="Inspector técnico" />
            <h4>Inspector Técnico</h4>
            <span>Verificación e inspección</span>
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="trust">
        <h2>Confianza y respaldo</h2>
        <p>
          Trabajamos bajo criterios internacionales, con procedimientos
          documentados, equipos calibrados y personal competente.
        </p>

        <div className="trust-grid">
          <div>ISO/IEC 17025</div>
          <div>Trazabilidad metrológica</div>
          <div>Procedimientos certificados</div>
          <div>Soporte técnico continuo</div>
        </div>
      </section>

      {/* CTA */}
      <section className="nosotros-cta">
        <h2>¿Quieres trabajar con un aliado confiable?</h2>
        <a href="/contacto" className="btn primary">
          Contáctanos
        </a>
      </section>
    </main>
  );
}
