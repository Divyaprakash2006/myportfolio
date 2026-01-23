import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            {/* Background Animation */}
            <div className="home-background">
                <DotLottieReact
                    src="https://lottie.host/e22ba5d5-08f9-48ac-a15e-ff160426e802/3afHm7zpHE.lottie"
                    loop
                    autoplay
                />
            </div>

            <div className="container">
                {/* Hero Section */}
                <div className="row py-5 align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold mb-4 hero-title">
                            Hi, I'm <span className="text-info">Divyaprakash Venkatachalam</span>
                        </h1>
                        <p className="lead fs-4 mb-4">
                            Full Stack Developer | Web Designer | Problem Solver
                        </p>
                        <p className="fs-5 mb-5 text-secondary">
                            I create beautiful and functional websites that solve real problems.
                        </p>
                        <div className="d-flex gap-3 flex-wrap">
                            <Link 
                                to="/projects" 
                                className="btn btn-info btn-lg px-4 py-3 rounded-pill"
                                aria-label="View my projects"
                            >
                                View My Work
                            </Link>
                            <a 
                                href="/resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-info btn-lg px-4 py-3 rounded-pill"
                                aria-label="View my resume"
                            >
                                <i className="fas fa-file-alt me-2" aria-hidden="true"></i>
                                View Resume
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center mt-5 mt-lg-0">
                        <div className="hero-image-container">
                            <img
                                src="/myphoto.jpeg"
                                alt="Divyaprakash Venkatachalam - Full Stack Developer"
                                className="img-fluid hero-image"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="row mt-5 py-5 align-items-center">
                    <div className="col-lg-6">
                        <h2 className="mb-5 section-title">My Tech Stack</h2>
                        <div className="d-flex flex-wrap gap-3 tech-stack" role="list">
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">React</span>
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">Node.js</span>
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">Express</span>
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">MongoDB</span>
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">JavaScript</span>
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">HTML5</span>
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">CSS3</span>
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">Bootstrap</span>
                            <span className="badge bg-light text-dark border p-3 fs-5" role="listitem">Git</span>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center mt-5 mt-lg-0">
                        <DotLottieReact
                            src="https://lottie.host/73af6be7-8278-4c07-9a78-663c422207e5/MiUu01HrhD.lottie"
                            loop
                            autoplay
                            style={{ height: '350px', width: '100%', transform: 'scaleX(-1)' }}
                        />
                    </div>
                </div>

                {/* What I Do Section */}
                <div className="row mt-5 py-5 align-items-center">
                    <div className="col-lg-5 text-center mb-5 mb-lg-0">
                        <DotLottieReact
                            src="https://lottie.host/79fc0bf9-d461-428f-b057-fff7bcb26c60/7dw1ehGVpB.lottie"
                            loop
                            autoplay
                            style={{ height: '550px', width: '560px', maxWidth: '100%' }}
                        />
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                        <div className="text-center text-lg-start mb-5">
                            <h2 className="section-title">What I Do</h2>
                        </div>
                        <div className="row">
                            {/* Web Development Card */}
                            <div className="col-12 mb-4">
                                <div className="card h-95 border-0 shadow-sm service-card text-center p-4">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                                            <i className="fas fa-code fa-3x text-info" aria-hidden="true"></i>
                                            <div className="text-start">
                                                <h3 className="h4 mb-2">Web Development</h3>
                                                <p className="text-secondary mb-0">
                                                    Building fast, responsive, and secure websites.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* UI/UX Design Card */}
                            <div className="col-12 mb-4">
                                <div className="card h-100 border-0 shadow-sm service-card text-center p-4">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                                            <i className="fas fa-paint-brush fa-3x text-info" aria-hidden="true"></i>
                                            <div className="text-start">
                                                <h3 className="h4 mb-2">UI/UX Design</h3>
                                                <p className="text-secondary mb-0">
                                                    Creating intuitive and visually appealing interfaces.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Backend & API Card */}
                            <div className="col-12 mb-3">
                                <div className="card h-100 border-0 shadow-sm service-card text-center p-4">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                                            <i className="fas fa-server fa-3x text-info" aria-hidden="true"></i>
                                            <div className="text-start">
                                                <h3 className="h4 mb-2">Backend & API</h3>
                                                <p className="text-secondary mb-0">
                                                    Developing robust server-side logic and databases.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;