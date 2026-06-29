import { useState } from "react";
import { trackCall, trackText, trackCTA } from "@/lib/tracking";

const LOGO =
  "/images/jgBpqGuFanZshxxZ.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const NAV_LINKS = [
    { label: "Why Royalty", id: "why-royalty" },
    { label: "Reviews", id: "reviews" },
    { label: "Our Team", id: "team" },
    { label: "Get Estimate", id: "bottom-form" },
  ];

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      {/* Announcement bar */}
      <div
        style={{
          background: "#3D6CC0",
          color: "white",
          textAlign: "center",
          padding: "7px 16px",
          fontSize: "12px",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          letterSpacing: "0.04em",
          lineHeight: 1.4,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        <span className="hidden sm:inline">
          &#9733;&nbsp; BEST OF OMAHA: ROOFING &amp; SIDING, 7 YEARS RUNNING &nbsp;|&nbsp; FREE
          SIDING ESTIMATES &nbsp;|&nbsp; CERTIFIED SIDING INSTALLER
        </span>
        <span className="sm:hidden">&#9733; FREE SIDING ESTIMATE &nbsp;|&nbsp; BEST OF OMAHA 7X</span>
      </div>
      {/* Main nav */}
      <nav
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: "80px",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            src={LOGO}
            alt="Royalty Roofing and Siding"
            className="nav-logo"
            style={{ height: "56px", width: "auto", maxWidth: "100%", objectFit: "contain" }}
          />
        </a>

        {/* Center nav links - desktop only */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "4px" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(15,27,45,0.70)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "0.02em",
                cursor: "pointer",
                padding: "10px 18px",
                borderRadius: "4px",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#3D6CC0";
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(61,108,192,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(15,27,45,0.70)";
                (e.currentTarget as HTMLButtonElement).style.background = "none";
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <a
            href="tel:+14022168850"
            className="hidden sm:flex"
            onClick={() => trackCall("navbar")}
            style={{
              alignItems: "center",
              gap: "7px",
              color: "#0F1B2D",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (402) 216-8850
          </a>
          <a
            href="sms:+14029839816"
            className="hidden md:inline-flex"
            onClick={() => trackText("navbar")}
            style={{
              alignItems: "center",
              gap: "6px",
              color: "#3D6CC0",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Text us
          </a>
          <button
            onClick={() => {
              trackCTA("navbar_free_estimate");
              scrollTo("bottom-form");
            }}
            className="hidden lg:block"
            style={{
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              padding: "11px 22px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.03em",
              transition: "background 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0";
            }}
          >
            Free Estimate
          </button>

          {/* Hamburger — mobile/tablet only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              color: "#0A1220",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden"
          style={{
            background: "white",
            borderBottom: "1px solid #e5e7eb",
            padding: "8px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid #f3f4f6",
                color: "#0A1220",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "17px",
                textAlign: "left",
                padding: "14px 0",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {label}
            </button>
          ))}
          <a
            href="tel:+14022168850"
            onClick={() => trackCall("navbar_mobile")}
            style={{
              marginTop: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "rgba(61,108,192,0.08)",
              color: "#3D6CC0",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "17px",
              padding: "14px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call (402) 216-8850
          </a>
          <a
            href="sms:+14029839816"
            onClick={() => trackText("navbar_mobile")}
            style={{
              marginTop: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "rgba(61,108,192,0.08)",
              color: "#3D6CC0",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "17px",
              padding: "14px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Text Us
          </a>
          <button
            onClick={() => {
              trackCTA("navbar_mobile_free_estimate");
              scrollTo("bottom-form");
            }}
            style={{
              marginTop: "8px",
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-display)",
              fontSize: "18px",
              letterSpacing: "0.08em",
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            FREE ESTIMATE
          </button>
        </div>
      )}
      <style>{`
        @media (max-width: 640px) {
          .nav-logo { height: 44px !important; max-width: 220px !important; }
          nav { height: 64px !important; padding: 0 14px !important; }
        }
        @media (min-width: 641px) and (max-width: 1023px) {
          .nav-logo { height: 50px !important; max-width: 260px !important; }
          nav { height: 72px !important; }
        }
      `}</style>
    </header>
  );
}
