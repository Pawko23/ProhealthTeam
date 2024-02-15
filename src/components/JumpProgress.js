import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Styles from '../styles/JumpProgressStyles.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import { Graph } from "./UserProgress";

const JumpProgress = () => {

    const [userId, setUserId] = useState('')
    const [jumpGoal, setJumpGoal] = useState('')
    const [jumpHeight, setJumpHeight] = useState('')
    const [graphJumps, setGraphJumps] = useState([])
    const [graphDates, setGraphDates] = useState([])
    const [graphGoal, setGraphGoal] = useState('')


    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        setUserId(userId)
        if(token) {
            fetchJumps(token)
        }
    }, [])

    const fetchJumps = (token) => {
        axios.get('/jump-progress', {
            headers: { Authorization: `Bearer ${token}`}
        }).then((res) => {
            console.log(res.data)
            setGraphJumps(res.data.jumps)
            setGraphDates(res.data.dates)
            setGraphGoal(res.data.goal)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        console.log(graphJumps)
        console.log(graphDates)
        console.log(graphGoal)
    }, [graphJumps])




    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentDate = new Date().toLocaleDateString('en-CA')

        if(!jumpHeight) {
            alert('You need to enter jump height')
            return
        }
        try {
            console.log(userId, jumpGoal, jumpHeight, currentDate)
            await axios.post('/jump-progress', { userId, jumpGoal, jumpHeight, currentDate })
            window.location.reload()
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
                        onChange={ (e) => setJumpGoal(e.target.value)}
                        value={jumpGoal}
                    />
                    <label>Jak wysoko skaczesz?: </label>
                    <input type='number' onChange={ (e) => setJumpHeight(e.target.value)} value={jumpHeight}></input>
                    <button type='submit'>Dodaj</button>
                </form>
                <div className={Styles['']}>
                    <Graph 
                        userId = {userId}
                        weights={graphJumps}
                        dates={graphDates}
                        goal={graphGoal}
                        deleteEndpoint={'/jump-progress'}
                        pointName={'Wyskok'}
                    />
                </div>
            </div>
        </>
            <Footer />
        </>
    )
}

export default JumpProgress;