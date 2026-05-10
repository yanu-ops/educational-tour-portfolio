import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaBook, FaLandmark, FaUserGraduate } from "react-icons/fa6";

/* ── Section navigation cards ─────────────────────────────────────────── */
const sections = [
  {
    to: "/company",
    Icon: FaBuilding,
    label: "Companies",
    num: "01",
    desc: "Five industry visits across Cebu and Bohol — startups, data firms, and emergency tech.",
  },
  {
    to: "/journal",
    Icon: FaBook,
    label: "Journal",
    num: "02",
    desc: "Daily reflections and insights written during each company visit.",
  },
  {
    to: "/heritage",
    Icon: FaLandmark,
    label: "Heritage Sites",
    num: "03",
    desc: "Cultural landmarks from Lapu-Lapu Shrine to the Chocolate Hills of Bohol.",
  },
  {
    to: "/student-info",
    Icon: FaUserGraduate,
    label: "Student Info",
    num: "04",
    desc: "Academic background, student ID, and tour certificate.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const cardsRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  /* Trigger hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Intersection Observer for card section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--c-bg)" }}>

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* ── Left: Photo ── */}
        <div
          style={{
            flex: "0 0 auto",
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "320px",
              maxWidth: "90vw",
            }}
          >
            {/* Decorative gold border frame */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                right: "12px",
                bottom: "12px",
                border: "1px solid var(--c-gold)",
                borderRadius: "4px",
                opacity: 0.4,
                pointerEvents: "none",
              }}
            />
            <img
              src="/images/mahFace.jpeg"
              alt="Ianne Marc C. Plaza"
              style={{
                width: "320px",
                maxWidth: "90vw",
                height: "400px",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "4px",
                display: "block",
                filter: "contrast(1.05) saturate(0.85)",
              }}
            />
            {/* Gold label strip */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent, rgba(11,15,26,0.92))",
                padding: "32px 20px 16px",
                borderRadius: "0 0 4px 4px",
              }}
            >
              <p
                style={{
                  color: "var(--c-gold)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                BSIT · 3rd Year · HCDC
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: Text ── */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              color: "var(--c-gold)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--c-gold)" }} />
            Educational Tour · 2025
          </p>

          {/* Main heading */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 1.05,
              color: "var(--c-white)",
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            Hey,<br />
            <span style={{ color: "var(--c-gold)" }}>I'm Ianne.</span>
          </h1>

          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--c-muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "28px",
              fontWeight: 400,
            }}
          >
            Plaza, Ianne Marc C.
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(232,226,213,0.75)",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "40px",
            }}
          >
            This portfolio documents my journey during our educational tour —
            company visits, heritage site explorations, journal reflections,
            and academic milestones across Cebu and Bohol.
          </p>

          {/* CTA */}
          <button
            onClick={() => cardsRef.current?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "transparent",
              border: "1px solid var(--c-gold)",
              color: "var(--c-gold)",
              padding: "14px 32px",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.25s, color 0.25s",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--c-gold)";
              e.currentTarget.style.color = "var(--c-bg)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--c-gold)";
            }}
          >
            Explore Portfolio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* ════════════════════ SECTION CARDS ════════════════════ */}
      <section
        ref={cardsRef}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px 120px",
        }}
      >
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "60px" }}>
          <span
            style={{
              color: "var(--c-gold)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Sections
          </span>
          <span style={{ flex: 1, height: "1px", background: "var(--c-border)" }} />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--c-border)",
            border: "1px solid var(--c-border)",
          }}
        >
          {sections.map(({ to, Icon, label, num, desc }, i) => (
            <button
              key={to}
              onClick={() => navigate(to)}
              style={{
                background: "var(--c-surface)",
                border: "none",
                padding: "40px 32px",
                textAlign: "left",
                cursor: "pointer",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#141d30";
                e.currentTarget.querySelector(".card-icon").style.color = "var(--c-gold)";
                e.currentTarget.querySelector(".card-arrow").style.opacity = "1";
                e.currentTarget.querySelector(".card-arrow").style.transform = "translateX(0)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--c-surface)";
                e.currentTarget.querySelector(".card-icon").style.color = "var(--c-border)";
                e.currentTarget.querySelector(".card-arrow").style.opacity = "0";
                e.currentTarget.querySelector(".card-arrow").style.transform = "translateX(-8px)";
              }}
            >
              {/* Number */}
              <span
                className="font-display"
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  color: "var(--c-gold)",
                  letterSpacing: "0.15em",
                  marginBottom: "20px",
                  opacity: 0.7,
                }}
              >
                {num}
              </span>

              {/* Icon */}
              <Icon
                className="card-icon"
                size={28}
                style={{
                  color: "var(--c-border)",
                  marginBottom: "16px",
                  transition: "color 0.25s",
                  display: "block",
                }}
              />

              {/* Title */}
              <h3
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--c-white)",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {label}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.87rem",
                  color: "var(--c-muted)",
                  lineHeight: 1.6,
                  marginBottom: "0",
                }}
              >
                {desc}
              </p>

              {/* Arrow */}
              <span
                className="card-arrow"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "24px",
                  color: "var(--c-gold)",
                  fontSize: "1.1rem",
                  opacity: 0,
                  transform: "translateX(-8px)",
                  transition: "opacity 0.25s, transform 0.25s",
                }}
              >
                →
              </span>

              {/* Bottom gold accent line on hover */}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--c-gold)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                }}
                className="card-line"
              />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
