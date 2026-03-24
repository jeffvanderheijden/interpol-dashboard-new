import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import globeImage from "./earth_bw.jpg";

function getViewport() {
    const isPortrait = window.innerHeight > window.innerWidth;
    const width = isPortrait
        ? window.innerWidth
        : Math.min(window.innerWidth * 0.92, 860);

    return {
        width,
        height: Math.round(window.innerHeight * (isPortrait ? 0.46 : 0.58)),
        isPortrait,
    };
}

const GlobeComp = ({ initialArcsData }) => {
    const globeEl = useRef(null);
    const [arcsData, setArcsData] = useState(initialArcsData);
    const [viewport, setViewport] = useState(() => getViewport());

    useEffect(() => {
        setArcsData(initialArcsData);
    }, [initialArcsData]);

    useEffect(() => {
        const handleResize = () => {
            setViewport(getViewport());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!globeEl.current) return;

        globeEl.current.pointOfView({
            lat: viewport.isPortrait ? 22 : 30,
            lng: viewport.isPortrait ? 10 : 18,
            altitude: viewport.isPortrait ? 2.2 : 1.85,
        });
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.45;
        globeEl.current.controls().enableZoom = false;
    }, [viewport.width, viewport.height, viewport.isPortrait, arcsData]);

    return (
        <div className="globe-comp">
            <Globe
                ref={globeEl}
                width={viewport.width}
                height={viewport.height}
                globeImageUrl={globeImage}
                atmosphereColor="#ADFF2F"
                atmosphereAltitude={0.18}
                backgroundColor="rgba(0,0,0,0)"
                arcsData={arcsData}
                arcColor="color"
                arcDashGap={(d) => 1 - (d.stroke - 0.1)}
                arcDashAnimateTime={() => 5000}
                arcStroke="stroke"
                arcAltitudeAutoScale={0.18}
                labelLat={(d) => d.startLat}
                labelLng={(d) => d.startLng}
                labelText={() => ""}
                labelSize={() => 0.01}
                labelDotRadius={() => 0.16}
                labelColor={() => "rgba(173, 255, 47, 0.9)"}
                labelResolution={2}
                hexBinPointWeight="stroke"
                hexAltitude={(d) => d.sumWeight * 0.12}
                hexBinResolution={3}
                hexBinMerge
                hexTopColor={() => "rgba(173,255,47,0.48)"}
                hexSideColor={() => "rgba(173,255,47,0.12)"}
                enablePointerInteraction={false}
            />
        </div>
    );
};

export default GlobeComp;
