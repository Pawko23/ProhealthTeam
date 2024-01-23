import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Styles from '../styles/JumpProgressStyles.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import { Graph } from "./UserProgress";

const StaminaProgress = () => {

    const [userId, setUserId] = useState('')
    const [staminaGoal, setStaminaGoal] = useState('')
    const [staminaTime, setStaminaTime] = useState('')
    const [graphStamina, setGraphStamina] = useState([])
    const [graphDates, setGraphDates] = useState([])
    const [graphGoal, setGraphGoal] = useState('')


    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        setUserId(userId)
        if(token) {
            fetchStamina(token)
        }
    }, [])

    const fetchStamina = (token) => {
        axios.get('/stamina-progress', {
            headers: { Authorization: `Bearer ${token}`}
        }).then((res) => {
            console.log(res.data)
            setGraphStamina(res.data.stamina)
            setGraphDates(res.data.dates)
            setGraphGoal(res.data.goal)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        console.log(graphStamina)
        console.log(graphDates)
        console.log(graphGoal)
    }, [graphStamina])




    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentDate = new Date().toLocaleDateString('en-CA')

        if(!staminaTime) {
            alert('You need to enter stamina time')
            return
        }
        try {
            console.log(userId, staminaGoal, staminaTime, currentDate)
            await axios.post('/stamina-progress', { userId, staminaGoal, staminaTime, currentDate })
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <>
            <Navbar />
            <Header 
                heroImage={TrainingChosenHero}
            />
                    <>
            <div className={Styles['']}>
                <form onSubmit={handleSubmit}>
                    <label>Ustaw swój cel</label>
                    <input 
                        type='number'
                        onChange={ (e) => setStaminaGoal(e.target.value)}
                        value={staminaGoal}
                    />
                    <label>Jak długo biegniesz bez przerwy?: </label>
                    <input type='number' onChange={ (e) => setStaminaTime(e.target.value)} value={staminaTime}></input>
                    <button type='submit'>Dodaj</button>
                </form>
                <div className={Styles['']}>
                    <Graph 
                        userId = {userId}
                        weights={graphStamina}
                        dates={graphDates}
                        goal={graphGoal}
                        deleteEndpoint={'/stamina-progress'}
                    />
                </div>
            </div>
        </>
            <Footer />
        </>
    )
}

export default StaminaProgress;