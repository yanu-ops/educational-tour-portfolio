import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

const journals = [
  {
    id: "1",
    num: "01",
    title: "UP IN IT UP",
    date: "Sept 12, 2025",
    facilitators: "Mr. Jason Nieva",
    description:
      "Reflections during the educational tour about startups in UP IN IT UP — how early-stage ideas get nurtured into scalable technology businesses.",
    photo: "/images/UP/upj.jpeg",
  },
  {
    id: "2",
    num: "02",
    title: "Rivan IT Cebu",
    date: "Sept 13, 2025",
    facilitators: "Mr. Jason Nieva",
    description:
      "Key insights from visiting Rivan IT Cebu, focusing on IT skills and industry exposure in cybersecurity and network engineering.",
    photo: "/images/rivan/rivanj.jpeg",
  },
  {
    id: "3",
    num: "03",
    title: "Dynata Philippines",
    date: "Sept 13, 2025",
    facilitators: "Mr. Anton Diego H. Lim",
    description:
      "Experience and notes from the Dynata Philippines tour — including how large-scale data collection drives B2B insights and analytics.",
    photo: "/images/dynata/dynataj.jpeg",
  },
  {
    id: "4",
    num: "04",
    title: "Mata Technologies",
    date: "Sept 14, 2025",
    facilitators: "Ms. Suzzette Minero / Mr. Jeff Yongco",
    description:
      "Insights into the creative minds behind virtual property tours, and how Mata Technologies is redefining real estate marketing in the Philippines.",
    photo: "/images/mata/mataj.jpeg",
  },
  {
    id: "5",
    num: "05",
    title: "T.A.R.S.I.E.R 117",
    date: "Sept 15, 2025",
    facilitators: "Sir Darwin Bernasor",
    description:
      "Learning and observations from the emergency response unit — how technology and teamwork intersect in disaster management.",
    photo: "/images/tr/trj.jpeg",
  },
];

const JournalPage = () => {
  const [activeId, setActiveId] = useState(null);
  const activeJournal = journals.find((j) => j.id === activeId);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!activeId) return;
    const h = (e) => { if (e.key === "Escape") setActiveId(null); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [activeId]);

  useEffect(() => {
    if (activeId && closeBtnRef.current) closeBtnRef.current.focus();
  }, [activeId]);

  return (
    <Layout>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>

        {/* Page header */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{ color: "var(--c-gold)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ display: "block", width: "32px", height: "1px", background: "var(--c-gold)" }} />
            Field Notes
          </p>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, fontStyle: "italic", color: "var(--c-white)", lineHeight: 1.1 }}>
            Journal Entries
          </h1>
        </div>

        {/* Journal list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--c-border)" }}>
          {journals.map((journal, i) => (
            <motion.button
              key={journal.id}
              layoutId={journal.id}
              onClick={() => setActiveId(journal.id)}
              aria-label={`Read journal entry: ${journal.title}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: "var(--c-surface)",
                border: "none",
                padding: "28px 32px",
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
              whileHover={{ backgroundColor: "#141d30" }}
            >
              {/* Number */}
              <span className="font-display" style={{ fontSize: "1.1rem", color: "var(--c-gold-dim)", fontStyle: "italic", minWidth: "36px", opacity: 0.6, paddingTop: "2px" }}>
                {journal.num}
              </span>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <span className="font-display" style={{ display: "block", fontSize: "1.3rem", fontWeight: 600, color: "var(--c-white)", marginBottom: "6px" }}>
                  {journal.title}
                </span>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--c-gold)", letterSpacing: "0.1em" }}>
                    {journal.date}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--c-muted)" }}>
                    {journal.facilitators}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "var(--c-muted)", flexShrink: 0, marginTop: "4px" }}>
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeJournal && (
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
              aria-labelledby="journal-modal-title"
            >
              <motion.div
                layoutId={activeJournal.id}
                style={{
                  background: "var(--c-surface)",
                  border: "1px solid var(--c-border)",
                  borderRadius: "4px",
                  maxWidth: "680px",
                  width: "100%",
                  maxHeight: "90vh",
                  overflowY: "auto",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gold top bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--c-gold), transparent)", zIndex: 1 }} />

                {/* Photo header */}
                {activeJournal.photo && (
                  <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                    <img
                      src={activeJournal.photo}
                      alt={activeJournal.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(0.8)" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 30%, var(--c-surface) 100%)" }} />
                    <div style={{ position: "absolute", bottom: "24px", left: "40px", right: "60px" }}>
                      <span style={{ display: "block", fontSize: "0.65rem", color: "var(--c-gold)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6px" }}>
                        {activeJournal.date}
                      </span>
                      <h2 id="journal-modal-title" className="font-display" style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 600, fontStyle: "italic", color: "var(--c-white)", lineHeight: 1.1 }}>
                        {activeJournal.title}
                      </h2>
                    </div>
                  </div>
                )}

                {/* Body */}
                <div style={{ padding: "32px 40px 40px", overflowY: "auto" }}>
                  {/* Close */}
                  <button
                    ref={closeBtnRef}
                    onClick={() => setActiveId(null)}
                    aria-label="Close journal entry"
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      zIndex: 10,
                      background: "rgba(11,15,26,0.7)",
                      border: "1px solid var(--c-border)",
                      color: "var(--c-muted)",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      borderRadius: "2px",
                    }}
                  >
                    ✕
                  </button>

                  <p style={{ fontSize: "0.75rem", color: "var(--c-muted)", letterSpacing: "0.1em", marginBottom: "20px" }}>
                    Facilitator: <span style={{ color: "var(--c-text)" }}>{activeJournal.facilitators}</span>
                  </p>

                  <div style={{ width: "32px", height: "1px", background: "var(--c-gold)", marginBottom: "20px", opacity: 0.5 }} />

                  <p style={{ fontSize: "1rem", color: "rgba(232,226,213,0.8)", lineHeight: 1.85 }}>
                    {activeJournal.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default JournalPage;
