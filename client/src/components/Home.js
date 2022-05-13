import { useState, useEffect, useCallback } from 'react'
import * as bulletService from '../services/bulletService'

// Component imports
import { NewBulletForm, SearchBar } from './index'

const Home = ({user, handleLogout}) => {
  const [bullets, setBullets] = useState([])
  const [filteredBullets, setFilteredBullets] = useState([])
  // May need an active bullet 

  const postBullet = async (data)=> {
    const newBullet = await bulletService.postNew(data)
    setBullets((prev)=> [newBullet, ...prev])
    // TODO Find a way to handle adding bullets that works with filter
    setFilteredBullets((prev)=> [newBullet, ...prev])
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

  // TODO duplicate bullet
  const duplicateBullet = (data) => {
    
  }

  // TODO clipboard bullet
  const clipboardBullet = (data) => {
    
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
      <button onClick={handleLogout}>LOGOUT</button>
      <SearchBar filterBullets={filterBullets} />
      <ul>
        <li>
          <NewBulletForm postBullet={postBullet} />
        </li>
        {filteredBullets.map((bullet) => 
          <li key={bullet._id}>
            <p>{bullet.text}</p>
            <div>
              <button onClick={()=>deleteBullet(bullet)}>Delete</button>
              <button>Clipboard</button>
              {/* // TODO update needs a form. This will be handled when the text is rendered in an input field. */}
              <button onClick={()=>updateBullet()}>Update</button>
              <button>Duplicate</button>
            </div>
          </li>
        )}
      </ul>
    </>
  );
}
 
export default Home;