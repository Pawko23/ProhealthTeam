import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProgressStyles from '../styles/UserProgress.module.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import HeroImage from '../img/proggress.jpg';
import { jwtDecode } from 'jwt-decode'
import { Chart } from 'chart.js/auto'


export const Graph = ({ userId, weights, dates, goal, deleteEndpoint, pointName }) => {
    
    const [selectedPoints, setSelectedPoints] = useState([])

    useEffect(() => {
        const ctx = document.getElementById('weightProgress').getContext('2d')
        let chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: pointName,
                        borderColor: 'blue',
                        backgroundColor: 'blue',
                        data: weights,
                        fill: false,
                        pointRadius: (context) => {
                            const index = context.dataIndex;
                            return selectedPoints.includes(index) ? 6 : 3;
                        }
                    },
                    {
                        label: 'Cel',
                        borderColor: 'red',
                        borderDash: [5, 5],
                        data: Array(dates.length).fill(goal),
                        fill: false
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            values: [40, 60, 80, 100, 120, 140, 160]
                        }
                    }
                },
                onClick: (event) => {
                    const activePoints = chart.getActiveElements(event)
                    if(activePoints.length > 0) {
                        const selectedIndex = activePoints[0].index
                        setSelectedPoints((prevSelected) => {
                            const isSelected = prevSelected.includes(selectedIndex)
                            if(isSelected) {
                                return prevSelected.filter((index) => index !== selectedIndex)
                            } else {
                                return [...prevSelected, selectedIndex]
                            }
                        })
                    }
                }

            }
        })

        return () => {
            chart.destroy()
        }

    }, [weights, dates, goal, selectedPoints, pointName])


    const handleDelete = async () => {
        if(selectedPoints.length > 0) {
            try {
                await axios.delete(`${deleteEndpoint}/${userId}/${selectedPoints}`, {
                    data: { indices: selectedPoints }
                })
                window.location.reload()
                setSelectedPoints([])
                
            } catch (error) {
                console.log('Error deleting data point: ', error)
            }
        }
    }



    return (
        <div>
            <canvas id='weightProgress'></canvas>
            {selectedPoints.length > 0 && (
                    <button onClick={handleDelete} className={ProgressStyles['delete-btn']}>Usuń</button>
                )
            }
        </div>
    )

}



const Weight = () => {

    const [weight, setWeight] = useState('')
    const [userId, setUserId] = useState('')
    const [goal, setGoal] = useState('')
    const [graphWeights, setGraphWeights] = useState([])
    const [graphDates, setGraphDates] = useState([])
    const [graphGoal, setGraphGoal] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        setUserId(userId)
        if(token) {
            fetchWeights(token)
        }

        const isRendered = localStorage.getItem('rendered' === 'true')
        if(!isRendered) {
            localStorage.setItem('rendered', 'true')
            localStorage.setItem('selectedOption', 'weight')
            // navigate('/userprogress?rendered=true')
        }

    }, [navigate])


    const fetchWeights = (token) => {
        axios.get('/userprogress', {
            headers: { Authorization: `Bearer ${token}`}
        }).then((res) => {
            setGraphWeights(res.data.weights)
            setGraphDates(res.data.dates)
            setGraphGoal(res.data.goal)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        console.log(graphWeights)
        console.log(graphDates)
        console.log(graphGoal)
    }, [graphWeights])


    const mockedWeights = [61, 68, 70, 74, 78, 80, 85]
    const mockedDates = ['2024-01-05', '2024-01-25', '2024-02-10', '2024-03-05', '2024-04-05', '2024-05-05', '2024-05-05']
    const mockedGoal = 80

    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentDate = new Date().toLocaleDateString('en-CA')

        if(!weight) {
            alert('You need to enter weight')
            return
        }
        try {
            await axios.post('/userprogress', { userId, weight, goal, currentDate })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={ProgressStyles['weight-container']}>
                <form onSubmit={handleSubmit}>
                    <label>Ustaw swój cel [kg]:</label>
                    <input 
                        type='number'
                        onChange={ (e) => setGoal(e.target.value)}
                        value={goal}
                    />
                    <label>Wprowadź obecną wagę [kg]:</label>
                    <input type='number' onChange={ (e) => setWeight(e.target.value)} value={weight}></input>
                    <button type='submit'>Dodaj</button>
                </form>
                <div className={ProgressStyles['graph-box']}>
                    <p>Kliknij w punkt aby móc usunąć</p>
                    <Graph 
                        userId = {userId}
                        weights={graphWeights}
                        dates={graphDates}
                        goal={graphGoal}
                        deleteEndpoint={'/userprogress/weight'}
                        pointName={'Waga'}
                    />
                </div>
            </div>
        </>
    )
}

const Kcal = () => {

    const [age, setAge] = useState(null)
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [gender, setGender] = useState(null)
    const [bmr, setBMR] = useState(0)
    const [tmr, setTMR] = useState(0)
    const [activity, setActivity] = useState([
        { name: "Brak", description: "Brak aktywności fizycznej", checked: false, pointer: 1.2 },
        { name: "Mała", description: "Osoba wykonująca pracę siedzącą", checked: false, pointer: 1.4 },
        { name: "Umiarkowana", description: "Osoba wykonująca pracę na stojąco", checked: false, pointer: 1.6 },
        { name: "Duża", description: "Osoba prowadząca aktywny tryb życia, regularnie ćwicząca", checked: false, pointer: 1.75 },
        { name: "Bardzo duża", description: "Osoba prowadząca bardzo aktywny tryb życia, codziennie ćwicząca", checked: false, pointer: 2.0 },
        { name: "Prof", description: "Osoba zawodowo uprawiająca sport", checked: false, pointer: 2.4 }
    ]);

    const handleActivity = (index) => {
        const updatedActivity = [...activity];
        updatedActivity.forEach((item, i) => {
            if (i === index) {
                item.checked = !item.checked;
            } else {
                item.checked = false;
            }
        });
        setActivity(updatedActivity);
    };

    const isButtonDisabled = () => {
        return !(age && weight && height && gender && activity.some(item => item.checked));
    };

    const calculate = () => {
        console.log(age)
        console.log(weight)
        console.log(height)
        console.log(gender)
        console.log(activity)

        const selectedActivity = activity.find(item => item.checked === true);
        const selectedValue = selectedActivity ? selectedActivity.pointer : 0;
        console.log("Selected Value:", selectedValue);


        let BMR = 0
        let TMR = 0
        if(gender === 'female') {
            BMR = (9.5634 * weight) + (1.8496 * height) - (4.6756 * age) + 655.0955
            TMR = BMR * selectedValue
            setBMR(BMR)
            setTMR(TMR)
        } else {
            BMR = (13.7516 * weight) + (5.0033 * height) - (6.755 * age) + 66.473 
            TMR = BMR * selectedValue
            setBMR(Number(BMR.toFixed(2)))
            setTMR(Number(TMR.toFixed(2)))
        }

        console.log("BMR: ", BMR)
        console.log("TMR: ", TMR)
    }

    const [userId, setUserId] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        const userId = decodedToken.userId
        setUserId(userId)
        console.log(userId)
    }, [])

    const saveIntake = async (e) => {
        if(!tmr) {
            alert('You need to calculate calories intake first')
            return
        }
        try {
            await axios.post('/userprogress', { userId, tmr })
            alert('Zapisano zapotrzebowanie kaloryczne')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={ProgressStyles['kcal-container']}>
                <div className={ProgressStyles['intake-box']}>
                    <p>Oblicz swoje zapotrzebowanie</p>
                    <label>Wiek</label>
                    <input type='number' 
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                    />
                    <label>Waga</label>
                    <input type='number' 
                        onChange={(e) => setWeight(e.target.value)}
                        value={weight}
                    />
                    <label>Wzrost</label>
                    <input type='number' 
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                    />
                    <label>Kobieta</label>
                    <input type='radio'
                        value='female'
                        checked={gender==='female'}
                        onChange={() => setGender('female')}
                    />
                    <label>Mężczyzna</label>
                    <input type='radio'
                        value='male'
                        checked={gender==='male'}
                        onChange={() => setGender('male')}
                    />
                    <p>Aktywność</p>
                    <div className={ProgressStyles['activity-box']}>
                    {activity.map((item, index) => (
                            <div className={ProgressStyles['checkbox-inputs']} key={index}>
                                <input type='checkbox' checked={item.checked} onChange={() => handleActivity(index)} />
                                <label>{item.name} - {item.description}</label>
                            </div>
                    ))}
                    </div>
                    <button type='submit' onClick={calculate} disabled={isButtonDisabled()}>Oblicz</button>
                    {tmr !== 0 && bmr !== 0 && (
                        <button onClick={saveIntake}>Zapisz</button>
                    )}
                </div>
                <div className={ProgressStyles['intake-results']}>
                    <p>{tmr}</p>
                </div>
            </div>
        </>
    )
}



const UserProgress = () => {
    
    const [option, setOption] = useState(localStorage.getItem('selectedOption') || null)
    const selectOption = (selectedOption) => {
        setOption(selectedOption)
        localStorage.setItem('selectedOption', selectedOption)
    }
    
    return (
        <>
            <Navbar />
            <Header 
                heroImage={HeroImage}
                gradient={'linear-gradient(45deg, rgba(8, 206, 255, 0.75), rgba(8, 24, 255, 0.5))'}
            />
            <div className={ProgressStyles.container}>
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