import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'
import Nouns from './components/nouns/Nouns'
import Create from './components/nouns/Create'
import Collection from './components/nouns/Collection'
import EnDe from './components/nouns/EnDe'
import DeEn from './components/nouns/DeEn'
import Edit from './components/nouns/Edit'

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
            <Route exact path='/nouns/:collection/de-en' component={DeEn} />
            <Route exact path='/nouns/:collection/edit' component={Edit} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
