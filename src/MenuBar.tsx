import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaNewspaper, FaUser, FaBlog, FaImages } from "react-icons/fa";

const menuItems = [
  { label: "Home", to: "#hero", icon: null },
  { label: "Skills", to: "#skills", icon: null },
  { label: "Projects", to: "#projects", icon: null },
  { label: "Testimonials", to: "#testimonials", icon: null },
  { label: "Contact", to: "#contact", icon: null },
  // { label: "Tech News", to: "#tech-news", icon: <FaNewspaper /> },
  // { label: "About", to: "#about", icon: <FaUser /> },
  // { label: "Blog", to: "#blog", icon: <FaBlog /> },
  // { label: "Gallery", to: "#gallery", icon: <FaImages /> },
];

const RESUME_URL = "/Resume.docx";

const colorfulGradients = [
  "linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)",
  "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(90deg, #232526 0%, #414345 100%)",
  "linear-gradient(90deg, #232526 0%, #ffb347 100%)",
  "linear-gradient(90deg, #232526 0%, #43e97b 100%)",
  "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
  "linear-gradient(90deg, #f857a6 0%, #ff5858 100%)",
  "linear-gradient(90deg, #30cfd0 0%, #330867 100%)",
  "linear-gradient(90deg, #fccb90 0%, #d57eeb 100%)",
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
        background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
        boxShadow: "0 4px 24px rgba(67,97,238,0.10)",
        zIndex: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.4rem 0",
        minHeight: "64px",
        borderBottom: "2px solid #353b48",
        transition: "box-shadow 0.2s",
      }}
    >
      <motion.ul
       variants={ulVariants}
       initial="hidden"
       animate="visible"
       style={{
         display: "flex",
         gap: "1.5rem", // Increased gap for more space between menu items
         listStyle: "none",
         margin: 0,
         padding: 0,
         alignItems: "center",
         width: "100%",
         maxWidth: "1200px",
         justifyContent: "center",
       }}
      >
        <AnimatePresence>
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.to}
              variants={liVariants}
              whileHover={{
                scale: 1.12,
                y: -2,
                boxShadow: "0 4px 18px rgba(67,97,238,0.13)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{ position: "relative", textAlign: "center" }}
            >
 
 <a
  href={item.to}
  style={{
    color: active === item.to ? "#232526" : "#232526",
    fontWeight: 700,
    fontSize: "1.08rem",
    textDecoration: "none",
    padding: "0.5rem 1.1rem",
    borderRadius: "8px",
    transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s",
    letterSpacing: "0.5px",
    boxShadow: "0 0 0 rgba(67,97,238,0)",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: active === item.to
      ? colorfulGradients[idx % colorfulGradients.length]
      : "#fffbf3",
    border: active === item.to ? "2px solid #ffb347" : "2px solid transparent",
    minWidth: 90,
    justifyContent: "center",
    outline: "none",
    position: "relative",
    top: 0,
  }}
  onMouseOver={e => {
    e.currentTarget.style.background = colorfulGradients[idx % colorfulGradients.length];
    e.currentTarget.style.color = "#232526";
    e.currentTarget.style.boxShadow = "0 2px 12px rgba(67,97,238,0.10)";
    e.currentTarget.style.transform = "scale(1.07)";
    e.currentTarget.style.top = "-2px";
    e.currentTarget.style.border = "2px solid #ffb347";
  }}
  onMouseOut={e => {
    e.currentTarget.style.background = active === item.to
      ? colorfulGradients[idx % colorfulGradients.length]
      : "#fffbf3";
    e.currentTarget.style.color = "#232526";
    e.currentTarget.style.boxShadow = "0 0 0 rgba(67,97,238,0)";
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.top = "0";
    e.currentTarget.style.border = active === item.to ? "2px solid #ffb347" : "2px solid transparent";
  }}
>
  {item.icon && <span>{item.icon}</span>}
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
              scale: 1.12,
              y: -2,
              boxShadow: "0 4px 18px rgba(67,97,238,0.13)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{ position: "relative", textAlign: "center" }}
          >
            <a
              href={RESUME_URL}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7rem",
                background: "linear-gradient(90deg, #ffb347 0%, #232526 100%)",
                color: "#232526",
                padding: "0.5rem 1.1rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.08rem",
                boxShadow: "0 2px 8px rgba(67,97,238,0.10)",
                transition: "background 0.2s, transform 0.2s",
                border: "2px solid #ffb347",
                minWidth: 120,
                justifyContent: "center",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "linear-gradient(90deg, #232526 0%, #ffb347 100%)")}
              onMouseOut={e => (e.currentTarget.style.background = "linear-gradient(90deg, #ffb347 0%, #232526 100%)")}
            >
              <FaDownload /> Download Resume
            </a>
          </motion.li>
        </AnimatePresence>
      </motion.ul>
    </motion.nav>
  );
}