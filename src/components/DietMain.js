import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DietMainStyles from '../styles/DietMain.module.css';
import Header from './Header';
import Navbar from './Navbar';
import DietPageHero from '../img/diet.jpg';
import { Link } from 'react-router-dom';

const DietMain = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('/recipes')
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Header heroImage={DietPageHero} />
      <div className={DietMainStyles.container}>
        <div className={DietMainStyles['diet-buttons']}>
        <button className={DietMainStyles['diet-btn']} id='progress-btn'>
          Kalkulator BMI
        </button>
        <button className={DietMainStyles['diet-btn']} id='progress-btn'>
          Mój progres
        </button>
        </div>

        <div className={DietMainStyles['search-bar-box']}>
          <input
            type='text'
            className={DietMainStyles['search-bar-input']}
            placeholder='Szukaj...'
          ></input>
        </div>
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe._id}`}>
            <div className={DietMainStyles['recipe-box']} key={recipe._id}>
              <div className={DietMainStyles['recipe-img']}></div>
              <p className={DietMainStyles['recipe-name']}>{recipe.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default DietMain;
