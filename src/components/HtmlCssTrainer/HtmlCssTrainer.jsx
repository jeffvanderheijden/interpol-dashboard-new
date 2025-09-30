import React from "react";
import TrainerCore from "../TrainerCore/TrainerCore";
import { LESSON as HtmlCssLesson } from "./_data/lessons.js";

const HtmlCssTrainer = ({ onClose }) => {
    return <TrainerCore lesson={HtmlCssLesson} onClose={onClose} />;
};

export default HtmlCssTrainer;
