import React, { useState } from 'react';
import TrainingMainStyles from '../styles/TrainingMain.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import TrainingPageHero from '../img/training-hero.jpg';

const ExerciseType = ({ typeName, exercises, isSelected, onTypeClick }) => {
  return (
    <>
      <div>
        <h3 onClick={() => onTypeClick(typeName)}>{typeName}</h3>
        {isSelected && (
          <div>
            <div>
              {exercises.map((exercise) => (
                <div key={exercise.id}>
                  <p>{exercise.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const TrainingMain = () => {
  const [selectedType, setSelectedType] = useState(null);

  const exerciseTypes = [
    {
      id: 1,
      typeName: 'Speed',
      exercises: [
        { id: 1, name: 'Sprint' },
        { id: 2, name: 'Jumping Jacks' },
        { id: 3, name: 'Agility Drills' },
      ],
    },
    {
      id: 2,
      typeName: 'Power',
      exercises: [
        { id: 4, name: 'Box Jumps' },
        { id: 5, name: 'Medicine Ball Throws' },
        { id: 6, name: 'Explosive Push-ups' },
      ],
    },
    {
      id: 3,
      typeName: 'Strength',
      exercises: [
        { id: 7, name: 'Deadlifts' },
        { id: 8, name: 'Bicep Curls' },
        { id: 9, name: 'Leg Press' },
      ],
    },
  ];

  const handleTypeClick = (typeName) => {
    setSelectedType(typeName === selectedType ? null : typeName)
  }

  return (
    <>
      <Navbar />
      <Header
        heroImage={TrainingPageHero}
        gradient={
          'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(86, 76, 76, 1) 100%)'
        }
        title={'Train'}
      />
      <div>
        <h2>Exercise List</h2>
        {exerciseTypes.map((type)=> (
          <ExerciseType
            key={type.id}
            typeName={type.typeName}
            exercises={type.exercises}
            isSelected={type.typeName === selectedType}
            onTypeClick={handleTypeClick}
          />
        ))}
      </div>
      {/* <div className={TrainingMainStyles['training-container']}>
      <h3>Wybierz:</h3>
        <div className={TrainingMainStyles['athletes-box']}>
            <button className={TrainingMainStyles['athlete-btn']}>Piłkarz</button>
            <button className={TrainingMainStyles['athlete-btn']}>Siatkarz</button>
            <button className={TrainingMainStyles['athlete-btn']}>Koszykarz</button>
        </div>
        <h3>Szukasz przykładowych planów na siłownię? Sprawdź nasze przykładowe plany</h3>
        <div className={TrainingMainStyles['gym-plans-box']}>
            <button className={TrainingMainStyles['gym-plan-btn']}>Sprawdź</button>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default TrainingMain;
