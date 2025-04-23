import React from "react";
import Testimonial from './Testimonial.tsx'
import Contact from './Contact.tsx'
import Resume from './Resume.tsx'
import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import ProjectCard from "./ProjectCard.tsx";
import SkillsAndTech from "./SkillsAndTech.tsx";
import MenuBar from "./MenuBar.tsx";
import './App.css';



// Example types for techLogos and skills


function App() {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
      <MenuBar />
      <div id="resume"><Resume /></div>
      <div id="hero"><Hero /></div>
      <div id="skills"><SkillsAndTech /></div>
      <div id="projects"><Projects /></div>
      <div id="resume"><Resume /></div>
      <div id="testimonials"><Testimonial /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}
 
 

 
 

 

 

export default App;
