import { useNavigate } from "react-router-dom";
import { useChallengeAccess } from "../../../ProtectedRoute/_context/ChallengeAccessContext";
import "./ChallengesApp.scss";

const ChallengesApp = () => {
    const navigate = useNavigate();
    const { challenges, loading } = useChallengeAccess();

    if (loading) {
        return <div className="challenges-app">Challenges laden…</div>;
    }

    return (
        <div className="challenges-app">
            <div className="challenges-app__header">
                <h2>Beschikbare challenges</h2>
                <p>
                    Alleen de onderdelen die je docent voor jouw klas heeft
                    aangezet, zijn hier zichtbaar.
                </p>
            </div>

            {challenges.length === 0 ? (
                <div className="challenges-app__empty">
                    Er zijn nog geen challenges opengezet voor jouw klas.
                </div>
            ) : (
                <div className="challenges-app__list">
                    {challenges.map((challenge) => (
                        <button
                            key={challenge.id}
                            type="button"
                            className="challenges-app__card"
                            onClick={() => navigate(challenge.route)}
                        >
                            <span className="challenges-app__eyebrow">
                                {challenge.component || "Challenge"}
                            </span>
                            <strong>{challenge.title}</strong>
                            <span className="challenges-app__link">
                                Open onderdeel
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChallengesApp;
