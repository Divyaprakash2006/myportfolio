import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 2,
      title: "Online Test Management System",
      description: "A comprehensive web application for creating, managing, and conducting online tests. Features include test creation, timer-based exam sessions, real-time result tracking, and detailed performance analytics for students and administrators.",
      tech: "React, JSX, CSS, Node.js, MongoDB",
      link: "https://test-adminportal.netlify.app/"
    },
    {
      id: 3,
      title: "Leave and Attendance Management System",
      description: "An enterprise-level system for managing employee leave requests and attendance tracking. Includes features for leave application approval workflow, attendance records, dashboard analytics, and automated report generation for HR management.",
      tech: "React, JSX, CSS, Node.js, MongoDB",
      link: "#"
    },
    {
      id: 4,
      title: "WaytoShare",
      description: "A peer-to-peer real-time file sharing application that enables direct, secure browser-to-browser data transfer. Built using vanilla web technologies and WebRTC to support fast, client-side sharing without intermediate cloud server storage.",
      tech: "HTML, CSS, JavaScript, WebRTC",
      link: "https://waytoshare.onrender.com/"
    },
    {
      id: 5,
      title: "Real-Time Chat Application",
      description: "A dynamic real-time messaging application supporting private and group chat rooms. Built with a React frontend (JSX) for responsive interactions, and a Java Spring Boot backend utilizing WebSockets for low-latency message delivery and user presence tracking.",
      tech: "React, JSX, CSS, Java, Spring Boot, WebSockets",
      link: "#"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">{project.tech}</p>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;