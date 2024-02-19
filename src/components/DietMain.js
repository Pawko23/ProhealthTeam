import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DietMainStyles from '../styles/DietMain.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer'
import DietPageHero from '../img/diet.jpg';
import { Link } from 'react-router-dom';


const DietMain = () => {

  const isLoggedIn = !!localStorage.getItem('token')

  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')

  const searchInput = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Header 
        heroImage={DietPageHero} 
        gradient={'linear-gradient(45deg, rgba(8, 206, 255, 0.75), rgba(8, 24, 255, 0.75))'}
        title={'Dieta'}
      />
      <div className={DietMainStyles.container}>
        <div className={DietMainStyles['diet-buttons']}>
          <button className={DietMainStyles['diet-btn']} id='progress-btn'><Link to='/bmicalculator' className={DietMainStyles['link-to']}>Kalkulator BMI</Link></button>
          <button className={DietMainStyles['diet-btn']} id='progress-btn'>
            {isLoggedIn && <Link to='/userprogress' className={DietMainStyles['link-to']}>Mój Progres</Link>}
            {!isLoggedIn && <Link to='/login' className={DietMainStyles['link-to']}>Mój Progres</Link>}
          </button>
        </div>

        <div className={DietMainStyles['search-bar-box']}>
          <input
            type='text'
            className={DietMainStyles['search-bar-input']}
            placeholder='Wyszukaj po nazwie lub ulubionym produkcie...'
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
                      <div className={DietMainStyles['recipe-img']}>
                        <img src={recipe.image} alt={recipe.name}/>
                      </div>
                      <p className={DietMainStyles['recipe-name']}>
                        {recipe.name}
                      </p>
                    </div>
                  </Link>
        ) : null;
      })}
      </div>
      <Footer />
    </>
  );
};

export default DietMain;
