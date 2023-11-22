import React from 'react';
import '../styles/RegisterPage.css'

const RegisterPage = () => {
    return (
        <>
            <div className="container">
                <div className="login-box">
                    <form action="">
                        <label for="email">Adres email:</label>
                        <input type="email" placeholder="Email"></input>
                        <label for="username">Nazwa użytkownika:</label>
                        <input type="username" placeholder="Nazwa użytkownika"></input>
                        <label for="password">Hasło:</label>
                        <input type="password" placeholder="Hasło"></input>
                        <label for="confirmPassword">Powtórz hasło:</label>
                        <input type="password" placeholder="Powtórz hasło"></input>
                        <button type="submit" className="register">Zarejestruj</button>
                        <button className="logIn">Zaloguj się</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;