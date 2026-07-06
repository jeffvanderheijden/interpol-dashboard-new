import React from "react";
import TrainerCore from "../TrainerCore/TrainerCore";
import { LESSON as TerminalLesson } from "./_data/lesson";
import { useChallengeTracking } from "../../hooks/useChallengeTracking";
import "./TerminalTrainer.scss";

const TerminalTrainer = () => {
    const { complete } = useChallengeTracking("/terminal-ops");

    return (
        <TrainerCore
            lesson={TerminalLesson}
            className="trainer-core--terminal"
            onComplete={complete}
        />
    );
};

export default TerminalTrainer;
