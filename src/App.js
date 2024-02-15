import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      const { exp } = JSON.parse(atob(token.split(".")[1]))
      const expirationTime = new Date(exp * 1000)
      const currentTime = new Date()

      if(currentTime < expirationTime) {
        setIsLoggedIn(true)
        const timeUntilExpiration = expirationTime - currentTime
        
        const logoutTimer = setTimeout(() => {
          handleLogout()
        }, timeUntilExpiration)

        return () => clearTimeout(logoutTimer)
      } else {
        handleLogout()
      }
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    alert('Sesja wygasła, zaloguj się ponownie!')
    navigate('/')
  }

  return (
    <AppRoutes />
  )
}

export default App;
