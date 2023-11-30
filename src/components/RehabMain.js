import React from "react";
import RehabStyles from '../styles/RehabMain.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import Navbar from "./Navbar";
import Header from "./Header";


const RehabMain = () => {
    return (
        <>
            <Navbar />
            <Header 
                heroImage={TrainingChosenHero}
                title={'Rehabilitation'}
            />
            <div className={RehabStyles.container}>
                <div className={RehabStyles['human-box']}></div>
                <div className={RehabStyles['muscle-info']}></div>
            </div>
            <div className={RehabStyles['professional-box']}></div>
        </>
    )
}

export default RehabMain;