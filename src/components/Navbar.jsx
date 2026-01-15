import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "var(--black)",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <strong style={{ color: "var(--red)" }}>LABCYS</strong>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: 20 }}>Home</Link>
        <Link to="/servicios" style={{ color: "#fff", marginRight: 20 }}>Services</Link>
        <Link to="/contacto" style={{ color: "#fff" }}>Contact</Link>
      </div>
    </nav>
  );
}
