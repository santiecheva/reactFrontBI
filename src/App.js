import './App.css';
import React from 'react';
import Marcas from './services/prueba';
import Login from './components/pages/login';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PaginaPrueba from './components/pages/pagina/paginaDePrueba';

//Amplify.configure(awsconfig);


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/prueba" component={Marcas} />
          <Route exact path="/pagina" component={PaginaPrueba} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
