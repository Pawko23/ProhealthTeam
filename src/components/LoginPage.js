import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import LoginStyles from '../styles/LoginPage.module.css'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [invalidCredentials, setInvalidCredentials] = useState( { display: 'none' } )
    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        axios.get('/register').then((res) => {
            console.log(res.data)
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('/login', { username, password })
            const token = response.data.token
            console.log('Login successfull');
            setUsername('')
            setPassword('')
            fetchUsers()
            navigate('/')
            window.location.reload()
            localStorage.setItem('token', token)
        } catch (error) {
            setInvalidCredentials( { display: 'flex' })
            console.log('Login error')
        }
    }

    return (
        <>
            <div className={LoginStyles.container}>
                <div className={LoginStyles['login-box']}>
                    <form onSubmit={handleSubmit}>
                        <label>Nazwa użytkownika:</label>
                        <input 
                            type='text' 
                            placeholder='Nazwa użytkownika'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <label>Hasło:</label>
                        <input 
                            type='password' 
                            placeholder='Hasło'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <p style={invalidCredentials}>Nieprawidłowy login lub hasło</p>
                        <button type='submit' className={LoginStyles.logIn}>Zaloguj się</button>
                       <Link to="/register" className={LoginStyles.register}>Zarejestruj się</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;