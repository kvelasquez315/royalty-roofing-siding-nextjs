// SidingCostSection — white bg, sits between Team and the final form.
// Handles price anxiety before the form: an honest cost range plus a short FAQ.
// Reassurance: fair, written quote, no pressure. No em dashes anywhere.

const FAQS = [
  {
    q: "Why can't you give one flat price?",
    a: "Every home is different. Square footage, siding material, the condition of what's underneath, and trim details all change the number. That's why we measure first, then quote.",
  },
  {
    q: "Are estimates really free?",
    a: "Yes. We come out, inspect your home, and give you a written quote at no cost and with no obligation to move forward.",
  },
  {
    q: "Do you offer financing?",
    a: "We do. Many Omaha homeowners spread the cost over manageable monthly payments. We can walk you through the options during your estimate.",
  },
];

export default function SidingCostSection() {
  const scrollToForm = () => {
    document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cost" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 28px" }}>
        {/* Headline */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 0.95,
              color: "#0A1220",
              margin: "0 0 18px",
              letterSpacing: "0.01em",
            }}
          >
            WHAT NEW SIDING COSTS IN OMAHA
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "#374151",
              lineHeight: 1.75,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Straight answer: most full siding projects in the Omaha area land
            between{" "}
            <strong style={{ color: "#0A1220" }}>$9,000 and $25,000</strong>,
            depending on the size of your home and the material you choose.
            Smaller jobs and repairs cost less. We never hide behind vague
            numbers. We give you a fair, written quote with no pressure.
          </p>
        </div>

        {/* Cost range highlight card */}
        <div
          className="cost-card"
          style={{
            background: "#F7F7F5",
            borderRadius: "10px",
            padding: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "56px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 280px" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 52px)",
                lineHeight: 1,
                color: "#3D6CC0",
                letterSpacing: "0.01em",
                marginBottom: "8px",
              }}
            >
              $9,000 &ndash; $25,000
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Typical range for a full siding replacement in Omaha. Your exact
              price depends on your home. We confirm it in writing before any
              work begins.
            </p>
          </div>
          <button
            onClick={scrollToForm}
            style={{
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              padding: "16px 30px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0";
            }}
          >
            GET MY WRITTEN QUOTE &rarr;
          </button>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 800,
              fontSize: "20px",
              color: "#0A1220",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Common questions about pricing
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  padding: "18px 20px",
                }}
              >
                <summary
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#0A1220",
                    listStyle: "none",
                  }}
                >
                  {q}
                </summary>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    margin: "12px 0 0",
                  }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        #cost details summary::-webkit-details-marker { display: none; }
        #cost details summary { cursor: pointer; }
        @media (max-width: 640px) {
          #cost { padding: 56px 0 !important; }
          #cost > div { padding: 0 16px !important; }
          .cost-card { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}
