import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarStyles from '../styles/Navbar.module.css'
import classNames from 'classnames';

const Navbar = () => {

    const isLoggedIn = !!localStorage.getItem('token')
    const navigate = useNavigate()

    const [menuActive, setMenuActive] = useState(false)


    const burgerMenu = () => {
        setMenuActive(!menuActive)
    }

    const signOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }


    return (
        <section>
            <div className={classNames(NavbarStyles['burger-menu'], {
                [NavbarStyles.active]: menuActive,
            })}>
                <div className={NavbarStyles['menu-container']}>
                    <ul>
                        <li><Link to='/recipes'>Dieta</Link></li>
                        <li><Link to='/training'>Trening</Link></li>
                        <li><Link to='/rehabilitation'>Rehabilitacja</Link></li>
                        {isLoggedIn ? (
                            <>
                                <li><Link to='/account'>Konto</Link></li>
                                <li><Link to='/' onClick={signOut}>Wyloguj się</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to='/login'>Konto</Link></li>
                                <li><Link to='/register'>Zarejestruj się</Link></li>
                            </>
                    )}
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
                    {isLoggedIn ? (
                        <>
                            <li><Link to='/account'>Konto</Link></li>
                            <li><Link to='/' onClick={signOut}>Wyloguj się</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to='/login'>Konto</Link></li>
                            <li><Link to='/register'>Zarejestruj się</Link></li>
                        </>
                    )}
                </ul>
            </nav>
            <button className={NavbarStyles['burger-btn']} id="burger-btn" onClick={burgerMenu}><i className="fa-solid fa-bars" id="burger-icon"></i></button>
        </section>
    )
}

export default Navbar