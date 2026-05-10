import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

const companies = [
  {
    id: "1",
    num: "01",
    name: "UP IN IT UP",
    tag: "Startup Incubator",
    description:
      "CeBU InIT aims to nurture and support technology-based startups, particularly in information and communication technology, creative media, and innovation-driven industries.",
    photos: ["/images/UP/UP1.jpeg", "/images/UP/UP2.jpeg"],
  },
  {
    id: "2",
    num: "02",
    name: "Rivan IT Cebu",
    tag: "Cybersecurity & DevOps",
    description:
      "Rivan Cyber Institute empowers individuals to enter the IT industry, focusing on cutting-edge skill fields like CyberSecurity, Network Engineering, and DevOps to foster comprehensive skill development.",
    photos: ["/images/rivan/rivan1.jpeg", "/images/rivan/rivan2.jpeg"],
  },
  {
    id: "3",
    num: "03",
    name: "Dynata Philippines",
    tag: "Data & Insights",
    description:
      "The Dynata Platform, an all-in-one solution for insights, activation, and measurement, leverages their robust data, innovative technology and more than 40 years of experience as a pioneer in consumer B2B insights.",
    photos: ["/images/dynata/dynata1.jpeg", "/images/dynata/dynata2.jpeg"],
  },
  {
    id: "4",
    num: "04",
    name: "Mata Technologies",
    tag: "Virtual Tours",
    description:
      "Mata Technologies is a homegrown provider of virtual tours for real estate in the Philippines, pushing the boundaries of immersive digital property viewing.",
    photos: ["/images/mata/mata1.jpeg", "/images/mata/mata2.jpeg"],
  },
  {
    id: "5",
    num: "05",
    name: "T.A.R.S.I.E.R 117",
    tag: "Emergency Response",
    description:
      "Telephone and Radio System, Integrated Emergency Response — an emergency response and disaster management unit established by the Provincial Government of Bohol.",
    photos: ["/images/tr/tr1.jpeg", "/images/tr/tr2.jpeg"],
  },
];

const CompanyPage = () => {
  const [activeId, setActiveId] = useState(null);
  const activeCompany = companies.find((c) => c.id === activeId);
  const closeBtnRef = useRef(null);

  /* Escape key */
  useEffect(() => {
    if (!activeId) return;
    const h = (e) => { if (e.key === "Escape") setActiveId(null); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [activeId]);

  /* Auto-focus close btn */
  useEffect(() => {
    if (activeId && closeBtnRef.current) closeBtnRef.current.focus();
  }, [activeId]);

  return (
    <Layout>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>

        {/* ── Page header ── */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{ color: "var(--c-gold)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--c-gold)" }} />
            Tour Stops
          </p>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, fontStyle: "italic", color: "var(--c-white)", lineHeight: 1.1 }}
          >
            Companies Visited
          </h1>
        </div>

        {/* ── Company list ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--c-border)" }}>
          {companies.map((company, i) => (
            <motion.button
              key={company.id}
              layoutId={company.id}
              onClick={() => setActiveId(company.id)}
              role="button"
              aria-label={`View details for ${company.name}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: "var(--c-surface)",
                border: "none",
                padding: "28px 32px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
              whileHover={{ backgroundColor: "#141d30" }}
            >
              {/* Number */}
              <span
                className="font-display"
                style={{ fontSize: "1.1rem", color: "var(--c-gold-dim)", fontStyle: "italic", minWidth: "36px", opacity: 0.6 }}
              >
                {company.num}
              </span>

              {/* Name + tag */}
              <div style={{ flex: 1 }}>
                <span
                  className="font-display"
                  style={{ display: "block", fontSize: "1.3rem", fontWeight: 600, color: "var(--c-white)", lineHeight: 1.2, marginBottom: "4px" }}
                >
                  {company.name}
                </span>
                <span
                  style={{ fontSize: "0.7rem", color: "var(--c-gold)", letterSpacing: "0.14em", textTransform: "uppercase" }}
                >
                  {company.tag}
                </span>
              </div>

              {/* Arrow */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "var(--c-muted)", flexShrink: 0 }}>
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeCompany && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{ background: "rgba(5,8,15,0.85)", backdropFilter: "blur(6px)" }}
              onClick={() => setActiveId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-hidden="true"
            />

            <motion.div
              className="fixed inset-0 z-50"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="company-modal-title"
            >
              <motion.div
                layoutId={activeCompany.id}
                style={{
                  background: "var(--c-surface)",
                  border: "1px solid var(--c-border)",
                  borderRadius: "4px",
                  padding: "48px",
                  maxWidth: "780px",
                  width: "100%",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  position: "relative",
                }}
              >
                {/* Gold top bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--c-gold), transparent)" }} />

                {/* Close */}
                <button
                  ref={closeBtnRef}
                  onClick={() => setActiveId(null)}
                  aria-label="Close"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "none",
                    border: "1px solid var(--c-border)",
                    color: "var(--c-muted)",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "1rem",
                    transition: "border-color 0.2s, color 0.2s",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--c-gold)"; e.currentTarget.style.color = "var(--c-gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--c-border)"; e.currentTarget.style.color = "var(--c-muted)"; }}
                >
                  ✕
                </button>

                {/* Tag */}
                <span style={{ display: "inline-block", fontSize: "0.65rem", color: "var(--c-gold)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
                  {activeCompany.tag}
                </span>

                {/* Title */}
                <h2
                  id="company-modal-title"
                  className="font-display"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, fontStyle: "italic", color: "var(--c-white)", marginBottom: "20px", lineHeight: 1.1 }}
                >
                  {activeCompany.name}
                </h2>

                {/* Divider */}
                <div style={{ width: "48px", height: "1px", background: "var(--c-gold)", marginBottom: "24px", opacity: 0.6 }} />

                {/* Description */}
                <p style={{ fontSize: "1rem", color: "rgba(232,226,213,0.75)", lineHeight: 1.8, marginBottom: "36px" }}>
                  {activeCompany.description}
                </p>

                {/* Photos */}
                {activeCompany.photos.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                    {activeCompany.photos.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt={`${activeCompany.name} photo ${idx + 1}`}
                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "3px", display: "block", filter: "saturate(0.9)" }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default CompanyPage;
