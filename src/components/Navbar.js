import React from 'react';
import NavbarStyles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <section>
            <div className={NavbarStyles['burger-menu']}>
                <div className={NavbarStyles['menu-container']}>
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
                    <li><a className={NavbarStyles.logo} href="/">ProhealthTeam</a></li>
                    <li><a href="/diet">Dieta</a></li>
                    <li><a href="/training">Trening</a></li>
                    <li><a href="/rehabilitation">Rehabilitacja</a></li>
                </ul>
                <ul className={NavbarStyles.account}>
                    <li><a href="/login">Konto</a></li>
                    <li><a href="/register">Zarejestruj się</a></li>
                </ul>
            </nav>
            <button className={NavbarStyles['burger-btn']} id="burger-btn"><i className="fa-solid fa-bars" id="burger-icon"></i></button>
        </section>
    )
}

export default Navbar