import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--c-bg)" }}>
      <main style={{ flex: 1 }}>{children}</main>

      <footer
        style={{
          borderTop: "1px solid var(--c-border)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          className="font-display"
          style={{
            color: "var(--c-muted)",
            fontSize: "0.82rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          © 2025{" "}
          <span style={{ color: "var(--c-gold)" }}>Educational Tour Portfolio</span>
          {" "}· Plaza, Ianne Marc C.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
