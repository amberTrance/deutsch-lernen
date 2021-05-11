import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchList = (url) => {
    const [data, setData] = useState([])
    // Error
    const [error, setError] = useState([])
  
    useEffect(() => {
      axios.get(url)
      .then(response => {
        setData(response.data)
      })
      .catch(error => setError(error))

    }, [url])
  
    return {data, error}
}

export default useFetchList