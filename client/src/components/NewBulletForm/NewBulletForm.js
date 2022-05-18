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
    if(formData.text !== '' || formData.text !== ' ') {
      postBullet(formData)
    }
    setFormData({text: ''})
  }

  return (
    <ul>
      <li>
        <form onChange={handleChange} onSubmit={handleSubmit} >
          <input 
            type='text'
            onChange={handleChange}
            value={formData.text}
            name="text"
            required 
            placeholder='New bullet'
            className="p-2 border-b-2"
          />
        </form>
      </li>
    </ul>
  );
}
 
export default NewBulletForm;