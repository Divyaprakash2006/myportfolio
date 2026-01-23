import './Projects.css';

function Projects() {
  const projects = [
   {
  id: 1,
  title: "LeeTracker",
  description: "LeeTracker is a modern web application built with React and TypeScript, powered by a GraphQL API and MongoDB for efficient data management, real-time tracking, and scalable querying.",
  tech: "React, TypeScript, Node.js, GraphQL, MongoDB",
  link: "https://leetracker.vercel.app/login"
}
,
   {
  id: 2,
  title: "Nexus Online Learning & LMS Platform",
  description: "Nexus is an online learning and LMS platform built with React (JavaScript), using a RESTful API and MongoDB to manage courses, users, and learning progress efficiently.",
  tech: "React (JavaScript), Node.js, REST API, MongoDB",
  link: "https://nexuslms.vercel.app/login"
}
,
   {
  id: 3,
  title: "Portfolio",
  description: "A personal portfolio website built with React, JavaScript, and CSS to showcase projects, skills, and experience with a responsive and modern UI.",
  tech: "React, JavaScript, CSS",
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