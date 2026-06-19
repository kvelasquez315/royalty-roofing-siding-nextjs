// "Why Royalty" section — id="why-royalty"
// Full-width H2, then two-column: proof blocks left, photo right

const SIDING_PHOTO = "/images/KFNOWJSlNBpwyTiA.png";

const PROOF_BLOCKS = [
  {
    num: "01",
    title: "We know siding materials inside and out",
    body: "Fiber cement, LP SmartSide, vinyl, engineered wood. We've installed them all across hundreds of Omaha homes. We'll explain the real differences so you can make the right call for your home.",
  },
  {
    num: "02",
    title: "We'll tell you if your siding can be repaired",
    body: "If a few panels need replacing or a section needs patching, we'll quote that instead of pushing a full re-side. If it does need full replacement, we'll explain exactly why.",
  },
  {
    num: "03",
    title: "Storm damage? We handle the claim.",
    body: "If your siding was damaged in a storm, we work directly with your insurance company from the first call to the final payment. You focus on picking what you want. We handle the paperwork.",
  },
  {
    num: "04",
    title: "Every job backed by a written warranty",
    body: "We stand behind our work. Every siding installation comes with a written workmanship warranty, plus the full manufacturer warranty on whatever material you choose.",
  },
];

export default function HonestAssessmentSection() {
  const scrollToForm = () => {
    document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-royalty" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>
        {/* Full-width H2 */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 6vw, 80px)",
            lineHeight: 0.93,
            color: "#0A1220",
            margin: "0 0 56px",
            letterSpacing: "0.01em",
          }}
        >
          WE WALK YOU THROUGH EVERY OPTION, HELP YOU PICK THE RIGHT MATERIAL, AND MAKE SURE THE INSTALL IS{" "}
          <span style={{ color: "#3D6CC0" }}>DONE RIGHT.</span>
        </h2>

        {/* Two-column: proof left, photo right */}
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "#374151",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
            Your siding is the first thing people notice about your home. We take that seriously.
            We'll help you choose between fiber cement, vinyl, engineered wood, and other options
            based on what fits your home, your style, and your budget. And if you have storm damage,
            we handle the insurance process too.
            </p>
            <div>
              {PROOF_BLOCKS.map(({ num, title, body }) => (
                <div
                  key={num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "16px",
                    marginBottom: "32px",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "28px",
                      color: "#3D6CC0",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#0A1220",
                        marginBottom: "6px",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        color: "#6B7280",
                        lineHeight: 1.7,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToForm}
              style={{
                marginTop: "8px",
                background: "#3D6CC0",
                color: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0";
              }}
            >
              Schedule a Free Estimate
            </button>
          </div>

          {/* RIGHT: Photo */}
          <div style={{ position: "relative" }}>
            <img
              src={SIDING_PHOTO}
              alt="Royalty Roofing completed job"
              className="why-photo"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                borderRadius: "12px",
                display: "block",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .why-photo { height: 280px !important; }
          #why-royalty > div { padding: 0 20px !important; }
        }
        @media (max-width: 640px) {
          #why-royalty { padding: 56px 0 !important; }
          #why-royalty > div { padding: 0 16px !important; }
          .why-photo { height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
