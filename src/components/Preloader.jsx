import React, { useState, useEffect } from 'react';
import './Preloader.css';

const STATUS_TEXTS = [
    'INITIALIZING SYSTEM INTERFACES...',
    'ESTABLISHING ENCRYPTED CONNECTION...',
    'LOADING GRAPHICS AND SHADERS...',
    'OPTIMIZING DYNAMIC MODULES...',
    'SYSTEM ONLINE. WELCOME.'
];

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    // Skip preloader if already seen in this session
    useEffect(() => {
        const hasSeen = sessionStorage.getItem('hasSeenPreloader');
        if (hasSeen === 'true') {
            onComplete();
        }
    }, [onComplete]);

    // Handle progress increments
    useEffect(() => {
        const hasSeen = sessionStorage.getItem('hasSeenPreloader');
        if (hasSeen === 'true') return;

        let currentProgress = 0;
        const interval = setInterval(() => {
            // Random increments to simulate real loading
            const increment = Math.floor(Math.random() * 8) + 2; 
            currentProgress = Math.min(currentProgress + increment, 100);
            setProgress(currentProgress);

            // Update status text based on progress
            if (currentProgress < 25) {
                setStatusIndex(0);
            } else if (currentProgress < 50) {
                setStatusIndex(1);
            } else if (currentProgress < 75) {
                setStatusIndex(2);
            } else if (currentProgress < 95) {
                setStatusIndex(3);
            } else {
                setStatusIndex(4);
            }

            if (currentProgress >= 100) {
                clearInterval(interval);
                // Wait briefly before starting exit animation
                setTimeout(() => {
                    setIsExiting(true);
                    // Wait for exit CSS transition to finish before unmounting
                    setTimeout(() => {
                        sessionStorage.setItem('hasSeenPreloader', 'true');
                        onComplete();
                    }, 800); // matches the CSS slide-up/fade animation duration
                }, 500);
            }
        }, 80 + Math.random() * 60); // dynamic timing

        return () => clearInterval(interval);
    }, [onComplete]);

    const hasSeen = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeen === 'true') return null;

    return (
        <div className={`preloader-overlay ${isExiting ? 'exit' : ''}`}>
            {/* Background elements */}
            <div className="preloader-grid"></div>
            <div className="preloader-glow-orb-1"></div>
            <div className="preloader-glow-orb-2"></div>

            <div className="preloader-content">
                {/* Tech circular HUD */}
                <div className="hud-container">
                    <svg className="hud-circle svg-outer" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" stroke="rgba(0, 217, 255, 0.15)" strokeWidth="1" fill="none" />
                        <circle 
                            cx="50" 
                            cy="50" 
                            r="46" 
                            stroke="#00adb5" 
                            strokeWidth="2" 
                            fill="none" 
                            strokeDasharray="40 180" 
                            strokeLinecap="round"
                        />
                        <circle 
                            cx="50" 
                            cy="50" 
                            r="46" 
                            stroke="#00e5ff" 
                            strokeWidth="1.5" 
                            fill="none" 
                            strokeDasharray="80 140" 
                            strokeDashoffset="110"
                            strokeLinecap="round"
                        />
                    </svg>
                    <svg className="hud-circle svg-inner" viewBox="0 0 100 100">
                        <circle 
                            cx="50" 
                            cy="50" 
                            r="38" 
                            stroke="rgba(147, 51, 234, 0.2)" 
                            strokeWidth="1" 
                            fill="none" 
                        />
                        <circle 
                            cx="50" 
                            cy="50" 
                            r="38" 
                            stroke="#9333ea" 
                            strokeWidth="2.5" 
                            fill="none" 
                            strokeDasharray="120 100" 
                            strokeDashoffset="45"
                        />
                    </svg>
                    <div className="hud-center">
                        <div className="hud-logo-hexagon">
                            <span className="logo-initial">DP</span>
                        </div>
                    </div>
                </div>

                {/* Brand Name */}
                <div className="preloader-brand">
                    <span className="preloader-title">DIVYAPRAKASH</span>
                    <span className="preloader-subtitle">PORTFOLIO</span>
                </div>

                {/* Progress bar and metrics */}
                <div className="preloader-progress-container">
                    <div className="progress-metrics">
                        <span className="status-label">{STATUS_TEXTS[statusIndex]}</span>
                        <span className="percentage-number">{progress}%</span>
                    </div>
                    <div className="progress-bar-track">
                        <div 
                            className="progress-bar-fill" 
                            style={{ width: `${progress}%` }}
                        >
                            <div className="progress-bar-glow"></div>
                        </div>
                    </div>
                </div>

                {/* Tech specs footer */}
                <div className="preloader-footer">
                    <div className="footer-spec">
                        <span className="spec-dot"></span>
                        <span>SYSTEM: READY</span>
                    </div>
                    <div className="footer-spec">
                        <span>EST. 2026</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
