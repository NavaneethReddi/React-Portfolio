import React from "react";
import Testimonial from './Testimonial.tsx'
import Contact from './Contact.tsx'
import Resume from './Resume.tsx'
import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import TechNews from "./TechNews.tsx";
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
        }}
      >
        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "2.5rem 2vw 2.5rem 0",
            maxWidth: 1050,
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
            }}
          >
            <Projects />
          </section>
          <section
            id="testimonials"
            style={{
              background: theme.card,
              borderRadius: "22px",
              boxShadow: "0 4px 32px rgba(67,97,238,0.10)",
              marginBottom: "2.5rem",
              padding: "2.5rem 2rem",
              border: `1.5px solid ${theme.border}`,
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
            }}
          >
            <Contact />
          </section>
        </main>
        {/* TechNews Sidebar */}
        <TechNews />
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
        &copy; {new Date().getFullYear()} Navaneeth Reddy. All rights reserved.
      </footer>
      {/* Global theming for scrollbars, selection, etc. */}
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
        `}
      </style>
    </div>
  );
}
 
 

 
 

 

 

 