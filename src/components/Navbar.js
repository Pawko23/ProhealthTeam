import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <section>
            <div className="burger-menu">
                <div className="menu-container">
                    <ul>
                        <li><a href="/diet">Dieta</a></li>
                        <li><a href="/training">Trening</a></li>
                        <li><a href="/rehabilitation">Rehabilitacja</a></li>
                        <li><a href="/login">Konto</a></li>
                        <li><a href="/register">Zarejestruj się</a></li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a className="logo" href="/">ProhealthTeam</a></li>
                    <li><a href="/diet">Dieta</a></li>
                    <li><a href="/training">Trening</a></li>
                    <li><a href="/rehabilitation">Rehabilitacja</a></li>
                </ul>
                <ul className="account">
                    <li><a href="/login">Konto</a></li>
                    <li><a href="/register">Zarejestruj się</a></li>
                </ul>
            </nav>
            <button className="burger-btn" id="burger-btn"><i className="fa-solid fa-bars" id="burger-icon"></i></button>
        </section>
    )
}

export default Navbar