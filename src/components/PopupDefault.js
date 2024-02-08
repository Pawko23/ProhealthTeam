import React from "react";
import styles from '../styles/PopupDefaultStyles.module.css'

const PopupDefault = ( {info, onClose} ) => {

    const handleConfirm = () => {
        onClose()
    }
    
    return (
        <>
            <div className={styles['popup-container']}>
                <div className={styles['popup-content']}>
                    <p> {info} </p>
                </div>
                <button onClick={handleConfirm}>Potwierdź</button>
            </div>
        </>
    )
}

export default PopupDefault;