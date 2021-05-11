import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchList = (url) => {
    const [category, setCategory] = useState([])
    const [list, setList] = useState([])
    // Error
    const [error, setError] = useState([])
  
    useEffect(() => {
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