import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/bullets`

const getAll = async () => {
  const res = await fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`
    }
  })
  return await res.json()
}

const postNew = async (data) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 
      Authorization: `Bearer ${tokenService.getToken()}`,
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(data),
  })
  return await res.json()
}

export {
  getAll,
  postNew,
}
