import React, { useEffect, useState } from "react";

type Article = {
  title: string;
  url: string;
  description: string;
  publishedAt: string;
  source: { name: string };
};

export default function TechNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your free GNews API key from https://gnews.io/
    fetch(
      "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=7&apikey=6e068a8d7eaa698f2767ee50a2d31458"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      });
  }, []);

  return (
    <aside
      style={{
        position: "fixed",
        right: "2.5vw",
        top: 100,
        width: 340,
        minWidth: 260,
        maxWidth: 380,
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 2px 16px rgba(67,97,238,0.10)",
        padding: "1.5rem 1.5rem 1.2rem 1.5rem",
        margin: 0,
        height: "auto",
        maxHeight: "80vh",
        overflowY: "auto",
        zIndex: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h3 style={{
        color: "#4361ee",
        fontWeight: 700,
        fontSize: "1.13rem",
        marginBottom: "1.1rem",
        letterSpacing: "0.5px",
        borderBottom: "1px solid #e7f1ff",
        paddingBottom: "0.7rem",
        width: "100%",
      }}>
        <span role="img" aria-label="news">📰</span> Tech News
      </h3>
      {loading ? (
        <div style={{ textAlign: "center", color: "#888", width: "100%" }}>Loading...</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100%" }}>
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
                  paddingRight: "0.2rem",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#4361ee")}
                onMouseOut={e => (e.currentTarget.style.color = "#22223b")}
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
      <div style={{ textAlign: "right", marginTop: "0.7rem", width: "100%" }}>
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