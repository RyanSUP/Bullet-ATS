import { SignupForm, LoginForm } from './index'
import { useState, useCallback } from 'react'

const Signup = ({handleSignupOrLogin}) => {

  const [showSignup, setShowSignup] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleButton = useCallback(()=> {
    setShowSignup(prev => !prev)
  }, [])

  const updateMessage = useCallback((message)=> {
    setErrorMessage(message)
  }, [])

  return (
    <>
      <button onClick={handleButton}>Login</button>
      {errorMessage &&
        <p>{errorMessage}</p>
      }
      {showSignup
        ? <SignupForm 
            updateMessage={updateMessage} 
            handleSignupOrLogin={handleSignupOrLogin} 
          />
        : <LoginForm  
            updateMessage={updateMessage} 
            handleSignupOrLogin={handleSignupOrLogin} 
          />
      }
    </>
  );
}
 
export default Signup;