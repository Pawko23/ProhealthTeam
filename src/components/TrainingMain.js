import React from "react";
import TrainingMainStyles from "../styles/TrainingMain.module.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TrainingPageHero from '../img/training-hero.jpg'

const TrainingMain = () => {
  return (
    <>
      <Navbar />
      <Header 
        heroImage={TrainingPageHero}
        gradient={'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(86, 76, 76, 1) 100%)'}
        title={'Train'}
      />
      <div className={TrainingMainStyles['training-container']}>
      <h3>Wybierz:</h3>
        <div className={TrainingMainStyles['athletes-box']}>
            <button className={TrainingMainStyles['athlete-btn']}>Piłkarz</button>
            <button className={TrainingMainStyles['athlete-btn']}>Siatkarz</button>
            <button className={TrainingMainStyles['athlete-btn']}>Koszykarz</button>
        </div>
        <h3>Szukasz przykładowych planów na siłownię? Sprawdź nasze przykładowe plany</h3>
        <div className={TrainingMainStyles['gym-plans-box']}>
            <button className={TrainingMainStyles['gym-plan-btn']}>Sprawdź</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingMain;
