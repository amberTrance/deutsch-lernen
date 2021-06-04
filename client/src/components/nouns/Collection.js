import { useParams } from 'react-router';
import useFetch from '../useFetchCategory'
import CollectionNav from './CollectionNav'
import Buttons from './Buttons'

const Collection = () => {
  const { collection } = useParams()

  const { category, list, loading } = useFetch(`/api/nouns/${collection}`)

  return (
    <div className="container">
      <div className="leftContent">
      <Buttons collection={collection}/>
      {!loading && <h2 className="title">{collection}</h2>}
        {!loading && <table>
            <thead>
              <tr>
                <th><p>English</p></th>
                <th><p>German Singular</p></th>
                <th><p>German Plural</p></th>
              </tr>
            </thead>
            <tbody>
            {category.map((noun) => {
              return (
                <tr key={noun._id}>
                  <td>
                    <p
                      className="display" 
                      name="english"
                    >
                      {noun.english}
                    </p>
                  </td>
                  <td>
                    <p
                      className="display"
                      name="singular"  
                    >
                      {noun.singular}
                    </p>
                  </td>
                  <td>
                    <p
                      className="display" 
                      name="plural" 
                    >
                      {noun.plural}
                    </p>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table> }
          {!loading && <h3 className='stats' style={{"margin-top": "25px"}}>
            {`Words Count: ${category.length}`}
          </h3>}
        </div>
        <CollectionNav list={list}/>
    </div>
  )
}
 
export default Collection;