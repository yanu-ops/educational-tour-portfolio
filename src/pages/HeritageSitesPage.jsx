import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";

const heritageSites = [
  {
    id: 1,
    num: "01",
    name: "Cebu",
    subtitle: "Queen City of the South",
    photos: [
      "/images/Cebu/cebua.jpeg",
      "/images/Cebu/lapulapu.jpeg",
      "/images/Cebu/cebuc.jpeg",
      "/images/Cebu/cebuchurch.jpeg",
      "/images/Cebu/cebu1.jpeg",
      "/images/Cebu/cebug.jpeg",
      "/images/Cebu/cebub.jpeg",
      "/images/Cebu/cebus.jpeg",
      "/images/Cebu/bai.jpeg",
      "/images/Cebu/cebu hotel.jpeg",
    ],
  },
  {
    id: 2,
    num: "02",
    name: "Bohol",
    subtitle: "Island of Wonders",
    photos: [
      "/images/Bohol/b2.jpeg",
      "/images/Bohol/b3.jpeg",
      "/images/Bohol/b4.jpeg",
    ],
  },
];

const HeritageSitesPage = () => {
  const [photoIndices, setPhotoIndices] = useState(heritageSites.map(() => 0));
  const carouselRefs = useRef([]);

  const prevPhoto = (si) => {
    setPhotoIndices((prev) =>
      prev.map((v, i) => (i === si ? (v - 1 + heritageSites[si].photos.length) % heritageSites[si].photos.length : v))
    );
  };

  const nextPhoto = (si) => {
    setPhotoIndices((prev) =>
      prev.map((v, i) => (i === si ? (v + 1) % heritageSites[si].photos.length : v))
    );
  };

  /* Scroll carousel to centre active photo */
  useEffect(() => {
    heritageSites.forEach((_, si) => {
      const carousel = carouselRefs.current[si];
      if (!carousel) return;
      const child = carousel.children[photoIndices[si]];
      if (!child) return;
      const cw = carousel.offsetWidth;
      const iw = child.offsetWidth;
      carousel.scrollTo({ left: child.offsetLeft - cw / 2 + iw / 2, behavior: "smooth" });
    });
  }, [photoIndices]);

  return (
    <Layout>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>

        {/* Page header */}
        <div style={{ marginBottom: "64px" }}>
          <p style={{ color: "var(--c-gold)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--c-gold)" }} />
            Cultural Landmarks
          </p>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, fontStyle: "italic", color: "var(--c-white)", lineHeight: 1.1 }}>
            Heritage Sites
          </h1>
        </div>

        {/* Sites */}
        {heritageSites.map((site, si) => {
          const current = photoIndices[si];
          const total = site.photos.length;

          return (
            <div key={site.id} style={{ marginBottom: "80px" }}>

              {/* Site header row */}
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                  <span className="font-display" style={{ fontSize: "0.9rem", color: "var(--c-gold-dim)", fontStyle: "italic", opacity: 0.7 }}>
                    {site.num}
                  </span>
                  <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 600, fontStyle: "italic", color: "var(--c-white)" }}>
                    {site.name}
                  </h2>
                  <span style={{ fontSize: "0.75rem", color: "var(--c-muted)", letterSpacing: "0.1em" }}>
                    {site.subtitle}
                  </span>
                </div>

                {/* Photo counter */}
                <span style={{ fontSize: "0.78rem", color: "var(--c-gold)", letterSpacing: "0.15em", fontVariantNumeric: "tabular-nums" }}>
                  {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>

              {/* Carousel wrapper */}
              <div style={{ position: "relative" }}>

                {/* Prev button */}
                <button
                  onClick={() => prevPhoto(si)}
                  aria-label={`Previous photo of ${site.name}`}
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    background: "rgba(11,15,26,0.8)",
                    border: "1px solid var(--c-border)",
                    color: "var(--c-text)",
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--c-gold)"; e.currentTarget.style.color = "var(--c-gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--c-border)"; e.currentTarget.style.color = "var(--c-text)"; }}
                >
                  ‹
                </button>

                {/* Scrollable strip */}
                <div
                  ref={(el) => (carouselRefs.current[si] = el)}
                  style={{
                    display: "flex",
                    overflowX: "scroll",
                    gap: "12px",
                    padding: "0 56px",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    alignItems: "center",
                  }}
                  className="scrollbar-hide"
                >
                  {site.photos.map((photo, idx) => {
                    const isCenter = idx === current;
                    return (
                      <button
                        key={idx}
                        onClick={() => setPhotoIndices(prev => prev.map((v, i) => i === si ? idx : v))}
                        style={{
                          flexShrink: 0,
                          border: isCenter ? "1px solid var(--c-gold)" : "1px solid transparent",
                          padding: 0,
                          cursor: "pointer",
                          background: "none",
                          transition: "all 0.35s ease",
                          borderRadius: "2px",
                          overflow: "hidden",
                        }}
                        aria-label={`Go to photo ${idx + 1}`}
                      >
                        <img
                          src={photo}
                          alt={`${site.name} photo ${idx + 1}`}
                          style={{
                            display: "block",
                            width: isCenter ? "420px" : "240px",
                            height: isCenter ? "280px" : "180px",
                            objectFit: "cover",
                            opacity: isCenter ? 1 : 0.4,
                            filter: isCenter ? "saturate(1)" : "saturate(0.4)",
                            transition: "all 0.35s ease",
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Next button */}
                <button
                  onClick={() => nextPhoto(si)}
                  aria-label={`Next photo of ${site.name}`}
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    background: "rgba(11,15,26,0.8)",
                    border: "1px solid var(--c-border)",
                    color: "var(--c-text)",
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--c-gold)"; e.currentTarget.style.color = "var(--c-gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--c-border)"; e.currentTarget.style.color = "var(--c-text)"; }}
                >
                  ›
                </button>
              </div>

              {/* Dot indicators */}
              <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "20px" }}>
                {site.photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPhotoIndices(prev => prev.map((v, i) => i === si ? idx : v))}
                    aria-label={`Photo ${idx + 1}`}
                    style={{
                      width: idx === current ? "24px" : "6px",
                      height: "4px",
                      borderRadius: "2px",
                      background: idx === current ? "var(--c-gold)" : "var(--c-border)",
                      border: "none",
                      cursor: "pointer",
                      transition: "width 0.3s ease, background 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Divider between sites */}
              {si < heritageSites.length - 1 && (
                <div style={{ height: "1px", background: "var(--c-border)", marginTop: "60px" }} />
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default HeritageSitesPage;
