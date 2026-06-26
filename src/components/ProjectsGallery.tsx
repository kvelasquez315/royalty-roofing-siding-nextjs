// id="projects" — "Recent Omaha Projects" photo gallery.
// All images are lazy-loaded, optimized AVIF/WebP/JPG derivatives.

const PROJECTS = [
  {
    id: 1,
    location: "Elkhorn, NE",
    caption: "Full vinyl siding replacement",
  },
  {
    id: 2,
    location: "Papillion, NE",
    caption: "Board-and-batten accent siding",
  },
  {
    id: 3,
    location: "West Omaha, NE",
    caption: "Fiber cement siding with stone",
  },
  {
    id: 4,
    location: "Bennington, NE",
    caption: "Lap siding & trim refresh",
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
        }}
        className="projects-wrap"
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#3D6CC0",
              marginBottom: "12px",
            }}
          >
            Our Work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 60px)",
              lineHeight: 0.95,
              color: "#0A1220",
              margin: "0 0 16px",
              letterSpacing: "0.01em",
            }}
          >
            RECENT OMAHA PROJECTS
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "#374151",
              lineHeight: 1.6,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Real siding transformations on homes right here in the Omaha metro.
            This is the quality and finish you can expect on your home.
          </p>
        </div>

        {/* Grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {PROJECTS.map(({ id, location, caption }) => (
            <figure
              key={id}
              style={{
                margin: 0,
                borderRadius: "12px",
                overflow: "hidden",
                background: "#F7F7F5",
                boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`/images/projects/project-${id}-400.avif 400w, /images/projects/project-${id}-800.avif 800w`}
                    sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 25vw"
                  />
                  <source
                    type="image/webp"
                    srcSet={`/images/projects/project-${id}-400.webp 400w, /images/projects/project-${id}-800.webp 800w`}
                    sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 25vw"
                  />
                  <img
                    src={`/images/projects/project-${id}-800.jpg`}
                    srcSet={`/images/projects/project-${id}-400.jpg 400w, /images/projects/project-${id}-800.jpg 800w`}
                    sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 25vw"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    alt={`${caption} on an Omaha-area home in ${location}, completed by Royalty Roofing and Siding`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </picture>
              </div>
              <figcaption style={{ padding: "16px 18px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#0A1220",
                    marginBottom: "2px",
                  }}
                >
                  {location}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#6B7280",
                  }}
                >
                  {caption}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
          #projects { padding: 64px 0 !important; }
          .projects-wrap { padding: 0 20px !important; }
        }
        @media (max-width: 480px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          #projects { padding: 56px 0 !important; }
          .projects-wrap { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
