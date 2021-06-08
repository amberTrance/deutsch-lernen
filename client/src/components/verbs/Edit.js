import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useFetchOne from '../useFetchOne'
import Buttons from './Buttons'
import axios from 'axios'

const Edit = () => {
  const { verb } = useParams()
  const [word, setWord] = useState({})
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')

  // Get word from db
  const { data, loading } = useFetchOne(`/api/verbs/${verb}`)

  // Set new state containing word
  useEffect(() => {
    setWord(data)
  }, [data])

  // Edit word with input change
  const handleInputChange = (e, x) => {
    const { name, value } = e.target

    const edit = {...word}
    if (x === undefined) {
      edit[name] = value
    } else {
      edit[x][name] = value
    }

    setWord(edit)
  }

  // Send changes to db
  const onSubmit = e => {

  }

  const handleDeleteClick = () => {
    const id = word._id

    axios.delete(`/api/verbs/${id}`)
    .then(res => {
      window.location = '/verbs'
    })
    .catch(err => console.log(err))
  }

  const handleEditClick = () => {
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    const body = JSON.stringify({word})

    axios.put('/api/verbs', body, config)
      .then(result => setMsg(result.data))
      .catch(err => setErr(err.data))
  }
 
  return (  
    <div className="container">
      <div className="leftContent">
        <Buttons verb={verb} />
        <h2>Conjugate the verb</h2>
        {!loading && <form 
          className="verb"
          onSubmit={e => onSubmit(e)} 
          autoComplete="off" 
        >
          <div>
            <h3>German Infinitive:</h3>
            <input
                type="text"
                className="input"
                value={word.infinitive}
                name="english"
                onChange={e => handleInputChange(e)}
                style={{textAlign: "center"}}
              />


            <h3>English:</h3>
              <input
                type="text"
                className="input"
                value={word.english}
                name="english"
                onChange={e => handleInputChange(e)}
                style={{textAlign: "center"}}
              />
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
                        value={word.present.ich}
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
                        value={word.present.du}
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
                        value={word.present.er}
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
                      value={word.present.wir}
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
                        value={word.present.ihr}
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
                        value={word.present.sie}
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
                        value={word.simplePast.ich}
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
                        value={word.simplePast.du}
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
                        value={word.simplePast.er}
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
                      value={word.simplePast.wir}
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
                        value={word.simplePast.ihr}
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
                        value={word.simplePast.sie}
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
                      value={word.presentPerfect.ich}
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
                      value={word.pastPerfect.ich}
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
                        value={word.future.ich}
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
                      value={word.futurePerfect.ich}
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
                        value={word.subjunctiveFuture.ich}
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
                      value={word.subjunctivePastPerfect.ich}
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
                      value={word.imperative.du}
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

          <div 
            className="btn-box"
            style={{margin: "20px"}}
          >
            <div 
              className="btn btn-edit" 
              onClick={handleEditClick}
            >
              Edit
            </div>
            <div 
              className="btn btn-delete" 
              onClick={handleDeleteClick}
            >
              Delete
            </div>
          </div>

        </form>}
        {msg && <div className="msg success">{msg}</div>}
        {err && <div className="msg error">{msg}</div>}
      </div>
    </div>
  )
}
 
export default Edit