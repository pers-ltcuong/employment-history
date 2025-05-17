import React, { useState, useEffect } from "react";
import "./Section.css";
import "./Experience.css";
import "../components/Modal.css"
import Modal from '../components/Modal';

const workExperiences = [
  {
    project: "Accedian Networks",
    domain: "Firmware",
    role: "Software Quality Assurance",
    released: "11 (~100 network and security features)",
    experiences: [
      "Reported progress biweekly to the QA Manager in Canada, ensuring clear communication of team status.",
      "Analyzed feature documentation to design effective test strategies and provided accurate level-of-effort (LoE) estimates to the QA Manager.",
      "Designed and implemented new test suites and test cases aligned with feature requirements.",
      "Developed and enhanced automation test functionalities to support continuous testing processes.",
      "Maintained and updated existing test cases to ensure comprehensive test coverage.",
      "Performed thorough manual testing to identify defects.",
      "Identified, reported, and tracked bugs, collaborating to ensure timely fixes and prevent recurrence.",
      "Worked closely with the software team to investigate root causes of customer-reported issues.",
      "Managed deployment of virtual machines and internal products using KVM and VMware.",
      "Utilized Docker to deploy essential services effectively.",
    ],
    labels: ["Waterfall", "Self-learning", "Root cause analysis", "Automation", "Manual", "Python", "Docker", "Jenkins CI/CD", "Test plan", "Test strategy", "Task management", "Handle multiple tasks/projects", "etc. (QA skills)"],
  },
  {
    project: "SOLAR",
    domain: "Website",
    role: "Software Quality Assurance",
    released: "18 (~150 UI features/request changes)",
    experiences: [
      "Designed and implemented a custom test automation framework using Katalon Studio integrated with Selenium.",
      "Created reusable components and objects to enable scalable and maintainable testing solutions.",
      "Developed comprehensive test strategies and provided estimations to support planning.",
      "Deployed automation test cases and suites for new features, ensuring reliable test coverage.",
      "Maintained and enhanced regression test suites for improved coverage and stability.",
      "Conducted manual API testing using Postman and managed automated test execution via Jenkins.",
      "Reported bugs, validated fixes, and monitored to prevent bug recurrence.",
      "Collaborated closely with developers to reproduce and resolve customer-reported issues efficiently.",
    ],
    labels: ["Agile", "Katalon", "Selenium", "Java", "Automation", "Manual", "API testing", "UI testing", "Microservices", "Jenkins CI/CD", "Test plan", "Test strategy", "Handle multiple tasks/projects", "etc. (QA skills)"],
  },
];

const careerSteps = [
  { title: "Graduated from Can Tho University", time: "Jan 11, 2021" },
  { title: "Join TMA Solutions - Junior Engineer", time: "Jan 21, 2021" },
  { title: "Pass probation - Join Accedian project", time: "Mar 01, 2021" },
  { title: "Pass customer interview - Accedian", time: "Nov 2021" },
  { title: "Promotion to Senior QA Engineer", time: "Jan 01, 2023" },
  { title: "Pass customer interview - ICON", time: "Aug 2023" },
  { title: "QA Lead (maternity replacement, now permanent) - Accedian", time: "Oct 2024" },
];

function Experience() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showWorkHint, setShowWorkHint] = useState(false);

  useEffect(() => {
    if (selectedButton === "career") {
      setCurrentStep(0);
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < careerSteps.length - 1) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedButton]);

  useEffect(() => {
    if (selectedButton) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedButton]);

  const handleWorkClick = () => {
    setSelectedButton("work");
    setCurrentPage(0);

    const hasSeenHint = localStorage.getItem("hasSeenWorkHint");
    if (!hasSeenHint) {
      setShowWorkHint(true);
      localStorage.setItem("hasSeenWorkHint", "true");
    }
  };

  return (
    <div id="experience-section" className="container">
      <h2>Experience</h2>
      <p>
        The practical experience I've acquired through years of working on real
        projects at professional organizations.
      </p>
      <div>
        <button
          className="custom-btn"
          style={{ marginRight: "20px" }}
          onClick={handleWorkClick}
        >
          Work Experience
        </button>
        <button
          className="custom-btn-white-bg"
          onClick={() => setSelectedButton("career")}
        >
          Career Path & Promotion
        </button>
      </div>

      {selectedButton && (
        <Modal
          onClose={() => {
            setSelectedButton(null);
            setShowWorkHint(false); // hide hint too
          }}
          header={selectedButton === "work" ? "Work Experience" : "Career Path & Promotion"}
          footer={
            selectedButton === "work" ? (
              <>
                <div className="right-buttons">
                  <button
                    className="close-btn"
                    onClick={() => setSelectedButton(null)}
                  >
                    Close
                  </button>
                </div>
                <div className="left-buttons">
                  <button
                    className="custom-btn"
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                  >
                    Previous
                  </button>

                  <div style={{ position: "relative", display: "inline-block" }}>
                    <button
                      className="custom-btn"
                      disabled={currentPage === workExperiences.length - 1}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      style={{ marginLeft: "10px" }}
                    >
                      Next
                    </button>
                    

                    {showWorkHint && (
                      <div
                        className="hint-box"
                        style={{
                          position: "absolute",
                          top: "-40px",
                          left: "40px",
                          backgroundColor: "#fff4c2",
                          border: "1px solid #ffd700",
                          borderRadius: "8px",
                          padding: "3px 8px",
                          fontSize: "0.9em",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                          zIndex: 10,
                          whiteSpace: "nowrap",
                          color: "#000000",
                        }}
                      >
                        💡 Click "Next" to view other projects.
                        <button
                          style={{
                            background: "transparent",
                            border: "none",
                            fontWeight: "bold",
                            cursor: "pointer",
                            color: "#aa0000",
                          }}
                          onClick={() => setShowWorkHint(false)}
                        >
                          ✖
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (null)
          }
        >
          {selectedButton === "work" ? (
            <>
              <p><strong>Project:</strong> {workExperiences[currentPage].project}</p>
              <p><strong>Domain:</strong> {workExperiences[currentPage].domain}</p>
              <p><strong>Role:</strong> {workExperiences[currentPage].role}</p>
              <p><strong>Releases involved in:</strong> {workExperiences[currentPage].released}</p>
              <p><strong>Experiences:</strong></p>
              <ul className="exeperience-list">
                {workExperiences[currentPage].experiences.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {workExperiences[currentPage].labels && (
                <div style={{ marginTop: "15px", marginBottom: "15px", textAlign: "left" }}>
                  <strong>Labels: </strong>
                  {workExperiences[currentPage].labels.map((label, idx) => (
                    <span key={idx} className="label-badge">{label}</span>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="career-path-chart">
              {careerSteps.map((step, idx) => (
                <div key={idx} className="career-step-container">
                  <div className="career-step-time">{step.time}</div>
                  <button
                    className={`career-step-btn ${
                      idx === currentStep ? "active" : idx < currentStep ? "completed" : ""
                    }`}
                    disabled={idx > currentStep}
                  >
                    {step.title}
                  </button>
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}

    </div>
  );
}

export default Experience;
