import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import DietPageHero from '../img/diet.jpg';
import CalcStyles from '../styles/CalculatorStyles.module.css';

const BmiCalculator = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [calculatorHeight, setCalculatorHeight] = useState('75%');
    const [resultColor, setResultColor] = useState('')
    const [bmiMessage, setBmiMessage] = useState('')

    const handleAge = (event) => {
        setAge(event.target.value);
    }

    const handleHeight = (event) => {
        setHeight(event.target.value);
    }

    const handleWeight = (event) => {
        setWeight(event.target.value);
    }

    useEffect(() => {
      if(bmi!=null){
        if(bmi < 16) {
          setResultColor('#FF0000')
          setBmiMessage('Wygłodzenie')
        } 
        else if(bmi >= 16 && bmi < 17) {
          setResultColor('#FF9A00')
          setBmiMessage('Wychudzenie')
        }
        else if(bmi >= 17 && bmi < 18.5) {
          setResultColor('#E5C10D')
          setBmiMessage('Niedowaga')
        }
        else if(bmi >= 18.5 && bmi < 25) {
          setResultColor('#2BFF00')
          setBmiMessage('Waga prawidłowa')
        }
        else if(bmi >= 25 && bmi < 30) {
          setResultColor('#E5C10D')
          setBmiMessage('Nadwaga')
        }
        else if(bmi >= 30 && bmi < 35) {
          setResultColor('#FF9A00')
          setBmiMessage('I stopień otyłości')
        }
        else if(bmi >= 35 && bmi < 40) {
          setResultColor('#FF0000')
          setBmiMessage('II stopień otyłości')
        }
        else if(bmi > 40) {
          setResultColor('#FF0000')
          setBmiMessage('Otyłość skrajna')
        }
      }
    }, [bmi])


    const handleSubmit = (event) => {
        event.preventDefault()

        const heightToMeters = height / 100;
        const bmiResult = weight / (heightToMeters * heightToMeters);
        setBmi(bmiResult);

        setCalculatorHeight('80%');
        console.log("Twoje BMI wynosi: ", bmiResult);
    }


  return (
    <>
      <Navbar />
      <Header 
        heroImage={DietPageHero}
        title={'Kalkulator BMI'} />
      <div className={CalcStyles['calculator-container']}>
        <div className={CalcStyles['calculator-box']} style={{ height: calculatorHeight}}>
          <h3>Kalkulator BMI</h3>
          <form onSubmit={handleSubmit}>
            <label>Wiek: </label>
            <input type='number' value={age} onChange={handleAge}></input>
            <label>Wzrost: </label>
            <input type='number' value={height} onChange={handleHeight}></input>
            <label>Waga: </label>
            <input type='number' value={weight} onChange={handleWeight}></input>
            <button type='submit'>Oblicz</button>
            {bmi && (
              <div className={CalcStyles['result-box']} style={{backgroundColor: resultColor}}>
                <p>Result: {bmi}</p>
                <p>{bmiMessage}</p>
              </div>
            )}
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
