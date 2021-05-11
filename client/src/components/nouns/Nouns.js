import CollectionNav from './CollectionNav'
import useFetchList from '../useFetchList'

const Nouns = () => {
  
  const { data: list } = useFetchList('/nouns')

  return (
      <div className="container">
        <section>
          <h1>If you have no collections, create one </h1>
        </section>
        <CollectionNav list={list}/>
      </div>
   )
}
 
export default Nouns;