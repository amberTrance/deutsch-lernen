import { Link } from 'react-router-dom'

const CollectionNav = (props) => {
  const {list, collections } = props
  console.log(list)
  console.log(collections)

  return ( 
    <nav className="aside-nav">
      <h2>Collection</h2>
      <Link to="/nouns/create">Create</Link>
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