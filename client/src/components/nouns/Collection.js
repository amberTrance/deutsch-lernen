import { useParams } from "react-router";
import useFetch from '../useFetchCategory'
import CollectionNav from './CollectionNav'
import Buttons from './Buttons'

const Collection = () => {
  const { collection } = useParams()

  const { category, list } = useFetch(`/nouns/${collection}`)

  return (
    <div className="container">
      <div className="leftContent">
      <Buttons collection={collection}/>
      <h2 className="title">{collection}</h2>
        <table>
            <thead>
              <tr>
                <th><p>English</p></th>
                <th><p>Singular</p></th>
                <th><p>Plural</p></th>
              </tr>
            </thead>
            <tbody>
            {category.map((noun) => {
              return (
                <tr key={noun._id}>
                  <td>
                    <p
                      className="display" 
                      type="text" 
                      name="english"
                    >
                      {noun.english}
                    </p>
                  </td>
                  <td>
                    <p
                      className="display"
                      type="text" 
                      name="singular"  
                    >
                      {noun.singular}
                    </p>
                  </td>
                  <td>
                    <p
                      className="display" 
                      type="text" 
                      name="plural" 
                    >
                      {noun.plural}
                    </p>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
        <CollectionNav list={list}/>
    </div>
  )
}
 
export default Collection;