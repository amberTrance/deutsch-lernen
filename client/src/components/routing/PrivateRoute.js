import { Route, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PrivateRoute = ({component: Component, ...rest}) => {
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true)

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
      setLoading(false)
    })
    .catch(err => {
      setIsAuth(err.response.data.auth)
      console.log(err.response.data.auth)
      setLoading(false)
    }) 

  }, [])

  return (
    <Route {...rest} render={props => !isAuth && !loading ? (<Redirect to='/login' />) : 
    (<Component {...props}/>)} />
  )
}
 
export default PrivateRoute;
