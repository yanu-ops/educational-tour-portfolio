import React, { useState } from "react";
import Layout from "../components/Layout";

/* ── Student data ──────────────────────────────────────────────────────── */
const details = [
  { label: "Student ID",  value: "59834842" },
  { label: "Course",      value: "Bachelor of Science in Information Technology" },
  { label: "Year Level",  value: "3rd Year" },
  { label: "School",      value: "Holy Cross of Davao College" },
  { label: "Email",       value: "iannemarc.plaza@hcdc.edu.ph" },
];

const StudentInfoPage = () => {
  const [certZoomed, setCertZoomed] = useState(false);

  return (
    <Layout>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 24px 100px" }}>

        {/* ── Page header ──────────────────────────────────────────────── */}
        <div style={{ marginBottom: "60px" }}>
          <p
            style={{
              color: "var(--c-gold)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "var(--c-gold)",
              }}
            />
            About the Student
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "var(--c-white)",
              lineHeight: 1.1,
            }}
          >
            Student Information
          </h1>
        </div>

        {/* ── Profile card ─────────────────────────────────────────────── */}
        <div
          style={{
            border: "1px solid var(--c-border)",
            background: "var(--c-surface)",
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            marginBottom: "2px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gold top accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, var(--c-gold), transparent)",
            }}
          />

          {/* ── Left: Photo column ───────────────────────────────────── */}
          <div
            style={{
              flexShrink: 0,
              width: "260px",
              minWidth: "200px",
              padding: "48px 36px",
              borderRight: "1px solid var(--c-border)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {/* Photo frame */}
            <div style={{ position: "relative" }}>
              {/* Decorative corner brackets */}
              {[
                { top: "-8px",  left: "-8px",  borderTop: "1px solid var(--c-gold)", borderLeft: "1px solid var(--c-gold)" },
                { top: "-8px",  right: "-8px", borderTop: "1px solid var(--c-gold)", borderRight: "1px solid var(--c-gold)" },
                { bottom: "-8px", left: "-8px",  borderBottom: "1px solid var(--c-gold)", borderLeft: "1px solid var(--c-gold)" },
                { bottom: "-8px", right: "-8px", borderBottom: "1px solid var(--c-gold)", borderRight: "1px solid var(--c-gold)" },
              ].map((style, i) => (
                <span
                  key={i}
                  style={{
                    position: "absolute",
                    width: "14px",
                    height: "14px",
                    ...style,
                  }}
                />
              ))}

              <img
                src="/images/mahFace.jpeg"
                alt="Plaza, Ianne Marc C."
                style={{
                  width: "160px",
                  height: "160px",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  filter: "contrast(1.05) saturate(0.85)",
                }}
              />
            </div>

            {/* Name under photo */}
            <div style={{ textAlign: "center" }}>
              <p
                className="font-display"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "var(--c-white)",
                  lineHeight: 1.3,
                  marginBottom: "6px",
                }}
              >
                Plaza, Ianne Marc C.
              </p>
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "var(--c-gold)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                BSIT · 3rd Year
              </p>
            </div>
          </div>

          {/* ── Right: Detail rows ───────────────────────────────────── */}
          <div style={{ flex: 1, minWidth: "240px", padding: "48px 40px" }}>
            <p
              style={{
                fontSize: "0.65rem",
                color: "var(--c-gold)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              Academic Profile
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--c-border)" }}>
              {details.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: "16px",
                    background: "var(--c-surface)",
                    padding: "14px 20px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--c-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      minWidth: "100px",
                      paddingTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--c-text)",
                      flex: 1,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Certificate section ───────────────────────────────────────── */}
        <div
          style={{
            border: "1px solid var(--c-border)",
            background: "var(--c-surface)",
            marginTop: "1px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gold top accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--c-gold), transparent)",
            }}
          />

          {/* Section label row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px 32px 20px",
              borderBottom: "1px solid var(--c-border)",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Small gold icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "var(--c-gold)" }}>
                <rect x="1" y="2" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 14h6M8 12v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M4 6h8M4 8h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6"/>
              </svg>
              <h4
                className="font-display"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "var(--c-white)",
                }}
              >
                Tour Certificate
              </h4>
            </div>

            {/* Zoom toggle */}
            <button
              onClick={() => setCertZoomed((z) => !z)}
              style={{
                background: "none",
                border: "1px solid var(--c-border)",
                color: "var(--c-muted)",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 16px",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--c-gold)";
                e.currentTarget.style.color = "var(--c-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--c-border)";
                e.currentTarget.style.color = "var(--c-muted)";
              }}
            >
              {certZoomed ? "Collapse ↑" : "View Full ↓"}
            </button>
          </div>

          {/* Certificate image */}
          <div
            style={{
              padding: "32px",
              overflow: "hidden",
              maxHeight: certZoomed ? "1200px" : "340px",
              transition: "max-height 0.5s ease",
            }}
          >
            <img
              src="/images/cert.jpeg"
              alt="Educational Tour Certificate"
              onClick={() => setCertZoomed((z) => !z)}
              style={{
                width: "100%",
                display: "block",
                filter: "saturate(0.85) contrast(1.05)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          {/* Fade gradient when collapsed */}
          {!certZoomed && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "80px",
                background: "linear-gradient(transparent, var(--c-surface))",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

      </div>
    </Layout>
  );
};

export default StudentInfoPage;
