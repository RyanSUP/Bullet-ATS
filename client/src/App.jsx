import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { NavBar, Signup, Home } from './components'

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
      <Routes>
        <Route
          exact
          path='/'
          element={
            user
            ? <Home />
            // Should be signup or login form
            : <Signup handleSignupOrLogin={handleSignupOrLogin} />
          }
        >
        </Route>
      </Routes>
    </>
  )
}

export default App
