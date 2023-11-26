import React from 'react';
import RegisterStyles from '../styles/RegisterPage.module.css'

const RegisterPage = () => {
    return (
        <>
            <div className={RegisterStyles.container}>
                <div className={RegisterStyles['login-box']}>
                    <form action="">
                        <label for="email">Adres email:</label>
                        <input type="email" placeholder="Email"></input>
                        <label for="username">Nazwa użytkownika:</label>
                        <input type="username" placeholder="Nazwa użytkownika"></input>
                        <label for="password">Hasło:</label>
                        <input type="password" placeholder="Hasło"></input>
                        <label for="confirmPassword">Powtórz hasło:</label>
                        <input type="password" placeholder="Powtórz hasło"></input>
                        <button type="submit" className={RegisterStyles.register}>Zarejestruj</button>
                        <button className={RegisterStyles.logIn}>Zaloguj się</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;