import { useState, useEffect } from 'react'
import * as bulletService from '../services/bulletService'

const Home = ({user, handleLogout}) => {
  const [bullets, setBullets] = useState([])

  useEffect(()=> {
    try {
      const fetchBullets = async () => {
        const bullets = await bulletService.getAllBullets()
        setBullets(bullets)
      }
      fetchBullets()
    } catch(error) {
      console.log(error)
    }
  }, [user])

  return (
    <>
      <button onClick={handleLogout}>LOGOUT</button>

    </>
  );
}
 
export default Home;