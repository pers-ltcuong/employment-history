import React from "react";
import "./Section.css";

function Hero() {
  return (
    <div className="container text-center hero-section">
      <h1>Hi, I'm Cuong Le</h1>
      <p>A passionate QA Engineer who specializes in test automation, manual testing, and ensuring every release meets the highest standards of quality. 
        I take pride in delivering detailed bug reports, creating reliable test scripts, and working closely with development teams to build stable, user-friendly applications.</p>
      <button
        className="custom-btn"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/documents/Cuong Le - Quality Assurance Engineer.pdf"; // File located
          link.download = "Cuong Le resume.pdf"; // File name when user download 
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        Download Resume
      </button>
    </div>
  );
}

export default Hero;