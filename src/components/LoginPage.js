import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginStyles from '../styles/LoginPage.module.css'

const LoginPage = () => {

    // const [backendUsers, setBackendUsers] = useState([{}])

    // useEffect(() => {
    //     fetch("/api").then(
    //         response => response.json()
    //     ).then(
    //         users => {
    //             setBackendUsers(users)
    //         }
    //     )
    // }, [])

    return (
        <>
            <div className={LoginStyles.container}>
                <div className={LoginStyles['login-box']}>
                    <form action=''>
                        <label for='username'>Adres email:</label>
                        <input type='email' placeholder='Email'></input>
                        <label for='password'>Hasło:</label>
                        <input type='password' placeholder='Hasło'></input>
                        <button type='submit' className={LoginStyles.logIn}>Zaloguj się</button>
                        <button className={LoginStyles.register}><Link to="/register">Zarejestruj się</Link></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;