import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import useFetch from '../useFetchCategory'
import CollectionNav from './CollectionNav'
import Buttons from './Buttons'
import axios from 'axios'

const Edit = () => {
  // Fetch url parameter that contains the collection name
  const { collection } = useParams()


  // Fetch from the database all the nouns in the coresponding category
  // and the side navbar 
  const {category, list} = useFetch(`/api/nouns/${collection}`)

    
  // Create a state for Table display
  const [inputList, setInputList] = useState([])


  // Set inputList same as categorz
  useEffect(() => {

    setInputList(category)

  }, [category])



  // Handle input change
  // Retrieves name and value of input, and updates 
  // the state of inputList
  const handleInputChange = (e, i) => {
    const {name, value} = e.target

    const newList = [...inputList]

    newList[i][name] = value

    setInputList(newList)
  }

  // On Edit
  const handleEditClick = (i) => {
    const noun = inputList[i]

    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    const body = JSON.stringify({noun})

    axios.put('/api/nouns', body, config)
      .then(result => console.log(result))
      .catch(err => console.log(err))

  }

  // On Delete
  const handleDeleteClick = (i) => {
    const noun = inputList[i]

    const id = noun._id

    axios.delete(`/api/nouns/${id}`)
      .then(res => window.location = `/nouns/${collection}/edit`)
      .catch(err => console.log(err))
  }

  return ( 
    <div className="container">
      <div className="leftContent">
        <Buttons collection={ collection }/>
        <h2 className="title">Edit or Delete</h2>
        {inputList.length !== 0 && <form autoComplete="off">
          <h2 
            type="text" 
            name="collectionName"
            className="title"
          >
            { collection }
          </h2>
          
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
            {inputList.map((noun, i) => {
              return (
                <tr key={noun._id}>
                  <td>
                    <input
                      className="input"
                      type="text" 
                      name="english"
                      value={noun.english}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      type="text" 
                      name="singular"
                      value={noun.singular}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      type="text" 
                      name="plural"
                      value={noun.plural}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                  <td className="btn-box">
                    <div 
                      className="btn btn-edit" 
                      onClick={() => handleEditClick(i)}
                      key={`edit-${noun.english}`}
                    >
                      Edit
                    </div>
                    <div 
                      className="btn btn-delete" 
                      onClick={() => handleDeleteClick(i)}
                      key={`delete-${noun.english}`}
                    >
                      Delete
                    </div>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </form> }
      </div>
      <CollectionNav list={list}/>
    </div>
  )
}
 
export default Edit;