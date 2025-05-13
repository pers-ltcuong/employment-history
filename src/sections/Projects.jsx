import React, { useState, useEffect } from "react";
import "./Section.css";
import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const universityProjects = [
    {
      name: "Home Devices Remote Control",
      description: [
        "An IoT system allowing remote device control via SIM module (Call/SMS). Developed with embedded C and assembly languages.",
        "I developed a complete IoT system enabling remote control of home appliances using a SIM-based communication module (SIM800L), built entirely with the MSP430 microcontroller and programmed in embedded C. The system allows users to control devices and query their status remotely by sending SMS or making a call to the system. Upon receiving a valid message or call, the system interprets the command and switches the corresponding device ON/OFF or returns its current status.",
        "This project was fully self-built, including both hardware and software components. On the hardware side, I designed the circuit, soldered all components onto a custom PCB, and ensured power safety and module protection. On the software side, I wrote the firmware to manage GSM communication, parse commands, handle timing logic, and control relays accordingly."
      ],
      company: "",
      address: "",
      product: "IoT system",
      testMethodology: [
        "Concurrent message handling: Tested how the system processes multiple SMS messages sent in a short period of time (spam messages test).",
        "Power failure: Verified system behavior when experiencing sudden power cuts.",
        "Unauthorized access: Ensured that only predefined phone numbers can send valid commands to the system."
      ]
    },
    {
      name: "3D Printing",
      description: [
        "Designed a custom 3D printer and firmware to produce various objects.",
        "I collaborated with a team to design and build a fully functional custom 3D printer from scratch, integrating both hardware and software components. The system is powered by a Raspberry Pi and programmed in Python to manage the printing process, control the motors, and interface with the firmware.",
        "On the hardware side, we designed the mechanical frame, created custom PCBs for motor control, and assembled all components including extruders, stepper motors, and sensors.",
        "On the software side, I contributed to developing custom firmware using Python on Raspbian to control step motor for 3D printing."
      ],
      company: "",
      address: "",
      product: "Custom 3D Printer",
      testMethodology: [
        "Accuracy and precision tests: Operate and see accuracy of step motors (xyz)",
        "Failure recovery: Simulated power loss scenarios",
        "Performance: Tested in long time (~6-8 hours)"
      ]
    },
    {
      name: "Thesis - Smart Straw Machine",
      description: [
        "Thesis: 'Mô hình sản xuất ống hút sậy tự động sử dụng công nghệ xử lý ảnh trên Raspberry Pi'. Used image processing to automate straw production.",
        "As part of my graduation thesis, I worked with a team to design and implement an automated system for producing eco-friendly reed straws. The system leverages computer vision and robotics to identify, align, cut, and drill reed straws with precision. The project was built on top of our earlier 3D printer framework and was enhanced with image processing capabilities using a camera module and Python.",
        "We used a Raspberry Pi running Raspbian OS as the central controller. The camera captures images of reed straws placed on a conveyor system. Image processing algorithms—developed using OpenCV in Python—detect the position, orientation, and defects of each straw in real time. Based on the analysis, the system performs accurate cutting and drilling actions using motor-controlled tools."
      ],
      company: "",
      address: "",
      product: "Automated Straw Production Machine",
      testMethodology: [
        "Straw alignment accuracy: Ensured the vision system could correctly align and detect natural variations in reed shapes.",
        "Lighting and noise testing: Verified consistent image processing performance under different lighting and background conditions.",
        "Speed and efficiency: Measured how many straws could be processed per minute and optimized the cutting/drilling timings.",
        "System recovery: Simulated straw jams and unexpected inputs to ensure the system could detect and recover from faults.",
      ],
      videoUrl: "https://youtu.be/HnZIRid-RWA"
    }
  ];

  const workingProjects = [
    {
      name: "Automation QA Framework",
      description:
        "Built a reusable Python and Selenium-based test automation framework integrated with CI/CD pipelines and report generation.",
      company: "Tech Corp",
      address: "456 Tech St, City, Country",
      product: "Test Automation Framework",
      testMethodology: "Selenium WebDriver automation with CI/CD integration."
    },
    {
      name: "Firmware Regression Testing",
      description:
        "Led firmware regression testing for embedded systems using custom Python tools and serial console automation.",
      company: "Tech Corp",
      address: "456 Tech St, City, Country",
      product: "Firmware Testing Suite",
      testMethodology: "Automated regression testing through custom Python scripts."
    }
  ];

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open"); // Disable body scroll when modal is open
    } else {
      document.body.classList.remove("modal-open"); // Enable body scroll when modal is closed
    }
  }, [selectedProject]);

  return (
    <div className="container projects-section">
      <h2>Projects</h2>
      <div className="project-boxes">
        <div className="project-box">
          <h3 className="project-header">University Projects</h3>
          {universityProjects.map((project, index) => (
            <button
              key={index}
              className="custom-btn-white-bg project-btn"
              onClick={() => setSelectedProject(project)}
            >
              {project.name}
            </button>
          ))}
        </div>
        <div className="project-box">
          <h3 className="project-header">Working Projects</h3>
          {workingProjects.map((project, index) => (
            <button
              key={index}
              className="custom-btn-white-bg project-btn"
              onClick={() => setSelectedProject(project)}
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>{selectedProject.name}</h4>
            
            <div className="modal-text">
              <p><strong>Company:</strong> {selectedProject.company}</p>
              <p><strong>Address:</strong> {selectedProject.address}</p>
              <p><strong>Product:</strong> {selectedProject.product}</p>
              <p><strong>Description:</strong></p>
              <ul className="description-list">
                {selectedProject.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <p><strong>Test methodology:</strong></p>
              <ul className="test-methodology-list">
                {selectedProject.testMethodology.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            {/* Conditionally render the "Watch Video" button */}
            {selectedProject.videoUrl && (
              <a 
                href={selectedProject.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-btn-white-bg btn-project-custom"
              >
                Watch Demo Video
              </a>
            )}

            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
