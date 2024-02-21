import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExercisePopup from './ExercisePopup';
import TrainingMainStyles from '../styles/TrainingMain.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import TrainingPageHero from '../img/training-hero.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExerciseType = ({
  typeName,
  specific,
  exercises,
  isSelected,
  onTypeClick,
}) => {
  const isLoggedIn = !!localStorage.getItem('token');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleInformation = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <>
      <div className={TrainingMainStyles['exercise-type']}>
        <h3 onClick={() => onTypeClick(typeName, specific)}>
          {isSelected ? (
            <i class='fa-solid fa-angle-up'></i>
          ) : (
            <i class='fa-solid fa-angle-down'></i>
          )}
          {typeName}
        </h3>
        {isSelected && (
          <div>
            <div className={TrainingMainStyles['exercises-list']}>
              <div className={TrainingMainStyles['exercises-grid']}>
                {exercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className={TrainingMainStyles.exercise}
                    onClick={() => handleInformation(exercise)}
                  >
                    <div className={TrainingMainStyles['exercise-details']}>
                      <p className={TrainingMainStyles.name}>{exercise.name}</p>
                      <p className={TrainingMainStyles.sets}>{exercise.sets}</p>
                      <p className={TrainingMainStyles.reps}>{exercise.reps}</p>
                    </div>
                  </div>
                ))}
                <div className={TrainingMainStyles['button-box']}>
                  {isLoggedIn ? (
                    <Link
                      to={`/training/${specific}`}
                      className={TrainingMainStyles['progress-btn']}
                      id='progress-btn'
                    >
                      <p>Progres</p>
                    </Link>
                  ) : (
                    <Link
                      to='/login'
                      className={TrainingMainStyles['progress-btn']}
                      id='progress-btn'
                    >
                      Progres
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedExercise && (
          <ExercisePopup
            exercise={selectedExercise}
            onClose={() => setSelectedExercise(null)}
          />
        )}
      </div>
    </>
  );
};

const TrainingMain = () => {
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const exerciseTypes = [
    {
      id: 1,
      typeName: 'Piłka nożna',
      specific: 'stamina-progress',
      exercises: [
        {
          id: 1,
          name: 'Przysiad ze sztangą na karku',
          sets: '3 serie',
          reps: '8 powtórzeń',
        },
        {
          id: 2,
          name: 'Wskoki na skrzynię',
          sets: '3 serie',
          reps: '12 powtórzeń',
        },
        {
          id: 3,
          name: 'Wyciskanie sztangi na ławce poziomej',
          sets: '3 serie',
          reps: '8 powtórzeń',
        },
        {
          id: 4,
          name: 'Podciąganie na drążku',
          sets: '3 serie',
          reps: '10 powtórzeń',
        },
        {
          id: 5,
          name: 'Wyciskanie żołnierskie',
          sets: '3 serie',
          reps: '8 powtórzeń',
        },
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
        {
          id: 9,
          name: 'Podciąganie na drążku',
          sets: '4 serie',
          reps: 'Max powtórzeń',
        },
        {
          id: 10,
          name: 'Wyciskanie sztangi na ławce poziomej',
          sets: '4 serie',
          reps: '4 powtórzeń',
        },
        { id: 11, name: 'Slam Ball', sets: '4 serie', reps: '6 powtórzeń' },
      ],
    },
    {
      id: 3,
      typeName: 'Koszykówka',
      specific: 'eval-progress',
      exercises: [
        {
          id: 12,
          name: 'Przysiad ze sztangą',
          sets: '4 serie',
          reps: '8 powtórzeń',
        },
        {
          id: 13,
          name: 'Wykroki / Zakroki',
          sets: '4 serie',
          reps: '8 powtórzeń',
        },
        {
          id: 14,
          name: 'Wyciskanie sztangi na ławce poziomej',
          sets: '4 serie',
          reps: '5 powtórzeń',
        },
        {
          id: 15,
          name: 'Zarzuty ze sztangą',
          sets: '4 serie',
          reps: '5 powtórzeń',
        },
        { id: 16, name: 'Martwy ciąg', sets: '4 serie', reps: '5 powtórzeń' },
        {
          id: 17,
          name: 'Wejścia na skrzynie',
          sets: '3 serie',
          reps: '12 powtórzeń',
        },
        {
          id: 18,
          name: 'Podciąganie na drążku',
          sets: '3 serie',
          reps: '10 powtórzeń',
        },
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
    centerPadding: '0',
  };

  const gymPlans = [
    { id: 1, content: 'FBW' },
    { id: 2, content: 'SPLIT' },
    { id: 3, content: 'PUSH & PULL & LEGS' },
  ];

  const fbwPlan = [
    {
      excA: [
        'Przysiady 5x5',
        'Wyciskanie leżąc 5x5',
        'Wiosłowanie 5x5',
        'Wznosy bokiem 3x8',
        'Hip Thrust 3x8',
        'Allahy 3x8',
        'Łydki 3x8',
      ],
      excB: [
        'Martwy ciąg klasyczny 5x5',
        'Wyciskanie żołnierskie 5x5',
        'Podciąganie wąsko 5x5',
        'Zakroki 3x8',
        'Odwodziciele 3x8',
        'Deska x3',
        'Łydki 3x8',
      ],
    },
  ];

  const splitPlan = [
    {
      id: 1,
      day: 'Poniedziałek',
      exc: [
        'Wyciskanie leżac 4x 8-12',
        'Wyciskanie hantli na ławce skośnej 4x 8-12',
        'Rozpiętki 4x 8-12',
        'Francuzy 3x 10-12',
        'Linka na triceps 3x 8-12',
      ],
    },
    {
      id: 2,
      day: 'Środa',
      exc: [
        'Podciąganie neutralne 4xMR',
        'Lat pulldowns 4x 10-12',
        'Wiosłowanie sztangą 4x 10-12',
        'Facepull 4x 10-12',
        'Bicep curls 3x10',
        'Hammer curls 3x10',
      ],
    },
    {
      id: 3,
      day: 'Piątek',
      exc: [
        'Przysiad ze sztangą 4x 10-12',
        'Martwy ciąg klasyczny 4x 10-12',
        'Hack squat 4x 10-12',
        'Lying leg curls 4x 10-12',
      ],
    },
  ];

  const pplPlan = [
    {
      id: 1,
      day: 'Poniedziałek (PUSH)',
      exc: [
        'Wyciskanie hantli na ławce poziomej 4x 5-8',
        'Wyciskanie hantli na ławce skośnej 4x 8-10',
        'Rozpiętki 4x 10-12',
        'Wyciskanie żołnierskie 4x 5-8',
        'Wznosy bokiem 4x 10-20',
        'Wyciskanie sztangi wąskim chwytem na ławce poziomej 3x 6-8',
        'Pompki na poręczach 4x 8-10',
      ],
    },
    {
      id: 2,
      day: 'Wtorek (PULL)',
      exc: [
        'Martwy ciąg klasyczny 4x 5-8',
        'Wiosłowanie sztangą nachwytem 4x 8-12',
        'Lat pulldowns 4x 8-12',
        'Wiosłowanie hantlem jednorącz 4x 10-12',
        'Bicep curls 3x 8-10',
        'Hammer curls 3x 8-12',
      ],
    },
    {
      id: 3,
      day: 'Piątek (LEGS)',
      exc: [
        'Przysiad ze sztangą 4x 10-12',
        'Martwy ciąg klasyczny 4x 10-12',
        'Hack squat 4x 10-12',
        'Lying leg curls 4x 10-12',
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState('');

  const planPicked = (name) => {
    console.log(name);
    setSelectedPlan(name);
  };

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
        <h3>Wybierz plan na siłownię</h3>
        <Slider {...settings}>
          {gymPlans.map((item) => (
            <div className={TrainingMainStyles.slide} key={item.id}>
              <h3 onClick={() => planPicked(item.content)}>{item.content}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <div className={TrainingMainStyles['picked-plans-container']}>
        {selectedPlan === 'FBW' && (
          <div className={TrainingMainStyles['plan-selected']}>
            {fbwPlan.map((item, index) => (
              <div key={index}>
                <ul>
                  <h4>Plan A:</h4>
                  {item.excA.map((excercise, idx) => (
                    <li key={idx}>{excercise}</li>
                  ))}
                  <h4>Plan B:</h4>
                  {item.excB.map((excercise, idx) => (
                    <li key={idx}>{excercise}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}{' '}
        {selectedPlan === 'SPLIT' && (
          <div className={TrainingMainStyles['plan-selected']}>
            {splitPlan.map((item, index) => (
              <div className={TrainingMain['plan-box']} key={index}>
                <h4>{item.day}</h4>
                <ul>
                  {item.exc.map((exercise, idx) => (
                    <li key={idx}>{exercise}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {selectedPlan === 'PUSH & PULL & LEGS' && (
          <div className={TrainingMainStyles['plan-selected']}>
            {pplPlan.map((item, index) => (
              <div key={index} className={TrainingMain['plan-box']}>
                <h4>{item.day}</h4>
                <ul>
                  {item.exc.map((exercise, idx) => (
                    <li key={idx}>{exercise}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={TrainingMainStyles['personal-trainers-container']}>
        <div className={TrainingMainStyles['personal-trainer-box']}>
          <div className={TrainingMainStyles['trainer-box-up']}>
            <div className={TrainingMainStyles['trainer-img']}></div>
          </div>
          <div className={TrainingMainStyles['trainer-box-down']}>
            <p className={TrainingMainStyles.name}>Trener 1</p>
            <p className={TrainingMainStyles.email}>trener1@gmail.com</p>
            <p className={TrainingMainStyles.tel}>123 456 789</p>
          </div>
        </div>
        <div className={TrainingMainStyles['personal-trainer-box']}>
          <div className={TrainingMainStyles['trainer-box-up']}>
            <div className={TrainingMainStyles['trainer-img']}></div>
          </div>
          <div className={TrainingMainStyles['trainer-box-down']}>
            <p className={TrainingMainStyles.name}>Trener 1</p>
            <p className={TrainingMainStyles.email}>trener1@gmail.com</p>
            <p className={TrainingMainStyles.tel}>123 456 789</p>
          </div>
        </div>
        <div className={TrainingMainStyles['personal-trainer-box']}>
          <div className={TrainingMainStyles['trainer-box-up']}>
            <div className={TrainingMainStyles['trainer-img']}></div>
          </div>
          <div className={TrainingMainStyles['trainer-box-down']}>
            <p className={TrainingMainStyles.name}>Trener 3</p>
            <p className={TrainingMainStyles.email}>trener1@gmail.com</p>
            <p className={TrainingMainStyles.tel}>123 456 789</p>
          </div>
        </div>
      </div>
      <Footer
        gradient={
          'linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(86, 76, 76, 1) 100%)'
        }
      />
    </>
  );
};

export default TrainingMain;
