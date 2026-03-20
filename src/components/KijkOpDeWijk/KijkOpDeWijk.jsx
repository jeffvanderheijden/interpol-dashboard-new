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

const shuffledLocations = shuffle(locationsData);
const DISTANCE_THRESHOLD = 100;

export default function KijkOpDeWijk() {
    const [step, setStep] = React.useState(0);
    const [messages, setMessages] = React.useState([
        {
            sender: "hacker",
            text: "Volg de coordinaten. Zodra je dichtbij bent, krijg je de vraag."
        }
    ]);

    const [userLocation, setUserLocation] = React.useState(null);
    const questionSentRef = React.useRef(false);

    React.useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            pos => {
                setUserLocation({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                });
            },
            err => console.error(err),
            { enableHighAccuracy: true }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    React.useEffect(() => {
        if (step >= shuffledLocations.length) return;

        const location = shuffledLocations[step];

        setMessages(prev => [
            ...prev,
            { sender: "hacker", text: location.hint }
        ]);

        questionSentRef.current = false;

        // einde
        if (step === shuffledLocations.length - 1 && location.question.type === "end") {
            setMessages(prev => [
                ...prev,
                { sender: "hacker", text: location.question.text }
            ]);
            questionSentRef.current = true;
        }

    }, [step]);

    React.useEffect(() => {
        if (!userLocation) return;
        if (step >= shuffledLocations.length) return;
        if (questionSentRef.current) return;

        const location = shuffledLocations[step];

        const distance = getDistance(
            userLocation.lat,
            userLocation.lng,
            location.lat,
            location.lng
        );

        if (distance <= DISTANCE_THRESHOLD) {
            setMessages(prev => [
                ...prev,
                {
                    sender: "hacker",
                    text: location.question.type === "multiple"
                        ? `${location.question.text}\nOpties: ${location.question.options.join(", ")}`
                        : location.question.text
                }
            ]);

            questionSentRef.current = true;
        }

    }, [userLocation, step]);

    const handleSend = (input) => {
        const location = shuffledLocations[step];

        setMessages(prev => [...prev, { sender: "user", text: input }]);

        if (!questionSentRef.current) {
            setMessages(prev => [
                ...prev,
                { sender: "hacker", text: "Je bent nog niet dichtbij genoeg." }
            ]);
            return;
        }

        if (location.question.type === "end") {
            setStep(s => s + 1);
            return;
        }

        const correct =
            input.trim().toLowerCase() ===
            location.question.answer.trim().toLowerCase();

        if (correct) {
            setMessages(prev => [
                ...prev,
                { sender: "hacker", text: "✅ Correct!" }
            ]);

            setTimeout(() => {
                setStep(s => s + 1);
            }, 1000);

        } else {
            setMessages(prev => [
                ...prev,
                { sender: "hacker", text: "❌ Niet juist." }
            ]);
        }
    };

    return <ChatUI messages={messages} onSend={handleSend} />;
}