import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import LoginStyles from '../styles/LoginPage.module.css'

const LoginPage = () => {

    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
            console.log(response.data)
            const token = response.data.token
            console.log(token)
            alert('Logn successful!')
            setUsername('')
            setPassword('')
            fetchUsers()
            navigate('/')
            window.location.reload()
            localStorage.setItem('token', token)
        } catch (error) {
            alert('Ivalid credentials')
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
                        <button type='submit' className={LoginStyles.logIn}>Zaloguj się</button>
                        <button className={LoginStyles.register}><Link to="/register">Zarejestruj się</Link></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;