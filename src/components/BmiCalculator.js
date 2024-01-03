import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DietPageHero from '../img/diet.jpg';
import CalcStyles from '../styles/CalculatorStyles.module.css';

const BmiCalculator = () => {
    const [age, setAge] = useState(1);
    const [height, setHeight] = useState(1);
    const [weight, setWeight] = useState(1);
    const [bmi, setBmi] = useState(null);

    const handleAge = (event) => {
        setAge(event.target.value);
    }

    const handleHeight = (event) => {
        setHeight(event.target.value);
    }

    const handleWeight = (event) => {
        setWeight(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const heightToMeters = height / 100;
        const bmiResult = weight / (heightToMeters * heightToMeters);
        setBmi(bmiResult);
        console.log("Twoje BMI wynosi: ", bmiResult);
    }


  return (
    <>
      <Navbar />
      <Header 
        heroImage={DietPageHero}
        title={'Kalkulator BMI'} />
      <div className={CalcStyles['calculator-container']}>
        <div className={CalcStyles['calculator-box']}>
          <h3>Kalkulator BMI</h3>
          <form onSubmit={handleSubmit}>
            <label>Wiek: </label>
            <input type='number' value={age} onChange={handleAge}></input>
            <label>Wzrost: </label>
            <input type='number' value={height} onChange={handleHeight}></input>
            <label>Waga: </label>
            <input type='number' value={weight} onChange={handleWeight}></input>
            <button type='submit'>Oblicz</button>
          </form>
        </div>
      </div>
      <div className={CalcStyles['bmi-info-container']}>
        <div className={CalcStyles['bmi-info']}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BmiCalculator;
