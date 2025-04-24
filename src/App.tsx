import React from "react";
import Testimonial from './Testimonial.tsx'
import Contact from './Contact.tsx'
 import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import TechNews from "./TechNews.tsx";
import Certificate from "./Certificate.tsx";

import SkillsAndTech from "./SkillsAndTech.tsx";
import MenuBar from "./MenuBar.tsx";
import './App.css';

 

const theme = {
  background: "linear-gradient(120deg, #232526 0%, #414345 100%)",
  card: "linear-gradient(135deg, #232526 60%, #3a3a3a 100%)",
  accent: "#ffb347",
  accent2: "#43e97b",
  text: "#f8fafc",
  textSecondary: "#bfc9d1",
  border: "#353b48",
};

export default function App() {
  const [showTechNews, setShowTechNews] = React.useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.background,
        color: theme.text,
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
        position: "relative",
      }}
    >
      <MenuBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: 1600,
          margin: "0 auto",
          padding: "0 0 0 2vw",
          width: "100%",
          boxSizing: "border-box",
          justifyContent: !showTechNews ? "center" : "flex-start",
        }}
      >
        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "2.5rem 2vw 2.5rem 0",
            maxWidth: 1050,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <section
            id="hero"
            style={{
              background: theme.card,
              borderRadius: "22px",
              boxShadow: "0 4px 32px rgba(67,97,238,0.10)",
              marginBottom: "2.5rem",
              padding: "2.5rem 2rem",
              border: `1.5px solid ${theme.border}`,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Hero />
          </section>
          <section
            id="skills"
            style={{
              background: theme.card,
              borderRadius: "22px",
              boxShadow: "0 4px 32px rgba(67,97,238,0.10)",
              marginBottom: "2.5rem",
              padding: "2.5rem 2rem",
              border: `1.5px solid ${theme.border}`,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <SkillsAndTech />
          </section>
          <section
            id="projects"
            style={{
              background: theme.card,
              borderRadius: "22px",
              boxShadow: "0 4px 32px rgba(67,97,238,0.10)",
              marginBottom: "2.5rem",
              padding: "2.5rem 2rem",
              border: `1.5px solid ${theme.border}`,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Projects />
          </section>
          <Certificate />
          <section
            id="testimonials"
            style={{
              background: theme.card,
              borderRadius: "22px",
              boxShadow: "0 4px 32px rgba(67,97,238,0.10)",
              marginBottom: "2.5rem",
              padding: "2.5rem 2rem",
              border: `1.5px solid ${theme.border}`,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Testimonial />
          </section>
          <section
            id="contact"
            style={{
              background: theme.card,
              borderRadius: "22px",
              boxShadow: "0 4px 32px rgba(67,97,238,0.10)",
              marginBottom: "2.5rem",
              padding: "2.5rem 2rem",
              border: `1.5px solid ${theme.border}`,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Contact />
          </section>
        </main>
        {/* TechNews Sidebar */}
        {showTechNews && (
          <div className="technews-wrapper">
            <TechNews onApiSuccess={setShowTechNews} />
          </div>
        )}
      </div>
      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          color: theme.textSecondary,
          padding: "2rem 0 1rem 0",
          fontSize: "1rem",
          letterSpacing: "0.5px",
        }}
      >
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
      {/* Responsive styles */}
      <style>
        {`
          ::selection {
            background: ${theme.accent2};
            color: #232526;
          }
          ::-webkit-scrollbar {
            width: 10px;
            background: #232526;
          }
          ::-webkit-scrollbar-thumb {
            background: #353b48;
            border-radius: 6px;
          }
          body {
            background: ${theme.background};
          }
          @media (max-width: 1200px) {
            .technews-wrapper {
              display: none;
            }
            main {
              max-width: 100vw !important;
              padding-right: 0 !important;
            }
          }
          @media (max-width: 900px) {
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
              padding-left: 0 !important;
            }
            main {
              padding: 1.5rem 0.5rem !important;
            }
            section {
              padding: 1.5rem 0.7rem !important;
            }
          }
          @media (max-width: 600px) {
            main {
              padding: 0.5rem 0.1rem !important;
            }
            section {
              padding: 1rem 0.2rem !important;
              border-radius: 10px !important;
            }
            footer {
              font-size: 0.92rem !important;
              padding: 1rem 0 0.5rem 0 !important;
            }
          }
        `}
      </style>
    </div>
  );
}