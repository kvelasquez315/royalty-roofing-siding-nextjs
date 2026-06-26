// White footer — logo, nav links, contact info, copyright, privacy policy
import { trackCall } from "@/lib/tracking";

const LOGO =
  "/images/jgBpqGuFanZshxxZ.png";

const NAV_LINKS = [
  { label: "Why Royalty", id: "why-royalty" },
  { label: "Projects", id: "projects" },
  { label: "Reviews", id: "reviews" },
  { label: "Our Team", id: "team" },
  { label: "Get Estimate", id: "bottom-form" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #f3f4f6" }}>
      <div
        className="w-full"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 28px 40px" }}
      >
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "0",
          }}
        >
          {/* Brand col */}
          <div>
            <img
              src={LOGO}
              alt="Royalty Roofing and Siding"
              loading="lazy"
              decoding="async"
              style={{ height: "52px", width: "auto", marginBottom: "16px", display: "block" }}
            />
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                lineHeight: 1.7,
                fontFamily: "var(--font-body)",
                maxWidth: "320px",
              }}
            >
              Omaha's trusted roofing and siding contractor since 2010. Best of Omaha winner 7
              consecutive years. Family owned and operated.
            </p>
          </div>

          {/* Nav col */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0A1220",
                fontFamily: "var(--font-body)",
                marginBottom: "16px",
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    textAlign: "left",
                    fontSize: "14px",
                    color: "#6B7280",
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#3D6CC0")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#6B7280")}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0A1220",
                fontFamily: "var(--font-body)",
                marginBottom: "16px",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="tel:+14022168850"
                onClick={() => trackCall("footer")}
                style={{
                  fontSize: "14px",
                  color: "#0A1220",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3D6CC0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#0A1220")}
              >
                (402) 216-8850
              </a>
              <a
                href="mailto:info@royaltyroofing.org"
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3D6CC0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6B7280")}
              >
                info@royaltyroofing.org
              </a>
              <span
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  fontFamily: "var(--font-body)",
                }}
              >
                Omaha, NE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid #f3f4f6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#9CA3AF",
              fontFamily: "var(--font-body)",
            }}
          >
            &copy; {new Date().getFullYear()} Royalty Roofing and Siding. All rights reserved.
          </p>
          <a
            href="https://royaltyroofing.org/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              color: "#9CA3AF",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3D6CC0")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF")}
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          footer .grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          footer .w-full { padding: 40px 16px 100px !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          footer .grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
          footer .w-full { padding: 40px 20px 60px !important; }
        }
      `}</style>
    </footer>
  );
}
