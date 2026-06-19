// id="team" — AJ and David Velasquez, family-owned story
// Using uploaded team photos

const TEAM_1 = "/images/PGRmIAVopyryyJjg.png";
const TEAM_2 = "/images/TwjoMTfQFubmISik.png";

export default function TeamBannerSection() {
  return (
    <section id="team" style={{ background: "#F7F7F5", padding: "96px 0" }}>
      <div
        className="team-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* LEFT: Copy */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 5vw, 64px)",
              lineHeight: 0.93,
              color: "#0A1220",
              margin: "0 0 24px",
              letterSpacing: "0.01em",
            }}
          >
            FAMILY OWNED AND OPERATED.{" "}
            <span style={{ color: "#3D6CC0" }}>OMAHA IS OUR HOME TOO.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "#374151",
              lineHeight: 1.75,
              marginBottom: "32px",
              maxWidth: "480px",
            }}
          >
            We're not a franchise or a storm-chasing crew that rolls in after a hail event and
            disappears. AJ and David Velasquez started Royalty in 2010 and have been serving Omaha
            homeowners ever since. When you call us, you get us.
          </p>
          <div style={{ marginBottom: "36px" }}>
            {[
              "Family owned and operated since 2010",
              "Omaha-based team, we live here too",
              "Direct communication with your project manager",
              "We answer our phones and return calls same day",
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
                    color: "#374151",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
          <a
            href="tel:4022168850"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 32px",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#2d5aad";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#3D6CC0";
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call (402) 216-8850
          </a>
        </div>

        {/* RIGHT: Team photos */}
        <div
          className="team-photos"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            height: "480px",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={TEAM_1}
              alt="AJ Velasquez, Owner, Royalty Roofing and Siding"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={TEAM_2}
              alt="David Velasquez, Co-Owner, Royalty Roofing and Siding"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .team-grid > div:first-child { padding: 0 !important; }
          .team-photos { height: 360px !important; }
          #team > div { padding: 0 20px !important; }
        }
        @media (max-width: 640px) {
          #team { padding: 56px 0 !important; }
          #team > div { padding: 0 16px !important; }
          .team-photos { grid-template-columns: 1fr 1fr !important; gap: 10px !important; height: auto !important; }
          .team-photos > div { aspect-ratio: 3/4; height: auto !important; }
        }
      `}</style>
    </section>
  );
}
