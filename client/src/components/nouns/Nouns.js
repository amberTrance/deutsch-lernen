import { Link } from 'react-router-dom'
import CollectionNav from './CollectionNav'
import useFetchList from '../useFetchList'

const Nouns = () => {
  const { data: list, loading, count } = useFetchList('/api/nouns')

  const hasCollection = (
    <div>
      <h1>Select a collection from the right: </h1>
      <h3 className="stats">Total Word Count: {count}</h3>
    </div>   
  )

  const noCollection = (
    <div style={{textAlign: "center"}}>
      <h1>Create a new nouns collection</h1>
      <p className="para">
        Tips: create collections with related words, such as 'kitchen',
        with nouns representing kitchen items. Always write the singular
        version of the german noun with its corresponding article. This way
        you will be able to remember words easier by association, as well
        as their corresponding gender.                
      </p>
      <Link to="/nouns/create" className="create-link">
        <button className="create-btn">create new</button>
      </Link>
    </div>
  )

  return (
      <div className="container">
        <div className="leftContent">
          <section>
            { !loading && (list.length > 0 ? hasCollection : noCollection) }
          </section>
        </div>
        { !loading && list.length > 0 && (<CollectionNav list={list}/>) }
      </div>
   )
}
 
export default Nouns;