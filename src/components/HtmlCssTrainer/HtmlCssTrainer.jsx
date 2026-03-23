import React from "react";
import TrainerCore from "../TrainerCore/TrainerCore";
import { LESSON as HtmlCssLesson } from "./_data/lessons";
import "./HtmlCssTrainer.scss";

const HtmlCssTrainer = () => {
    return (
        <TrainerCore
            lesson={HtmlCssLesson}
            className="trainer-core--htmlcss"
        />
    );
};

export default HtmlCssTrainer;
