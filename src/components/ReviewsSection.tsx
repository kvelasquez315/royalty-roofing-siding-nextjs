// 6 Google reviews — dark navy bg, white cards, star icons, Google G mark

const REVIEWS = [
  {
    name: "Brett A.",
    stars: 5,
    text: "I had a relatively small job and because of that I was worried I wouldn't be able to find someone to help me. Royalty came out quickly, assessed the situation, and fixed the problem at a fair price. Highly recommend.",
  },
  {
    name: "Brian B.",
    stars: 5,
    text: "AJ worked tirelessly with three different insurance adjusters to get us a fair settlement. He was patient, professional, and kept us informed every step of the way. Couldn't be happier with the result.",
  },
  {
    name: "Natalie V.",
    stars: 5,
    text: "They responded immediately and made the whole process incredibly easy. The crew was professional, cleaned up after themselves, and the roof looks great. Would absolutely use them again.",
  },
  {
    name: "Lisa F.",
    stars: 5,
    text: "It is just so rare to find such an honest contractor. They told me I didn't need a full replacement when other companies were pushing for one. Saved me thousands. That kind of integrity is hard to find.",
  },
  {
    name: "Diane D.",
    stars: 5,
    text: "David did all the negotiating with our insurance company and got us a much better outcome than we expected. The whole experience was stress-free. Royalty is the real deal.",
  },
  {
    name: "Mike S.",
    stars: 5,
    text: "From the initial inspection to the final cleanup, everything was handled professionally. They communicated clearly throughout the project and finished on time. Great company.",
  },
];

function SVGStars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7.18 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleGMark() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14">
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
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ background: "#0A1220", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>
        <div className="reviews-header" style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 5vw, 64px)",
              lineHeight: 0.95,
              color: "white",
              letterSpacing: "0.01em",
            }}
          >
            THOUSANDS OF OMAHA HOMEOWNERS HAVE TRUSTED US WITH THEIR HOME AND{" "}
            <span style={{ color: "#3D6CC0" }}>GIVEN US 4.9 STARS ON GOOGLE.</span>
          </h2>
        </div>

        <div
          className="reviews-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              style={{
                background: "#ffffff",
                borderRadius: "8px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SVGStars count={review.stars} />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#374151",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: "20px",
                }}
              >
                "{review.text}"
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#0A1220",
                    marginBottom: "4px",
                  }}
                >
                  {review.name}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <GoogleGMark />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#9CA3AF",
                      fontSize: "12px",
                    }}
                  >
                    Google Review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          #reviews { padding: 56px 0 !important; }
          #reviews > div { padding: 0 16px !important; }
          #reviews .reviews-header { margin-bottom: 28px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
          #reviews > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
