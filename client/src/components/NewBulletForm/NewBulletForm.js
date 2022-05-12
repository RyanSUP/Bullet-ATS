import { useState } from 'react'
const NewBulletForm = ({ postBullet }) => {
  const [formData, setFormData] = useState({
    text: ''
  })

  const handleChange = (e) => {
    setFormData({text: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postBullet(formData)
    setFormData({text: ''})
  }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <input 
        type='text'
        onChange={handleChange}
        value={formData.text}
        name="text"
        required 
        placeholder='New bullet'
      />
    </form>
  );
}
 
export default NewBulletForm;