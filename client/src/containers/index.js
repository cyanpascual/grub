import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../assets/index.css';
import Login from './Login'
import Landing from './Landing'
import Marketplace from './Marketplace'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/Login' component={Login}/>
        <Route path='/Marketplace' component={Marketplace}/>
        <Route path='*'>
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
