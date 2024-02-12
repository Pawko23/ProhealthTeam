import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/RehabMain.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import HumanModel from '../img/bones-muscles.png'
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";


const RehabMain = () => {

    const [fillColor, setFillColor] = useState('red')

    const handleClick = () => {
        setFillColor('green')
    }

    return (
        <>
            <Navbar />
            <Header 
                heroImage={TrainingChosenHero}
                title={'Rehabilitacja'}
            />
            <section className={styles['model-container']}>
                <svg width="400" height="600" viewBox="0 0 400 600">
                    <image href={HumanModel} x="0" y="0" width="400" height="600" className={styles['human-model']}></image>
                    <rect id="muscle1" x="15" y="0" width="20" height="20" fill={fillColor} onClick={handleClick} />
                </svg>
            </section>
            <Footer />
        </>
    )
}

export default RehabMain;