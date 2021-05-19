import { Link } from 'react-router-dom'
import CollectionNav from './CollectionNav'
import useFetchList from '../useFetchList'

const Nouns = () => {
  const { data: list, loading } = useFetchList('/api/nouns')

  return (
      <div className="container">
        <div className="leftContent">
          <section>
            { loading && list.length > 0 ? (<h1>Select a collection from the right: </h1>) :
            (
              <div style={{textAlign: "center"}}>
                <h1>Create a new collection</h1>
                <Link to="/nouns/create" className="create-link">
                  <button className="create-btn">create new</button>
                </Link>
              </div>
            )}
          </section>
        </div>
        { loading && list.length > 0 (<CollectionNav list={list}/>) }
      </div>
   )
}
 
export default Nouns;