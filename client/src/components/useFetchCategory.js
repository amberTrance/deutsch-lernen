import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchList = (url) => {
    const [category, setCategory] = useState([])
    const [list, setList] = useState([])
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
        setCategory(response.data.category)
        setList(response.data.list)
      })
      .catch(error => setError(error))

    }, [url])
  
    return {category, list, error}
}

export default useFetchList