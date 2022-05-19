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
    <ul className="list-disc w-9/12">
      <li className='m-1'>
        <form onChange={handleChange} onSubmit={handleSubmit} >
          <input 
            type='text'
            onChange={handleChange}
            value={formData.text}
            name="text"
            required 
            placeholder='New bullet'
            className="w-full border-2 p-3"
          />
        </form>
      </li>
    </ul>
  );
}
 
export default NewBulletForm;