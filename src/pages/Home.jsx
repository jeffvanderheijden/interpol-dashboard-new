import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [videoWatched, setVideoWatched] = useState(false);

    useEffect(() => {
        // Check of de video eerder bekeken is
        const watched = localStorage.getItem('videoWatched');
        if (watched === 'true') {
            setVideoWatched(true);
        }
    }, []);

    const handleVideoEnd = () => {
        localStorage.setItem('videoWatched', 'true');
        navigate('/training');
    };

    const handleSkip = () => {
        navigate('/training');
    };

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Interpol Briefing</h1>

            <video
                ref={videoRef}
                width="800"
                controls
                autoPlay
                onEnded={handleVideoEnd}
                style={{ marginBottom: '1rem' }}
            >
                <source src="/videos/interpol-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {videoWatched && (
                <button onClick={handleSkip}>⏭ Overslaan</button>
            )}
        </div>
    );
}

export default Home;