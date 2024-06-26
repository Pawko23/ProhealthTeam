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
    const [passwordPatternDisplay, setPasswordPatternDisplay] = useState( { display: 'none' } )
    const [emailPatternDisplay, setEmailPatternDisplay] = useState( { display: 'none'} )
    const [userExists, setUserExists] = useState(false)
    const navigate = useNavigate()


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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

        if(!emailPattern.test(email)) {
            setEmailPatternDisplay( { display: 'flex' })
            setPasswordPatternDisplay( { display: 'none' })
        } 
        if (!passwordPattern.test(password)) {
            setPasswordPatternDisplay( { display: 'flex' })
            setEmailPatternDisplay( { display: 'none' } )
        } 
        if (!emailPattern.test(email) && (!passwordPattern.test(password))) {
            setEmailPatternDisplay( { display: 'flex' })
            setPasswordPatternDisplay( { display: 'flex' })
        } 
        if(emailPattern.test(email) && passwordPattern.test(password)) {
            setEmailPatternDisplay( { display: 'none' } )
            setPasswordPatternDisplay( { display: 'none' })
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
                setUserExists(true)
                console.log('Unable to register user')
            })
        }
    }

    return (
        <>
            <div className={RegisterStyles.container}>
                <div className={RegisterStyles['login-box']}>
                    <form onSubmit={handleSubmit}>
                        {userExists && 
                            <p className={RegisterStyles['user-exists-info']}>Taki użytkownik już istnieje!</p>
                        }
                        <label>Adres email:</label>
                        <input
                            type="text" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p style={emailPatternDisplay}>Email needs to contain @ </p>
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
                        <div className={RegisterStyles['password-pattern']} style={passwordPatternDisplay}>
                            <ul>
                                <li>Przynajmniej 1 wielka litera</li>
                                <li>Przynajmniej 1 cyfra</li>
                                <li>Przynajmniej 1 znak specjalny</li>
                                <li>Przynajmniej 8 znaków długości</li>
                            </ul>
                        </div>
                        <button type="submit" className={RegisterStyles.register}>Zarejestruj</button>
                        <Link to='/login' className={RegisterStyles.logIn}>Zaloguj się</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;