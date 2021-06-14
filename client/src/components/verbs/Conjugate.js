import { useState } from 'react'
import { useParams } from 'react-router'
import './Verbs.css'
import useFetchOne from '../useFetchOne'
import Buttons from './Buttons'

const Conjugate = () => {
  const { verb } = useParams()

  const { data, loading } = useFetchOne(`/api/verbs/${verb}`)
  
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

  // Classes
  const [inputClass, setInputClass] = useState({
    english: 'input',
    infinitive: 'input',
    present: {
      ich: 'input',
      du: 'input',
      er: 'input',
      wir: 'input',
      ihr: 'input',
      sie: 'input'
    },
    simplePast: {
        ich: 'input',
        du: 'input',
        er: 'input',
        wir: 'input',
        ihr: 'input',
        sie: 'input'
    },
    presentPerfect: { ich: 'input' },
    pastPerfect: { ich: 'input' },
    future: { ich: 'input' },
    futurePerfect: { ich: 'input' },
    subjunctiveFuture: { ich: 'input' },
    subjunctivePastPerfect: { ich: 'input' },
    imperative: { du: 'input' }
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

  const handleEnter = (e, x) => {
    if (e.key === 'Enter') {
      const newClass = {...inputClass}
      const {name} = e.target

      if (x === undefined) {
        inputList[name] === data[name] ? newClass[name] = 'input correct' : newClass[name] = 'input false'
      } else {
        inputList[x][name] === data[x][name] ? newClass[x][name] = 'input correct' : newClass[x][name] = 'input false'
      }
      setInputClass(newClass)
    }
  }

  const onSubmit = e => {
    e.preventDefault()
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
            <p
              style={{textAlign: "center"}}
            >{data.infinitive}</p>


            <h3>English:</h3>
              <input
                type="text"
                className={inputClass.english}
                value={inputList.english}
                name="english"
                onChange={e => handleInputChange(e)}
                onKeyPress={e => handleEnter(e)}
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
                        className={inputClass.present.ich}
                        name="ich"
                        onChange={e => handleInputChange(e, 'present')}
                        onKeyPress={e => handleEnter(e, 'present')}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="du">du</label></td>
                    <td>
                      <input
                        type="text"
                        className={inputClass.present.du}
                        name="du"
                        onChange={e => handleInputChange(e, 'present')}
                        onKeyPress={e => handleEnter(e, 'present')}
                      />
                    </td>
                  </tr>
                  

                  <tr>
                    <td><label htmlFor="er">er/sie/es</label></td>
                    <td>
                      <input
                        type="text"
                        className={inputClass.present.er}
                        name="er"
                        onChange={e => handleInputChange(e, 'present')}
                        onKeyPress={e => handleEnter(e, 'present')}
                      />
                    </td>
                  </tr>
          
                  <tr>
                    <td><label htmlFor="wir">wir</label></td>
                    <td>
                    <input
                      type="text"
                      className={inputClass.present.wir}
                      name="wir"
                      onChange={e => handleInputChange(e, 'present')}
                      onKeyPress={e => handleEnter(e, 'present')}
                    />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="ihr">ihr</label></td>
                    <td>
                      <input
                        type="text"
                        className={inputClass.present.ihr}
                        name="ihr"
                        onChange={e => handleInputChange(e, 'present')}
                        onKeyPress={e => handleEnter(e, 'present')}
                      />
                    </td>
                  </tr>
                  
                  <tr>
                    <td><label htmlFor="sie">sie/Sie</label></td>
                    <td>
                      <input
                        type="text"
                        className={inputClass.present.sie}
                        name="sie"
                        onChange={e => handleInputChange(e, 'present')}
                        onKeyPress={e => handleEnter(e, 'present')}
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
                        className={inputClass.simplePast.ich}
                        name="ich"
                        onChange={e => handleInputChange(e, 'simplePast')}
                        onKeyPress={e => handleEnter(e, 'simplePast')}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="du">du</label></td>
                    <td>
                      <input
                        type="text"
                        className={inputClass.simplePast.du}
                        name="du"
                        onChange={e => handleInputChange(e,'simplePast')}
                        onKeyPress={e => handleEnter(e, 'simplePast')}
                      />
                    </td>
                  </tr>
                  

                  <tr>
                    <td><label htmlFor="er">er/sie/es</label></td>
                    <td>
                      <input
                        type="text"
                        className={inputClass.simplePast.er}
                        name="er"
                        onChange={e => handleInputChange(e,'simplePast')}
                        onKeyPress={e => handleEnter(e, 'simplePast')}
                      />
                    </td>
                  </tr>
          
                  <tr>
                    <td><label htmlFor="wir">wir</label></td>
                    <td>
                    <input
                      type="text"
                      className={inputClass.simplePast.wir}
                      name="wir"
                      onChange={e => handleInputChange(e,'simplePast')}
                      onKeyPress={e => handleEnter(e, 'simplePast')}
                    />
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="ihr">ihr</label></td>
                    <td>
                      <input
                        type="text"
                        className={inputClass.simplePast.ihr}
                        name="ihr"
                        onChange={e => handleInputChange(e, 'simplePast')}
                        onKeyPress={e => handleEnter(e, 'simplePast')}
                      />
                    </td>
                  </tr>
                  
                  <tr>
                    <td><label htmlFor="sie">sie/Sie</label></td>
                    <td>
                      <input
                        type="text"
                        className={inputClass.simplePast.sie}
                        name="sie"
                        onChange={e => handleInputChange(e, 'simplePast')}
                        onKeyPress={e => handleEnter(e, 'simplePast')}
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
                      className={inputClass.presentPerfect.ich}
                      name="ich"
                      onChange={e => handleInputChange(e, 'presentPerfect')}
                      onKeyPress={e => handleEnter(e, 'presentPerfect')}
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
                      className={inputClass.pastPerfect.ich}
                      name="ich"
                      onChange={e => handleInputChange(e, 'pastPerfect')}
                      onKeyPress={e => handleEnter(e, 'pastPerfect')}
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
                        className={inputClass.future.ich}
                        name="ich"
                        onChange={e => handleInputChange(e, 'future')}
                        onKeyPress={e => handleEnter(e, 'future')}
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
                      className={inputClass.futurePerfect.ich}
                      name="ich"
                      onChange={e => handleInputChange(e, 'futurePerfect')}
                      onKeyPress={e => handleEnter(e, 'futurePerfect')}
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
                        className={inputClass.subjunctiveFuture.ich}
                        name="ich" 
                        onChange={e => handleInputChange(e, 'subjunctiveFuture')}
                        onKeyPress={e => handleEnter(e, 'subjunctiveFuture')}
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
                      className={inputClass.subjunctivePastPerfect.ich}
                      name="ich"
                      onChange={e => handleInputChange(e, 'subjunctivePastPerfect')}
                      onKeyPress={e => handleEnter(e, 'subjunctivePastPerfect')}
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
                      className={inputClass.imperative.du}
                      name="du"
                      onChange={e => handleInputChange(e, 'imperative')}
                      onKeyPress={e => handleEnter(e, 'imperative')}
                    />
                    </td>
                    <td><label htmlFor="du">du</label></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </form>}
      </div>
    </div>
  )
}

export default Conjugate;