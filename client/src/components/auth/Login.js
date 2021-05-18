import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [inputData, setInputData] = useState({
		email: '',
		password: ''
	})
	const [errors, setErrors] = useState([])

  const { email, password } = inputData

  const onChange = (e) => {
    let input = setInputData({...inputData, [e.target.name] : e.target.value})
  }
  
  const onSubmit = (e) => {
    e.preventDefault()

    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    const body = JSON.stringify({email, password})

    axios.post('/api/auth/login', body, config)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        window.location = '/'
      })
      .catch(err => {
        if (err.response.data.errors) setErrors([...err.response.data.errors])
      })

  }
  return ( 
    <div className="center">
      {errors && 
				<div>
					{errors.map(error => <div className="msg error">{error.msg}</div>)}
				</div>
			}
      <form onSubmit={e => onSubmit(e)} className="auth">
        <h2>Log in</h2>
        <div>
          <input 
            className='auth-input'
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={e => onChange(e)} 
            required
          />
          <br/>

          <input
            className='auth-input'
            type='password' 
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required
          />
          <br/>

          <input
            className='auth-btn'
            type='submit' 
            value='Login'/>
        </div>       
        <p>No account? <Link to="/signup">Sign Up</Link></p>
      </form>
		</div>
  )
}
 
export default Login;