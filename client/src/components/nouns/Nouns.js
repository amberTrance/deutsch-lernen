import CollectionNav from './CollectionNav'
import useFetchList from '../useFetchList'

const Nouns = () => {
  const { data: list } = useFetchList('/api/nouns')

  return (
      <div className="container">
        <div className="leftContent">
          <section>
            <h1>If you have no collections, create one </h1>
          </section>
        </div>
        <CollectionNav list={list}/>
      </div>
   )
}
 
export default Nouns;