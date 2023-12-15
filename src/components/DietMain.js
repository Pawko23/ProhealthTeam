import React, { useEffect, useState } from 'react';
import axios from 'axios'
import DietMainStyles from '../styles/DietMain.module.css'
import Header from './Header';
import Navbar from './Navbar';
import DietPageHero from '../img/diet.jpg'
import { Link } from 'react-router-dom';

const DietMain = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get('/recipes').then(response => {
      setRecipes(response.data)
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    })
  }, [])

  return (
    <>
      <Navbar />
      <Header 
        heroImage={DietPageHero}
      />
      <div className={DietMainStyles.container}>
        <button className={DietMainStyles['progress-btn']} id='progress-btn'>
          Śledź progres
        </button>

        <div className={DietMainStyles['search-bar-box']}>
          <input
            type='text'
            className={DietMainStyles['search-bar-input']}
            placeholder='Szukaj...'
          ></input>
        </div>
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
            <div className={DietMainStyles['recipe-box']}>
              <div className={DietMainStyles['recipe-img']}>{recipe.type}</div>
              <p className={DietMainStyles['recipe-name']}>{recipe.name}</p>
          </div>
          </Link>
        ))}
      </div> 
    </>
  );
};

export default DietMain;
