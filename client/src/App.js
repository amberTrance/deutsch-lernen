import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import CreateNouns from './components/nouns/Create'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/create' component={CreateNouns} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
