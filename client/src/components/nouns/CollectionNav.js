import { Link } from 'react-router-dom'

const CollectionNav = ({ list }) => {

  return ( 
    <nav className="aside-nav">
      <h2>Collections</h2>
      <p className="create"><Link to="/nouns/create">Create</Link></p>
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