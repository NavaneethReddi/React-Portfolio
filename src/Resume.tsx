import React from "react";
import { FaDownload } from "react-icons/fa";

const RESUME_URL = "/Resume.docx"; // Place Resume.docx in your public folder

export default function Resume() {
  return (
    <div
      style={{
        position: "fixed",
        top: "1.5rem",
        right: "2rem",
        zIndex: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <a
        href={RESUME_URL}
        download
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.7rem",
          background: "linear-gradient(90deg, #007bff 0%, #4361ee 100%)",
          color: "#fff",
          padding: "0.9rem 2.2rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.1rem",
          boxShadow: "0 2px 8px rgba(67,97,238,0.10)",
          transition: "background 0.2s, transform 0.2s",
        }}
        onMouseOver={e => (e.currentTarget.style.background = "linear-gradient(90deg, #4361ee 0%, #007bff 100%)")}
        onMouseOut={e => (e.currentTarget.style.background = "linear-gradient(90deg, #007bff 0%, #4361ee 100%)")}
      >
        <FaDownload /> Download Resume
      </a>
    </div>
  );
}