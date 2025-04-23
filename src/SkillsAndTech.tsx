import React from "react";
import { motion } from "framer-motion";

// ...other code...

export default function  SkillsAndTech() {
    type TechLogo = {
        src: string;
        alt: string;
        title: string;
      };
      
      const techLogos: TechLogo[] = [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          alt: "React",
          title: "React"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          alt: "Angular",
          title: "Angular"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          alt: "Vue",
          title: "Vue"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          alt: "JavaScript",
          title: "JavaScript"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          alt: "TypeScript",
          title: "TypeScript"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          alt: "HTML5",
          title: "HTML5"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          alt: "CSS3",
          title: "CSS3"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          alt: "SASS",
          title: "SASS"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          alt: "Redux",
          title: "Redux"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          alt: "Next.js",
          title: "Next.js"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          alt: "Git",
          title: "Git"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          alt: "GitHub",
          title: "GitHub"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          alt: "Node.js",
          title: "Node.js"
        },
      ];
    

  // Calculate grid positions for each bubble
  const columns = 5; // Adjust for your layout
  const rowHeight = 160;
  const colWidth = 180;

  // Bubble animation: float within a small area around its grid cell
  const getBubbleAnimation = (i: number) => {
    const x1 = Math.random() * 30 - 15;
    const y1 = Math.random() * 30 - 15;
    const x2 = Math.random() * 30 - 15;
    const y2 = Math.random() * 30 - 15;
    return {
      x: [0, x1, x2, 0],
      y: [0, y1, y2, 0],
      transition: {
        duration: 3 + Math.random() * 1.5, // Reduced duration for faster movement
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: i * 0.18,
      },
    };
  };

  return (
    <section
      className="skills-tech"
      style={{
        background: "linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)",
        padding: "3rem 0",
        minHeight: "40vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: 700,
          color: "#22223b",
          marginBottom: "2.5rem",
          letterSpacing: "1px",
        }}
      >
        Skills &amp; Technology Stack
      </motion.h2>
      <div
        className="skills-bubbles-grid"
        style={{
          position: "relative",
          width: "100%",
          height: `${Math.ceil(techLogos.length / columns) * rowHeight}px`,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {techLogos.map((logo, idx) => {
          const row = Math.floor(idx / columns);
          const col = idx % columns;
          return (
            <motion.div
              className="skill-bubble"
              key={logo.title}
              animate={getBubbleAnimation(idx)}
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #fff 60%, #e7f1ff 100%)",
                boxShadow: "0 2px 12px rgba(67,97,238,0.10)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "3px solid #e0e7ef",
                position: "absolute",
                left: `${col * colWidth + 30}px`,
                top: `${row * rowHeight + 20}px`,
                zIndex: 1,
                transition: "box-shadow 0.2s, background 0.2s, transform 0.2s",
              }}
              whileHover={{
                scale: 1.13,
                boxShadow: "0 8px 32px rgba(67,97,238,0.18)",
                background: "linear-gradient(135deg, #e7f1ff 60%, #dbeafe 100%)",
                zIndex: 2,
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                style={{
                  width: 48,
                  height: 48,
                  marginBottom: "0.5rem",
                  filter: "drop-shadow(0 2px 8px rgba(67,97,238,0.10))",
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontWeight: 600,
                  color: "#4361ee",
                  fontSize: "0.98rem",
                  letterSpacing: "0.5px",
                  textAlign: "center",
                  width: "90%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {logo.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}