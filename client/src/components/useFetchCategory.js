import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchList = (url) => {
    const [category, setCategory] = useState([])
    const [list, setList] = useState([])
    // Error
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
        if((response.data.category).length === 0) {
          window.location = '/NotFound'
        } else {
          setCategory(response.data.category)
          setList(response.data.list)
          setLoading(false)
        }
      })
      .catch(error => {
        setError(error)
        // If the jason web token verification sends a value of false for
        // authentication, redirect user to login page
        if (error.response.data.auth === false) {
          window.location = '/login'
        }
       })

    }, [url])
  
    return { category, list, error, loading }
}

export default useFetchList