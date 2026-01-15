import { Link } from "react-router-dom";

export default function ServiceCard({ id, title, description }) {
  return (
    <div style={{
      border: "1px solid var(--gray)",
      padding: "1.5rem",
      marginTop: "1rem"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/servicios/${id}`}>View details</Link>
    </div>
  );
}
