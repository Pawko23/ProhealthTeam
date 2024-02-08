import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../styles/AccountStyles.module.css'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom'
import HomePageHero from '../img/hero-main-big.jpg'

const Account = () => {
    return (
        <>
            <Navbar />
            <Header 
                heroImage={HomePageHero}
                gradient={'linear-gradient(45deg, rgba(8, 206, 255, 0.75), rgba(8, 24, 255, 0.75))'}
                title={'ProhealthTeam'}    
            />
            <div className={styles['account-container']}>
                <div className={styles['user-box']}>
                    <div>
                        <p>Login: </p>
                        <p>email: </p>
                    </div>
                </div>
                <div className={styles['fav-recipes']}>
                    <div>
                        <ul></ul>
                    </div>
                </div>
                <div className={styles['calcs-info']}>
                    <div>
                        <p>BMI: </p>
                        <p>Kcal intake: </p>
                    </div>
                </div>
                <button className={styles['delete-button']}>Usuń konto</button>
            </div>
        </>
    )
}

export default Account;