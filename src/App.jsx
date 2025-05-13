import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const sections = [Hero, About, Education, Projects, Experience, Contact];
  const sectionIds = ["hero", "about", "education", "projects", "experience", "contact"];

  const backgroundImages = [
  `url(${process.env.PUBLIC_URL}/images/bg1.jpg)`,
  `url(${process.env.PUBLIC_URL}/images/bg2.jpg)`,
  `url(${process.env.PUBLIC_URL}/images/bg3.jpg)`,
  `url(${process.env.PUBLIC_URL}/images/bg4.jpg)`,
  `url(${process.env.PUBLIC_URL}/images/bg5.jpg)`,
  `url(${process.env.PUBLIC_URL}/images/bg6.jpg)`
];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const index = sectionIds.findIndex((id) => {
        const el = document.getElementById(id);
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      });

      if (index !== -1 && index !== activeIndex) {
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="App">
      <Navbar />

      {/* Background Layers */}
      <div className="background-container">
        {backgroundImages.map((bg, idx) => (
          <div
            key={idx}
            className="background-layer"
            style={{
              backgroundImage: bg,
              opacity: idx === activeIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Sections with alignment class */}
      {sections.map((Component, index) => {
        let alignmentClass = "section-center";
        if (index === 0) alignmentClass = "section-center";
        else if (index % 2 === 1) alignmentClass = "section-left";
        else alignmentClass = "section-right";
        
        let defaultBackground = ""
        if (sectionIds[index] === "contact") defaultBackground = "default-background"

        return (
          <section
            key={sectionIds[index]}
            id={sectionIds[index]}
            className={`section ${alignmentClass} ${defaultBackground}`}
          >
            <div className="section-content">
              <Component />
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default App;
