import React from "react";
import TrainerCore from "../TrainerCore/TrainerCore";
import { LESSON as JavascriptLesson } from "./_data/lessons";
import "./JavascriptTrainer.scss";

const JavascriptTrainer = () => {
    return (
        <TrainerCore
            lesson={JavascriptLesson}
            className="trainer-core--javascript"
        />
    );
};

export default JavascriptTrainer;
