import React from "react"
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import NavaneethPhoto from "./Navaneeth_linkedin.jpeg";


const LINKEDIN_URL = "https://www.linkedin.com/in/navaneeth-reddy-pinnapureddy/";


const heroBg =
  "linear-gradient(120deg, #e0e7ef 0%, #f8fafc 100%, #e7f1ff 100%)";

const Hero: React.FC = React.memo(() => (
  <motion.section
    className="hero"
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      background: heroBg,
      padding: "4rem 0 2rem 0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Decorative Circles */}
    <motion.div
      style={{
        position: "absolute",
        top: 40,
        left: 60,
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "rgba(67,97,238,0.10)",
        zIndex: 0,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    />
    <motion.div
      style={{
        position: "absolute",
        bottom: 30,
        right: 80,
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: "rgba(0,123,255,0.10)",
        zIndex: 0,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    />

    {/* Profile Image */}
    <motion.img
      src={NavaneethPhoto}
      alt="Navaneeth Reddy"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      style={{
        width: "160px",
        height: "160px",
        borderRadius: "50%",
        objectFit: "cover",
        boxShadow: "0 8px 32px rgba(67,97,238,0.18)",
        marginBottom: "1.7rem",
        border: "5px solid #fff",
        zIndex: 1,
      }}
    />

    {/* Name and Title */}
    <motion.h1
      style={{
        fontSize: "2.8rem",
        fontWeight: 800,
        color: "#22223b",
        marginBottom: "0.7rem",
        letterSpacing: "1.5px",
        zIndex: 1,
        textShadow: "0 2px 8px rgba(67,97,238,0.06)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      Hi, I'm Navaneeth Reddy




    </motion.h1>
    <motion.p
      style={{
        fontSize: "1.4rem",
        color: "#4361ee",
        marginBottom: "0.7rem",
        fontWeight: 600,
        zIndex: 1,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      Principal Architect &nbsp;|&nbsp; UI/UX Enthusiast





    </motion.p>

    {/* LinkedIn Button */}
    <motion.div
      style={{ margin: "1.2rem 0", zIndex: 1 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          background: "#0077b5",
          color: "#fff",
          padding: "0.7rem 1.5rem",
          borderRadius: "7px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.08rem",
          boxShadow: "0 2px 8px rgba(0,119,181,0.10)",
          transition: "background 0.2s, transform 0.2s",
        }}
        onMouseOver={e => (e.currentTarget.style.background = "#005983")}
        onMouseOut={e => (e.currentTarget.style.background = "#0077b5")}
      >
        <FaLinkedin size={22} /> Connect on LinkedIn
      </a>
    </motion.div>

    {/* About Card */}
    <motion.div
      style={{
        marginTop: "2rem",
        background: "#fff",
        borderRadius: "14px",
        boxShadow: "0 4px 24px rgba(67,97,238,0.10)",
        padding: "2rem",
        maxWidth: "520px",
        textAlign: "center",
        zIndex: 1,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.7 }}
    >
      <h2 style={{ fontSize: "1.35rem", color: "#22223b", marginBottom: "0.8rem", fontWeight: 700 }}>







        About Me
      </h2>
      <p style={{ color: "#5f6c7b", fontSize: "1.08rem", lineHeight: 1.7 }}>
        Passionate developer with experience in building responsive web apps using React, Angular, Vue, and more.<br />
        I love crafting beautiful user experiences and leading teams to deliver high-quality products.


      </p>
    </motion.div>
  </motion.section>
));

export default Hero;