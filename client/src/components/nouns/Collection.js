import { useState } from 'react'
import { useParams } from "react-router";
import useFetch from '../useFetchCategory'

const Collection = () => {
  const { collection } = useParams()

  const {category, list} = useFetch(`/nouns/${collection}`)

  return (
    <div>
      <h2>{collection}</h2>
      <table>
          <thead>
            <tr>
              <th>English</th>
              <th>Singular</th>
              <th>Plural</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {category.map((x, i) => {
            return (
              <tr key={`ren${i+1}`}>
                <td>
                  <input
                    className="input" 
                    type="text" 
                    name="english"
                    value={x.english}
                  />
                </td>
                <td>
                  <input
                    className="input" 
                    type="text" 
                    name="singular" 
                    value={x.singular}
                  />
                </td>
                <td>
                  <input
                    className="input" 
                    type="text" 
                    name="plural" 
                    value={x.plural}
                  />
                </td>
                <td className="btn-box">
                  {<div className="btn">
                    Update
                  </div> }
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
    </div>
  )
}
 
export default Collection;