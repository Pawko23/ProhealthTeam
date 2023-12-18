import React, { useState } from 'react';
import TrainingMainStyles from '../styles/TrainingMain.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import TrainingPageHero from '../img/training-hero.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExerciseType = ({ typeName, exercises, isSelected, onTypeClick }) => {
  return (
    <>
      <div className={TrainingMainStyles['exercise-type']}>
        <h3 onClick={() => onTypeClick(typeName)}>
          <i class='fa-solid fa-plus'></i>
          {typeName}
        </h3>
        {isSelected && (
          <div>
            <div className={TrainingMainStyles['exercises-list']}>
              {exercises.map((exercise) => (
                <div key={exercise.id} className={TrainingMainStyles.exercise}>
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


  //Sample data
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
    setSelectedType(typeName === selectedType ? null : typeName);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  };

  const gymPlans = [
    { id: 1, content: 'FBW' },
    { id: 2, content: 'SPLIT' },
    { id: 3, content: 'PUSH & PULL & LEGS' },
  ];

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
      <div className={TrainingMainStyles.container}>
        <div className={TrainingMainStyles.heading}>
          <h2>Exercise List</h2>
        </div>
        {exerciseTypes.map((type) => (
          <ExerciseType
            key={type.id}
            typeName={type.typeName}
            exercises={type.exercises}
            isSelected={type.typeName === selectedType}
            onTypeClick={handleTypeClick}
          />
        ))}
      </div>

      <div className={TrainingMainStyles['gym-plans-container']}>
        <h3>Trening na siłowni</h3>
        <Slider {...settings}>
          {gymPlans.map((item) => (
            <div className={TrainingMainStyles.slide} key={item.id}>
              <h3>{item.content}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </>
  );
};

export default TrainingMain;
