import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

export default function ChatWithMe() {
  const [open, setOpen] = useState(false);

  // Replace with your actual phone number (with country code)
  const phoneNumber = "+13147935365";

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 999,
          background: "linear-gradient(90deg, #4361ee 0%, #ffb347 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 60,
          height: 60,
          boxShadow: "0 2px 16px rgba(67,97,238,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          cursor: "pointer",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
        aria-label="Text me directly"
      >
        <FaComments />
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 32,
            zIndex: 1000,
            background: "#fff",
            color: "#232526",
            borderRadius: "16px",
            boxShadow: "0 2px 16px rgba(67,97,238,0.18)",
            padding: "1.5rem 1.2rem",
            minWidth: 260,
            maxWidth: 320,
            fontSize: "1rem",
          }}
        >
          <div style={{ marginBottom: "1rem", fontWeight: 700, color: "#4361ee" }}>
            Text me directly
          </div>
          <div style={{ marginBottom: "1.2rem" }}>
            Click below to send me a text message directly to my mobile.<br /><br />
            <a
              href={`sms:${phoneNumber}`}
              style={{
                display: "inline-block",
                background: "#4361ee",
                color: "#fff",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1.08rem",
                marginTop: "0.5rem",
              }}
            >
              Text Me
            </a>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "#4361ee",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1.2rem",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}