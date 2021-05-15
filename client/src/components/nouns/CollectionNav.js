import { Link } from 'react-router-dom'

const CollectionNav = ({ list }) => {

  return ( 
    <nav className="aside-nav">
      <h2>Collections</h2>
      <div className="create-btn">
        <Link to="/nouns/create" className="create-link">create new</Link>
      </div>
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