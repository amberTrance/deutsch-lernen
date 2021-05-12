import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import useFetch from '../useFetchCategory'
import CollectionNav from './CollectionNav'
import Buttons from './Buttons'

const EnDe = () => {
  // Fetch url parameter that contains the collection name
  const { collection } = useParams()


  // Fetch from the database all the nouns in the coresponding category
  // and the side navbar 
  const {category, list} = useFetch(`/nouns/${collection}`)

    
  // Create a state for Table display
  const [inputList, setInputList] = useState([])

  // Set the inputList state to the modified category data
  useEffect(() => {

    setInputList(category.map(noun => {
      return {
        id: noun._id, 
        english: noun.english, 
        singular: '',
        responseSing: 'input',
        plural: '',
        responsePl: 'input'
      }
    }))
  }, [category])



  // Handle input change
  // Retrieves name and value of input, and updates 
  // the state of inputList
  const handleInputChange = (e, i) => {
    const {name, value} = e.target

    const newList = [...inputList]

    if (newList[i] === undefined) {
      newList[i] = {[name]: value}
    } else {
      newList[i][name] = value
    }

    setInputList(newList)
  }

  // On Submit
  const onSubmit = e => {
    e.preventDefault()

    const newList = [...inputList]

    inputList.forEach((noun,i) => {
      if (noun.singular !== '') {
        if (noun.singular === category[i].singular) {
          newList[i].responseSing = 'input correct'
        } else {
          newList[i].responseSing = 'input false'
        }
      }

      if (noun.plural !== '') {
        if (noun.plural === category[i].plural) {
          newList[i].responsePl = "input correct"
        } else {
          newList[i].responsePl = "input false"
        }
      }
    })

    setInputList(newList)
  }

  return ( 
    <div className="container">
      <div>
        <Buttons collection={ collection }/>
        <h2 className="title">Translate into german</h2>
        <form onSubmit={e => onSubmit(e)} autocomplete="off">
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
                <th>English</th>
                <th>Singular</th>
                <th>Plural</th>
                <th></th>
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
                      name="english"
                    >
                      {noun.english}
                    </p>
                  </td>
                  <td>
                    <input
                      className={noun.responseSing}
                      type="text" 
                      name="singular"
                      value={noun.singular}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      className={noun.responsePl}
                      type="text" 
                      name="plural"
                      value={noun.plural}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <CollectionNav list={list}/>
    </div>
  )
}
 
export default EnDe;