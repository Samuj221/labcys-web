import ServiceCard from "../components/ServiceCard";

export default function Servicios() {
  return (
    <section style={{ padding: "4rem" }}>
      <h2>Our Services</h2>

      <ServiceCard
        id="calibration"
        title="Calibration Services"
        description="Traceable, ISO-compliant calibration services for laboratory instruments."
      />

      <ServiceCard
        id="metrology"
        title="Metrology Consulting"
        description="Expert consulting for measurement systems, uncertainty analysis and compliance."
      />
    </section>
  );
}
