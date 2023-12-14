import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeStyles from '../styles/Recipe.module.css';
import Header from './Header';

const Recipe = () => {
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
      <Header heroImage={DietPageHero} />
      <div className='container'>
        <div className='recipe-image'></div>

        <div className='recipe-info'>
          <p className='recipe-name'></p>
          <p className='recipe-level'></p>
        </div>

        <div className='macros-box'>
          <div className='kcal'>500kcal</div>
          <div className='protein'>6.5g</div>
          <div className='fats'>12g</div>
          <div className='carbs'>27g</div>
        </div>

        <div className='ingredients-box'>
          <h3>Składniki</h3>
          <ul>
            <li>czosnek</li>
            <li>dupa</li>
          </ul>
        </div>

        <div className='prepare-box'>
          <p className='description'></p>
        </div>
      </div>
    </>
  );
};

export default Recipe;
