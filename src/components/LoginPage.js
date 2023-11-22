import React from 'react';
import '../styles/LoginPage.css'

const LoginPage = () => {
    return (
        <>
            <div className='container'>
                <div className='login-box'>
                    <form action=''>
                        <label for='username'>Adres email:</label>
                        <input type='email' placeholder='Email'></input>
                        <label for='password'>Hasło:</label>
                        <input type='password' placeholder='Hasło'></input>
                        <button type='submit' className='logIn'>Zaloguj się</button>
                        <button className='register'>Zarejestruj się</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;