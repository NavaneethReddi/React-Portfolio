import React from "react";

const menuItems = [
  { label: "Home", to: "#hero" },
  { label: "Skills", to: "#skills" },
  { label: "Projects", to: "#projects" },
  { label: "Resume", to: "#resume" },
  { label: "Testimonials", to: "#testimonials" },
  { label: "Contact", to: "#contact" },
];

export default function MenuBar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        background: "rgba(255,255,255,0.97)",
        boxShadow: "0 4px 24px rgba(67,97,238,0.10)",
        zIndex: 200,
        display: "flex",
        justifyContent: "center",
        padding: "0.7rem 0",
        backdropFilter: "blur(8px)",
        borderBottom: "2px solid #e7f1ff",
        transition: "box-shadow 0.2s",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {menuItems.map((item) => (
          <li key={item.to}>
            <a
              href={item.to}
              style={{
                color: "#22223b",
                fontWeight: 700,
                fontSize: "1.12rem",
                textDecoration: "none",
                padding: "0.5rem 1.2rem",
                borderRadius: "8px",
                transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
                letterSpacing: "0.5px",
                boxShadow: "0 0 0 rgba(67,97,238,0)",
                display: "inline-block",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "linear-gradient(90deg, #e7f1ff 0%, #dbeafe 100%)";
                e.currentTarget.style.color = "#4361ee";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(67,97,238,0.10)";
                e.currentTarget.style.transform = "translateY(-2px) scale(1.06)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#22223b";
                e.currentTarget.style.boxShadow = "0 0 0 rgba(67,97,238,0)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}