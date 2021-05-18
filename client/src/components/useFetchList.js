import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchList = (url) => {
    const [data, setData] = useState([])
    // Error
    const [error, setError] = useState([])
  
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
        setData(response.data)
      })
      .catch(error => setError(error))

    }, [url])
  
    return {data, error}
}

export default useFetchList