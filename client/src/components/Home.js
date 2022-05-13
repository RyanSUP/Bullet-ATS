import { useState, useEffect, useCallback } from 'react'
import * as bulletService from '../services/bulletService'

// Component imports
import { NewBulletForm, BulletList, SearchBar } from './index'

const Home = ({user, handleLogout}) => {
  const [bullets, setBullets] = useState([])
  const [filteredBullets, setFilteredBullets] = useState([])
  // May need an active bullet 

  const postBullet = async (data)=> {
    const newBullet = await bulletService.postNew(data)
    setBullets((prev)=> [newBullet, ...prev])
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
  })

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
      <NewBulletForm postBullet={postBullet} />
      <BulletList filteredBullets={filteredBullets} />
    </>
  );
}
 
export default Home;