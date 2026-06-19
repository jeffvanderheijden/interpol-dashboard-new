import React from "react";
import TrainerCore from "../TrainerCore/TrainerCore";
import { LESSON as HtmlCssLesson } from "./_data/lessons";
import { useChallengeTracking } from "../../hooks/useChallengeTracking";
import "./HtmlCssTrainer.scss";

const HtmlCssTrainer = () => {
    const { complete } = useChallengeTracking("/html-css");

    return (
        <TrainerCore
            lesson={HtmlCssLesson}
            className="trainer-core--htmlcss"
            onComplete={complete}
        />
    );
};

export default HtmlCssTrainer;
