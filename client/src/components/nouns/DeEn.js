import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import useFetch from '../useFetchCategory'
import CollectionNav from './CollectionNav'
import Buttons from './Buttons'

const DeEn = () => {
  // Fetch url parameter that contains the collection name
  const { collection } = useParams()


  // Fetch from the database all the nouns in the coresponding category
  // and the side navbar 
  const {category, list, loading} = useFetch(`/api/nouns/${collection}`)

    
  // Create a state for Table display
  const [inputList, setInputList] = useState([])

  // Set the inputList state to the modified category data
  useEffect(() => {

    setInputList(category.map(noun => {
      return {
        id: noun._id, 
        english: '', 
        response: 'input',
        singular: noun.singular,
        plural: noun.plural
      }
    }))
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

  // On Submit
  const onSubmit = e => {
    e.preventDefault()

    const newList = [...inputList]

    inputList.forEach((noun,i) => {
      if (noun.english !== '') {
        if (noun.english === category[i].english) {
          newList[i].response = 'input correct'
        } else {
          newList[i].response = 'input false'
        }
      }
    })

    setInputList(newList)
  }

  return ( 
    <div className="container">
      <div className="leftContent">
        <Buttons collection={ collection }/>
        <h2 className="title">Translate to English</h2>
        {!loading && <form onSubmit={e => onSubmit(e)} autoComplete="off">
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
                <th><p>German Singular</p></th>
                <th><p>German Plural</p></th>
                <th><p>English</p></th>
              </tr>
            </thead>
            <tbody>
            {inputList.map((noun, i) => {
              return (
                <tr key={noun.id}>
                  <td>
                    <p
                      className="input" 
                      type="text" 
                      name="singular"
                    >
                      {noun.singular}
                    </p>
                  </td>
                  <td>
                    <p
                      className="input" 
                      type="text" 
                      name="plural"
                    >
                      {noun.plural}
                    </p>
                  </td>
                  <td>
                    <input
                      className={noun.response}
                      type="text" 
                      name="english"
                      value={noun.english}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>

          <div className="submit-box">
            <input 
              type="submit" 
              value="Submit" 
              className="submit"/>
          </div>
        </form> }
      </div>
      <CollectionNav list={list}/>
    </div>
  )
}
 
export default DeEn;