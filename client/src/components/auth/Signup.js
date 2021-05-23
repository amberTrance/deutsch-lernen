import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
	const [inputData, setInputData] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
	})
	const [errors, setErrors] = useState([])

	// Destructure
	const {username, email, password, password2} = inputData

  const onChange = (e) => {
		setInputData({...inputData, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
		e.preventDefault()

		if (password !== password2) {
			setErrors([{msg: 'Passwords do not match!'}])
		} else {
			const config = {
				headers: {
					'Content-Type' : 'application/json'
				}
			}

			const body = JSON.stringify(inputData)

			axios.post('/api/auth/signup', body, config)
				.then(res => {
					localStorage.setItem('token', res.data.token)
					window.location = '/nouns'
				})
				.catch(err => {
					if (err.response.data.errors) setErrors([...err.response.data.errors])
				})
		}
  }

	// if user has a token (logged in) redirect
	if (localStorage.getItem('token')) {
		return (<Redirect to='/nouns'/>)
	}

  return (  
    <div className="center">
			{errors && 
				<div>
					{errors.map(error => <div className="msg error">{error.msg}</div>)}
				</div>
			}
			<form onSubmit={e => onSubmit(e)} className="auth">
        <h2>Register</h2>
				<div>
					<input
            className='auth-input'
						type='text'
						placeholder='Name'
						name='username'
						value={username}
						onChange={e => onChange(e)}
					/>
					<br/>

					<input
            className='auth-input'
						type='text'
						placeholder='Email'
						name='email'
						value={email}
						onChange={e => onChange(e)} 
					/>
					<br/>

					<input
            className='auth-input'
						type='password' 
						placeholder='Password'
						name='password'
						value={password}
						onChange={e => onChange(e)}
					/>
					<br/>

					<input
            className='auth-input'
						type='password'
						placeholder='Password'
						name='password2'
						value={password2}
						onChange={e => onChange(e)}
					/>
					<br/>

					<input
            className='auth-btn'
						type='submit' 
						value='Signup'/>
				</div>
				<p>Have an account? <Link to="/login">Log in</Link></p>
			</form> 

		</div>
  )
}
 
export default Signup;