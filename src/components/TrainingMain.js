import React from "react";
import TrainingMainStyles from "../styles/TrainingMain.module.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TrainingMain = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className={TrainingMainStyles['training-container']}>
      <h3>Wybierz:</h3>
        <div className={TrainingMainStyles['athletes-box']}>
            <button className={TrainingMainStyles['athlete-btn']}>Piłkarz</button>
            <button className={TrainingMainStyles['athlete-btn']}>Siatkarz</button>
            <button className={TrainingMainStyles['athlete-btn']}>Koszykarz</button>
        </div>
        <h3>Szukasz przykładowych planów na siłownię? Sprawdź nasze:</h3>
        <div className={TrainingMainStyles['gym-plans-box']}>
            <button className={TrainingMainStyles['gym-plan-btn']}>FBW</button>
            <button className={TrainingMainStyles['gym-plan-btn']}>Split</button>
            <button className={TrainingMainStyles['gym-plan-btn']}>Push & Pull & Legs</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingMain;
