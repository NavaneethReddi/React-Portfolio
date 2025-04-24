import React from "react";
import certificateImg from "./assets/certificate.png"; // Make sure this path is correct

const theme = {
  card: "linear-gradient(135deg, #232526 60%, #3a3a3a 100%)",
  accent: "#ffb347",
  border: "#353b48",
};

export default function Certificate() {
  return (
    <section
      id="certificate"
      style={{
        background: theme.card,
        borderRadius: "22px",
        boxShadow: "0 4px 32px rgba(67,97,238,0.10)",
        marginBottom: "2.5rem",
        padding: "2.5rem 2rem",
        border: `1.5px solid ${theme.border}`,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: theme.accent, marginBottom: "1.5rem" }}>Certificate</h2>
      <img
        src={certificateImg}
        alt="Certificate"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 2px 16px rgba(67,97,238,0.13)",
          border: `2px solid ${theme.accent}`,
        }}
      />
    </section>
  );
}