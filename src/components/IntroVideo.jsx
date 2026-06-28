import { useEffect, useRef, useState } from 'react';
import './IntroVideo.css';

function IntroVideo({ onFinished }) {
    const videoRef = useRef(null);
    const [fading, setFading] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnd = () => {
            setFading(true);
            setTimeout(() => {
                setVisible(false);
                if (onFinished) onFinished();
            }, 800);
        };

        // Auto-play the video
        video.play().catch(() => {
            // If autoplay is blocked, go straight to portfolio
            handleEnd();
        });

        video.addEventListener('ended', handleEnd);

        // Safety timeout in case video stalls
        const safetyTimer = setTimeout(handleEnd, 20000);

        return () => {
            video.removeEventListener('ended', handleEnd);
            clearTimeout(safetyTimer);
        };
    }, [onFinished]);

    if (!visible) return null;

    return (
        <div className={`intro-overlay ${fading ? 'intro-fade-out' : ''}`}>
            <video
                ref={videoRef}
                className="intro-video"
                src="/welcome.mp4"
                muted
                playsInline
                preload="auto"
            />
            {/* Progress bar at bottom */}
            <div className="intro-progress" />
        </div>
    );
}

export default IntroVideo;
