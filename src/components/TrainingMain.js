import React from "react";
import "../styles/TrainingMain.css";
import "../styles/Navbar.css"
import "../styles/Header.css"
import "../styles/Footer.css"
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TrainingMain = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="training-container">
        <div className="athletes-box">
          <button className="athlete-btn"></button>
          <button className="athlete-btn"></button>
          <button className="athlete-btn"></button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingMain;
