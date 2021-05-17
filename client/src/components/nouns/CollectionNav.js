import { Link } from 'react-router-dom'

const CollectionNav = ({ list }) => {

  return ( 
    <nav className="aside-nav">
      <h2>Collections</h2>
        <Link to="/nouns/create" className="create-link">
          <button className="create-btn">create new</button>
        </Link>
      <ul>
      {list.map((item) => {
        return (
          <li key={item}>
            <Link to={`/nouns/${item}`}>
              { item }
            </Link>
          </li>
        )
      })}
      </ul>
    </nav>
   );
}
 
export default CollectionNav;