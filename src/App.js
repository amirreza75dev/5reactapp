import Birthday from './birthday'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Tour from './tour'
import Reviews from './reviews'
import Questions from './question'
import Menu from './menu/menu'
import Home from './home'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path = '/'>
        <Home/>
        </Route>
        <Route exact path = '/birthday'>
        <Birthday/>
        </Route>

        <Route exact path = "/tour">
          <Tour/>
        </Route>
        <Route exact path = "/reviews">
          <Reviews/>
        </Route>
        <Route exact path = "/question">
          <Questions/>
        </Route>
        <Route exact path = "/menu">
          <Menu/>
        </Route>




      </Switch>

    </div>

    </Router>
  );
}

export default App;
