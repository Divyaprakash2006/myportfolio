import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "LeeTracker",
      description: "LeeTracker is a modern web application built with React and TypeScript, powered by a GraphQL API and MongoDB for efficient data management, real-time tracking, and scalable querying.",
      tech: "React, TypeScript, Node.js, GraphQL, MongoDB",
      link: "#"
    },
    {
      id: 2,
      title: "Online Test Management System",
      description: "A comprehensive web application for creating, managing, and conducting online tests. Features include test creation, timer-based exam sessions, real-time result tracking, and detailed performance analytics for students and administrators.",
      tech: "React, JSX, CSS, Node.js, MongoDB",
      link: "#"
    },
    {
      id: 3,
      title: "Leave and Attendance Management System",
      description: "An enterprise-level system for managing employee leave requests and attendance tracking. Includes features for leave application approval workflow, attendance records, dashboard analytics, and automated report generation for HR management.",
      tech: "React, JSX, CSS, Node.js, MongoDB",
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