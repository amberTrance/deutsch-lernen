import { useState, useRef } from 'react'
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
 
  // Set a node reference for user
  const node = useRef()

  // When the user clicks on his username in the navbar:
  // add a document event listener
  // and set Click to 'true' which pops up the Logout bubble
  const handleUserClick = () => {
    document.addEventListener('click', handleClick)

    setClick(true)
  }

  // When the user clicks anywhere but on the user name
  // the logout bubble goes away and the event listener
  // for the document is removed
  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
      setClick(false)
      document.removeEventListener('click', handleClick)
    }
  }

  const user = (
    <div className="links">
      <Link to='/verbs' className="nav-link">Verbs</Link>
      <Link to='/nouns' className="nav-link">Nouns</Link>
      <span 
        className="nav-link"
        id="user"
        onClick={handleUserClick}
        ref={node} 
      >
        {username}
      </span>
      { click &&
        <div className="popup">
          <Link to='/settings' className="menu border">Settings</Link>
          <div onClick={handleLogOut} className="menu">Log out</div>
        </div> 
      }
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