import { useState, useEffect, useCallback } from 'react'
import * as bulletService from '../services/bulletService'

const Home = ({user, handleLogout}) => {
  const [bullets, setBullets] = useState([])

  const postBullet = async (bulletText)=> {
    const newBullet = await bulletService.postNew(bulletText)
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
      <button onClick={postBullet}>TEST</button>
    </>
  );
}
 
export default Home;