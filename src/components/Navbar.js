import React from 'react';
import { Link } from 'react-router-dom';
import NavbarStyles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <section>
            <div className={NavbarStyles['burger-menu']}>
                <div className={NavbarStyles['menu-container']}>
                    <ul>
                        <li><Link to='/recipes'>Dieta</Link></li>
                        <li><Link to='/training'>Trening</Link></li>
                        <li><Link to='/rehabilitation'>Rehabilitacja</Link></li>
                        <li><Link to='/login'>Konto</Link></li>
                        <li><Link to='/register'>Zarejestruj się</Link></li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" className={NavbarStyles.logo}>ProhealthTeam</Link></li>
                    <li><Link to='/recipes'>Dieta</Link></li>
                    <li><Link to='/training'>Trening</Link></li>
                    <li><Link to='/rehabilitation'>Rehabilitacja</Link></li>
                </ul>
                <ul className={NavbarStyles.account}>
                    <li><Link to='/login'>Konto</Link></li>
                    <li><Link to='/register'>Zarejestruj się</Link></li>
                </ul>
            </nav>
            <button className={NavbarStyles['burger-btn']} id="burger-btn"><i className="fa-solid fa-bars" id="burger-icon"></i></button>
        </section>
    )
}

export default Navbar