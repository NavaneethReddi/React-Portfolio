import React from "react";
import { motion } from "framer-motion";
import discoverLogo from "./assets/discover.png";
import usbankLogo from "./assets/usbank.png";
import amtrackLogo from "./assets/amtrack.png";
import vixxoLogo from "./assets/vixxxo.png";
import cognizantLogo from "./assets/Cognizant.png";
import marathonLogo from "./assets/marathonoil.png";
import capitoloneLogo from "./assets/capitalone.png";

const clientProjects = [
  {
    name: "Discover",
    logo: discoverLogo,
    details: (
      <ul>
        <li>Worked as Principal Architect for the team that handles reusable components.</li>
        <li>Lead for DRY UI components supporting client UI needs.</li>
      </ul>
    ),
  },
  {
    name: "US Bank",
    logo: usbankLogo,
    details: <p>Developed secure banking UI components and led accessibility initiatives.</p>,
  },
  {
    name: "Amtrack",
    logo: amtrackLogo,
    details: <p>Modernized ticketing platform and improved mobile responsiveness.</p>,
  },
  {
    name: "Vixxo",
    logo: vixxoLogo,
    details: <p>Built scalable service management dashboards and analytics tools.</p>,
  },
  {
    name: "Cognizant",
    logo: cognizantLogo,
    details: <p>Delivered enterprise solutions for Fortune 500 clients.</p>,
  },
  {
    name: "Marathon Oil",
    logo: marathonLogo,
    details: <p>Implemented digital transformation for field operations.</p>,
  },
  {
    name: "Capital One",
    logo: capitoloneLogo,
    details: <p>Enhanced customer onboarding and digital banking experience.</p>,
  },
];

const tileWidth = 240;
const tileHeight = 280;

const flipVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export default function Projects() {
  const [flipped, setFlipped] = React.useState(Array(clientProjects.length).fill(false));

  const handleFlip = (idx: number, value: boolean) => {
    setFlipped((prev) => prev.map((f, i) => (i === idx ? value : f)));
  };

  return (
    <section
      id="projects"
      style={{
        background: "linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)",
        padding: "3rem 0",
        minHeight: "40vh",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, color: "#22223b", marginBottom: "2.5rem" }}>
        Projects & Clients
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {clientProjects.map((client, idx) => (
          <motion.div
            key={client.name}
            style={{
              perspective: 1200,
              minHeight: tileHeight,
              minWidth: tileWidth,
              maxWidth: tileWidth,
              width: "100%",
              cursor: "pointer",
              margin: "0 auto",
              boxSizing: "border-box",
              height: tileHeight,
              position: "relative",
            }}
            onMouseEnter={() => handleFlip(idx, true)}
            onMouseLeave={() => handleFlip(idx, false)}
          >
            <motion.div
              animate={flipped[idx] ? "back" : "front"}
              variants={flipVariants}
              transition={{ duration: 0.6 }}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  minHeight: tileHeight,
                  minWidth: tileWidth,
                  backfaceVisibility: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2.2rem 1.2rem 2rem 1.2rem",
                  background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%)",
                  borderRadius: "18px",
                  boxSizing: "border-box",
                  boxShadow: "0 2px 12px rgba(67,97,238,0.07)",
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 2px 12px rgba(67,97,238,0.08)",
                    marginBottom: "1.2rem",
                    border: "2px solid #e7f1ff",
                    padding: "0.7rem",
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
                <h3
                  style={{
                    color: "#4361ee",
                    fontWeight: 800,
                    fontSize: "1.22rem",
                    letterSpacing: "0.5px",
                    margin: 0,
                    textShadow: "0 2px 8px rgba(67,97,238,0.06)",
                    textAlign: "center",
                  }}
                >
                  {client.name}
                </h3>
              </div>
              {/* Back */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  minHeight: tileHeight,
                  minWidth: tileWidth,
                  backfaceVisibility: "hidden",
                  background: "#f8fafc",
                  borderRadius: "18px",
                  boxShadow: "0 2px 12px rgba(67,97,238,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "1.5rem 1.2rem 1.5rem 1.5rem",
                  transform: "rotateY(180deg)",
                  fontSize: "1rem",
                  color: "#4a4e69",
                  boxSizing: "border-box",
                }}
              >
                <strong style={{ color: "#4361ee", marginBottom: 8 }}>{client.name} Project</strong>
                {client.details}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}