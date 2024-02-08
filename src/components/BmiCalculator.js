import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
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
        setBmi(Number(bmiResult.toFixed(2)));

        setCalculatorHeight('80%');
        console.log("Twoje BMI wynosi: ", bmiResult);
    }

    const isButtonDisabled = isNaN(parseFloat(height)) || isNaN(parseFloat(weight))

    const [userId, setUserId] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        setUserId(userId)
        console.log(userId)
    }, [])

    const saveBmi = async (e) => {
      if(!bmi) {
        alert('You need to calculate your BMI first')
        return
      }
      try {
          await axios.post('/bmicalculator', { userId, bmi })
          // navigate('/userprogress?rendered=true')
      } catch (error) {
          console.log(error);
      }
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
            {/* <label>Wiek: </label>
            <input type='number' value={age} onChange={handleAge}></input> */}
            <label>Wzrost: </label>
            <input type='number' value={height} onChange={handleHeight}></input>
            <label>Waga: </label>
            <input type='number' value={weight} onChange={handleWeight}></input>
            <button type='submit' disabled={isButtonDisabled}>Oblicz</button>
            {bmi && (
              <>
                <div className={CalcStyles['result-box']} style={{backgroundColor: resultColor}}>
                  <p>Result: {bmi}</p>
                  <p>{bmiMessage}</p>
                </div>
                <button onClick={saveBmi}>Zapisz</button>
              </>
            )}
          </form>
        </div>
      </div>
      <div className={CalcStyles['bmi-info-container']}>
        <div className={CalcStyles['bmi-info']}>
            <p>Mniejsze od 16: Wygłodzenie</p>
            <p>16 - 16.99: Wychudzenie</p>
            <p>17 - 18.4: Niedowaga</p>
            <p>18.5 - 24.99: Waga prawidłowa</p>
            <p>25 - 29.99: Nadwaga</p>
            <p>30 - 34.99: I stopień otyłości</p>
            <p>35 - 39.99: II stopień otyłości</p>
            <p>Powyżej 40: Otyłość skrajna</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BmiCalculator;
