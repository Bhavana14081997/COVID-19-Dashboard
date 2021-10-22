import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import EachState from './components/EachState'

// const ActiveHeader = [
//   {tabId: 'HOME', displayText: 'Home'},
//   {tabId: 'ABOUT', displayText: 'About'},
// ]

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/state/:stateCode" component={EachState} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
