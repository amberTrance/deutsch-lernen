import { Fragment, useState } from 'react'
import axios from 'axios'
import './Create.css'

const Create = () => {

  const [collectionName, setCollectionName] = useState('')
  const [inputList, setInputList] = useState([{ english: "", singular: "", plural:"" }]);

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
  const onSubmit = async e => {
    e.preventDefault()

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({collectionName, inputList})
    
    try {
      const res = await axios.post('/nouns/add', body, config)

    } catch (err) {
      console.log(err)
    } 
  }

  return (
    <Fragment>
      <h2>Create New Collection</h2>
      <form onSubmit={e => onSubmit(e)}>
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
              <tr key={Math.random()}>
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
                  <button onClick={() => handleRemoveClick(i)}>
                    Remove
                  </button> }
                  { inputList.length - 1 === i 
                    && 
                  <button onClick={handleAddClick}>Add</button> }
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>

        <button type="submit" value="submit">Add Collection</button>
      </form>
    </Fragment>
  )
}
 
export default Create;