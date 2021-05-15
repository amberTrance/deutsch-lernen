import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <Link to="/">
        <h1 className="mark">Deutsch Lernen</h1>
      </Link>
      <div className="links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to='/nouns' className="nav-link">Nouns</Link>
      </div>
    </nav>
  )
}
 
export default Navbar;