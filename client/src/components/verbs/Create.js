import { useState } from 'react'
import axios from 'axios'
import './Verbs.css'

const Create = () => {
  const [inputList, setInputList] = useState({
    english: '',
    infinitive: '',
    present: {
      ich: '',
      du: '',
      er: '',
      wir: '',
      ihr: '',
      sie: ''
    },
    simplePast: {
        ich: '',
        du: '',
        er: '',
        wir: '',
        ihr: '',
        sie: ''
    },
    presentPerfect: { ich: '' },
    pastPerfect: { ich: '' },
    future: { ich: '' },
    futurePerfect: { ich: '' },
    subjunctiveFuture: { ich: '' },
    subjunctivePastPerfect: { ich: '' },
    imperative: { du: '' }
  })

  const handleInputChange = (e, x) => {
    const newList = {...inputList}
    if (x === undefined) {
      newList[e.target.name] = e.target.value
    } else {
      newList[x][e.target.name] = e.target.value
    }   
    setInputList(newList)
  }

  const onSubmit = e => {
    e.preventDefault()

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify(inputList)
    
    axios.post('/api/verbs/create', body, config)
      .then(res => {
        window.location = `/verbs/${inputList.infinitive}`
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="leftContent">
        <h2>Create New Verb</h2>
        <form 
          className="verb"
          onSubmit={e => onSubmit(e)} 
          autoComplete="off" 
        >
          <div>
            <h3>English:
              <span>
                <input
                  type="text"
                  className="input"
                  name="english"
                  onChange={e => handleInputChange(e)}
                />
              </span>
            </h3>

            <h3>German Infinitive:
              <span>
                <input
                  type="text"
                  className="input"
                  name="infinitive" 
                  onChange={e => handleInputChange(e)}
                />
              </span>
            </h3>
          </div>

          <h3>INDIKATIV</h3>
          <div className="tense-box">
            <div>
              <h3>Präsens</h3>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="ich">ich</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="ich"
                        onChange={e => handleInputChange(e, 'present')}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="du">du</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="du"
                        onChange={e => handleInputChange(e, 'present')}
                      />
                    </td>
                  </tr>
                  

                  <tr>
                    <td><label htmlFor="er">er/sie/es</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="er"
                        onChange={e => handleInputChange(e, 'present')}
                      />
                    </td>
                  </tr>
          
                  <tr>
                    <td><label htmlFor="wir">wir</label></td>
                    <td>
                    <input
                      type="text"
                      className="input"
                      name="wir"
                      onChange={e => handleInputChange(e, 'present')}
                    />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="ihr">ihr</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="ihr"
                        onChange={e => handleInputChange(e, 'present')}
                      />
                    </td>
                  </tr>
                  
                  <tr>
                    <td><label htmlFor="sie">sie/Sie</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="sie"
                        onChange={e => handleInputChange(e, 'present')}
                      />
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div>
              <h3>Präteritum</h3>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="ich">ich</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="ich"
                        onChange={e => handleInputChange(e, 'simplePast')}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="du">du</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="du"
                        onChange={e => handleInputChange(e,'simplePast')}
                      />
                    </td>
                  </tr>
                  

                  <tr>
                    <td><label htmlFor="er">er/sie/es</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="er"
                        onChange={e => handleInputChange(e,'simplePast')}
                      />
                    </td>
                  </tr>
          
                  <tr>
                    <td><label htmlFor="wir">wir</label></td>
                    <td>
                    <input
                      type="text"
                      className="input"
                      name="wir"
                      onChange={e => handleInputChange(e,'simplePast')}
                    />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="ihr">ihr</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="ihr"
                        onChange={e => handleInputChange(e, 'simplePast')}
                      />
                    </td>
                  </tr>
                  
                  <tr>
                    <td><label htmlFor="sie">sie/Sie</label></td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        name="sie"
                        onChange={e => handleInputChange(e, 'simplePast')}
                      />
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>     
          </div>

          <div className="tense-box">
            <div>
              <h3>Perfekt</h3>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="ich">ich</label></td>
                    <td>
                    <input 
                      type="text" 
                      className="input"
                      name="ich"
                      onChange={e => handleInputChange(e, 'presentPerfect')}
                    />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3>Plusquamperfekt</h3>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="ich">ich</label></td>
                    <td>
                    <input 
                      type="text" 
                      className="input"
                      name="ich"
                      onChange={e => handleInputChange(e, 'pastPerfect')}
                    />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>              
          </div>

          <div className="tense-box">
            <div>
              <h3>Futur I</h3>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="ich">ich</label></td>
                    <td>
                      <input 
                        type="text" 
                        className="input"
                        name="ich"
                        onChange={e => handleInputChange(e, 'future')}
                      />
                    </td>
                  </tr>
                </tbody>
              </table> 
            </div>

            <div>
              <h3>Futur II</h3>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="ich">ich</label></td>
                    <td>
                    <input 
                      type="text" 
                      className="input"
                      name="ich"
                      onChange={e => handleInputChange(e, 'futurePerfect')}
                    />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>KONJUNKTIV II</h3>
          <div className="tense-box">
            <div>
              <h3>Futur I</h3>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="ich">ich</label></td>
                    <td>
                      <input 
                        type="text" 
                        className="input"
                        name="ich" 
                        onChange={e => handleInputChange(e, 'subjunctiveFuture')}
                      />
                    </td>
                  </tr>
                </tbody>
              </table> 
            </div>

            <div>
              <h3>Plusquamperfekt</h3>
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="ich">ich</label></td>
                    <td>
                    <input 
                      type="text" 
                      className="input"
                      name="ich"
                      onChange={e => handleInputChange(e, 'subjunctivePastPerfect')}
                    />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3>Imperativ Prasens</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                    <input 
                      type="text" 
                      className="input"
                      name="du"
                      onChange={e => handleInputChange(e, 'imperative')}
                    />
                    </td>
                    <td><label htmlFor="du">du</label></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="submit-box">
            <input 
              type="submit" 
              value="Add Verb"
              className="submit"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create;