import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Signup, Home } from './components'

import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())

  const handleLogout = () => {
    authService.logout()
    setUser(null)
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
            ? <Home user={user} handleLogout={handleLogout} />
            : <Signup handleSignupOrLogin={handleSignupOrLogin} />
          }
        >
        </Route>
      </Routes>
    </>
  )
}

export default App
