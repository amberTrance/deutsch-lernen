import { useState } from 'react'
import axios from 'axios'
import useFetch from '../useFetchList'
import CollectionNav from './CollectionNav'

const Create = () => {

  // Fetch collection list
  const { data: list } = useFetch('/api/nouns')

  const [errors, setErrors] = useState([])
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

    const token =  localStorage.getItem('token')
    // Set headers
    if (token) {
      axios.defaults.headers.common['x-access-token'] = token
    } else {
      delete axios.defaults.headers.common['x-access-token']
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({collectionName, inputList})
    
    axios.post('/api/nouns/create', body, config)
      .then(res => {
        window.location = `/nouns/${collectionName}`
      })
      .catch(err => setErrors(err.response.data.errors))
  }

  return (
    <div className="container">
      <div className="leftContent">
        { errors && errors.map((error,i) => 
          <div 
            className="msg error"
            key={`${i}-error`}>{error.msg}
          </div>
        ) }
        <h2 className="title">Create New Collection</h2>
        <form 
          onSubmit={e => onSubmit(e)} 
          autoComplete="off" 
          className="create">
          
          <h3 className="title">Collection Name: </h3>
          <div className="collectionInput">
          <input
            className="input"
            type="text" 
            name="collectionName"
            value={collectionName}
            onChange={handleCollectionName}
            required
          />
          </div>
          
          <table>
            <thead>
              <tr>
                <th><p>English</p></th>
                <th><p>Singular</p></th>
                <th><p>Plural</p></th>
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
                      required
                    />
                  </td>
                  <td>
                    <input
                      className="input" 
                      type="text" 
                      name="singular" 
                      value={x.singular}
                      onChange={e => handleInputChange(e, i)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      className="input" 
                      type="text" 
                      name="plural" 
                      value={x.plural}
                      onChange={e => handleInputChange(e, i)}
                      required
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
    
          <div className="submit-box">
            <input 
              type="submit" 
              value="Add Collection"
              className="submit"/>
          </div>
        </form>
      </div>
      <CollectionNav list={list}/>
    </div>
  )
}
 
export default Create;