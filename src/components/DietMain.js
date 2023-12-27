import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DietMainStyles from '../styles/DietMain.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer'
import DietPageHero from '../img/diet.jpg';
import { Link } from 'react-router-dom';


const DietMain = () => {
  const [recipes, setRecipes] = useState([]);
  const [showBreakfastRecipes, setShowBreakRecipes] = useState(false);
  const [showSecondBreakfastRecipes, setShowSecondBreakfastRecipes] = useState(false);

  const toggleBreakfastRecipes = () => {
    setShowBreakRecipes(!showBreakfastRecipes);
  }
  const toggleIIBreakfastRecipes = () => {
    setShowSecondBreakfastRecipes(!showSecondBreakfastRecipes);
  }

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
        <div className={DietMainStyles['recipes-container']}>
          <div className={DietMainStyles['meal-recipes']}>
            <h3 onClick={toggleBreakfastRecipes}>ŚNIADANIA<i className={`fa-solid ${showBreakfastRecipes ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></h3>
            {showBreakfastRecipes && (
              <div>
                {recipes
                .filter((recipe) => recipe.type === 'breakfast')
                .map((recipe) => (
                  <Link to={`/recipes/${recipe._id}`}>
                    <div
                      className={DietMainStyles['recipe-box']}
                      key={recipe._id}
                    >
                      <div className={DietMainStyles['recipe-img']}></div>
                      <p className={DietMainStyles['recipe-name']}>
                        {recipe.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className={DietMainStyles['meal-recipes']}>
            <h3 onClick={toggleIIBreakfastRecipes}>II ŚNIADANIA<i className={`fa-solid ${showSecondBreakfastRecipes ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></h3>
            {showSecondBreakfastRecipes && (
              <div>
                {recipes
                .filter((recipe) => recipe.type === 'second_breakfast')
                .map((recipe) => (
                  <Link to={`/recipes/${recipe._id}`}>
                    <div
                      className={DietMainStyles['recipe-box']}
                      key={recipe._id}
                    >
                      <div className={DietMainStyles['recipe-img']}></div>
                      <p className={DietMainStyles['recipe-name']}>
                        {recipe.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DietMain;
