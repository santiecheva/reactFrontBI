import './App.css';
import React from 'react';
import Marcas from './services/prueba';
import Login from './components/pages/login';
import Amplify, { Auth } from 'aws-amplify';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

Amplify.configure({
  region: 'xx-xxxxx-x',
})

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
