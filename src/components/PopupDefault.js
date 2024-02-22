import React, { useEffect } from "react";
import styles from '../styles/PopupDefaultStyles.module.css'

const PopupDefault = ( {info, onClose, preventClose, accountDelete, deleteFlag} ) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleBackdropClick = (event) => {
        console.log('Backdrop')
        if (!preventClose && event.target.classList.contains(styles['popup-container'])) {
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
                    <div className={'popup-buttons'}>
                        {deleteFlag &&
                            <>
                                <button onClick={accountDelete} className={styles['confirm-btn']}>Ok</button>
                                <button onClick={handleConfirm} className={styles['close-btn']}>Zamknij</button>
                            </>
                        }
                        {!deleteFlag &&  
                            <button onClick={onClose} className={styles['close-btn']}>Zamknij</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupDefault;