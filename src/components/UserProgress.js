import React, { useState, useEffect } from 'react'
import Link from 'react-router-dom'
import axios from 'axios'
import ProgressStyles from '../styles/UserProgress.module.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import DietPageHero from '../img/diet.jpg';
import { jwtDecode } from 'jwt-decode'

const Weight = () => {

    const [weight, setWeight] = useState('')
    const [userId, setUserId] = useState('')
    const [goal, setGoal] = useState('')
    const [graphWeights, setGraphWeights] = useState([])
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        setUserId(userId)
        if(token) {
            fetchWeights(token)
        }
    }, [])


    const fetchWeights = (token) => {
        axios.get('/userprogress', {
            headers: { Authorization: `Bearer ${token}`}
        }).then((res) => {
            setGraphWeights(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        console.log(graphWeights)
    }, [graphWeights])



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')
            await axios.post('/userprogress', { userId, weight, goal })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={ProgressStyles['weight-container']}>
                <form onSubmit={handleSubmit}>
                    <label>Ustaw swój cel</label>
                    <input 
                        type='number'
                        onChange={ (e) => setGoal(e.target.value)}
                        value={goal}
                    />
                    <label>Wprowadź obecną wagę:</label>
                    <input type='number' onChange={ (e) => setWeight(e.target.value)} value={weight}></input>
                    <button type='submit'>Zapisz dane</button>
                </form>
                <div className={ProgressStyles['graph-box']}></div>
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
                    <div className={ProgressStyles['activity-box']}>
                        <div className={ProgressStyles['checkbox-inputs']}>
                            <input type='checkbox'></input>a
                            <label>Niska( znikoma aktywność fizyczna )</label>
                        </div>
                        <div className={ProgressStyles['checkbox-inputs']}>
                            <input type='checkbox'></input>
                            <label>Średnia( 1-3 treningi w tygodniu )</label>          
                        </div>
                        <div className={ProgressStyles['checkbox-inputs']}>
                            <input type='checkbox'></input>
                            <label>Wysoka( więcej niż 3 treningi w tygodniu )</label>
                        </div>
                    </div>
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