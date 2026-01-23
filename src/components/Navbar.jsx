import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import Logo from './Logo';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSocial, setShowSocial] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleConnectClick = () => {
        setShowSocial(!showSocial);
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                {/* Logo */}
                <Link to="/" className="navbar-brand" onClick={closeMenu}>
                    <Logo />
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Links */}
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={closeMenu}>
                                <i className="fas fa-home"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={closeMenu}>
                                <i className="fas fa-user"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" onClick={closeMenu}>
                                <i className="fas fa-briefcase"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="social-dropdown-container">
                                <button className="nav-link" onClick={handleConnectClick} aria-label="Toggle social links">
                                    <i className="fas fa-link"></i>
                                </button>
                                {/* Social Dropdown */}
                                <div className={`social-dropdown ${showSocial ? 'show' : ''}`}>
                                    <a href="https://www.linkedin.com/in/divyaprakash-v-2036222a5" target="_blank" rel="noreferrer" className="social-dropdown-link" title="LinkedIn">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://www.instagram.com/divyaprakash_vdp?igsh=Z2gzN2FmOWRuaHJk" target="_blank" rel="noreferrer" className="social-dropdown-link" title="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://github.com/Divyaprakash2006" target="_blank" rel="noreferrer" className="social-dropdown-link" title="GitHub">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="mailto:diviyaprakash32@gmail.com" className="social-dropdown-link" title="Email">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                    <a href="https://wa.me/8072597309" target="_blank" rel="noreferrer" className="social-dropdown-link" title="WhatsApp">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;