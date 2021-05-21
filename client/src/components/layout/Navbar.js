import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import useFetchUser from '../useFetchUser'

const Navbar = () => {
  const { isAuth, username } = useFetchUser()
  const [click, setClick] = useState(false)


  const handleLogOut = () => {
    localStorage.removeItem('token')
    window.location = '/';
  }

  const clickListener = () => {
    setClick(false)
  }
  
  const handleUserClick = () => {
    
    if (click) {
      setClick(false)
    } else {
      setClick(true)
    }
  }

  const user = (
    <div className="links">
      <Link to='/nouns' className="nav-link">Nouns</Link>
      <span 
        className="nav-link"
        id="user"
        onClick={handleUserClick}>
        {username}
      </span>
      { click && <button onClick={handleLogOut} className="nav-link" id="logout">Log out</button> }
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