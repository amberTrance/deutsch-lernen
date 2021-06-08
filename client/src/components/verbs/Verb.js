import { useParams } from 'react-router'
import useFetchOne from '../useFetchOne'
import Buttons from './Buttons'

const Verb = () => {
  const { verb } = useParams()

  const { data : word, error, loading } = useFetchOne(`/api/verbs/${verb}`)
  
  return (
    <div className="container">
      <div className="leftContent">
        <Buttons verb={verb} />
        {!loading && <div className="verb see" >
          <div>
            <h3>English: 
              <span
                className="display"
                name="singular"  
              > {word.english}</span>
            </h3>

            <h3>German Infinitive: 
              <span
                className="display"
                name="singular"  
              > {word.infinitive}</span>
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
                    <p
                      className="display"
                      name="singular"  
                    >{word.present.ich}</p>
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="du">du</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.present.du}</p>
                    </td>
                  </tr>
                  

                  <tr>
                    <td><label htmlFor="er">er/sie/es</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.present.er}</p>
                    </td>
                  </tr>
          
                  <tr>
                    <td><label htmlFor="wir">wir</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.present.wir}</p>
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="ihr">ihr</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.present.ihr}</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td><label htmlFor="sie">sie/Sie</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.present.sie}</p>
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
                      <p
                        className="display"
                        name="singular"  
                      >{word.simplePast.ich}</p>
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="du">du</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.simplePast.du}</p>
                    </td>
                  </tr>
                  

                  <tr>
                    <td><label htmlFor="er">er/sie/es</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.simplePast.er}</p>
                    </td>
                  </tr>
          
                  <tr>
                    <td><label htmlFor="wir">wir</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.simplePast.wir}</p>
                    </td>
                  </tr>

                  <tr>
                    <td><label htmlFor="ihr">ihr</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.simplePast.ihr}</p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td><label htmlFor="sie">sie/Sie</label></td>
                    <td>
                      <p
                        className="display"
                        name="singular"  
                      >{word.simplePast.sie}</p>
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
                      <p
                        className="display"
                        name="singular"  
                      >{word.presentPerfect.ich}</p>
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
                    <p
                        className="display"
                        name="singular"  
                      >{word.pastPerfect.ich}</p>
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
                      <p
                        className="display"
                        name="singular"  
                      >{word.future.ich}</p>
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
                      <p
                        className="display"
                        name="singular"  
                      >{word.futurePerfect.ich}</p>
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
                      <p
                        className="display"
                        name="singular"  
                      >{word.subjunctiveFuture.ich}</p>
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
                      <p
                        className="display"
                        name="singular"  
                      >{word.subjunctivePastPerfect.ich}</p>
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
                    <p
                      className="display"
                      name="singular"  
                    >{word.imperative.du}</p>
                    </td>
                    <td><label htmlFor="du">du</label></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div> }
      </div>
    </div>
  )
}
 
export default Verb;