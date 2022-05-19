import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-screen"
    >
      <div className="bg-slate-400 p-4 rounded">
        <div className="m-1">
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="border-2 rounded-b p-3"
          />
        </div>
        <div className="m-1">
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="border-2 rounded-b p-3"
          />
        </div>
        <div className="m-1">
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="border-2 rounded-b p-3"
          />
        </div>
        <div className="m-1">
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            placeholder="Confirm password"
            className="border-2 rounded-b p-3"
          />
        </div>
        <div className="m-1">
          <button disabled={isFormInvalid()} className="w-full bg-slate-600 p-3 text-slate-200 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-600">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  )
}

export default SignupForm
