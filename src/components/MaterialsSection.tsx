// MaterialsSection — white bg
// Centered headline + intro, three-card grid with logos visually equalized
// No em dashes anywhere

const LOGO_PROVIA = "/images/XxgXDFdUhDAagvLw.png";
const LOGO_JAMES_HARDIE = "/images/YnePGBEIWqLQdqGG.png";
const LOGO_LP = "/images/fOWVtTYGxYiAAUbT.png";

// Each logo has a different natural aspect ratio and visual weight.
// We normalize perceived size by giving each a specific rendered width
// so they all read as roughly the same visual footprint.
// ProVia: wide horizontal logo — needs more width
// James Hardie: square-ish stacked logo — needs less width
// LP SmartSide: wide horizontal logo — needs more width
const MATERIALS = [
  {
    logo: LOGO_JAMES_HARDIE,
    alt: "James Hardie logo",
    logoWidth: "140px",
    name: "James Hardie",
    description:
      "The gold standard in fiber cement siding. James Hardie products are non-combustible, moisture-resistant, and backed by a 30-year warranty. HardiePlank and HardiePanel are among the most popular siding choices for Omaha homeowners looking for a long-term, low-maintenance solution.",
  },
  {
    logo: LOGO_LP,
    alt: "LP SmartSide logo",
    logoWidth: "200px",
    name: "LP SmartSide",
    description:
      "Engineered wood siding that combines the natural look of wood with the durability of treated composite. LP SmartSide resists impact, moisture, and fungal decay, and is backed by a 50-year limited warranty. A great option for homeowners who want the warmth of wood without the upkeep.",
  },
  {
    logo: LOGO_PROVIA,
    alt: "ProVia logo",
    logoWidth: "180px",
    name: "ProVia",
    description:
      "A premium vinyl and fiber cement siding manufacturer known for exceptional durability and an industry-leading warranty. ProVia products are engineered for the Midwest climate, built to handle hail, wind, and temperature swings without warping, fading, or cracking.",
  },
];

export default function MaterialsSection() {
  const scrollToForm = () => {
    document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="materials" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>
        {/* Centered headline + intro */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 6vw, 80px)",
              lineHeight: 0.93,
              color: "#0A1220",
              margin: "0 0 20px",
              letterSpacing: "0.01em",
            }}
          >
            EVERY HOME IS DIFFERENT.{" "}
            <span style={{ color: "#3D6CC0" }}>WE'LL HELP YOU PICK THE RIGHT MATERIAL.</span>
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
            We install the three most trusted siding brands in the industry. Here's what makes each
            one different and why the right choice depends on your home, your goals, and your budget.
          </p>
        </div>

        {/* Three-card grid */}
        <div
          className="materials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          {MATERIALS.map(({ logo, alt, logoWidth, name, description }) => (
            <div
              key={name}
              style={{
                background: "#ffffff",
                borderRadius: "8px",
                padding: "32px 28px 28px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* Logo container — fixed height, centered, logos sized individually for visual parity */}
              <div
                style={{
                  width: "100%",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <img
                  src={logo}
                  alt={alt}
                  style={{
                    width: logoWidth,
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              {/* Material name */}
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#0A1220",
                  marginBottom: "10px",
                }}
              >
                {name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA row — centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "#374151",
              lineHeight: 1.75,
            }}
          >
            Not sure which material is right for your home? We'll help you figure it out.
          </p>
          <button
            onClick={scrollToForm}
            style={{
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
            GET A FREE ESTIMATE
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          #materials { padding: 56px 0 !important; }
          #materials > div { padding: 0 16px !important; }
          .materials-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .materials-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
          #materials > div { padding: 0 20px !important; }
        }
        @media (max-width: 900px) and (min-width: 641px) {
          .materials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
