import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExercisePopup from './ExercisePopup';
import TrainingMainStyles from '../styles/TrainingMain.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import TrainingPageHero from '../img/training-hero.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExerciseType = ({ typeName, specific, exercises, isSelected, onTypeClick }) => {

  const isLoggedIn = !!localStorage.getItem('token')

  const [selectedExercise, setSelectedExercise] = useState(null)

  const handleInformation = (exercise) => {
    setSelectedExercise(exercise)
  }


  return (
    <>
      <div className={TrainingMainStyles['exercise-type']}>
        <h3 onClick={() => onTypeClick(typeName, specific)}>
          <i class='fa-solid fa-plus'></i>
          {typeName}
        </h3>
        {isSelected && (
          <div>
            <div className={TrainingMainStyles['exercises-list']}>
              {exercises.map((exercise) => (
                <div key={exercise.id} className={TrainingMainStyles.exercise} onClick={() => handleInformation(exercise)}>
                  <div className={TrainingMainStyles['exercise-details']}>
                    <p className={TrainingMainStyles.name}>{exercise.name}</p>
                    <p className={TrainingMainStyles.sets}>{exercise.sets}</p>
                    <p className={TrainingMainStyles.reps}>{exercise.reps}</p>
                  </div>
                </div>
              ))}
              <button className={TrainingMainStyles['progress-btn']} id='progress-btn'>
                  {isLoggedIn && <Link to={`/training/${specific}`}>Progres</Link>}
                  {!isLoggedIn && <Link to='/login'>Progres</Link>}
              </button>
            </div>
          </div>
        )}
        {selectedExercise && (
          <ExercisePopup 
            exercise={selectedExercise}
            onClose={()=>setSelectedExercise(null)}
          />
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
      typeName: 'Piłka nożna',
      specific: 'stamina-progress',
      exercises: [
        { id: 1, name: 'Przysiad ze sztangą na karku', sets: '3 serie', reps: '8 powtórzeń' },
        { id: 2, name: 'Wskoki na skrzynię', sets: '3 serie', reps: '12 powtórzeń' },
        { id: 3, name: 'Wyciskanie sztangi na ławce poziomej', sets: '3 serie', reps: '8 powtórzeń' },
        { id: 4, name: 'Podciąganie na drążku', sets: '3 serie', reps: '10 powtórzeń' },
        { id: 5, name: 'Wyciskanie żołnierskie', sets: '3 serie', reps: '8 powtórzeń' },
        { id: 6, name: 'Plank przodem', sets: '3 serie', reps: '1 minuta' },
      ],
    },
    {
      id: 2,
      typeName: 'Siatkówka',
      specific: 'jump-progress',
      exercises: [
        { id: 7, name: 'Box Squat', sets: '4 serie', reps: '5 powtórzeń' },
        { id: 8, name: 'Hip Thrust', sets: '4 serie', reps: '5 powtórzeń' },
        { id: 9, name: 'Podciąganie na drążku', sets: '4 serie', reps: 'Max powtórzeń' },
        { id: 10, name: 'Wyciskanie sztangi na ławce poziomej', sets: '4 serie', reps: '4 powtórzeń' },
        { id: 11, name: 'Slam Ball', sets: '4 serie', reps: '6 powtórzeń' },
      ],
    },
    {
      id: 3,
      typeName: 'Koszykówka',
      specific: 'eval-progress',
      exercises: [
        { id: 12, name: 'Przysiad ze sztangą', sets: '4 serie', reps: '8 powtórzeń' },
        { id: 13, name: 'Wykroki / Zakroki', sets: '4 serie', reps: '8 powtórzeń' },
        { id: 14, name: 'Wyciskanie sztangi na ławce poziomej', sets: '4 serie', reps: '5 powtórzeń' },
        { id: 15, name: 'Zarzuty ze sztangą', sets: '4 serie', reps: '5 powtórzeń' },
        { id: 16, name: 'Martwy ciąg', sets: '4 serie', reps: '5 powtórzeń' },
        { id: 17, name: 'Wejścia na skrzynie', sets: '3 serie', reps: '12 powtórzeń' },
        { id: 18, name: 'Podciąganie na drążku', sets: '3 serie', reps: '10 powtórzeń' },
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
        title={'Trening'}
      />
      <div className={TrainingMainStyles.container}>
        <div className={TrainingMainStyles.heading}>
          <h2>Wybierz co Cię interesuje</h2>
        </div>
        {exerciseTypes.map((type) => (
          <ExerciseType
            key={type.id}
            typeName={type.typeName}
            specific={type.specific}
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

      <div className={TrainingMainStyles['personal-trainers-container']}>
            <div className={TrainingMainStyles['personal-trainer-box']}>
              <div className={TrainingMainStyles['trainer-box-up']}>
                <div className={TrainingMainStyles['trainer-img']}></div>
              </div>
              <div className={TrainingMainStyles['trainer-box-down']}>
                <p className={TrainingMainStyles.name}>Jakis trener</p>
                <p className={TrainingMainStyles.email}>ap123@op.pl</p>
              </div>
            </div>
            {/* <div className={TrainingMainStyles['personal-trainer-box']}>
              <div className={TrainingMainStyles['trainer-box-up']}>
                <div className={TrainingMainStyles['trainer-img']}></div>
              </div>
              <div className={TrainingMainStyles['trainer-box-down']}>
                <p className={TrainingMainStyles.name}>Jakis trener</p>
                <p className={TrainingMainStyles.email}>ap123@op.pl</p>
              </div>
            </div>
            <div className={TrainingMainStyles['personal-trainer-box']}>
              <div className={TrainingMainStyles['trainer-box-up']}>
                <div className={TrainingMainStyles['trainer-img']}></div>
              </div>
              <div className={TrainingMainStyles['trainer-box-down']}>
                <p className={TrainingMainStyles.name}>Jakis trener</p>
                <p className={TrainingMainStyles.email}>ap123@op.pl</p>
              </div>
            </div> */}
      </div>

      <Footer />
    </>
  );
};

export default TrainingMain;
