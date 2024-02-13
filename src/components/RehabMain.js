import React, { useState } from "react";
import styles from '../styles/RehabMain.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import HumanModel from '../img/bones-muscles.png'
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";


const RehabMain = () => {

    const [lineCoordinates, setLineCoordinates] = useState([])
    const [muscleGuide, setMuscleGuide] = useState('')
    // const [pathLine, setPathLine] = useState(null)

    const musclesData = {
        'Mięsień naramienny': 'Masaż mięśnia naramiennego',
        'biceps': 'Masaż bicepsu',
    }

    const handleMuscle = (event, muscle) => {
        const circle = event.target
        const bbox = circle.getBBox()
        const centerX = bbox.x + bbox.width / 2
        const centerY = bbox.y + bbox.height / 2
        const endX = centerX - 100
        const endY = centerY
        const controlPointX = centerX + 50; // x coordinate for the control point (halfway between start and end)
        const controlPointY = centerY - 50; // y coordinate for the control point (45 degrees up)

        const existingIndex = lineCoordinates.findIndex(coord => coord.muscle === muscle)
        if(existingIndex !== -1) {
            setLineCoordinates(prevCoordinates => prevCoordinates.filter((_, index) => index!== existingIndex))
        } else {
            setLineCoordinates(prevCoordinates => [...prevCoordinates, { startX: centerX, startY: centerY, endX, endY, muscle }])
        }
        setMuscleGuide(musclesData.muscle)
        // setPathLine(`M ${centerX},${centerY} L ${controlPointX},${controlPointY} L ${endX}, ${endY}`)
        console.log(muscle);
        // setFillColor('green')
    }

    // const handleBone = (event, bone) => {
    //     const circle = event.target
    //     const bbox = circle.getBBox()
    //     const centerX = bbox.x + bbox.width / 2
    //     const centerY = bbox.y + bbox.height / 2
    //     const endX = centerX + 100
    //     const endY = centerY
    //     const controlPointX = centerX + 50; // x coordinate for the control point (halfway between start and end)
    //     const controlPointY = centerY - 50; // y coordinate for the control point (45 degrees up)

    //     const existingIndex = lineCoordinates.findIndex(coord => coord.muscle === muscle)
    //     if(existingIndex !== -1) {
    //         setLineCoordinates(prevCoordinates => prevCoordinates.filter((_, index) => index!== existingIndex))
    //     } else {
    //         setLineCoordinates(prevCoordinates => [...prevCoordinates, { startX: centerX, startY: centerY, endX, endY, muscle }])
    //     }
    //     setMuscleGuide(musclesData.muscle)
    //     // setPathLine(`M ${centerX},${centerY} L ${controlPointX},${controlPointY} L ${endX}, ${endY}`)
    //     console.log(muscle);
    //     // setFillColor('green')
    // }

    return (
        <>
            <Navbar />
            <Header 
                heroImage={TrainingChosenHero}
                title={'Rehabilitacja'}
            />
            <section className={styles['model-container']}>
                <svg viewBox="0 0 400 600">
                    <image href={HumanModel} x="0" y="0" width="400" height="600" className={styles['human-model']}></image>
                    <circle id="naramienny" cx="210" cy="85" r="6" fill='transparent' onClick={(event) => handleMuscle(event, 'Mostkowo-obojczykowo-sutkowy')} />
                    <circle id="naramienny" cx="230" cy="97" r="6" fill='transparent' onClick={(event) => handleMuscle(event, 'Czworoboczny')} />
                    <circle id="naramienny" cx="255" cy="115" r="7" fill='transparent' onClick={(event) => handleMuscle(event, 'Naramienny')} />
                    <circle id="naramienny" cx="225" cy="135" r="7" fill='transparent' onClick={(event) => handleMuscle(event, 'Piersiowy większy')} />
                    <circle id="naramienny" cx="258" cy="165" r="7" fill='transparent' onClick={(event) => handleMuscle(event, 'Biceps')} />
                    <circle id="naramienny" cx="215" cy="180" r="6" fill='transparent' onClick={(event) => handleMuscle(event, 'Prosty brzucha')} />
                    <circle id="naramienny" cx="279" cy="205" r="6" fill='transparent' onClick={(event) => handleMuscle(event, 'Ramienno-promieniowy')} />
                    <circle id="naramienny" cx="240" cy="245" r="6" fill='transparent' onClick={(event) => handleMuscle(event, 'Skośny zewnętrzny brzucha')} />
                    <circle id="naramienny" cx="302" cy="290" r="6" fill='transparent' onClick={(event) => handleMuscle(event, 'Glistowate ręki')} />
                    <circle id="naramienny" cx="235" cy="330" r="10" fill='transparent' onClick={(event) => handleMuscle(event, 'Prosty uda')} />
                    <circle id="naramienny" cx="220" cy="375" r="6" fill='transparent' onClick={(event) => handleMuscle(event, 'Obszerny przyśrodkowy')} />
                    <circle id="naramienny" cx="232" cy="460" r="6" fill='transparent' onClick={(event) => handleMuscle(event, 'Piszczelowy przedni')} />
                    {lineCoordinates.map((coords, index) => (
                            <React.Fragment key={index}>
                            <line 
                                x1={coords.startX}
                                y1={coords.startY}
                                x2={coords.endX}
                                y2={coords.endY}
                                stroke="black"
                            />
                            <text x={coords.endX + 10} y={coords.endY} fontSize="12">{coords.muscle}</text>
                        </React.Fragment>
                    )
                    
                    )}
                </svg>
            </section>
            <Footer />
        </>
    )
}

export default RehabMain;