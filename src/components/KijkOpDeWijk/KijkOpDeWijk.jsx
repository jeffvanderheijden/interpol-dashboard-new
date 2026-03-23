import React from "react";
import locationsData from "./_data/locations.json";
import ChatUI from "./chat/ChatUI";

function getDistance(lat1, lng1, lat2, lng2) {
    function toRad(x) { return x * Math.PI / 180; }
    const R = 6371e3;

    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) ** 2;

    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function formatCoordinate(value) {
    if (typeof value !== "number") {
        return "onbekend";
    }

    return value.toFixed(6);
}

function formatDistance(distance) {
    if (typeof distance !== "number") {
        return "onbekend";
    }

    if (distance >= 1000) {
        return `${(distance / 1000).toFixed(2)} km`;
    }

    return `${Math.round(distance)} m`;
}

function formatAccuracy(accuracy) {
    if (typeof accuracy !== "number") {
        return "onbekend";
    }

    return `${Math.round(accuracy)} m`;
}

function formatTimestamp(value) {
    if (!value) {
        return "nog geen fix";
    }

    return new Intl.DateTimeFormat("nl-NL", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(value);
}

function buildGoogleMapsUrl(lat, lng) {
    return `https://www.google.com/maps?q=${lat},${lng}`;
}

const shuffledLocations = shuffle(locationsData);
const DISTANCE_THRESHOLD = 100;

export default function KijkOpDeWijk() {
    const [step, setStep] = React.useState(0);
    const [debugOpen, setDebugOpen] = React.useState(true);
    const [feedback, setFeedback] = React.useState("");
    const [messages, setMessages] = React.useState([
        {
            sender: "hacker",
            text: "Volg de coordinaten. Zodra je dichtbij bent, krijg je de vraag."
        }
    ]);
    const [userLocation, setUserLocation] = React.useState(null);
    const [locationError, setLocationError] = React.useState("");
    const questionSentRef = React.useRef(false);

    const activeLocation = step < shuffledLocations.length
        ? shuffledLocations[step]
        : null;

    const locationEntries = React.useMemo(() => {
        return shuffledLocations.map((location, index) => {
            const distance = userLocation
                ? getDistance(
                    userLocation.lat,
                    userLocation.lng,
                    location.lat,
                    location.lng
                )
                : null;

            return {
                ...location,
                index,
                distance,
                isActive: index === step
            };
        });
    }, [step, userLocation]);

    const distanceToActive = activeLocation && userLocation
        ? getDistance(
            userLocation.lat,
            userLocation.lng,
            activeLocation.lat,
            activeLocation.lng
        )
        : null;

    const nearestLocation = React.useMemo(() => {
        if (!locationEntries.length || !userLocation) {
            return null;
        }

        return locationEntries.reduce((nearest, entry) => {
            if (nearest === null) {
                return entry;
            }

            return entry.distance < nearest.distance ? entry : nearest;
        }, null);
    }, [locationEntries, userLocation]);

    React.useEffect(() => {
        if (!("geolocation" in navigator)) {
            setLocationError("Geolocatie wordt niet ondersteund op dit apparaat.");
            return undefined;
        }

        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                setLocationError("");
                setUserLocation({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    accuracy: pos.coords.accuracy,
                    timestamp: pos.timestamp
                });
            },
            (err) => {
                setLocationError(err.message || "Locatie ophalen mislukt.");
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 15000
            }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    React.useEffect(() => {
        if (step >= shuffledLocations.length) {
            return;
        }

        const location = shuffledLocations[step];

        setMessages((prev) => [
            ...prev,
            { sender: "hacker", text: location.hint }
        ]);

        questionSentRef.current = false;

        if (step === shuffledLocations.length - 1 && location.question.type === "end") {
            setMessages((prev) => [
                ...prev,
                { sender: "hacker", text: location.question.text }
            ]);
            questionSentRef.current = true;
        }
    }, [step]);

    React.useEffect(() => {
        if (!userLocation || !activeLocation || questionSentRef.current) {
            return;
        }

        if (distanceToActive <= DISTANCE_THRESHOLD) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "hacker",
                    text: activeLocation.question.type === "multiple"
                        ? `${activeLocation.question.text}\nOpties: ${activeLocation.question.options.join(", ")}`
                        : activeLocation.question.text
                }
            ]);

            questionSentRef.current = true;
        }
    }, [activeLocation, distanceToActive, userLocation]);

    const handleSend = (input) => {
        if (!activeLocation) {
            return;
        }

        setMessages((prev) => [...prev, { sender: "user", text: input }]);

        if (!questionSentRef.current) {
            setMessages((prev) => [
                ...prev,
                { sender: "hacker", text: "Je bent nog niet dichtbij genoeg." }
            ]);
            return;
        }

        if (activeLocation.question.type === "end") {
            setStep((currentStep) => currentStep + 1);
            return;
        }

        const correct =
            input.trim().toLowerCase() ===
            activeLocation.question.answer.trim().toLowerCase();

        if (correct) {
            setMessages((prev) => [
                ...prev,
                { sender: "hacker", text: "✅ Correct!" }
            ]);

            setTimeout(() => {
                setStep((currentStep) => currentStep + 1);
            }, 1000);
        } else {
            setMessages((prev) => [
                ...prev,
                { sender: "hacker", text: "❌ Niet juist." }
            ]);
        }
    };

    const handleCopyCoordinates = async (location) => {
        const coordinatePair = `${location.lat}, ${location.lng}`;

        try {
            await navigator.clipboard.writeText(coordinatePair);
            setFeedback(`Coordinaten van ${location.title} gekopieerd.`);
        } catch {
            setFeedback(`Kopieren mislukt. Gebruik handmatig: ${coordinatePair}`);
        }
    };

    const debugHeader = (
        <section className="route-debugger">
            <button
                type="button"
                className="route-debugger__toggle"
                onClick={() => setDebugOpen((open) => !open)}
            >
                {debugOpen ? "Verberg coordinate debugger" : "Toon coordinate debugger"}
            </button>

            {debugOpen ? (
                <div className="route-debugger__panel">
                    <div className="route-debugger__summary">
                        <div className="route-debugger__card">
                            <span className="route-debugger__label">Actieve stop</span>
                            <strong>
                                {activeLocation
                                    ? `${step + 1}/${shuffledLocations.length} · ${activeLocation.title}`
                                    : "Route afgerond"}
                            </strong>
                            <span>
                                Trigger op {DISTANCE_THRESHOLD} m
                            </span>
                        </div>

                        <div className="route-debugger__card">
                            <span className="route-debugger__label">Jouw GPS</span>
                            <strong>
                                {userLocation
                                    ? `${formatCoordinate(userLocation.lat)}, ${formatCoordinate(userLocation.lng)}`
                                    : "Nog geen positie"}
                            </strong>
                            <span>
                                Nauwkeurigheid: {formatAccuracy(userLocation?.accuracy)}
                            </span>
                            <span>
                                Laatste update: {formatTimestamp(userLocation?.timestamp)}
                            </span>
                        </div>

                        <div className="route-debugger__card">
                            <span className="route-debugger__label">Afstand</span>
                            <strong>{formatDistance(distanceToActive)}</strong>
                            <span>
                                Dichtstbij: {nearestLocation
                                    ? `${nearestLocation.title} (${formatDistance(nearestLocation.distance)})`
                                    : "nog onbekend"}
                            </span>
                        </div>
                    </div>

                    {locationError ? (
                        <p className="route-debugger__status route-debugger__status--error">
                            {locationError}
                        </p>
                    ) : null}

                    {feedback ? (
                        <p className="route-debugger__status route-debugger__status--info">
                            {feedback}
                        </p>
                    ) : null}

                    <div className="route-debugger__route-note">
                        Routevolgorde in deze sessie:
                        <strong> willekeurig geshuffeld</strong>.
                    </div>

                    <div className="route-debugger__list">
                        {locationEntries.map((location) => (
                            <article
                                key={location.id}
                                className={`route-debugger__item${location.isActive ? " is-active" : ""}`}
                            >
                                <div className="route-debugger__item-main">
                                    <div className="route-debugger__item-title">
                                        <strong>{location.index + 1}. {location.title}</strong>
                                        {location.isActive ? (
                                            <span className="route-debugger__badge">Actief</span>
                                        ) : null}
                                        {nearestLocation?.id === location.id ? (
                                            <span className="route-debugger__badge route-debugger__badge--muted">
                                                Dichtstbij
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className="route-debugger__meta">
                                        <span>{formatCoordinate(location.lat)}, {formatCoordinate(location.lng)}</span>
                                        <span>Afstand: {formatDistance(location.distance)}</span>
                                    </div>
                                </div>

                                <div className="route-debugger__actions">
                                    <button
                                        type="button"
                                        className="route-debugger__action"
                                        onClick={() => handleCopyCoordinates(location)}
                                    >
                                        Kopieer
                                    </button>
                                    <a
                                        className="route-debugger__action route-debugger__action--link"
                                        href={buildGoogleMapsUrl(location.lat, location.lng)}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Open Maps
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            ) : null}
        </section>
    );

    return <ChatUI messages={messages} onSend={handleSend} header={debugHeader} />;
}
