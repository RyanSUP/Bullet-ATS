import { useState, useEffect, useCallback } from 'react'
import * as bulletService from '../services/bulletService'

const Home = ({user, handleLogout}) => {
  const [bullets, setBullets] = useState([])

  const addBulletToState = (bullet) => {

  }

  const postBullet = useCallback(async (bulletText)=> {
    // Make a request to post the bullet
    const updatedBullets = await bulletService.postNew(bulletText)
    // Add the bullet to state, it should be at the top.
    updatedBullets.reverse()
    setBullets(updatedBullets)
  }, [])

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