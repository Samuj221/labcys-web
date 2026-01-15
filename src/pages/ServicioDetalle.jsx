import { useParams } from "react-router-dom";

export default function ServicioDetalle() {
  const { id } = useParams();

  return (
    <section style={{ padding: "4rem" }}>
      <h2>{id.toUpperCase()}</h2>
      <p>
        Detailed technical information, procedures, standards applied,
        and operational scope of this service.
      </p>
    </section>
  );
}
