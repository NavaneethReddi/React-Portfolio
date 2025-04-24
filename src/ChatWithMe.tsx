import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

export default function ChatWithMe() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  // Replace with your actual WhatsApp number (with country code, no spaces)
  const phoneNumber = "+13147935365";

  // Detect mobile device
  const isMobile =
    typeof window !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const encoded = encodeURIComponent(message);
      const number = phoneNumber.replace(/[^0-9]/g, "");
      const url = `sms:${number}?body=${encoded}`
      window.open(url, "_blank");
      setSent(true);
      setMessage("");
    }
  };

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
        aria-label="Chat with me"
      >
        <FaComments />
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: isMobile ? 0 : 100,
            right: isMobile ? 0 : 32,
            left: isMobile ? 0 : "auto",
            width: isMobile ? "100vw" : undefined,
            minWidth: isMobile ? undefined : 260,
            maxWidth: isMobile ? undefined : 320,
            zIndex: 1000,
            background: "#fff",
            color: "#232526",
            borderRadius: isMobile ? "18px 18px 0 0" : "16px",
            boxShadow: "0 2px 16px rgba(67,97,238,0.18)",
            padding: isMobile ? "1.2rem 1rem 1.2rem 1rem" : "1.5rem 1.2rem",
            fontSize: "1rem",
          }}
        >
          <div style={{ marginBottom: "1rem", fontWeight: 700, color: "#4361ee", textAlign: "center" }}>
            Chat with me
          </div>
          {sent ? (
            <div style={{ marginBottom: "1.2rem", color: "#43e97b", fontWeight: 600, textAlign: "center" }}>
              Message window opened!
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginBottom: "1.2rem" }}>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type your message..."
                rows={4}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid #bfc9d1",
                  padding: "0.7rem",
                  fontSize: "1rem",
                  marginBottom: "0.7rem",
                  resize: "none",
                  boxSizing: "border-box",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  background: "#4361ee",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.5rem 1.2rem",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1rem",
                  width: "100%",
                }}
              >
                Send Message
              </button>
            </form>
          )}
          <button
            onClick={() => {
              setOpen(false);
              setSent(false);
              setMessage("");
            }}
            style={{
              background: "#4361ee",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1.2rem",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
              width: "100%",
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}