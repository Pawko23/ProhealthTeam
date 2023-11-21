import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <section>
            <div class="burger-menu">
                <div class="menu-container">
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
                    <li><a class="logo" href="#home">ProhealthTeam</a></li>
                    <li><a href="#diet">Dieta</a></li>
                    <li><a href="#gym">Trening</a></li>
                    <li><a href="#rehab">Rehabilitacja</a></li>
                </ul>
                <ul class="account">
                    <li><a href="pages/loginForm.html">Konto</a></li>
                    <li><a href="pages/registerForm.html">Zarejestruj się</a></li>
                </ul>
            </nav>
            <button class="burger-btn" id="burger-btn"><i class="fa-solid fa-bars" id="burger-icon"></i></button>
        </section>
    )
}

export default Navbar