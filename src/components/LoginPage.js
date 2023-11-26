import React from 'react';
import LoginStyles from '../styles/LoginPage.module.css'

const LoginPage = () => {
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
                        <button className={LoginStyles.register}>Zarejestruj się</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;