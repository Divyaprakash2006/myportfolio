import { useState, useEffect, useRef } from 'react';
import './BGMPlayer.css';

const BGMPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize Audio object
        const audio = new Audio('/sounddelicious-portfolio-harmony-221983.mp3');
        audio.loop = true;
        audio.volume = 0.25; // Set comfortable background ambient volume
        audioRef.current = audio;

        // Function to attempt playing audio
        const attemptPlay = () => {
            if (!audioRef.current) return;
            
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    removeInteractionListeners();
                })
                .catch((error) => {
                    setIsPlaying(false);
                });
        };

        // Event listener for the first interaction on the document
        const handleFirstInteraction = () => {
            attemptPlay();
        };

        const removeInteractionListeners = () => {
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
            document.removeEventListener('scroll', handleFirstInteraction);
        };

        // 1. Try to autoplay immediately
        attemptPlay();

        // 2. Set up event listeners for first interaction if autoplay is blocked
        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('keydown', handleFirstInteraction);
        document.addEventListener('touchstart', handleFirstInteraction);
        document.addEventListener('scroll', handleFirstInteraction);

        // Cleanup on unmount
        return () => {
            removeInteractionListeners();
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Dispatch state change event to sync with Logo
    useEffect(() => {
        const event = new CustomEvent('bgm-state-change', { detail: { isPlaying } });
        window.dispatchEvent(event);
    }, [isPlaying]);

    // Listen for custom events to toggle or request state
    useEffect(() => {
        const handleToggleBGM = () => {
            if (!audioRef.current) return;

            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((err) => {
                        console.error('Play request failed:', err);
                    });
            }
        };

        const handleRequestState = () => {
            const event = new CustomEvent('bgm-state-change', { detail: { isPlaying } });
            window.dispatchEvent(event);
        };

        window.addEventListener('toggle-bgm', handleToggleBGM);
        window.addEventListener('request-bgm-state', handleRequestState);

        return () => {
            window.removeEventListener('toggle-bgm', handleToggleBGM);
            window.removeEventListener('request-bgm-state', handleRequestState);
        };
    }, [isPlaying]);

    return null; // Purely functional component, UI is now handled in the Logo component
};

export default BGMPlayer;
