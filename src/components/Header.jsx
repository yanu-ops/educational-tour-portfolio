import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBuilding, FaBook, FaUserGraduate, FaLandmark } from "react-icons/fa6";

const navItems = [
  { to: "/company",      Icon: FaBuilding,    label: "Companies" },
  { to: "/journal",      Icon: FaBook,         label: "Journal"   },
  { to: "/heritage",     Icon: FaLandmark,     label: "Heritage"  },
  { to: "/student-info", Icon: FaUserGraduate, label: "Student"   },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        background: scrolled
          ? "rgba(11,15,26,0.95)"
          : "rgba(11,15,26,0.75)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* ── Logo ── */}
        <NavLink
          to="/"
          end
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
        >
          {/* Gold accent line */}
          <span
            style={{
              display: "block",
              width: "3px",
              height: "28px",
              background: "var(--c-gold)",
              borderRadius: "2px",
              flexShrink: 0,
            }}
          />
          <span
            className="font-display"
            style={{
              color: "var(--c-white)",
              fontSize: "1.15rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              lineHeight: 1.2,
            }}
          >
            Educational Tour
            <span style={{ color: "var(--c-gold)", display: "block", fontSize: "0.7rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Portfolio
            </span>
          </span>
        </NavLink>

        {/* ── Desktop Nav ── */}
        <ul
          style={{
            display: "flex",
            gap: "4px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {navItems.map(({ to, Icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                style={({ isActive }) => ({
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
                  padding: "8px 16px",
                  textDecoration: "none",
                  color: isActive ? "var(--c-gold)" : "rgba(232,226,213,0.6)",
                  borderBottom: `2px solid ${isActive ? "var(--c-gold)" : "transparent"}`,
                  transition: "color 0.2s, border-color 0.2s",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                })}
                onMouseEnter={e => {
                  if (!e.currentTarget.classList.contains("active")) {
                    e.currentTarget.style.color = "var(--c-white)";
                  }
                }}
                onMouseLeave={e => {
                  const active = e.currentTarget.getAttribute("aria-current") === "page";
                  e.currentTarget.style.color = active ? "var(--c-gold)" : "rgba(232,226,213,0.6)";
                }}
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--c-gold)",
          }}
          id="mob-toggle"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--c-surface)",
            borderTop: "1px solid var(--c-border)",
            padding: "12px 0",
          }}
        >
          {navItems.map(({ to, Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 24px",
                textDecoration: "none",
                color: isActive ? "var(--c-gold)" : "var(--c-text)",
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
              })}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          #mob-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Header;
