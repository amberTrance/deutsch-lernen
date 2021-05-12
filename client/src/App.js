import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Nouns from './components/nouns/Nouns'
import Create from './components/nouns/Create'
import Collection from './components/nouns/Collection'
import EnDe from './components/nouns/EnDe'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/nouns' component={Nouns}/>
            <Route exact path='/nouns/create' component={Create} />
            <Route exact path='/nouns/:collection' component={Collection} />
            <Route exact path='/nouns/:collection/en-de' component={EnDe} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
