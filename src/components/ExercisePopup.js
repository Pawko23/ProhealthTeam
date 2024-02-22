import React from 'react';
import styles from '../styles/ExercisePopup.module.css';

const ExercisePopup = ({ exercise, onClose }) => {
  return (
    <div className={styles['exercise-popup-container']}>
      <div className={styles['exercise-popup']}>
        <div className={styles['popup-header']}>
          <h3 className={styles['exercise-title']}>{exercise.name}</h3>  
        </div>
        <div className={styles['popup-body']}>
          <p>Sets: {exercise.sets}</p>
          <p>Reps: {exercise.reps}</p>
          <p>{exercise.description}</p>
        </div>
        <button className={styles['close-btn']} onClick={onClose}>Zamknij</button>
      </div>
    </div>
  );
};

export default ExercisePopup;
