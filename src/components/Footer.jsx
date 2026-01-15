export default function Footer() {
  return (
    <footer style={{
      background: "var(--black)",
      color: "#fff",
      textAlign: "center",
      padding: "1rem"
    }}>
      © {new Date().getFullYear()} LABCYS – Metrology & Calibration Services
    </footer>
  );
}
