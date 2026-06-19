// Fixed bottom bar on mobile — Call Now + GET FREE INSPECTION
// Hidden on lg+ screens via Tailwind lg:hidden

export default function StickyMobileCTA() {
  const scrollToForm = () => {
    document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="lg:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        display: "flex",
        background: "#0A1220",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        padding: "10px 12px",
        gap: "10px",
        paddingBottom: "max(10px, env(safe-area-inset-bottom))",
      }}
    >
      <a
        href="tel:4022168850"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: "rgba(255,255,255,0.1)",
          border: "1.5px solid rgba(255,255,255,0.2)",
          color: "white",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: "15px",
          padding: "13px 12px",
          borderRadius: "8px",
          textDecoration: "none",
          letterSpacing: "0.01em",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Now
      </a>
      <button
        onClick={scrollToForm}
        style={{
          flex: 2,
          background: "#3D6CC0",
          color: "white",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "17px",
          letterSpacing: "0.1em",
          padding: "13px 12px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        GET FREE ESTIMATE
      </button>
    </div>
  );
}
