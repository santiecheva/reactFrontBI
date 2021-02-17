import './App.css';
import React from 'react';
import Marcas from './services/prueba';
import Login from './components/pages/login'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/prueba" component={Marcas} />
        </Switch>
      </Router>
      </>
  );
}

export default App;
