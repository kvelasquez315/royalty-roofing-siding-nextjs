import EstimateForm from "./EstimateForm";

const BBB_LOGO =
  "/images/OvrIKRhrXjOUvBsh.png";

const badgeStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: "rgba(255,255,255,0.16)",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "10px",
  padding: "10px 16px",
  backdropFilter: "blur(8px)",
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "110px",
        overflow: "hidden",
      }}
    >
      {/* Background photo — optimized, responsive <picture>.
          AVIF/WebP/JPG at 640/1024/1920. Explicit width/height + object-fit
          prevent layout shift; fetchPriority high so it loads as the LCP. */}
      <picture>
        <source
          type="image/avif"
          srcSet="/images/hero/hero-640.avif 640w, /images/hero/hero-1024.avif 1024w, /images/hero/hero-1920.avif 1920w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/images/hero/hero-640.webp 640w, /images/hero/hero-1024.webp 1024w, /images/hero/hero-1920.webp 1920w"
          sizes="100vw"
        />
        <img
          src="/images/hero/hero-1024.jpg"
          srcSet="/images/hero/hero-640.jpg 640w, /images/hero/hero-1024.jpg 1024w, /images/hero/hero-1920.jpg 1920w"
          sizes="100vw"
          width={1200}
          height={900}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
      </picture>
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(6,12,24,0.92) 0%, rgba(6,12,24,0.82) 50%, rgba(6,12,24,0.55) 100%)",
        }}
      />

      {/* Content grid */}
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 480px",
          gap: "48px",
          alignItems: "center",
          padding: "40px 28px 80px",
        }}
      >
        {/* LEFT: Headline + badges */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "16px",
            }}
          >
            Omaha's Trusted Siding Contractor Since 2010
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 6.5vw, 84px)",
              lineHeight: 0.93,
              color: "white",
              margin: "0 0 24px",
              letterSpacing: "0.01em",
            }}
          >
            NEW SIDING CHANGES EVERYTHING ABOUT YOUR HOME.{" "}
            <span style={{ color: "#3D6CC0" }}>WE MAKE SURE YOU GET IT RIGHT.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 1.8vw, 21px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.65,
              marginBottom: "32px",
              maxWidth: "540px",
            }}
          >
            Whether you're upgrading your home's exterior, replacing storm-damaged panels, or just
            ready for a change, we'll walk you through your options and give you a fair price. Free
            estimates, no pressure.
          </p>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {/* Google rating */}
            <div style={badgeStyle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7.18 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.90)", fontFamily: "var(--font-body)", fontWeight: 600 }}>
                  4.9 Google Rating
                </span>
              </div>
            </div>

            {/* Best of Omaha */}
            <div style={badgeStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7.18 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "white", fontFamily: "var(--font-body)" }}>
                  Best of Omaha
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.90)", fontFamily: "var(--font-body)" }}>
                  7 Consecutive Years
                </div>
              </div>
            </div>

            {/* BBB A+ */}
            <div style={badgeStyle}>
              <img src={BBB_LOGO} alt="BBB" style={{ width: "26px", height: "26px", objectFit: "contain" }} />
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "white", fontFamily: "var(--font-body)" }}>
                  BBB A+ Rated
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.90)", fontFamily: "var(--font-body)" }}>
                  Accredited Business
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* RIGHT: Form */}
        <div style={{ paddingBottom: "8px" }} className="hero-form-col">
          <EstimateForm
            variant="glass"
            source="hero"
            headerText="Get Your Free Siding Estimate"
            buttonText="GET MY FREE ESTIMATE"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-form-col { display: block !important; }
          #hero { padding-top: 90px !important; min-height: auto !important; }
          .hero-grid { padding-bottom: 110px !important; }
        }
        @media (max-width: 480px) {
          .hero-grid { padding: 20px 16px 110px !important; }
          #hero { padding-top: 84px !important; }
        }
      `}</style>
    </section>
  );
}
