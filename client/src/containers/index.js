import React,{useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  withRouter,
  browserHistory
} from "react-router-dom";
import { LoginAndSignUpContext } from '../context/LoginAndSignUpContext';
import Login from './Login'
import Landing from './Landing'
import Marketplace from './Marketplace'
import Register from './Register'
import Profile from './Profile'
import Post from './Post'
import Orders from './Orders'
import Forum from './Forum'
import Tutorials from './Tutorials'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard'
import 'fontsource-roboto';



function App() {
  const {authed, setAuthed} = useContext(LoginAndSignUpContext);

  const list_of_public_routes = [
  '/Marketplace',
  '/Profile',
  '/Post',
  '/Orders',
  '/Forum',
  '/Tutorials',
  '/Dashboard'
]



  return (
    <Router>
      {list_of_public_routes.includes(window.location.pathname) ? (
      <header class="main-h1" id="h1">
      <NavLink to="Landing">{<img src="grub-logo.png" alt=""/>}</NavLink>
      <div id="menu">
        <ul>
          <div class="dropdown">
            <button class="dropbtn">PROFILE</button>
            <div class="dd1-cont">
              <NavLink to="Profile" onClick={()=>{setAuthed(true)}}>User Name</NavLink>
              <NavLink to="Dashboard" onClick={()=>{setAuthed(true)}}>Dashboard</NavLink>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">COMMUNITY</button>
          <div class="dd2-cont">
            <NavLink to="Forum" onClick={()=>{setAuthed(true)}}>Forum</NavLink>
            <NavLink to="Tutorials" onClick={()=>{setAuthed(true)}}>Video Library</NavLink>
          </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">SHOP</button>
            <div class="dd3-cont">
              <NavLink to="Marketplace" onClick={()=>{setAuthed(true)}}>Marketplace</NavLink>
              <NavLink to="Orders" onClick={()=>{setAuthed(true)}}>My orders</NavLink>
            </div>
          </div>
        </ul>
      </div>
    </header>):null}
      <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>
        {authed ? (<Route  path='/Marketplace' component={Marketplace} />) : (null)}
        {authed ? (<Route  path='/Profile' component={Profile} />) : (null)}
        {authed ? (<Route  path='/Post' component={Post} />) : (null)}
        {authed ? (<Route  path='/Orders' component={Orders} />) : (null)}
        {authed ? (<Route  path='/Forum' component={Forum} />) : (null)}
        {authed ? (<Route  path='/Tutorials' component={Tutorials} />) : (null)}
        {authed ? (<Route path='/Dashboard' component={Dashboard} />) : (null)}
        <Route path='*'>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
