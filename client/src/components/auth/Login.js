import { Link } from 'react-router-dom'

const Login = () => {
  const onChange = (e) => {

  }
  
  const onSubmit = (e) => {

  }
  return ( 
    <div className="center">

        <form onSubmit={e => onSubmit(e)} className="auth">
          <h2>Log in</h2>
          <div>
            <input 
              className='auth-input'
              type='text'
              placeholder='Email'
              name='email'
              onChange={e => onChange(e)} 
              required
            />
            <br/>

            <input
              className='auth-input'
              type='password' 
              placeholder='Password'
              name='password'
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