import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../assets/index.css';
import Login from './Login'
import Landing from './Landing'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/Landing' component={Landing}/>
        <Route path='*'>
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
