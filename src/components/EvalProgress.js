import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TrainingChosenHero from '../img/training-hero.jpg'
import { Graph } from "./UserProgress";

const EvalProgress = () => {
    return (
        <>
            <Navbar />
            <Header 
                heroImage={TrainingChosenHero}
            />
            <p>EVAL PROGRESS</p>
            <Footer />
        </>
    )
}

export default EvalProgress;