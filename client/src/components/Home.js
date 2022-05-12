import { useState, useEffect, useCallback } from 'react'
import * as bulletService from '../services/bulletService'

// Component imports
import { NewBulletForm, BulletList } from './index'

const Home = ({user, handleLogout}) => {
  const [bullets, setBullets] = useState([])
  // May need an active bullet 

  const postBullet = async (data)=> {
    const newBullet = await bulletService.postNew(data)
    setBullets((prev)=> [newBullet, ...prev])
  }

  useEffect(()=> {
    try {
      const fetchBullets = async () => {
        const bullets = await bulletService.getAll()
        setBullets(bullets.reverse())
      }
      fetchBullets()
    } catch (error) {
      console.log(error)
    }
  }, [user])

  return (
    <>
      <button onClick={handleLogout}>LOGOUT</button>
      <NewBulletForm postBullet={postBullet} />
      <BulletList bullets={bullets} />
    </>
  );
}
 
export default Home;