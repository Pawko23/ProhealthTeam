import React, { useState } from "react";
import styles from '../styles/RehabMain.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import HumanModel from '../img/bones-muscles.png'
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";


const RehabMain = () => {

    const [fillColor, setFillColor] = useState('red')
    const [lineCoordinates, setLineCoordinates] = useState([])
    // const [pathLine, setPathLine] = useState(null)

    const handleClick = (event, muscle) => {
        const circle = event.target
        const bbox = circle.getBBox()
        const centerX = bbox.x + bbox.width / 2
        const centerY = bbox.y + bbox.height / 2
        const endX = centerX + 100
        const endY = centerY
        const controlPointX = centerX + 50; // x coordinate for the control point (halfway between start and end)
        const controlPointY = centerY - 50; // y coordinate for the control point (45 degrees up)

        const existingIndex = lineCoordinates.findIndex(coord => coord.muscle === muscle)
        if(existingIndex !== -1) {
            setLineCoordinates(prevCoordinates => prevCoordinates.filter((_, index) => index!== existingIndex))
        } else {
            setLineCoordinates(prevCoordinates => [...prevCoordinates, { startX: centerX, startY: centerY, endX, endY, muscle }])
        }
        
        // setPathLine(`M ${centerX},${centerY} L ${controlPointX},${controlPointY} L ${endX}, ${endY}`)
        console.log(muscle);
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
                    <circle id="naramienny" cx="255" cy="115" r="7" fill={fillColor} onClick={(event) => handleClick(event, 'naramienny')} />
                    <circle id="naramienny" cx="260" cy="160" r="7" fill={fillColor} onClick={(event) => handleClick(event, 'biceps')} />
                    {lineCoordinates.map((coords, index) => (
                            <line 
                                key={index}
                                x1={coords.startX}
                                y1={coords.startY}
                                x2={coords.endX}
                                y2={coords.endY}
                                stroke="black"
                            />
                    ))}
                </svg>
            </section>
            <Footer />
        </>
    )
}

export default RehabMain;