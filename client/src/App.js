import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Nouns from './components/nouns/Nouns'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/nouns' component={Nouns} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
