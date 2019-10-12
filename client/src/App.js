import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navigation from './Components/layout/Navigation/Navigation';
import Home from './Components/layout/Home/Home';
import Footer from './Components/layout/Footer/Footer';
import DrinkState from './Components/Context/Drinks/DrinkState';
import IngredientProfile from './Components/layout/IngredientProfile/IngredientProfile';
import DrinkProfile from './Components/layout/DrinkProfile/DrinkProfile';
import Menu from './Components/layout/Menu/Menu';

const App = () => (
  <>
    <DrinkState>
      <Router>
        <Navigation />
        <Switch>
          <Route
            exact
            path='/ingredients/:name'
            component={IngredientProfile}
          />
          <Route exact path='/drink/:id' component={DrinkProfile} />
          <Route exact path='/drinks' component={Menu} />
          <Route exact path='/home' component={Home} />
          <Redirect from='/' to='/home' />
        </Switch>
        <Footer />
      </Router>
    </DrinkState>
  </>
);

export default App;
