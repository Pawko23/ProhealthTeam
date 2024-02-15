import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../styles/AccountStyles.module.css'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import HomePageHero from '../img/hero-main-big.jpg'
import PopupDefault from "./PopupDefault";

const Account = () => {
    const navigate = useNavigate()
    const [userId, setUserId] = useState('')
    const [userLogin, setUserLogin] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userBmi, setUserBmi] = useState(null)
    const [userIntake, setUserIntake] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        setUserId(decodedToken.userId)
        if(token) {
            fetchUser(token)
        }
    }, [userIntake])

    const fetchUser = (token) => {
        axios.get('/account', {
            headers: { Authorization: `Bearer ${token}`}
        }).then((res) => {
            setUserLogin(res.data.username)
            setUserEmail(res.data.email)
            setUserBmi(res.data.bmi)
            setUserIntake(res.data.kcalIntake)
            console.log(userLogin)
            console.log(userEmail)
            console.log(userBmi)
            console.log(userIntake);
        }).catch((error) => {
            console.log(error)
        })
    }
    

    const deleteUser = async () => {
        try {
            const token = localStorage.getItem('token')
            await axios.delete(`/account/${userId}`, {
                headers: { Authorization: `Bearer ${token}`}
            })
            console.log('User deleted succ')
            localStorage.removeItem('token')
            navigate('/')
        } catch (error) {
            console.error('Error deleting user', error)
        }
    }


    const [showPopup, setShowPopup] = useState(false)
    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

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
                        <p>Login: {userLogin}</p>
                        <p>email: {userEmail}</p>
                    </div>
                </div>
                <div className={styles['fav-recipes']}>
                    <div>
                        <ul></ul>
                    </div>
                </div>
                <div className={styles['calcs-info']}>
                    <div>
                        <p>BMI: {userBmi}</p>
                        <p>Kcal intake: {userIntake}</p>
                    </div>
                </div>
                <button className={styles['delete-button']} onClick={togglePopup}>Usuń konto</button>
                {showPopup && (
                        <PopupDefault 
                            info={'Czy na pewno usunąć konto?'}
                            onClose={()=>deleteUser()}
                            preventClose={true}
                        />
                    )
                }
            </div>
        </>
    )
}

export default Account;