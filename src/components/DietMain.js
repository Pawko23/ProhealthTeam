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
  const [searchQuery, setSearchQuery] = useState('')

  const searchInput = (e) => {
    setSearchQuery(e.target.value)
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
          <button className={DietMainStyles['diet-btn']} id='progress-btn'><Link to='/bmicalculator'>Kalkulator BMI</Link></button>
          <button className={DietMainStyles['diet-btn']} id='progress-btn'><Link to=''>Mój Progres</Link></button>
        </div>

        <div className={DietMainStyles['search-bar-box']}>
          <input
            type='text'
            className={DietMainStyles['search-bar-input']}
            placeholder='Szukaj...'
            value={searchQuery}
            onChange={searchInput}
          ></input>
        </div>


        {recipes.map((recipe) => {
        const recipeExists =
          recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchQuery.toLowerCase())
          );

        return recipeExists ? (
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
        ) : null;
      })}






        {/* <div className={DietMainStyles['recipes-container']}>
          <div className={DietMainStyles['meal-recipes']}>
            <h3>ŚNIADANIA</h3>
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
          </div>
          <div className={DietMainStyles['meal-recipes']}>
            <h3>II ŚNIADANIA</h3>
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
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default DietMain;
