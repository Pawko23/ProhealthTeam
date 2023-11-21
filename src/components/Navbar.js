import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <section>
            <div className="burger-menu">
                <div className="menu-container">
                    <ul>
                        <li><a href="#">Dieta</a></li>
                        <li><a href="#">Trening</a></li>
                        <li><a href="#">Rehabilitacja</a></li>
                        <li><a href="pages/loginForm.html">Konto</a></li>
                        <li><a href="pages/registerForm.html">Zarejestruj się</a></li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a className="logo" href="#home">ProhealthTeam</a></li>
                    <li><a href="#diet">Dieta</a></li>
                    <li><a href="#gym">Trening</a></li>
                    <li><a href="#rehab">Rehabilitacja</a></li>
                </ul>
                <ul className="account">
                    <li><a href="pages/loginForm.html">Konto</a></li>
                    <li><a href="pages/registerForm.html">Zarejestruj się</a></li>
                </ul>
            </nav>
            <button className="burger-btn" id="burger-btn"><i className="fa-solid fa-bars" id="burger-icon"></i></button>
        </section>
    )
}

export default Navbar