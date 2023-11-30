import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage';
import TrainingMain from './components/TrainingMain';
import DietMain from './components/DietMain';
import TrainingChosen from './components/TrainingChosen';
import RehabMain from './components/RehabMain';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={ <RegisterPage />} />
      <Route path='/login' element={ <LoginPage />} />
      <Route path='/training' element={ <TrainingMain />} />
      <Route path='/diet' element={ <DietMain /> } />
      <Route path='/trainingchosen' element={ < TrainingChosen/> } />
      <Route path='/rehabilitation' element={ < RehabMain /> } />
    </Routes>
  )
}

export default App;
