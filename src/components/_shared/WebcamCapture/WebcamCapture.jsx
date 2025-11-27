import { useEffect, useRef, useState } from "react";
import { captureFromVideo } from "../../Desktop/_helpers/newTeamHelpers";
import "./WebcamCapture.scss";

export default function WebcamCapture({ onCapture, onCancel }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        async function start() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "user" },
                    audio: false
                });

                if (cancelled) {
                    stream.getTracks().forEach(t => t.stop());
                    return;
                }

                streamRef.current = stream;

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.muted = true;
                    videoRef.current.playsInline = true;

                    await new Promise((resolve) => {
                        videoRef.current.onloadedmetadata = resolve;
                    });

                    await videoRef.current.play().catch(() => { });
                }
            } catch (err) {
                console.error(err);
                setError("Camera niet beschikbaar.");
            }
        }

        start();

        return () => {
            cancelled = true;
            if (streamRef.current)
                streamRef.current.getTracks().forEach(t => t.stop());
        };
    }, []);

    const handleCapture = async () => {
        const dataUrl = await captureFromVideo(videoRef, canvasRef);
        onCapture(dataUrl);
    };

    return (
        <div className="webcam-capture">
            {error && <div className="error">{error}</div>}

            <video ref={videoRef} autoPlay playsInline className="webcam-video" />

            <canvas ref={canvasRef} className="webcam-canvas" />

            <div className="webcam-buttons">
                <button onClick={handleCapture}>Foto maken</button>
                <button onClick={onCancel}>Annuleren</button>
            </div>
        </div>
    );
}
