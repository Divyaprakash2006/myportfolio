import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Online Test Management System",
      description: "A comprehensive web application for creating, managing, and conducting online tests. Features include test creation, timer-based exam sessions, real-time result tracking, and detailed performance analytics for students and administrators.",
      tech: "React, JSX, CSS, Node.js, MongoDB",
      link: "https://test-adminportal.netlify.app/"
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "A dynamic real-time messaging application supporting private and group chat rooms. Built with a React frontend (JSX) for responsive interactions, and a Java Spring Boot backend utilizing WebSockets for low-latency message delivery and user presence tracking.",
      tech: "React, JSX, CSS, Java, Spring Boot, WebSockets",
      link: "https://chatapp-kappa-one.vercel.app/"
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
              {project.link && project.link !== '#' && (
                <a 
                  href={project.link} 
                  target={project.link.startsWith('http') ? "_blank" : undefined} 
                  rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
