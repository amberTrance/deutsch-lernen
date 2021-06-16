import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchOne = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const token =  localStorage.getItem('token')
      // Set headers
      if (token) {
        axios.defaults.headers.common['x-access-token'] = token
      } else {
        delete axios.defaults.headers.common['x-access-token']
      }

      axios.get(url)
      .then(response => {
        setData(...response.data.word)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        // If the jason web token verification sends a value of false for
        // authentication, redirect user to login page
        if (error.response.data.auth === false) {
          window.location = '/login'
        }
        setLoading(false)
      })

    }, [url])
  
    return {data, error, loading}
}

export default useFetchOne