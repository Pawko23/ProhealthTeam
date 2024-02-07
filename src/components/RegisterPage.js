import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import RegisterStyles from '../styles/RegisterPage.module.css'

const RegisterPage = () => {
    
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [weight, setWeight] = useState([])
    const [goal, setGoal] = useState('')
    const [date, setDate] = useState([])
    const [patternDisplay, setPatternDisplay] = useState( { display: 'none' } )
    const navigate = useNavigate()


    const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{8,}$/



    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        axios.get('/register').then((res) => {
            console.log(res.data)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(passwordPattern.test(password)) {
            console.log("Password matches the pattern!");
            axios.post('/register', { email, username, password, weight: [], goal, date: []}).then(() => {
                alert('Registered successfuly!')
                setEmail('')
                setUsername('')
                setPassword('')
                setWeight([])
                setGoal('')
                setDate([])
                fetchUsers()
                navigate('/')
            })
            .catch((error) => {
                console.log('Unable to register user')
            })
        } else {
            console.log("Password does not match the pattern!");
            setPatternDisplay( { display: 'flex' })
        }
    }

    return (
        <>
            <div className={RegisterStyles.container}>
                <div className={RegisterStyles['login-box']}>
                    <form onSubmit={handleSubmit}>
                        <label>Adres email:</label>
                        <input
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Nazwa użytkownika:</label>
                        <input
                            type="text" 
                            placeholder="Nazwa użytkownika" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Hasło:</label>
                        <input
                            type="password" 
                            placeholder="Hasło" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className={RegisterStyles['password-pattern']} style={patternDisplay}>
                            <ul>
                                <li>Password needs to be:</li>
                                <li>At least 1 uppercase letter</li>
                                <li>At least 1 digit</li>
                                <li>At least 1 special character</li>
                                <li>At least 8 characters long</li>
                            </ul>
                        </div>
                        <button type="submit" className={RegisterStyles.register}>Zarejestruj</button>
                        <Link to='/login'>Zaloguj się</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;