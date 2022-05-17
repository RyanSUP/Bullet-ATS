import { useState, useEffect, useCallback } from 'react'
import * as bulletService from '../services/bulletService'

// Component imports
import { NewBulletForm, SearchBar, Nav, BulletList } from './index'

const Home = ({user, handleLogout}) => {
  const [bullets, setBullets] = useState([])
  const [filteredBullets, setFilteredBullets] = useState([])
  const [activeBullet, setActiveBullet] = useState(null)

  const postBullet = async (data)=> {
    const newBullet = await bulletService.postNew(data)
    setBullets((prev)=> [newBullet, ...prev])
    // TODO Find a way to handle adding bullets that works with filter
    setFilteredBullets((prev)=> [newBullet, ...prev])
  }

  const setActive = (id) => {
    setActiveBullet(id)
  }

  const filterBullets = useCallback((data) =>{
    console.log(data)
    if(data === '' || data === ' ') setFilteredBullets(bullets)
    console.log('passed checks')
    try {
      const regex = new RegExp(data, 'i')
      setFilteredBullets(bullets.filter((bullet) => regex.test(bullet.text)))
    } catch(error) {
      setFilteredBullets(bullets)
    }
  }, [setFilteredBullets, bullets])

  const deleteBullet = (data) => {
    bulletService.delete(data)
    let updatedBullets = bullets.filter((bullet) => bullet._id !== data._id)
    setBullets(updatedBullets)
    setFilteredBullets(updatedBullets)
  }

  const updateBullet = (data) => {
    bulletService.update(data)
    let updatedBullets = bullets.map((bullet)=> {
      if(bullet._id === data._id) {
        return {...data}
      } else {
        return bullet
      }
    })
    setBullets(updatedBullets)
    setFilteredBullets(updatedBullets)
  }

  const clipboardBullet = (text) => {
    navigator.clipboard.writeText(text)
  }

  useEffect(()=> {
    try {
      const fetchBullets = async () => {
        const bullets = await bulletService.getAll()
        setBullets(bullets.reverse())
        setFilteredBullets(bullets)
      }
      fetchBullets()
    } catch (error) {
      console.log(error)
    }
  }, [user])

  return (
    <>
      {/* // * Nav */}
      {/* // * Nav End */}
      {/* // * Centered Body */}
        {/* // * Searchbar */}
        {/* // * Searchvar end */}
        {/* // * List */}
          {/* // * New Bullet form is first li */}
          {/* // * New BUllet form end */}
          {/* // * List item bullet */}
            {/* // * Text */}
            {/* // * Button Menu */}
          {/* // * End list item bullet */}
        {/* // * End list */}

      <Nav handleLogout={handleLogout} />
      <SearchBar filterBullets={filterBullets} />
      <BulletList>
          <NewBulletForm postBullet={postBullet} />
      </BulletList>
      <ul>
        {filteredBullets.map((bullet) => 
          <li key={bullet._id} onClick={()=>setActive(bullet._id)}>
            <p>{bullet.text}</p>
            {/* These will display when hovered or when bullet is active */}
            <div>
              <button onClick={()=>deleteBullet(bullet)}>Delete</button>
              <button onClick={()=>clipboardBullet(bullet.text)}>Clipboard</button>
              {/* // TODO update needs a form. This will be handled when the text is rendered in an input field. */}
              <button onClick={()=>updateBullet()}>Update</button>
              <button onClick={()=>postBullet({text: bullet.text})}>Duplicate</button>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}
 
export default Home;