import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to="/">
        <h1 className="mark">Deutsch Lernen</h1>
      </Link>
      <div className="links">
        <Link to='/nouns' className="nav-link">Nouns</Link>
        <Link to='/signup' className="nav-link">Sign up</Link>
        <Link to='/login'><button className="nav-link" id="login">Log in</button></Link>
      </div>
    </nav>
  )
}
 
export default Navbar;