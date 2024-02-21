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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <button className={styles['close-btn']} onClick={onClose}>Zamknij</button>
      </div>
    </div>
  );
};

export default ExercisePopup;
