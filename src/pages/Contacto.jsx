import "../styles/contacto.css";

export default function Contacto() {
  return (
    <main className="contacto">

      {/* HERO */}
      <section className="contacto-hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1>Contáctenos</h1>
          <p>
            Nuestro equipo está listo para atender tus requerimientos técnicos y
            brindarte soluciones metrológicas confiables.
          </p>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="contacto-section">
        <div className="contacto-grid">

          {/* INFORMACIÓN */}
          <div className="contacto-info">
            <h2>Información de contacto</h2>

            <p>
              <strong>LABCYS S.A.S</strong><br />
              Laboratorio de Calibración e Inspección Técnica
            </p>

            <p>
              📍 Bogotá, Colombia<br />
              📞 +57 300 000 0000<br />
              ✉️ contacto@labcys.com
            </p>

            <p>
              Horario de atención:<br />
              Lunes a Viernes – 8:00 a.m. a 5:00 p.m.
            </p>

            <a
              className="whatsapp-btn"
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* FORMULARIO */}
          <div className="contacto-form">
            <h2>Solicita información</h2>

            <form>
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="text" placeholder="Empresa" />
              <input type="text" placeholder="Asunto" />
              <textarea
                rows="5"
                placeholder="Describe tu requerimiento"
                required
              ></textarea>

              <button type="submit">Enviar mensaje</button>
            </form>

            <p className="privacy">
              Al enviar este formulario aceptas nuestra política de privacidad.
            </p>
          </div>

        </div>
      </section>

      {/* MAPA */}
      <section className="map">
        <iframe
          title="Mapa LABCYS"
          src="https://www.google.com/maps?q=Bogotá%20Colombia&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      {/* CTA FINAL */}
      <section className="contacto-cta">
        <h2>Confía tu metrología en expertos</h2>
        <p>
          Estamos listos para apoyarte con servicios técnicos confiables y
          certificados.
        </p>
      </section>

    </main>
  );
}
