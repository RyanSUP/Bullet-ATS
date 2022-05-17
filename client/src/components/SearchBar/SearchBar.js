import { useState } from 'react'
const SearchBar = ({ filterBullets }) => {
  const [formData, setFormData] = useState({
    filterParams: ''
  })

  const handleChange = (e) => {
    setFormData({filterParams: e.target.value})
    filterBullets(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange}
        type='text'
        name="filterParams"
        value={formData.text}
        required
        placeholder='Search ATS terms'
      />
    </form>
  );
}
 
export default SearchBar;