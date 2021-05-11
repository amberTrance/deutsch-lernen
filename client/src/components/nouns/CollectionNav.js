import { Link, useRouteMatch } from 'react-router-dom'

const CollectionNav = ({ list }) => {

  let { url } = useRouteMatch()

  return ( 
    <nav className="aside-nav">
      <h2>Collection</h2>
      <Link to={`${url}/create`}>Create</Link>
      <ul>
      {list.map((item) => {
        return (
          <li key={item}>
            <Link to={`${url}/${item}`}>
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