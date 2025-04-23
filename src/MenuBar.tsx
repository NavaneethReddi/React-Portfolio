import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { label: "Home", to: "#hero", icon: null },
  { label: "Skills", to: "#skills", icon: null },
  { label: "Projects", to: "#projects", icon: null },
  { label: "Testimonials", to: "#testimonials", icon: null },
  { label: "Contact", to: "#contact", icon: null },
  // Add more options as needed
];

const RESUME_URL = "/Resume.docx";

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
  const [mobileOpen, setMobileOpen] = React.useState(false);

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

  // Close mobile menu on navigation
  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          background: "rgba(34, 37, 38, 0.95)",
          boxShadow: "0 8px 32px rgba(67,97,238,0.13)",
          zIndex: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.7rem 0",
          minHeight: "70px",
          borderBottom: "none",
          transition: "box-shadow 0.2s",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Hamburger for mobile */}
        <div
          className="menu-mobile-toggle"
          style={{
            display: "none",
            position: "absolute",
            left: 24,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 210,
            background: "none",
            border: "none",
            color: "#ffb347",
            fontSize: 28,
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate="visible"
          className="menu-bar-list"
          style={{
            display: "flex",
            gap: "2.2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
            width: "100%",
            maxWidth: "1100px",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
        >
          <AnimatePresence>
            {menuItems.map((item, idx) => (
              <motion.li
                key={item.to}
                variants={liVariants}
                whileHover={{
                  scale: 1.13,
                  y: -4,
                  boxShadow: "0 8px 24px rgba(255,179,71,0.13)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  position: "relative",
                  textAlign: "center",
                  borderRadius: "50px",
                  overflow: "hidden",
                  background: active === item.to
                    ? "linear-gradient(90deg, #ffb347 0%, #43e97b 100%)"
                    : "transparent",
                  transition: "background 0.2s",
                }}
              >
                <a
                  href={item.to}
                  onClick={handleNavClick}
                  style={{
                    color: active === item.to ? "#232526" : "#f8fafc",
                    fontWeight: 700,
                    fontSize: "1.08rem",
                    textDecoration: "none",
                    padding: "0.7em 1.5em",
                    borderRadius: "50px",
                    transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s",
                    letterSpacing: "0.5px",
                    boxShadow: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.7em",
                    background: "transparent",
                    border: "none",
                    minWidth: 90,
                    justifyContent: "center",
                    whiteSpace: "nowrap",
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
                      left: "25%",
                      right: "25%",
                      bottom: 8,
                      height: 4,
                      borderRadius: 2,
                      background: "linear-gradient(90deg, #ffb347 0%, #43e97b 100%)",
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
                y: -4,
                boxShadow: "0 8px 24px rgba(255,179,71,0.13)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                position: "relative",
                textAlign: "center",
                borderRadius: "50px",
                overflow: "hidden",
                background: "linear-gradient(90deg, #ffb347 0%, #43e97b 100%)",
                transition: "background 0.2s",
              }}
            >
              <a
                href={RESUME_URL}
                download
                onClick={handleNavClick}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  background: "transparent",
                  color: "#232526",
                  padding: "0.7em 1.5em",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1.08rem",
                  boxShadow: "none",
                  transition: "background 0.2s, transform 0.2s",
                  border: "none",
                  minWidth: 120,
                  justifyContent: "center",
                }}
              >
                <FaDownload /> Download Resume
              </a>
            </motion.li>
          </AnimatePresence>
        </motion.ul>
      </motion.nav>
      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 900px) {
            .menu-bar-list {
              display: ${mobileOpen ? "flex" : "none"} !important;
              flex-direction: column !important;
              gap: 1.2rem !important;
              background: rgba(34, 37, 38, 0.98);
              position: absolute;
              top: 70px;
              left: 0;
              right: 0;
              margin: 0 auto;
              padding: 2rem 0 2rem 0;
              border-radius: 0 0 18px 18px;
              box-shadow: 0 8px 32px rgba(67,97,238,0.13);
              z-index: 300;
              align-items: center;
              width: 100vw;
              max-width: 100vw;
            }
            .menu-mobile-toggle {
              display: block !important;
            }
          }
          @media (max-width: 600px) {
            .menu-bar-list {
              padding: 1.2rem 0 1.2rem 0;
              gap: 0.7rem !important;
            }
          }
        `}
      </style>
    </>
  );
}