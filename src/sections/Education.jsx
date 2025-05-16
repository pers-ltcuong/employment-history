import React, { useEffect } from "react";
import "./Section.css";
import "./Education.css";

function Education() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.AOS !== "undefined") {
      window.AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    }
  }, []);

  return (
    <div className="container education-wrapper">
      <h2>Education</h2>
      <section className="education-tree-section">
        <div className="tree-node university" data-aos="fade-up">
          <h3>CAN THO UNIVERSITY</h3>

          <div className="tree-branch major" data-aos="fade-up" data-aos-delay="200">
            <p><strong>Major:</strong> Electronic and Communication</p>
          </div>

          <div className="tree-branch cert" data-aos="fade-up" data-aos-delay="300">
            <p><strong>Degree:</strong> Bachelor of Engineering (BE)</p>
          </div>

          <div className="tree-branch cert" data-aos="fade-up" data-aos-delay="400">
            <p><strong>Duration:</strong> Sep 2016 - Jan 2021 (4.5 years)</p>
          </div>

          <div className="tree-branch key-project" data-aos="fade-up" data-aos-delay="500">
            <p><strong>Key Projects (Details in next section)</strong></p>
            <ul className="tree-branch-subbranch">
              <li data-aos="fade-up" data-aos-delay="600">
                IoT project - Remote control via SIM (Call/SMS) <em>(C/C++ and Assembly - Grade B)</em>
              </li>
              <li data-aos="fade-up" data-aos-delay="700">
                3D Printing System <em>(Python - Grade B+)</em>
              </li>
              <li data-aos="fade-up" data-aos-delay="800">
                Thesis: Automated straw production with image processing <em>(Python - Grade A)</em>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
