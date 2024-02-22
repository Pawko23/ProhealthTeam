import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExercisePopup from './ExercisePopup';
import PopupDefault from './PopupDefault';
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
  const [exerciseDescription, setSelectedExerciseDescription] = useState('')
  const handleInformation = (exercise) => {
    console.log(exercise.name)
    setSelectedExercise(exercise);
    console.log(selectedExercise)
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
          description: 'opis wykonania przysiadu ze sztangą na karku'
        },
        {
          id: 2,
          name: 'Wskoki na skrzynię',
          sets: '3 serie',
          reps: '8 powtórzeń',
          description: 'opis wykonania wskoków na skrzynię'
        },
        {
          id: 3,
          name: 'Wyciskanie sztangi na ławce poziomej',
          sets: '3 serie',
          reps: '8 powtórzeń',
          description: 'opis wyciskania sztangi na ławce poziomej'
        },
        {
          id: 4,
          name: 'Podciąganie na drążku nachwytem',
          sets: '3 serie',
          reps: '8 powtórzeń',
          description: 'opis wykonania podciągania na drążku nachwytem'
        },
        {
          id: 5,
          name: 'Wyciskanie żołnierskie',
          sets: '3 serie',
          reps: '8 powtórzeń',
          description: 'opis wykonania wyciskania żołnierskiego'
        },
        { id: 6, name: 'Plank przodem', sets: '3 serie', reps: '1 minuta', description: 'opis wykonania planku przodem' },
      ],
    },
    {
      id: 2,
      typeName: 'Siatkówka',
      specific: 'jump-progress',
      exercises: [
        { id: 7, name: 'Box Squat', sets: '4 serie', reps: '8 powtórzeń', description: 'opis wykonania box squatu' },
        { id: 8, name: 'Hip Thrust', sets: '4 serie', reps: '8 powtórzeń', description: 'opis wykonania hip thrustów' },
        {
          id: 9,
          name: 'Podciąganie na drążku nachwytem',
          sets: '4 serie',
          reps: 'Max powtórzeń',
          description: 'opis wykonania podciągania na drążku nachwytem'
        },
        {
          id: 10,
          name: 'Wyciskanie sztangi na ławce poziomej',
          sets: '4 serie',
          reps: '4 powtórzeń',
          description: 'opis wykonania wyciskania sztangi na ławce poziomej'
        },
        { id: 11, name: 'Slam Ball', sets: '4 serie', reps: '6 powtórzeń', description: 'opis wykonania slam ballu' },
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
          description: 'opis wykonania przysiadu ze sztangą'
        },
        {
          id: 13,
          name: 'Wykroki',
          sets: '4 serie',
          reps: '8 powtórzeń',
          description: 'opis wykonania wykroków'
        },
        {
          id: 14,
          name: 'Wyciskanie sztangi na ławce poziomej',
          sets: '4 serie',
          reps: '8 powtórzeń',
          description: 'opis wykonania wyciskania sztangi na ławce poziomej'
        },
        {
          id: 15,
          name: 'Zarzuty ze sztangą',
          sets: '4 serie',
          reps: '8 powtórzeń',
          description: 'opis wykonania zarzutów ze sztangą'
        },
        { id: 16, name: 'Martwy ciąg', sets: '4 serie', reps: '8 powtórzeń', description: 'opis wykonania martwego ciągu' },
        {
          id: 17,
          name: 'Wejścia na skrzynie',
          sets: '3 serie',
          reps: '8 powtórzeń',
          description: 'opis wykonania wejść na skrzynie'
        },
        {
          id: 18,
          name: 'Podciąganie na drążku nachwytem',
          sets: '3 serie',
          reps: '10 powtórzeń',
          description: 'opis wykonania podciągania na drążku nachwytem'
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
        { name: 'Przysiady 5x5', description: 'opis wykonania przysiadów'},
        { name: 'Wyciskanie leżąc 5x5', description: 'opis wykonania wyciskania'},
        { name: 'Wiosłowanie 5x5', description: 'opis wykonania wiosłowania'},
        { name: 'Wznosy bokiem 3x8', description: 'opis wykonania wznosów'},
        { name: 'Hip Thrust 3x8', description: 'opis wykonania hip thrustów'},
        { name: 'Allahy 3x8', description: 'opis wykonania allahów'},
        { name: 'Łydki 3x8', description: 'opis wykonania łydek'}
      ],
      excB: [
        { name: 'Martwy ciąg klasyczny 5x5', description: 'opis wykonania martwego ciągu' }, 
        { name: 'Wyciskanie żołnierskie 5x5', description: 'opis wykonania wyciskania żołnierskiego'},
        { name: 'Podciąganie wąsko 5x5', description: 'opis wykonania podciągania wąsko'},
        { name: 'Zakroki 3x8', description: 'opis wykonania zakroków'},
        { name: 'Odwodziciele 3x8', description: 'opis wykonania odwodzicieli' },
        { name: 'Deska x3', description: 'opis wykonania deski'},
        { name: 'Łydki 3x8', description: 'opis wykonania łydek'}
      ],
    },
  ];

  const splitPlan = [
    {
      id: 1,
      day: 'Poniedziałek',
      exc: [
        { name: 'Wyciskanie leżac 4x 8-12', description: 'opis wykonania wyciskania leżąc'},
        { name: 'Wyciskanie hantli na ławce skośnej 4x 8-12', description: 'opis wykonania wyciskania hantli na ławce skośnej' },
        { name: 'Rozpiętki 4x 8-12', description: 'opis wykonania rozpiętek'},
        { name: 'Francuzy 3x 10-12', description: 'opis wykonania francuzów'},
        { name: 'Linka na triceps 3x 8-12', description: 'opis wykonania linek na triceps'}
      ],
    },
    {
      id: 2,
      day: 'Środa',
      exc: [
        { name: 'Podciąganie neutralne 4xMR', description: 'opis wykonania podciągania neutralnego'},
        { name: 'Lat pulldowns 4x 10-12', description: 'opis wykonania lat pulldownów'},
        { name: 'Wiosłowanie sztangą 4x 10-12', description: 'opis wykonania wiosłowania sztangą'},
        { name: 'Facepull 4x 10-12', description: 'opis wykonania facepulli'},
        { name: 'Bicep curls 3x10', description: 'opis wykonania bicep curli'}, 
        { name: 'Hammer curls 3x10', description: 'opis wykonania hammer curli'}
      ],
    },
    {
      id: 3,
      day: 'Piątek',
      exc: [
        { name: 'Przysiad ze sztangą 4x 10-12', description: 'opis wykonania przysiadów ze sztangą'}, 
        { name: 'Martwy ciąg klasyczny 4x 10-12', description: 'opis wykonania martwego ciągu klasycznego'},
        { name: 'Hack squat 4x 10-12', description: 'opis wykonania hack squatu'},
        { name: 'Lying leg curls 4x 10-12', description: 'opis wykonania lying leg curli'}
      ],
    },
  ];

  const pplPlan = [
    {
      id: 1,
      day: 'Poniedziałek (PUSH)',
      exc: [
        { name: 'Wyciskanie hantli na ławce poziomej 4x 5-8', description: 'opis wykonania wyciskani hantli na ławce poziomej'},
        { name: 'Wyciskanie hantli na ławce skośnej 4x 8-10', description: 'opis wykonania wysikania hantli na ławce skośnej'},
        { name: 'Rozpiętki 4x 10-12', description: 'opis wykonania rozpiętek'},
        { name: 'Wyciskanie żołnierskie 4x 5-8', description: 'opis wykonania wyciskania żołnierskiego'},
        { name: 'Wznosy bokiem 4x 10-20', description: 'opis wykonania wznosów bokiemm'},
        { name: 'Wyciskanie sztangi wąskim chwytem na ławce poziomej 3x 6-8', description: 'opis wykonania wyciskania sztangi wąskim chwytem na ławce poziomej'},
        { name: 'Pompki na poręczach 4x 8-10', description: 'opis wykonania pompek na poręczach'}
      ],
    },
    {
      id: 2,
      day: 'Wtorek (PULL)',
      exc: [
        { name: 'Martwy ciąg klasyczny 4x 5-8', description: 'opis wykonania martwego ciągu klasycznego'},
        { name: 'Wiosłowanie sztangą nachwytem 4x 8-12', description: 'opis wykonania wiosłowania sztangą nachwytem'},
        { name: 'Lat pulldowns 4x 8-12', description: 'opis wykonania lat pulldownów'},
        { name: 'Wiosłowanie hantlem jednorącz 4x 10-12', description: 'opis wykonania wiosłowania hantlem jednorącz'},
        { name: 'Bicep curls 3x 8-10', description: 'opis wykonania bicep curli'},
        { name: 'Hammer curls 3x 8-12', description: 'opis wykonania hammer curli'}
      ],
    },
    {
      id: 3,
      day: 'Piątek (LEGS)',
      exc: [
        { name: 'Przysiad ze sztangą 4x 10-12', description: 'opis wykonania przysiadu ze sztangą'},
        { name: 'Martwy ciąg klasyczny 4x 10-12', description: 'opis wykonania martwego ciągu klasycznego'},
        { name: 'Hack squat 4x 10-12', description: 'opis wykonania hack squatu'},
        { name: 'Lying leg curls 4x 10-12', description: 'opis wykonania lying leg curli'}
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState('');

  const planPicked = (name) => {
    console.log(name);
    setSelectedPlan(name);
  };

  const [selectedGymExercise, setSelectedGymExercise] = useState(null);
  const [description, setDescription] = useState('')
  const handleGymExerciseClick = (name, description) => {
    setSelectedGymExercise(name);
    setDescription(description)
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
                {item.excA.map((exercise, idx) => (
                  <li key={idx} onClick={() => handleGymExerciseClick(exercise.name, exercise.description)}>{exercise.name}</li>
                ))}
                <h4>Plan B:</h4>
                {item.excB.map((exercise, idx) => (
                  <li key={idx} onClick={() => handleGymExerciseClick(exercise.name, exercise.description)}>{exercise.name}</li>
                ))}
              </ul>
            </div>
          ))}
       </div>
        )} 
        {selectedPlan === 'SPLIT' && (
          <div className={TrainingMainStyles['plan-selected']}>
            {splitPlan.map((item, index) => (
              <div className={TrainingMain['plan-box']} key={index}>
                <h4>{item.day}</h4>
                <ul>
                  {item.exc.map((exercise, idx) => (
                    <li key={idx} onClick={() => handleGymExerciseClick(exercise.name, exercise.description)}>{exercise.name}</li>
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
                    <li key={idx} onClick={() => handleGymExerciseClick(exercise.name, exercise.description)}>{exercise.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {selectedGymExercise && (
          <PopupDefault
            name={selectedGymExercise}
            description={description}
            onClose={() => setSelectedGymExercise(null)}
          />
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
