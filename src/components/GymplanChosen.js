import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import gymplanStyles from '../styles/GymplanChosen.module.css'

const GymplanChosen = ({gymPlanName}) => {
    return (
        <>
            <Navbar />
            <Header />
            <div className={gymplanStyles.container}>
                <h3> {gymPlanName} </h3>
                <div className={gymplanStyles['gymplan-description']}></div>
                <div className={gymplanStyles['picked-plan']}></div>
            </div>
        </>
    )
}

export default GymplanChosen;