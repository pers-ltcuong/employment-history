import React, { useState, useEffect } from "react";
import "./Section.css";
import "./Projects.css";
import "../components/Modal.css"
import Modal from '../components/Modal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const universityProjects = [
    {
      name: "Home Devices Remote Control",
      logoUrl: `${process.env.PUBLIC_URL}/images/ctu-logo.png`,
      description: [
        "An IoT system allowing remote device control via SIM module (Call/SMS). Developed with embedded C and assembly languages.",
        "I developed a complete IoT system enabling remote control of home appliances using a SIM-based communication module (SIM800L), built entirely with the MSP430 microcontroller and programmed in embedded C. The system allows users to control devices and query their status remotely by sending SMS or making a call to the system. Upon receiving a valid message or call, the system interprets the command and switches the corresponding device ON/OFF or returns its current status.",
        "This project was fully self-built, including both hardware and software components. On the hardware side, I designed the circuit, soldered all components onto a custom PCB, and ensured power safety and module protection. On the software side, I wrote the firmware to manage GSM communication, parse commands, handle timing logic, and control relays accordingly."
      ],
      company: "None - A research project",
      address: "None",
      product: "IoT system",
      testMethodology: [
        "Concurrent message handling: Tested how the system processes multiple SMS messages sent in a short period of time (spam messages test).",
        "Power failure: Verified system behavior when experiencing sudden power cuts.",
        "Unauthorized access: Ensured that only predefined phone numbers can send valid commands to the system."
      ]
    },
    {
      name: "3D Printing",
      logoUrl: `${process.env.PUBLIC_URL}/images/ctu-logo.png`,
      description: [
        "Designed a custom 3D printer and firmware to produce various objects.",
        "I collaborated with a team to design and build a fully functional custom 3D printer from scratch, integrating both hardware and software components. The system is powered by a Raspberry Pi and programmed in Python to manage the printing process, control the motors, and interface with the firmware.",
        "On the hardware side, we designed the mechanical frame, created custom PCBs for motor control, and assembled all components including extruders, stepper motors, and sensors.",
        "On the software side, I contributed to developing custom firmware using Python on Raspbian to control step motor for 3D printing."
      ],
      company: "None - A research project",
      address: "None",
      product: "Custom 3D Printer",
      testMethodology: [
        "Accuracy and precision tests: Operate and see accuracy of step motors (xyz)",
        "Failure recovery: Simulated power loss scenarios",
        "Performance: Tested in long time (~6-8 hours)"
      ]
    },
    {
      name: "Thesis - Smart Straw Machine",
      logoUrl: `${process.env.PUBLIC_URL}/images/ctu-logo.png`,
      description: [
        "Thesis: 'Mô hình sản xuất ống hút sậy tự động sử dụng công nghệ xử lý ảnh trên Raspberry Pi'. Used image processing to automate straw production.",
        "As part of my graduation thesis, I worked with a team to design and implement an automated system for producing eco-friendly reed straws. The system leverages computer vision and robotics to identify, align, cut, and drill reed straws with precision. The project was built on top of our earlier 3D printer framework and was enhanced with image processing capabilities using a camera module and Python.",
        "We used a Raspberry Pi running Raspbian OS as the central controller. The camera captures images of reed straws placed on a conveyor system. Image processing algorithms—developed using OpenCV in Python—detect the position, orientation, and defects of each straw in real time. Based on the analysis, the system performs accurate cutting and drilling actions using motor-controlled tools."
      ],
      company: "None - Thesis",
      address: "None",
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
      name: "Accedian Networks",
      logoUrl: `${process.env.PUBLIC_URL}/images/cisco-logo.png`,
      company: "TMA Tech Group (Customer: Accedian/Cisco Canada)",
      address: "Montreal, Quebec, Canada",
      product: "Networking products (Assurance performance)",
      description: [
        "A software-based solution that helps telecom operators, internet service providers, and large enterprises to: Monitor the health of their network, measure service quality (like speed, delay, and loss), and prove they are delivering what they promise to customers",
        "It runs in the cloud or on servers (no need for expensive test hardware), connects to small devices (called modules) placed around the network, performs live testing and monitoring between these devices - like checking how fast and reliable the connection is.",
        "The smart traffic controller that constantly watches every route, ensures cars (data) arrive safely and quickly, and lets you know if there are any jams or detours - all without sending people into the field.",
        "Firmware updates are released frequently to enhance functionality, address emerging issues, and maintain high standards of quality and performance.",
        "Cisco prioritizes security, with HTTPS-protected WebUI sessions using SSL certificates and enforced Two-Factor Authentication (2FA). The CLI supports SSH key-based access and role-based access control (RBAC), while protections against XSS, CSRF, and other vulnerabilities secure the user interfaces."
      ],
      testMethodology: [
        "Acceptance Testing: By validating the firmware against customer requirements, ensuring it meets all necessary specifications. This phase confirms that the firmware is ready for future testing.",
        "Sanity Testing: A quick check is performed after each build to ensure that critical features, like the core functionality of the firmware, are working. This ensures that there are no major issues after minor updates or bug fixes.",
        "Regression Testing: After any code changes or bug fixes, new firmwware is provided, regression testing is carried out to ensure that the updates do not break existing functionality.",
        "Interface Testing (CLI and Web): Both the Command Line Interface (CLI) and Web interfaces are tested to ensure that users can interact with the firmware easily and that the interfaces work without errors. This includes verifying that the inputs, outputs, and display functionalities are all functioning as expected.",
        "Functional Testing: Functional testing is carried out to confirm that all the features of the firmware operate as per the requirements. This includes verifying the core functionalities, APIs, and interactions between different components.",
        "Performance Testing (Non-functional): We conduct performance testing to evaluate the firmware's behavior under various loads, ensuring it performs well under typical usage scenarios and during peak loads. This includes checking for response time, stability, and efficient use of resources.",
        "Scalability Testing (Non-functional): We assess how the firmware scales under increasing demands, such as a higher number of managed devices, users, etc. This test ensures that the firmware can handle growth without compromising its functionality or performance.",
        "Automation Testing: Automated test scripts are executed to quickly verify large sets of functionalities, ensure consistency and efficiency in the testing process.",
        "Manual Testing: Manual testing is conducted to cover cases that require human judgment, such as validating complex logic, hardware plugging, user interface interactions, and edge cases that are difficult to automate"
      ]
    },
    {
      name: "SOLAR",
      logoUrl: `${process.env.PUBLIC_URL}/images/icon-logo.png`,
      company: "TMA Tech Group (Customer: ICON Clinical Research)",
      address: "Chennai, Tamil Nadu, India",
      product: "Health Research/Clinical Trials Website",
      description: [
        "SOLAR (Sponsor On-line Lab Requirements System) is a web application developed by ICON Clinical Research to facilitate the management and submission of clinical trials/health research from researcher to sponsors.",
        "It plays a key role in ICON's suite of systems used in clinical trials and laboratory services, streamlining the communication between sponsors and ICON's lab operations.",
        "SOLAR enables researcher to specify study lab requirements, such as tests, kits, visits and shipping logistics.",
        "It supports exporting eCLW (Electronic Client Laboratory Worksheet) and send to sponsor for review and sign-off, or they can review online using eCSTR feature (Electronic Clinical Studies Technical Review).",
        "This application integrates with a dedicated microservice ICONLIMS (ICON Laboratory Information Management System) to create, modify, and delete laboratory entities such as tests, kits, and shipments."
      ],
      testMethodology: [
        "API Testing: Tested RESTful APIs, verifying CRUD operations for lab entities (e.g., tests, kits, shipments). Used tools like Postman to validate request/response integrity, error handling, and performance.",
        "Functional Testing: Validated that each feature of the application met business requirements. This included form validations, workflow correctness, integration with backend services, and data consistency.",
        "Sanity Testing: Performed quick health checks after new builds or deployments to ensure core functionalities were stable before proceeding with deeper testing.",
        "Regression Testing: Conducted thorough testing of existing features to ensure new changes did not introduce bugs. This included maintaining and running regression test suites manually and through automation (Jenkins CI/CD).",
        "Manual Testing: Executed detailed exploratory tests for complex user flows and UI components that required human validation, or when verifying visual elements.",
        "Automation Testing: Created automated test scripts using Katalon Studio (with Selenium). Tests were run as part of regular CI workflows to reduce manual effort and accelerate release cycles."
      ]
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
      <p style={{paddingRight: "30%"}}>Worked on academic and professional projects. Hands-on experience with projects in IoT, smart systems, networking, and health research platforms. Check it out!</p>
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
        <Modal
          onClose={() => setSelectedProject(null)}
          header={
            <>
              {selectedProject.logoUrl && (
                <img
                  src={selectedProject.logoUrl}
                  alt={`${selectedProject.name} logo`}
                  className="project-logo"
                />
              )}
              {selectedProject.name}
            </>
          }
          footer={
            selectedProject.videoUrl ? (
              <>
                <div className="right-buttons">
                    <button
                      className="close-btn"
                      onClick={() => setSelectedProject(null)}
                    >
                      Close
                    </button>
                </div>
                <a
                href={selectedProject.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: "none", marginLeft: "10px"}}
              >
                📹 Watch Demo Video
              </a>
              </>
            ) : (null)
          }
        >
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
        </Modal>
      )}
    </div>
  );
}

export default Projects;
