import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
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
            id="email"
            value={formData.email}
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
            value={formData.pw}
            name="pw"
            onChange={handleChange}
            placeholder="Password"
            className="border-2 rounded-b p-3"
          />
        </div>
        <div>
          <button className="w-full bg-slate-600 p-3 text-slate-200 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-600">Log In</button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
