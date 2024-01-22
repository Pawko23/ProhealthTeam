import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import chosenStyles from '../styles/TrainingChosen.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import { Graph } from "./UserProgress";

const JumpProgress = () => {
    return (
        <>
            <Navbar />
            <Header 
                heroImage={TrainingChosenHero}
            />
            <p>JUMP PROGRESS</p>
            <Footer />
        </>
    )
}

export default JumpProgress;