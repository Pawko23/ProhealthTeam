import React, { useState, useEffect } from 'react'
import Link from 'react-router-dom'
import ProgressStyles from '../styles/UserProgress.module.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import DietPageHero from '../img/diet.jpg';

const Weight = () => {
    return (
        <>
            <div className={ProgressStyles['weight-container']}>
                <div className={ProgressStyles['data-box']}>
                    <label>Ustaw swój cel</label>
                    <input type='number'></input>
                    <label>Wprowadź obecną wagę:</label>
                    <input type='number'></input>
                </div>
                <div className={ProgressStyles['graph-box']}></div>
                <button>Zapisz dane</button>
            </div>
        </>
    )
}

const Kcal = () => {
    return (
        <>
            <div className={ProgressStyles['kcal-container']}>
                <div className={ProgressStyles['intake-box']}>
                    <p>Oblicz swoje zapotrzebowanie</p>
                    <label>Wiek</label>
                    <input type='number'></input>
                    <label>Waga</label>
                    <input type='number'></input>
                    <label>Wzrost</label>
                    <input type='number'></input>
                    <label>Kobieta</label>
                    <input type='radio'></input>
                    <label>Mężczyzna</label>
                    <input type='radio'></input>
                    <p>Aktywność</p>
                    <label>Niska( znikoma aktywność fizyczna )</label>
                    <input type='checkbox'></input>
                    <label>Średnia( 1-3 treningi w tygodniu )</label>
                    <input type='checkbox'></input>
                    <label>Wysoka( więcej niż 3 treningi w tygodniu )</label>
                    <input type='checkbox'></input>
                    <button type='submit'>Oblicz</button>
                </div>
                <div className={ProgressStyles['intake-results']}>
                    <label>Aby schudnąć: </label>
                    <p>2300</p>
                    <label>Aby utrzymać: </label>
                    <p>2500</p>
                    <label>Aby przytyć: </label>
                    <p>2800</p>
                </div>
            </div>
        </>
    )
}



const UserProgress = () => {
    
    const [option, setOption] = useState(null)

    const selectOption = (option) => {
        setOption(option)
    }
    
    return (
        <>
            <Navbar />
            <Header 
                heroImage={DietPageHero}
            />
            <div className={ProgressStyles.container}>
                <div className={ProgressStyles['info-box']}>
                    <p>Wprowadzaj informacje aby śledzić swój progres</p>
                </div>
                <div className={ProgressStyles['option-box']}>
                    <button onClick={() => selectOption('weight')}>Waga</button>
                    <button onClick={() => selectOption('kcal')}>Kalorie</button>
                </div>

                {option === 'weight' && <Weight />}
                {option === 'kcal' && <Kcal />}

            </div>
            <Footer />
        </>
    )
}

export default UserProgress