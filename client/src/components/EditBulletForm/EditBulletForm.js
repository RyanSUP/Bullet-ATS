import { useState } from 'react'
const EditBulletForm = ({ bullet }) => {
  const [formData, setFormData] = useState({
    text: bullet.text
  })

  const handleChange = (e) => {
    setFormData({text: e.target.value})
    bullet.text = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} >
      <input 
        type='text'
        onChange={handleChange}
        value={formData.text}
        name="text"
        required 
        className="w-full border-2 p-3"
      />
    </form>
  );
}
 
export default EditBulletForm;