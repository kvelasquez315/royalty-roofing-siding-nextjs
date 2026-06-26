// Stats bar + 7 Best of Omaha award badges (2020-2026)
// Using uploaded user-provided award badge images

const AWARDS = [
  { year: "2020", src: "/images/LlgtXsdprgaanGfx.png", label: "Residential Roofing" },
  { year: "2021", src: "/images/qNaULRMaZeqbsnzS.png", label: "Residential Siding" },
  { year: "2022", src: "/images/DmmzFGZOAccsoVOH.png", label: "Residential Siding" },
  { year: "2023", src: "/images/SbEPJazInjDalbJs.png", label: "Residential Roofing" },
  { year: "2024", src: "/images/QFHwvTQBvITWjmlm.png", label: "Residential Roofing" },
  { year: "2025", src: "/images/yhOuUVAwtgWfnxFV.png", label: "Residential Roofing" },
  { year: "2026", src: "/images/TKdWIcNrgoiYUPXs.png", label: "Residential Siding" },
];

const STATS = [
  { value: "500+", label: "5-Star Reviews" },
  { value: "7", label: "Best of Omaha Awards" },
  { value: "15+", label: "Years in Business" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function TrustBar() {
  return (
    <section style={{ background: "#F7F7F5", padding: "64px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>
        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
            marginBottom: "56px",
          }}
          className="stats-grid"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 4vw, 56px)",
                  color: "#0A1220",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#6B7280",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Award badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
          className="awards-inner"
        >
          {AWARDS.map(({ year, src, label }) => (
            <img
              key={year}
              src={src}
              alt={`Best of Omaha ${year} Winner — ${label}`}
              loading="lazy"
              decoding="async"
              style={{
                height: "130px",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          section { padding: 40px 0 !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; margin-bottom: 36px !important; }
          .awards-inner { gap: 8px !important; }
          .awards-inner img { height: 72px !important; }
        }
        @media (max-width: 380px) {
          .awards-inner img { height: 58px !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .awards-inner img { height: 100px !important; }
        }
      `}</style>
    </section>
  );
}
