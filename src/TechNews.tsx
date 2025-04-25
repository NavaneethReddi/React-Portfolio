import React, { useState } from "react";
import type { Article } from "./api";
 import { FaBolt } from "react-icons/fa";


export default function TechNews({
  articles = [],
  loading = false,
  apiSuccess = false,
  hidden = false,
}: {
  articles?: Article[];
  loading?: boolean;
  apiSuccess?: boolean;
  hidden?: boolean;
}) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const [mobileOpen, setMobileOpen] = useState(false);

  if (hidden) return null;

  return (
    <>
   {isMobile && !mobileOpen && (
  <button
    onClick={() => setMobileOpen(true)}
    style={{
      position: "fixed",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1001,
      background: "#4361ee",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: 80,
      height: 80,
      boxShadow: "0 2px 16px rgba(67,97,238,0.18)",
      fontSize: "2rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: 0,
    }}
    aria-label="Show Tech News"
  >
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block" }}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" fill="#4361ee" stroke="white"/>
      <path d="M7 8h10M7 12h10M7 16h6" stroke="white"/>
    </svg>
    <span style={{ fontSize: "0.72rem", color: "#fff", marginTop: 2, fontWeight: 500 }}>
     Tech News
    </span>
  </button>
)}
      {(isMobile ? mobileOpen : true) && (
        <aside
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: isMobile ? "85vw" : 340,
            maxWidth: 400,
            background: "#fff",
            borderRadius: isMobile ? "18px 0 0 18px" : "14px 0 0 14px",
            boxShadow: "0 2px 16px rgba(67,97,238,0.10)",
            padding: isMobile ? "1.2rem 1rem 1.2rem 1rem" : "1.2rem 1.3rem",
            margin: 0,
            overflowY: "auto",
            zIndex: 1002,
            transition: "transform 0.3s",
            // Slide in from right on mobile
            transform: isMobile && !mobileOpen ? "translateX(100%)" : "translateX(0)",
          }}
        >
          {isMobile && (
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 16,
                background: "none",
                border: "none",
                fontSize: "1.7rem",
                color: "#4361ee",
                cursor: "pointer",
                zIndex: 1003,
              }}
              aria-label="Close Tech News"
            >
              &times;
            </button>
          )}
          <h3
            style={{
              color: "#4361ee",
              fontWeight: 700,
              fontSize: isMobile ? "1.05rem" : "1.13rem",
              marginBottom: "1.1rem",
              letterSpacing: "0.5px",
              borderBottom: "1px solid #e7f1ff",
              paddingBottom: "0.7rem",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <span role="img" aria-label="news">
              📰
            </span>{" "}
            Tech News
          </h3>
          {loading ? (
            <div style={{ textAlign: "center", color: "#888" }}>Loading...</div>
          ) : apiSuccess ? (
            <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
              {articles.map((article, idx) => (
                <li key={idx} style={{ marginBottom: "1.2rem" }}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#22223b",
                      fontWeight: 600,
                      fontSize: isMobile ? "0.98rem" : "1.01rem",
                      textDecoration: "none",
                      display: "block",
                      lineHeight: 1.3,
                      marginBottom: "0.2rem",
                      transition: "color 0.18s",
                      wordBreak: "break-word",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#4361ee")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#22223b")}
                  >
                    {article.title}
                  </a>
                  <div style={{ fontSize: "0.88rem", color: "#5f6c7b", marginBottom: 2 }}>
                    {article.source_id || article.creator?.[0] || "Unknown Source"}
                    {article.pubDate && (
                      <> &middot; {new Date(article.pubDate).toLocaleDateString()}</>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ color: "#e63946", fontWeight: 600, textAlign: "center" }}>
              Failed to load tech news. Please try again later.
            </div>
          )}
          <div style={{ textAlign: "right", marginTop: "0.7rem" }}>
            <a
              href="https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZ4Y0dNU0FtVnVLQUFQAQ?oc=3"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#4361ee",
                fontWeight: 600,
                fontSize: "0.98rem",
                textDecoration: "none",
              }}
            >
              View more tech news &rarr;
            </a>
          </div>
        </aside>
      )}
    </>
  );
}