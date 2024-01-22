import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TrainingChosenHero from '../img/training-hero.jpg'
import { Graph } from "./UserProgress";

const StaminaProgress = () => {
    return (
        <>
            <Navbar />
            <Header 
                heroImage={TrainingChosenHero}
            />
            <p>STAMINA PROGRESS</p>
            <Footer />
        </>
    )
}

export default StaminaProgress;