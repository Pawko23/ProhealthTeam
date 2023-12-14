import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeStyles from '../styles/Recipe.module.css';
import Navbar from './Navbar';
import Header from './Header';
import classNames from 'classnames';

const Recipe = () => {
  return (
    <>
      <Navbar />
      <div className={RecipeStyles.container}>

        <div className={RecipeStyles['recipe-info']}>
          <p className={RecipeStyles['recipe-name']}>Makaron z kurczakiem</p>
          <p className={RecipeStyles['recipe-level']}>Średni</p>
        </div>

        <div className={RecipeStyles['recipe-image']}></div>
        <div className={RecipeStyles['macros-box']}>
          <div className={classNames(RecipeStyles.kcal, RecipeStyles.box)}>500kcal</div>
          <div className={classNames(RecipeStyles.protein, RecipeStyles.box)}>6.5g</div>
          <div className={classNames(RecipeStyles.fats, RecipeStyles.box)}>12g</div>
          <div className={classNames(RecipeStyles.carbs, RecipeStyles.box)}>27g</div>
        </div>

        <div className={RecipeStyles['ingredients-box']}>
          <h3>Składniki</h3>
          <ul>
            <li>czosnek</li>
            <li>dupa</li>
          </ul>
        </div>

        <div className={RecipeStyles['prepare-box']}>
          <p className={RecipeStyles.description}>Płatki zagotuj i gotuje przez około 2 min ciągle mieszając, aby się nie przypaliły.
          Płatki zagotuj i gotuje przez około 2 min ciągle mieszając, aby się nie przypaliły.
          Płatki zagotuj i gotuje przez około 2 min ciągle mieszając, aby się nie przypaliły.
          </p>
        </div>
      </div>
    </>
  );
};

export default Recipe;
