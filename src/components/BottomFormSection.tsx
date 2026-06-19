// id="bottom-form" — dark navy bg, headline + trust checklist left, form right
import EstimateForm from "./EstimateForm";

export default function BottomFormSection() {
  return (
    <section id="bottom-form" style={{ background: "#0A1220", padding: "96px 0" }}>
      <div
        className="bottom-form-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "1fr 480px",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div style={{ paddingTop: "8px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 5.5vw, 72px)",
              lineHeight: 0.93,
              color: "white",
              margin: "0 0 24px",
              letterSpacing: "0.01em",
            }}
          >
            SCHEDULE YOUR FREE SIDING ESTIMATE AND SEE WHAT YOUR{" "}
            <span style={{ color: "#3D6CC0" }}>HOME COULD LOOK LIKE.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              marginBottom: "32px",
              maxWidth: "480px",
            }}
          >
            We'll come to your home, assess your current siding, walk you through material and color
            options, and give you a detailed written estimate. No obligation. No pressure. We tell
            you what it needs and what it costs. Response within one business day.
          </p>
          <a
            href="tel:4022168850"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "white",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 3.5vw, 44px)",
              textDecoration: "none",
              marginBottom: "36px",
              letterSpacing: "0.02em",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#3D6CC0";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (402) 216-8850
          </a>
          <div>
            {[
              "Family Owned & Operated Since 2010",
              "Best of Omaha, 7 Consecutive Years",
              "4.9 Stars on Google (500+ Reviews)",
              "Licensed & Insured in Nebraska",
              "Workmanship Warranty on Every Job",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8l3.5 3.5L13 4.5"
                    stroke="#3D6CC0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.80)",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Form */}
        <div>
          <EstimateForm
            variant="glass"
            headerText="Get Your Free Consultation"

            buttonText="GET MY FREE ESTIMATE"
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .bottom-form-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          #bottom-form > div { padding: 0 20px !important; }
        }
        @media (max-width: 640px) {
          #bottom-form { padding: 56px 0 100px !important; }
          #bottom-form > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
