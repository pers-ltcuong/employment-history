import React from "react";
import "./Section.css";
import ProfileModal from '../components/ProfileModal';

function Hero() {
  return (
    <div className="container text-center hero-section">
      <h1>Hi, I'm Cuong Le</h1>
      <p>
        A passionate QA Engineer specializing in test automation and manual testing. 
        I ensure every release meets high standards of quality and usability.
      </p>

      {/* Flex container for buttons */}
      <div className="d-flex justify-content-center gap-3">
        {/* Button trigger */}
        <div id="profile-modal">
          <button
            className="custom-btn-white-bg"
            data-bs-toggle="modal"
            data-bs-target="#profileModal"
          >
            Show Profile
          </button>
        </div>
        <ProfileModal /> {/* Modal trigger button */}
        <button
          className="custom-btn"
          onClick={() => {
            const link = document.createElement("a");
            link.href = `${process.env.PUBLIC_URL}/documents/Cuong Le - Quality Assurance Engineer.pdf`; // File located
            link.download = "Cuong Le resume.pdf"; // File name when user download 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </button>
      </div>

      <div className="scroll-indicator d-flex flex-column align-items-center fixed-bottom mb-4 z-3">
        <div className="arrow mb-1"></div>
        <div className="arrow mb-1"></div>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default Hero;
