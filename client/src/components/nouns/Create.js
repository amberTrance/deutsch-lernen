import { useState } from 'react'
import axios from 'axios'
import useFetch from '../useFetchList'
import CollectionNav from './CollectionNav'

const Create = () => {

  // Fetch collection list
  const { data: list } = useFetch('/nouns')

  const [collectionName, setCollectionName] = useState('')
  const [inputList, setInputList] = useState(
    [
      { english: "", singular: "", plural:"" },
      { english: "", singular: "", plural:"" },
      { english: "", singular: "", plural:"" }
    ]);

  // Handle collection name input
  const handleCollectionName = (e) => {
    const name = e.target.value
    setCollectionName(name)
  }

  // Handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target

    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  // Handle click event of the remove button
  const handleRemoveClick = index => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  // Handle click event of the Add button
  const handleAddClick = () => {
    const list = [...inputList]
    list.push({ english: "", singular: "", plural:"" })
    setInputList(list)
  }

  // Handle submit
  const onSubmit = e => {
    e.preventDefault()

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({collectionName, inputList})
    
    axios.post('/nouns/create', body, config)
      .then(res => {
        window.location = '/nouns'
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div>
        <h2 className="title">Create New Collection</h2>
        <form onSubmit={e => onSubmit(e)} autocomplete="off">
          <h4>Collection Name: </h4>
          <input 
            type="text" 
            name="collectionName"
            value={collectionName}
            onChange={handleCollectionName}
          />
          
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
            {inputList.map((x, i) => {
              return (
                <tr key={`ren${i+1}`}>
                  <td>
                    <input
                      className="input" 
                      type="text" 
                      name="english"
                      value={x.english}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      className="input" 
                      type="text" 
                      name="singular" 
                      value={x.singular}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      className="input" 
                      type="text" 
                      name="plural" 
                      value={x.plural}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                  <td className="btn-box">
                    { inputList.length !== 1 
                      && 
                    <div className="btn" onClick={() => handleRemoveClick(i)}>
                      Remove
                    </div> }
                    { inputList.length - 1 === i 
                      && 
                    <div className="btn" onClick={handleAddClick}>Add</div> }
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>

          <input type="submit" value="Add Collection" />
        </form>
      </div>
      <CollectionNav list={list}/>
    </div>
  )
}
 
export default Create;