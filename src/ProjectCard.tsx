import React from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ title, description, link }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(67,97,238,0.15)" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    style={{ marginBottom: "1.5rem" }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </motion.div>
));

export default ProjectCard;