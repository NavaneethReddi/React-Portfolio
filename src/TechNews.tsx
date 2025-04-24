import React, { useEffect, useState } from "react";

export default function TechNews({
  onApiSuccess,
  initialArticles = [],
  initialApiSuccess = false,
  hidden = false,
}: {
  onApiSuccess?: (success: boolean, articles?: any[]) => void;
  initialArticles?: any[];
  initialApiSuccess?: boolean;
  hidden?: boolean;
}) {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(true);
  const [apiSuccess, setApiSuccess] = useState(initialApiSuccess);

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=7&apikey=6e068a8d7eaa698f2767ee50a2d31458"
    )
      .then((res) => res.json())
      .then((data) => {
        const success = data.articles && Array.isArray(data.articles) && data.articles.length > 0;
        setArticles(success ? data.articles : []);
        setApiSuccess(success);
        setLoading(false);
        if (onApiSuccess) onApiSuccess(success, success ? data.articles : []);
      })
      .catch(() => {
        setApiSuccess(false);
        setLoading(false);
        if (onApiSuccess) onApiSuccess(false);
      });
  }, [onApiSuccess]);

  if (hidden || !apiSuccess) return null;

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
                href={article.url}
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
                {article.source.name} &middot; {new Date(article.publishedAt).toLocaleDateString()}
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