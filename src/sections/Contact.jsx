import React from "react";
import "./Section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope, faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="container">
      <h2>Contact</h2>
      <p>Get in touch with me via:</p>
      <div className="icon-links">
        <a href="tel:+843355144433">
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </a>
        <a href="mailto:ltcuong.work@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="msteams:/l/chat/0/0?users=tcuong.1204@outlook.com.vn">
          <FontAwesomeIcon icon={faMicrosoft} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/ltcuong98" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
