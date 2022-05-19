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
    <div className="bg-slate-600 h-10 flex justify-end">
      <button 
        onClick={handleButton}
        className="hover:cursor-pointer h-full mr-10 text-slate-200"
      >
        LOGIN
      </button>
    </div>
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