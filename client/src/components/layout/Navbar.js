import { Link } from 'react-router-dom'
import './Navbar.css'
import useFetchUser from '../useFetchUser'

const Navbar = () => {
  const { isAuth, username } = useFetchUser()

  const handleLogOut = () => {
    localStorage.removeItem('token')
    window.location = '/';
  }

  const user = (
    <div className="links">
      <div className="nav-link">{username}</div>
      <Link to='/nouns' className="nav-link">Nouns</Link>
      <button onClick={handleLogOut} className="nav-link" id="login">Log out</button>
    </div>
  )

  const guest = (
    <div className="links">
      <Link to='/signup' className="nav-link">Sign up</Link>
      <Link to='/login'><button className="nav-link" id="login">Log in</button></Link>
    </div>
  )
  return ( 
    <nav className="navbar">
      <Link to="/">
        <h1 className="mark">Deutsch Lernen</h1>
      </Link>
      {isAuth ? user : guest}
    </nav>
  )
}
 
export default Navbar;