/**
 * Capture een frame van de video en geef terug als base64 PNG
 */
export async function captureFromVideo(videoRef, canvasRef) {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return null;

    if (video.readyState < 2) {
        await new Promise((res) => {
            const onLoaded = () => {
                video.removeEventListener("loadeddata", onLoaded);
                res();
            };
            video.addEventListener("loadeddata", onLoaded);
        });
    }

    const w = video.videoWidth || 640;
    const h = video.videoHeight || 480;
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, w, h);
    return canvas.toDataURL("image/png");
}
