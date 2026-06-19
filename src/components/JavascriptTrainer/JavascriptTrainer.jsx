import React from "react";
import TrainerCore from "../TrainerCore/TrainerCore";
import { LESSON as JavascriptLesson } from "./_data/lessons";
import { useChallengeTracking } from "../../hooks/useChallengeTracking";
import "./JavascriptTrainer.scss";

const JavascriptTrainer = () => {
    const { complete } = useChallengeTracking("/javascript");

    return (
        <TrainerCore
            lesson={JavascriptLesson}
            className="trainer-core--javascript"
            onComplete={complete}
        />
    );
};

export default JavascriptTrainer;
