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
      <div className={TrainingMainStyles.trainingContainer}>
      <h3>Wybierz:</h3>
        <div className={TrainingMainStyles.athletesBox}>
            <button className={TrainingMainStyles.athleteBtn}>Piłkarz</button>
            <button className={TrainingMainStyles.athleteBtn}>Siatkarz</button>
            <button className={TrainingMainStyles.athleteBtn}>Koszykarz</button>
        </div>
        <h3>Szukasz przykładowych planów na siłownię? Sprawdź nasze:</h3>
        <div className={TrainingMainStyles.gymPlansBox}>
            <button className={TrainingMainStyles.gymPlanBtn}>FBW</button>
            <button className={TrainingMainStyles.gymPlanBtn}>Split</button>
            <button className={TrainingMainStyles.gymPlanBtn}>Push & Pull & Legs</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingMain;
