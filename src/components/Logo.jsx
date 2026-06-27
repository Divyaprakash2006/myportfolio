import React, { useState, useEffect } from 'react';
import './Logo.css';

const Logo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleStateChange = (e) => {
            setIsPlaying(e.detail.isPlaying);
        };

        window.addEventListener('bgm-state-change', handleStateChange);

        // Request initial BGM state
        const requestEvent = new CustomEvent('request-bgm-state');
        window.dispatchEvent(requestEvent);

        return () => {
            window.removeEventListener('bgm-state-change', handleStateChange);
        };
    }, []);

    const handleLogoClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const event = new CustomEvent('toggle-bgm');
        window.dispatchEvent(event);
    };

    return (
        <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <div className="logo-text">
                <span className="logo-char">D</span>
                <span className="logo-char">I</span>
                <span className="logo-char">V</span>
                <span className="logo-char">Y</span>
                <span className="logo-char">A</span>
                <span className="logo-char">P</span>
                <span className="logo-char">R</span>
                <span className="logo-char">A</span>
                <span className="logo-char">K</span>
                <span className="logo-char">A</span>
                <span className="logo-char">S</span>
                <span className="logo-char">H</span>
            </div>
            <div className="logo-bottom-area">
                {isPlaying ? (
                    <div className="logo-equalizer">
                        <span className="eq-bar bar-1"></span>
                        <span className="eq-bar bar-2"></span>
                        <span className="eq-bar bar-3"></span>
                        <span className="eq-bar bar-4"></span>
                        <span className="eq-bar bar-5"></span>
                        <span className="eq-bar bar-6"></span>
                        <span className="eq-bar bar-7"></span>
                        <span className="eq-bar bar-8"></span>
                        <span className="eq-bar bar-9"></span>
                        <span className="eq-bar bar-10"></span>
                        <span className="eq-bar bar-11"></span>
                        <span className="eq-bar bar-12"></span>
                        <span className="eq-bar bar-13"></span>
                    </div>
                ) : (
                    <div className="logo-accent-line"></div>
                )}
            </div>
        </div>
    );
};

export default Logo;
