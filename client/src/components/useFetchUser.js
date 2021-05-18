import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchUser = (url) => {
  const [isAuth, setIsAuth] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token =  localStorage.getItem('token')
    // Set headers
    if (token) {
      axios.defaults.headers.common['x-access-token'] = token
    } else {
      delete axios.defaults.headers.common['x-access-token']
    }

    axios.get('/api/auth/user')
    .then(result => {
       setIsAuth(result.data.auth)
       setUsername(result.data.username)
       if(result.data.auth === false) {
         localStorage.removeItem('token')
       }
    })
    .catch(err => {
      setIsAuth(err.response.data.auth)
      localStorage.removeItem('token')
    }) 

  }, [])

  return { isAuth, username }
}

export default useFetchUser
