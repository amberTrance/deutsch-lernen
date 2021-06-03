import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './tables.css'
import './theme.css'
// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'
import NotFound from './components/layout/NotFound'
// Nouns
import Nouns from './components/nouns/Nouns'
import Create from './components/nouns/Create'
import Collection from './components/nouns/Collection'
import EnDe from './components/nouns/EnDe'
import DeEn from './components/nouns/DeEn'
import Edit from './components/nouns/Edit'
// auth
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
// protected route
import PrivateRoute from './components/routing/PrivateRoute'
// Verbs
import CreateVerb from './components/verbs/Create'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute exact path='/nouns' component={Nouns}/>
            <PrivateRoute exact path='/nouns/create' component={Create} />
            <PrivateRoute exact path='/nouns/:collection' component={Collection} />
            <PrivateRoute exact path='/nouns/:collection/en-de' component={EnDe} />
            <PrivateRoute exact path='/nouns/:collection/de-en' component={DeEn} />
            <PrivateRoute exact path='/nouns/:collection/edit' component={Edit} />
  
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />

            <Route exact path='/verbs/create' component={CreateVerb} />

            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
