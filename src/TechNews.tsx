import React from "react";
import type { Article } from "./api.tsx";

export default function TechNews({
  articles = [],
  loading = false,
  apiSuccess
 }: {
  articles?: Article[];
  loading?: boolean;
  apiSuccess?: boolean;
  hidden?: boolean;
}) {
  console.log(articles,'articles');
  if (!apiSuccess) return null;

  return (
    <aside
      style={{
        position: "fixed",
        right: 32, // Move 32px from the right edge (adjust as needed)
        top: 90,
        width: 340,
        minWidth: 260,
        maxWidth: 380,
        background: "#fff",
        borderRadius: "14px 0 0 14px",
        boxShadow: "0 2px 16px rgba(67,97,238,0.10)",
        padding: "1.2rem 1.3rem 1.2rem 1.3rem",
        margin: "0",
        height: "auto",
        maxHeight: "80vh",
        overflowY: "auto",
        zIndex: 300,
      }}
    >
      <h3
        style={{
          color: "#4361ee",
          fontWeight: 700,
          fontSize: "1.13rem",
          marginBottom: "1.1rem",
          letterSpacing: "0.5px",
          borderBottom: "1px solid #e7f1ff",
          paddingBottom: "0.7rem",
        }}
      >
        <span role="img" aria-label="news">
          📰
        </span>{" "}
        Tech News
      </h3>
      {loading ? (
        <div style={{ textAlign: "center", color: "#888" }}>Loading...</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {articles.map((article, idx) => (
            <li key={idx} style={{ marginBottom: "1.1rem" }}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#22223b",
                  fontWeight: 600,
                  fontSize: "1.01rem",
                  textDecoration: "none",
                  display: "block",
                  lineHeight: 1.3,
                  marginBottom: "0.2rem",
                  transition: "color 0.18s",
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
  );
}