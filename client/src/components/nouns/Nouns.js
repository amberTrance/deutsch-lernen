import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Create from './Create'
import CollectionNav from './CollectionNav'
import Collection from './Collection'

const Nouns = () => {

  // contains all the data
  const [collections, setCollections] = useState()
  // contains only the name of each collection
  const [list, setList] = useState()

  useEffect(() => {
    getAllNouns()
  }, [])

  const getAllNouns = () => {
    axios.get('/nouns')
      .then(response => {
        setList(response.data.list)
        setCollections(response.data.nouns)
      })
      .catch(err => console.log(err))
  }


  return (
    <Router>
      <div className="container">
        <section>
          <Switch>
            <Route exact path="/nouns/create" component={Create}/>
            <Route exact path="/nouns/:collection" component={Collection}/>
          </Switch>
        </section>
        { collections && <CollectionNav list={list} collections={collections}/> }
      </div>
    </Router>
   )
}
 
export default Nouns;