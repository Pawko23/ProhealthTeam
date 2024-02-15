import React, { useEffect } from "react";
import styles from '../styles/PopupDefaultStyles.module.css'

const PopupDefault = ( {info, onClose} ) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleBackdropClick = (event) => {
        console.log('Backdrop')
        if (event.target.classList.contains(styles['popup-container'])) {
            onClose();
        }
    };

    const handleConfirm = () => {
        onClose()
    }
    
    return (
        <>
            <div className={styles['popup-container']} onClick={handleBackdropClick}>
                <div className={styles['popup-content']}>
                    <p> {info} </p>
                    <button onClick={handleConfirm}>Ok</button>
                </div>
            </div>
        </>
    )
}

export default PopupDefault;