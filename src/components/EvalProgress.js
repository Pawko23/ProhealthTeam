import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Styles from '../styles/JumpProgressStyles.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'
import { Graph } from "./UserProgress";

const EvalProgress = () => {

    const [userId, setUserId] = useState('')
    const [evalGoal, setEvalGoal] = useState('')
    const [evalScore, setEval] = useState('')
    const [graphEval, setGraphEval] = useState([])
    const [graphDates, setGraphDates] = useState([])
    const [graphGoal, setGraphGoal] = useState('')


    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        setUserId(userId)
        if(token) {
            fetchEval(token)
        }
    }, [])

    const fetchEval = (token) => {
        axios.get('/eval-progress', {
            headers: { Authorization: `Bearer ${token}`}
        }).then((res) => {
            console.log(res.data)
            setGraphEval(res.data.eval)
            setGraphDates(res.data.dates)
            setGraphGoal(res.data.goal)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        console.log(graphEval)
        console.log(graphDates)
        console.log(graphGoal)
    }, [graphEval])




    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentDate = new Date().toLocaleDateString('en-CA')

        if(!evalScore) {
            alert('You need to enter your eval score')
            return
        }
        try {
            console.log(userId, evalGoal, evalScore, currentDate)
            await axios.post('/eval-progress', { userId, evalGoal, evalScore, currentDate })
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
                        onChange={ (e) => setEvalGoal(e.target.value)}
                        value={evalGoal}
                    />
                    <label>Jaki jest Twój eval?: </label>
                    <input type='number' onChange={ (e) => setEval(e.target.value)} value={evalScore}></input>
                    <button type='submit'>Dodaj</button>
                </form>
                <div className={Styles['']}>
                    <Graph 
                        userId = {userId}
                        weights={graphEval}
                        dates={graphDates}
                        goal={graphGoal}
                        deleteEndpoint={'/eval-progress'}
                        pointName={'Eval'}
                    />
                </div>
            </div>
        </>
            <Footer />
        </>
    )
}

export default EvalProgress;