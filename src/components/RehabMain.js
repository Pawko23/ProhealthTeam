import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/RehabMain.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import HumanModel from '../img/bones-muscles.png'
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";


const RehabMain = () => {

    const [fillColor, setFillColor] = useState('transparent')
    const [lineCoordinates, setLineCoordinates] = useState(null)
    const [pathLine, setPathLine] = useState(null)

    const handleClick = (event) => {
        const circle = event.target
        const bbox = circle.getBBox()
        const centerX = bbox.x + bbox.width / 2
        const centerY = bbox.y + bbox.height / 2
        const endX = centerX + 100
        const endY = centerY
        const controlPointX = centerX + 50; // x coordinate for the control point (halfway between start and end)
        const controlPointY = centerY - 50; // y coordinate for the control point (45 degrees up)
        setLineCoordinates({ startX: centerX, startY: centerY, endX, endY })
        setPathLine(`M ${centerX},${centerY} L ${controlPointX},${controlPointY} L ${endX}, ${endY}`)
        // setFillColor('green')
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
                    <circle id="muscle1" cx="255" cy="115" r="7" fill={fillColor} onClick={handleClick} />
                    {lineCoordinates && (
                        <line 
                            x1={lineCoordinates.startX}
                            y1={lineCoordinates.startY}
                            x2={lineCoordinates.endX}
                            y2={lineCoordinates.endY}
                            stroke="black"
                        />
                    )}
                </svg>
            </section>
            <Footer />
        </>
    )
}

export default RehabMain;