import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import chosenStyles from '../styles/TrainingChosen.module.css'
import TrainingChosenHero from '../img/training-hero.jpg'

const TrainingChosen = () => {
    return (
        <>
            <Navbar />
            <Header 
                heroImage={TrainingChosenHero}
            />
            <div className={chosenStyles.container}>
                <div className={chosenStyles['option-box']}>
                    <ul>
                        <li><i class="fa-solid fa-plus"></i><a>Wytrzymałość tlenowa</a></li>
                        <li><i class="fa-solid fa-plus"></i><a>Szybkość</a></li>
                        <li><i class="fa-solid fa-plus"></i><a>Siła</a></li>
                        <li><i class="fa-solid fa-plus"></i><a>Mobilność</a></li>
                        <li><i class="fa-solid fa-plus"></i><a>Moc i skoczność</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TrainingChosen;