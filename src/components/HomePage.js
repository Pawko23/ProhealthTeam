import React from 'react';
import Navbar from './Navbar'
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import HomePageHero from '../img/hero-main-big.jpg'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Header 
                heroImage={HomePageHero}
                gradient={'linear-gradient(45deg, rgba(8, 206, 255, 0.75), rgba(8, 24, 255, 0.75))'}
                title={'ProhealthTeam'}
            />
            <MainSection />
            <Footer />
        </>
    )
}

export default HomePage;