import React, { useEffect, useState } from 'react';
import axios from 'axios'
import DietMainStyles from '../styles/DietMain.module.css'
import Header from './Header';
import DietPageHero from '../img/diet.jpg'

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
      <div className={DietMainStyles['burger-menu']}>
        <div className={DietMainStyles['menu-container']}>
          <ul>
            <li>
              <a href='#'>Dieta</a>
            </li>
            <li>
              <a href='#'>Trening</a>
            </li>
            <li>
              <a href='#'>Rehabilitacja</a>
            </li>
            <li>
              <a href='/login'>Konto</a>
            </li>
            <li>
              <a href='/register'>Zarejestruj się</a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a className={DietMainStyles.logo} href='/'>
              ProhealthTeam
            </a>
          </li>
          <li>
            <a href='/diet'>Dieta</a>
          </li>
          <li>
            <a href='/training'>Trening</a>
          </li>
          <li>
            <a href='/rehab'>Rehabilitacja</a>
          </li>
        </ul>
        <ul className={DietMainStyles.account}>
          <li>
            <a href='/login'>Konto</a>
          </li>
          <li>
            <a href='/register'>Zarejestruj się</a>
          </li>
        </ul> 
      </nav>
      <button className={DietMainStyles['burger-btn']} id='burger-btn'>
        <i className='fa-solid fa-bars' id='burger-icon'></i>
      </button>
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
          <div key={recipe.id} className={DietMainStyles['recipe-box']}>
            <div className={DietMainStyles['recipe-img']}>{recipe.type}</div>
            <p className={DietMainStyles['recipe-name']}>{recipe.name}</p>
          </div>
        ))}
      </div> 
    </>
  );
};

export default DietMain;
