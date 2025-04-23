import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const menuItems = [
  { label: "Home", to: "#hero" },
  { label: "Skills", to: "#skills" },
  { label: "Projects", to: "#projects" },
  { label: "Testimonials", to: "#testimonials" },
  { label: "Contact", to: "#contact" },
];

const RESUME_URL = "/Resume.docx"; // Place Resume.docx in your public folder

const colorfulGradients = [
  "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)",
  "linear-gradient(90deg, #fda085 0%, #f6d365 100%)",
  "linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%)",
];

const navVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const ulVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const liVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function MenuBar() {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const offsets = menuItems.map(item => {
        const el = document.querySelector(item.to);
        return el ? (el as HTMLElement).offsetTop : 0;
      });
      const scrollY = window.scrollY + 80;
      let current = menuItems[0].to;
      offsets.forEach((offset, idx) => {
        if (scrollY >= offset) current = menuItems[idx].to;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        background: "linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)",
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
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          alignItems: "center",
        }}
      >
        <AnimatePresence>
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.to}
              variants={liVariants}
              whileHover={{
                scale: 1.13,
                y: -3,
                boxShadow: "0 4px 18px rgba(67,97,238,0.13)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{ position: "relative" }}
            >
              <a
                href={item.to}
                style={{
                  color: active === item.to ? "#fff" : "#22223b",
                  fontWeight: 700,
                  fontSize: "1.12rem",
                  textDecoration: "none",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "8px",
                  transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s",
                  letterSpacing: "0.5px",
                  boxShadow: "0 0 0 rgba(67,97,238,0)",
                  display: "inline-block",
                  background: active === item.to
                    ? colorfulGradients[idx % colorfulGradients.length]
                    : "transparent",
                  border: active === item.to ? "2px solid #fff" : "none",
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = colorfulGradients[idx % colorfulGradients.length];
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(67,97,238,0.10)";
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.06)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = active === item.to
                    ? colorfulGradients[idx % colorfulGradients.length]
                    : "transparent";
                  e.currentTarget.style.color = active === item.to ? "#fff" : "#22223b";
                  e.currentTarget.style.boxShadow = "0 0 0 rgba(67,97,238,0)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {item.label}
              </a>
              {active === item.to && (
                <motion.div
                  layoutId="menu-underline"
                  style={{
                    position: "absolute",
                    left: 12,
                    right: 12,
                    bottom: 6,
                    height: 4,
                    borderRadius: 2,
                    background: colorfulGradients[idx % colorfulGradients.length],
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
          {/* Download Resume Button */}
          <motion.li
            key="download-resume"
            variants={liVariants}
            whileHover={{
              scale: 1.13,
              y: -3,
              boxShadow: "0 4px 18px rgba(67,97,238,0.13)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{ position: "relative" }}
          >
            <a
              href={RESUME_URL}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7rem",
                background: "linear-gradient(90deg, #007bff 0%, #4361ee 100%)",
                color: "#fff",
                padding: "0.5rem 1.2rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.12rem",
                boxShadow: "0 2px 8px rgba(67,97,238,0.10)",
                transition: "background 0.2s, transform 0.2s",
                border: "2px solid #fff",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "linear-gradient(90deg, #4361ee 0%, #007bff 100%)")}
              onMouseOut={e => (e.currentTarget.style.background = "linear-gradient(90deg, #007bff 0%, #4361ee 100%)")}
            >
              <FaDownload /> Download Resume
            </a>
          </motion.li>
        </AnimatePresence>
      </motion.ul>
    </motion.nav>
  );
}