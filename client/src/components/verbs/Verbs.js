import useFetchList from '../useFetchList'
import { Link } from 'react-router-dom'

const Verbs = () => {
  const { data: list, loading, count} = useFetchList('/api/verbs')

  return (
    <div className="center">
      {!loading && list.length === 0 && (
        <h2>Create your first verb</h2>
      )}
      {!loading && 
        <Link 
          to="/verbs/create" 
          className="create-link"
          style={{marginBottom: "20px"}}
        >
          <button className="create-btn">create new</button>
        </Link>
      }
      {!loading && list.length > 0 && <h2>Verbs</h2>}
      <div className="verbDisplay">
        {!loading && list.map(arr => {
          return (
            <div className="letter">
              <h3>{arr[0][0].toUpperCase()}</h3>
              <ul>
                {arr.map((verb,i) => {
                  return (
                    <li>
                      <Link 
                        to={`/verbs/${verb}`} 
                        key={i}>{verb}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      {!loading && list.length > 0 && <h3 className="stats">Verbs Count: {count}</h3>}
    </div>
  )
}
 
export default Verbs;