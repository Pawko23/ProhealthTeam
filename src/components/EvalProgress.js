import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Styles from '../styles/UserProgress.module.css'
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
            setGraphEval(res.data.eval)
            setGraphDates(res.data.dates)
            setGraphGoal(res.data.goal)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
    }, [graphEval])




    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentDate = new Date().toLocaleDateString('en-CA')

        if(!evalScore) {
            alert('You need to enter your eval score')
            return
        }
        try {
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
            <div className={Styles['weight-container']}>
                <form onSubmit={handleSubmit}>
                    <label>Ile punktów eval chcesz zdobywać? [ilość pkt]</label>
                    <input 
                        type='number'
                        onChange={ (e) => setEvalGoal(e.target.value)}
                        value={evalGoal}
                    />
                    <label>Wprowadź swój eval [ilość pkt]: </label>
                    <input type='number' onChange={ (e) => setEval(e.target.value)} value={evalScore}></input>
                    <button type='submit'>Dodaj</button>
                </form>
                <div className={Styles['graph-box']}>
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