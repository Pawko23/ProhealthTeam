import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import TrainingMain from './components/TrainingMain';
import DietMain from './components/DietMain';
import JumpProgress from './components/JumpProgress';
import RehabMain from './components/RehabMain';
import RecipeDetails from './components/RecipeDetails';
import BmiCalculator from './components/BmiCalculator';
import UserProgress from './components/UserProgress';
import StaminaProgress from './components/StaminaProgress';
import EvalProgress from './components/EvalProgress';
import Account from './components/Account';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/account' element={<Account />} />
      <Route path='/training' element={<TrainingMain />} />
      <Route path='/training/stamina-progress' element={<StaminaProgress />} />
      <Route path='/training/jump-progress' element={<JumpProgress />} />
      <Route path='/training/eval-progress' element={<EvalProgress />} />
      <Route path='/rehabilitation' element={<RehabMain />} />
      <Route path='/recipes' element={<DietMain />} />
      <Route path='/recipes/:id' element={<RecipeDetails />} />
      <Route path='/bmicalculator' element={<BmiCalculator />} />
      <Route path='/userprogress' element={<UserProgress />} />
    </Routes>
  );
}

export default AppRoutes;
