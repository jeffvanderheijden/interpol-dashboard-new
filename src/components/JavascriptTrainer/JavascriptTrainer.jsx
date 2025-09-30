import React from "react";
import TrainerCore from "../TrainerCore/TrainerCore";
import { LESSON as JavascriptLesson } from "./_data/lessons.js";

const JavascriptTrainer = ({ onClose }) => {
    return <TrainerCore lesson={JavascriptLesson} onClose={onClose} />;
};

export default JavascriptTrainer;
