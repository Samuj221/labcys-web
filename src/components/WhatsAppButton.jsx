export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/123456789"
      target="_blank"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "var(--red)",
        color: "#fff",
        padding: "12px",
        borderRadius: "50%"
      }}
    >
      WA
    </a>
  );
}
