import React from "react";
import { FaDownload } from "react-icons/fa";

const RESUME_URL = "/Resume.docx"; // Place resume.docx in your public folder

export default function Resume() {
  return (
    <section className="resume-section" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 0" }}>
      <h2>My Resume</h2>
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          padding: "2rem",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <p>Download my latest resume as a PDF:</p>
        <a
          href={RESUME_URL}
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#007bff",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
}