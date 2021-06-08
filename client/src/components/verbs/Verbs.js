import useFetchList from '../useFetchList'
import { Link } from 'react-router-dom'

const Verbs = () => {
  const { data: list, loading} = useFetchList('/api/verbs')

  return (
    <div className="center">
      <Link to="/verbs/create" className="create-link">
        <button className="create-btn">create new</button>
      </Link>
      <h2>Verbs</h2>
      {!loading && list.map((verb, i) => {
        return (
          <Link 
            to={`/verbs/${verb}`} 
            key={i}>{verb}
          </Link>
        )
      })}
    </div>
  )
}
 
export default Verbs;