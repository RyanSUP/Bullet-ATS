import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { NavBar, SignupForm, Home } from './components'

import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser({})
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          exact
          path='/'
          element={
            user
            ? <Home />
            // Should be signup or login form
            : <SignupForm handleSignupOrLogin={handleSignupOrLogin} />
          }
        >
        </Route>
      </Routes>
    </>
  )
}

export default App
