import React, { useState, useEffect } from 'react';
import styles from '../styles/RehabMain.module.css';
import RehabHero from '../img/rehab-big.png';
import HumanModel from '../img/bones-muscles.png';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import PopupDefault from './PopupDefault';

const RehabMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lineCoordinatesMuscles, setLineCoordinatesMuscles] = useState([]);
  const [lineCoordinatesBones, setLineCoordinatesBones] = useState([]);
  const [muscleGuide, setMuscleGuide] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showBones, setShowBones] = useState(false);

  const musclesData = {
    Czworoboczny: 'Masaż mięśnia czworobocznego',
    Naramienny: 'Masaż mięśnia naramiennego',
    'Piersiowy większy': 'Masaż piersiowego większego',
    Biceps: 'Masaż bicepsu',
    Naramienny: 'Masaż mięśnia naramiennego',
    'Prosty brzucha': 'Masaż mięśnia prostego brzucha',
    'Ramienno-promieniowy': 'Masaż mięśnia ramienno-promieniowego',
    'Skośny zewnętrzny brzucha': 'Masaż mięśnia skośnego zewnętrznego brzucha',
    'Glistowate ręki': 'Masaż mięśni glistowatych ręki',
    'Prosty uda': 'Masaż mięśnia prostego uda',
    'Obszerny przyśrodkowy': 'Masaż mięśnia obszernego przyśrodkowego',
    'Piszczelowy przedni': 'Masaż mięśnia piszczelowego przedniego',
  };

  const togglePopup = (muscleInfo) => {
    setMuscleGuide(muscleInfo);
    setShowPopup(!showPopup);
    console.log(showPopup);
  };

  const handleMuscle = (event, muscle) => {
    const circle = event.target;
    const bbox = circle.getBBox();
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;
    const endX = centerX + 100;
    const endY = centerY;
    const existingIndex = lineCoordinatesMuscles.findIndex(
      (coord) => coord.muscle === muscle
    );
    if (existingIndex !== -1) {
      setLineCoordinatesMuscles((prevCoordinates) =>
        prevCoordinates.filter((_, index) => index !== existingIndex)
      );
    } else {
      setLineCoordinatesMuscles((prevCoordinates) => [
        ...prevCoordinates,
        { startX: centerX, startY: centerY, endX, endY, muscle },
      ]);
    }
  };

  const handleBone = (event, bone) => {
    const circle = event.target;
    const bbox = circle.getBBox();
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;
    const endX = centerX - 100;
    const endY = centerY;

    const existingIndex = lineCoordinatesBones.findIndex(
      (coord) => coord.bone === bone
    );
    if (existingIndex !== -1) {
      setLineCoordinatesBones((prevCoordinates) =>
        prevCoordinates.filter((_, index) => index !== existingIndex)
      );
    } else {
      setLineCoordinatesBones((prevCoordinates) => [
        ...prevCoordinates,
        { startX: centerX, startY: centerY, endX, endY, bone },
      ]);
    }
  };

  const showAllMuscles = () => {
    const muscleCircles = document.querySelectorAll('#muscle');
    setLineCoordinatesMuscles((prevCoordinates) => {
      let updatedCoordinates = [...prevCoordinates];
      muscleCircles.forEach((circle) => {
        const muscle = circle.getAttribute('data-muscle-name');
        const x = parseFloat(circle.getAttribute('cx'));
        const y = parseFloat(circle.getAttribute('cy'));
        const r = parseFloat(circle.getAttribute('r'));
        // Check if the muscle is already shown
        const existingIndex = updatedCoordinates.findIndex(
          (coord) => coord.muscle === muscle
        );
        if (existingIndex === -1) {
          updatedCoordinates.push({
            startX: x,
            startY: y,
            endX: x + 100,
            endY: y,
            muscle,
          });
        }
      });
      setShowAll(true);
      return updatedCoordinates;
    });
  };

  const hideAllMuscles = () => {
    setLineCoordinatesMuscles([]);
    setShowAll(false);
  };

  const showAllBones = () => {
    const boneCircles = document.querySelectorAll('#bone');
    setLineCoordinatesBones((prevCoordinates) => {
      let updatedCoordinates = [...prevCoordinates];
      boneCircles.forEach((circle) => {
        const bone = circle.getAttribute('data-bone-name');
        const x = parseFloat(circle.getAttribute('cx'));
        const y = parseFloat(circle.getAttribute('cy'));
        const r = parseFloat(circle.getAttribute('r'));
        const existingIndex = updatedCoordinates.findIndex(
          (coord) => coord.bone === bone
        );
        if (existingIndex === -1) {
          updatedCoordinates.push({
            startX: x,
            startY: y,
            endX: x - 100,
            endY: y,
            bone,
          });
        }
      });
      setShowBones(true);
      return updatedCoordinates;
    });
  };

  const hideAllBones = () => {
    setLineCoordinatesBones([]);
    setShowBones(false);
  };

  return (
    <>
      <Navbar />
      <Header
        heroImage={RehabHero}
        title={'Rehabilitacja'}
        gradient={
          'linear-gradient(45deg, rgba(8, 206, 255, 0.75), rgba(8, 24, 255, 0.75))'
        }
      />
      <section className={styles['model-container']}>
        <div className={styles['muscles-button-box']}>
          <button onClick={showAllMuscles} disabled={showAll}>
            Pokaż mięśnie
          </button>
          <button onClick={hideAllMuscles} disabled={!showAll}>
            Ukryj mięśnie
          </button>
        </div>
        <div className={styles['bones-button-box']}>
          <button onClick={showAllBones} disabled={showBones}>
            Pokaż kości
          </button>
          <button onClick={hideAllBones} disabled={!showBones}>
            Ukryj Kości
          </button>
        </div>
        <p>Kliknij na nazwę mięśnia aby poznać instrukcję masażu</p>
        <svg viewBox='0 0 400 600' className={styles.svg}>
          <style>
            {`
                                .circle {
                                    animation: toggleEffect 2s infinite ease-in-out;
                                }
                            `}
          </style>
          <image
            href={HumanModel}
            x='0'
            y='0'
            width='400'
            height='600'
            className={styles['human-model']}
          ></image>
          <circle
            className={styles.circle}
            id='naramienny'
            cx='210'
            cy='85'
            r='3'
            fill='green'
            onClick={(event) =>
              handleMuscle(event, 'Mostkowo-obojczykowo-sutkowy')
            }
          />
          <circle
            id='muscle'
            data-muscle-name='Czworoboczny'
            cx='230'
            cy='97'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Czworoboczny')}
            className={styles['circle']}
          />
          <circle
            id='muscle'
            data-muscle-name='Naramienny'
            cx='255'
            cy='115'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Naramienny')}
          />
          <circle
            id='muscle'
            data-muscle-name='Piersiowy większy'
            cx='225'
            cy='135'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Piersiowy większy')}
          />
          <circle
            id='muscle'
            data-muscle-name='Biceps'
            cx='258'
            cy='165'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Biceps')}
          />
          <circle
            id='muscle'
            data-muscle-name='Prosty brzucha'
            cx='215'
            cy='180'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Prosty brzucha')}
          />
          <circle
            id='muscle'
            data-muscle-name='Ramienno-promieniowy'
            cx='279'
            cy='205'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Ramienno-promieniowy')}
          />
          <circle
            id='muscle'
            data-muscle-name='Skośny zewnętrzny brzucha'
            cx='240'
            cy='245'
            r='3'
            fill='green'
            onClick={(event) =>
              handleMuscle(event, 'Skośny zewnętrzny brzucha')
            }
          />
          <circle
            id='muscle'
            data-muscle-name='Glistowate ręki'
            cx='302'
            cy='290'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Glistowate ręki')}
          />
          <circle
            id='muscle'
            data-muscle-name='Prosty uda'
            cx='235'
            cy='330'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Prosty uda')}
          />
          <circle
            id='muscle'
            data-muscle-name='Obszerny przyśrodkowy'
            cx='220'
            cy='375'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Obszerny przyśrodkowy')}
          />
          <circle
            id='muscle'
            data-muscle-name='Piszczelowy przedni'
            cx='232'
            cy='460'
            r='3'
            fill='green'
            onClick={(event) => handleMuscle(event, 'Piszczelowy przedni')}
          />
          <circle
            id='bone'
            data-bone-name='Żuchwa'
            cx='199'
            cy='72'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Żuchwa')}
          />
          <circle
            id='bone'
            data-bone-name='Obojczyk'
            cx='180'
            cy='104'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Obojczyk')}
          />
          <circle
            id='bone'
            data-bone-name='Mostek'
            cx='199'
            cy='135'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Mostek')}
          />
          <circle
            id='bone'
            data-bone-name='Kość ramienna'
            cx='132'
            cy='195'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Kość ramienna')}
          />
          <circle
            id='bone'
            data-bone-name='Kość promieniowa'
            cx='115'
            cy='232'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Kość promieniowa')}
          />
          <circle
            id='bone'
            data-bone-name='Kość łokciowa'
            cx='117'
            cy='250'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Kość łokciowa')}
          />
          <circle
            id='bone'
            data-bone-name='Kość udowa'
            cx='165'
            cy='340'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Kość udowa')}
          />
          <circle
            id='bone'
            data-bone-name='Rzepka'
            cx='173'
            cy='406'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Rzepka')}
          />
          <circle
            id='bone'
            data-bone-name='Kość piszczelowa'
            cx='170'
            cy='455'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Kość piszczelowa')}
          />
          <circle
            id='bone'
            data-bone-name='Kość strzałkowa'
            cx='163'
            cy='475'
            r='3'
            fill='red'
            onClick={(event) => handleBone(event, 'Kość strzałkowa')}
          />
          {lineCoordinatesMuscles.map((coords, index) => (
            <React.Fragment key={index}>
              <line
                x1={coords.startX}
                y1={coords.startY}
                x2={coords.endX}
                y2={coords.endY}
                stroke='black'
              />
              <text
                x={coords.endX - 10}
                y={coords.endY - 5}
                fontSize='12'
                onClick={(event) => togglePopup(musclesData[coords.muscle])}
              >
                {coords.muscle}
              </text>
            </React.Fragment>
          ))}
          {lineCoordinatesBones.map((coords, index) => (
            <React.Fragment key={index}>
              <line
                x1={coords.startX}
                y1={coords.startY}
                x2={coords.endX}
                y2={coords.endY}
                stroke='black'
              />
              <text x={coords.endX - 10} y={coords.endY - 5} fontSize='12'>
                {coords.bone}
              </text>
            </React.Fragment>
          ))}
        </svg>
        {showPopup && <PopupDefault info={muscleGuide} onClose={togglePopup} />}
      </section>
      <div className={styles['therap-container']}>
        <div className={styles['therap-box']}>
          <div className={styles['therap-box-up']}>
            <div className={styles['therap-img']}></div>
          </div>
          <div className={styles['therap-box-down']}>
            <p className={styles.name}>Trener 1</p>
            <p className={styles.email}>trener1@gmail.com</p>
            <p className={styles.tel}>123 456 789</p>
          </div>
        </div>
        <div className={styles['therap-box']}>
          <div className={styles['therap-box-up']}>
            <div className={styles['therap-img']}></div>
          </div>
          <div className={styles['therap-box-down']}>
            <p className={styles.name}>Trener 2</p>
            <p className={styles.email}>trener1@gmail.com</p>
            <p className={styles.tel}>123 456 789</p>
          </div>
        </div>
        <div className={styles['therap-box']}>
          <div className={styles['therap-box-up']}>
            <div className={styles['therap-img']}></div>
          </div>
          <div className={styles['therap-box-down']}>
            <p className={styles.name}>Trener 3</p>
            <p className={styles.email}>trener1@gmail.com</p>
            <p className={styles.tel}>123 456 789</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RehabMain;
