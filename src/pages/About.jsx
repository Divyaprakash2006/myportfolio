import { useState } from 'react';
import './About.css';

const certificates = [
  {
    id: 'salesforce',
    title: 'Salesforce Certified',
    image: '/salesforce.png',
    description: 'Certified professional in Salesforce platform development and administration.',
  },
  {
    id: 'aws',
    title: 'AWS Certified',
    image: '/aws.png',
    description: 'Validated expertise in safe and secure cloud computing architecture.',
  },
  {
    id: 'servicenow-micro',
    title: 'ServiceNow Micro',
    image: '/servicenow.png',
    description: 'Specialized knowledge in ServiceNow platform fundamentals and workflows.',
  },
  {
    id: 'nptel',
    title: 'NPTEL Certified',
    image: '/Nptel2.png',
    description: 'National Programme on Technology Enhanced Learning certification in specialized domains.',
  },
  {
    id: 'servicenow-intern',
    title: 'ServiceNow Internship',
    image: '/servicenow intern.png',
    description: 'Completed Virtual Internship Program focusing on Agentic AI and System Administration.',
  },
];

function CertModal({ cert, onClose }) {
  if (!cert) return null;
  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
        <div className="cert-modal-img-wrap">
          <img src={cert.image} alt={cert.title} className="cert-modal-img" />
        </div>
        <div className="cert-modal-body">
          <h3 className="cert-modal-title">{cert.title}</h3>
          <p className="cert-modal-desc">{cert.description}</p>
        </div>
      </div>
    </div>
  );
}

function About() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="about">
      {/* Certificate Modal */}
      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />

      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold mb-4 section-title">About Me</h1>
            <p className="lead text-secondary">
              I am a passionate Full Stack Developer with a strong foundation in building modern, scalable web applications.
              With a keen eye for detail and a drive for excellence, I transform complex problems into elegant concepts and designs.
              My journey in tech is driven by a curiosity to learn and a desire to create impact.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="h3 mb-5 text-center section-title">Education</h2>
          </div>
          <div className="col-12">
            <div className="timeline-container">
              <div className="timeline-line"></div>

              {/* Education Item 1 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-graduation-cap fa-lg text-skyblue"></i>
                </div>
                <div className="timeline-content left-align">
                  <div className="card border-0 shadow-sm p-4">
                    <h3 className="h4 text-skyblue fw-bold mb-2">B.Tech  CSBS </h3>
                    <p className="fw-bold text-secondary  mb-2">Bachelor of Technology in Computer Science and Business Systems</p>
                    <p className="text-uppercase text-secondary fw-bold mb-1">Muthayammal Engineering College</p>
                    <p className="text-secondary fst-italic mb-2">An Autonomous Institution</p>
                    <div className="d-flex align-items-center gap-2 text-secondary mb-1">
                      <i className="far fa-calendar-alt"></i>
                      <span>2023 - Present</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-secondary">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Kakkaveri, Rasipuram</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Item 2 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-school fa-lg text-skyblue"></i>
                </div>
                <div className="timeline-content left-align">
                  <div className="card border-0 shadow-sm p-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-danger">COMPLETED</span>
                      {/* <a href="#" className="btn btn-sm btn-outline-warning"><i className="fas fa-external-link-alt"></i></a> */}
                    </div>
                    <h3 className="h4 text-skyblue fw-bold mb-2">SSLC / HSC</h3>
                    <p className="fw-bold text-secondary  mb-2">Secondary School / Higher Secondary</p>
                    <p className="text-uppercase text-secondary  fw-bold mb-1">Kalaimagal Matriculation Higher Secondary School</p>
                    <div className="d-flex align-items-center gap-2 text-secondary mb-1">
                      <i className="far fa-calendar-alt"></i>
                      <span>Completed</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-secondary">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Salem</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* Skills Section */}
        <div className="row mb-5" >
          <div className="col-12 mt-4">
            <h2 className="h3 mb-4 text-center section-title">Technical Skills</h2>
            <div className="card border-0 glass-card p-4" >
              <div className="card-body text-center" >
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'REST APIs', 'Java', 'C'].map((skill) => (
                    <span key={skill} className="badge   text-white border  p-3 fs-6">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="row">
          <div className="col-12">
            <h2 className="h3 mb-5 text-center section-title">Certifications</h2>
          </div>
          <div className="col-12">
            <div className="certifications-scroll-container">
              <div className="certifications-scroll-wrapper">
                {/* First set of cards */}
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="certification-card"
                    onClick={() => setActiveCert(cert)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="card h-100 border-0 service-card shadow-sm overflow-hidden cert-clickable">
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <img src={cert.image} className="w-100 h-100" alt={cert.title} style={{ objectFit: 'contain', padding: '10px' }} />
                      </div>
                      <div className="card-body text-start p-4">
                        <h5 className="card-title fw-bold mb-2">{cert.title}</h5>
                        <p className="card-text text-secondary small">{cert.description}</p>
                        <span className="cert-view-hint">
                          <i className="fas fa-expand-alt me-1"></i> Click to view
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {certificates.map((cert) => (
                  <div
                    key={cert.id + '-dup'}
                    className="certification-card"
                    onClick={() => setActiveCert(cert)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="card h-100 border-0 service-card shadow-sm overflow-hidden cert-clickable">
                      <div style={{ height: '200px', overflow: 'hidden' }}>
                        <img src={cert.image} className="w-100 h-100" alt={cert.title} style={{ objectFit: 'contain', padding: '10px' }} />
                      </div>
                      <div className="card-body text-start p-4">
                        <h5 className="card-title fw-bold mb-2">{cert.title}</h5>
                        <p className="card-text text-secondary small">{cert.description}</p>
                        <span className="cert-view-hint">
                          <i className="fas fa-expand-alt me-1"></i> Click to view
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;