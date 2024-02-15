import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecipeStyles from '../styles/Recipe.module.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        console.log(id)
        const response = await fetch(`/recipes/${id}`);
        const data = await response.json();
        console.log()
        setRecipe(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };


    fetchRecipe();
  }, [id]);


  if (!recipe) {
    return <div></div>;
  }


  return (
    <>
      <Navbar />
      <div className={RecipeStyles.container}>

        <div className={RecipeStyles['recipe-info']}>
          <p className={RecipeStyles['recipe-name']}>{recipe.name}</p>
          <p className={RecipeStyles['recipe-level']}>{recipe.difficulty}</p>
        </div>

        <div className={RecipeStyles['recipe-image']}>
          <img src={`/${recipe.image}`} alt={recipe.name}/>
        </div>
        <div className={RecipeStyles['macros-box']}>
          <div className={classNames(RecipeStyles.kcal, RecipeStyles.box)}>{recipe.kcal} Kcal</div>
          <div className={classNames(RecipeStyles.protein, RecipeStyles.box)}>{recipe.protein} Białka</div>
          <div className={classNames(RecipeStyles.fats, RecipeStyles.box)}>{recipe.fats} Tłuszczy</div>
          <div className={classNames(RecipeStyles.carbs, RecipeStyles.box)}>{recipe.carbs} Węglowodanów</div>
        </div>

        <div className={RecipeStyles['ingredients-box']}>
          <h3>Składniki</h3>
            {recipe.ingredients}
        </div>

        <div className={RecipeStyles['prepare-box']}>
          <p className={RecipeStyles.description}>Płatki zagotuj i gotuje przez około 2 min ciągle mieszając, aby się nie przypaliły.
          Płatki zagotuj i gotuje przez około 2 min ciągle mieszając, aby się nie przypaliły.
          Płatki zagotuj i gotuje przez około 2 min ciągle mieszając, aby się nie przypaliły.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetails;
