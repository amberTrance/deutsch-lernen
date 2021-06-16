import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchList = (url) => {
    const [data, setData] = useState([])
    // Error
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState()
  
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
        setData(response.data.list)
        setLoading(false)
        setCount(response.data.count)
      })
      .catch(error => {
        setError(error)
        console.log(error)
        // If the jason web token verification sends a value of false for
        // authentication, redirect user to login page
        if (error.response.data.auth === false) {
          window.location = '/login'
        } 
      })

    }, [url])
  
    return {data, error, loading, count}
}

export default useFetchList