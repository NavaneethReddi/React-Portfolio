import React, { useEffect, useState } from "react";
import Testimonial from './Testimonial.tsx'
import Contact from './Contact.tsx'
import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import TechNews from "./TechNews.tsx";
import ChatWithMe from "./ChatWithMe.tsx";
import SkillsAndTech from "./SkillsAndTech.tsx";
import MenuBar from "./MenuBar.tsx";
import TriviaWidget from "./TriviaWidget.tsx";

import { useTechNewsApi } from "./api.tsx";


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
type TechLogSplashProps = {
  loading?: boolean;
};
export  function TechLogSplash({ loading = true }: TechLogSplashProps) {
  const logos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      title: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      title: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      title: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5",
      title: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3",
      title: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      alt: "Redux",
      title: "Redux",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
      title: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub",
      title: "GitHub",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      title: "Node.js",
    }
  ];
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        inset: 0,
        background: "rgba(34,34,43,0.92)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.6s",
      }}
    >
      <div style={{ fontSize: "2.2rem", color: "#ffb347", marginBottom: "2rem", fontWeight: 700 }}>
        Welcome to My Portfolio
      </div>
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {logos.map((logo, idx) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            style={{
              width: 64,
              height: 64,
              opacity: 0.93,
              filter: "drop-shadow(0 2px 8px #4361ee44)",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "0.7rem",
              animation: loading
                ? `techlogo-spin 1.2s cubic-bezier(.68,-0.55,.27,1.55) ${0.2 + idx * 0.15}s infinite alternate`
                : "none",
            }}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes techlogo-spin {
            0% {
              opacity: 0.5;
              transform: scale(0.5) rotate(-180deg);
              filter: blur(8px);
            }
            60% {
              opacity: 1;
              transform: scale(1.15) rotate(10deg);
              filter: blur(0);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
              filter: blur(0);
            }
          }
        `}
      </style>
    </div>
  );
  
}

export default function App() {
  const { articles, loading, apiSuccess } = useTechNewsApi(); // Only call here

  const [showSplash, setShowSplash] = useState(true);
 
   

  // Called by TechNews when API is done (success or fail)
 
 
   

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowSplash(false), 500); // Hold for extra 2 seconds
      return () => clearTimeout(timer);
    }
  }, [loading]);
 
   return (
     <>
       {showSplash && <TechLogSplash loading={loading} />}
       <TechNews
         articles={articles}
         loading={loading}
         apiSuccess={apiSuccess}
         hidden={showSplash}
       />

       {!showSplash && (
         <>
           {/* Weather widget on the left, outside main content */}
           <div
             style={{
               position: "fixed",
               top: 100, // adjust as needed to match your MenuBar height
               left: 0,
               display: window.innerWidth <= 900 ? "none" : "block",
               zIndex: 100,
             }}
           >
             <div
               style={{
                 width: 250,
                 flexShrink: 0,
                 background: "#fff",
                 padding: "1rem",
                 borderRadius: "12px",
                 boxShadow: "0 2px 12px rgba(67,97,238,0.1)",
                 marginTop: 50,
                 
               }}
             >
               <TriviaWidget />
             </div>{" "}
           </div>
           <div
             style={{
               minHeight: "100vh",
               background: theme.background,
               color: theme.text,
               fontFamily: "Inter, Segoe UI, Arial, sans-serif",
               position: "relative",
               marginLeft: window.innerWidth <= 768 ? 0 : 280, // Move content to the right on desktop (adjust 360 to match your TechNews width + gap)
               transition: "margin-left 0.3s",
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
                 justifyContent: !apiSuccess ? "center" : "flex-start",
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
                 {/* <Certificate /> */}
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
             </div>

             {/* Responsive styles */}
             <ChatWithMe />
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
             {/* Basic SEO */}
             <title>Navaneeth Reddy | Portfolio</title>
             <meta
               name="Navaneeth Reddy Portfolio"
               content="Portfolio of Navaneeth Reddy - Web Developer, Designer, and Creator. Showcasing projects, skills, and contact information."
             />
             <meta
               name="keywords"
               content="Your Name, Portfolio, Web Developer, Projects, React, TypeScript"
             />
             <meta name="Navaneeth Reddy" content="Navaneeth Reddy" />
           </div>
           {/* Additional Footer */}
           <footer
             style={{
               width: "100%",
               textAlign: "center",
               padding: "1.2rem 0 1.2rem 0",
               color: "#bfc9d1",
               fontSize: "1rem",
               fontWeight: 500,
               background: "transparent",
               position: "relative",
               bottom: 0,
               left: 0,
             }}
           >
             © {new Date().getFullYear()} Navaneeth Reddy Pinnapureddy. All
             rights reserved.
           </footer>
         </>
       )}
     </>
   );
}

// TechNews.tsx
// Do NOT call useTechNewsApi here, just use the props!