import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Deutsch Lernen</h1>
      <div className="links">
        <a href="/">Home</a>
        <Link to='/create'>New Collection</Link>
      </div>
    </nav>
  )
}
 
export default Navbar;