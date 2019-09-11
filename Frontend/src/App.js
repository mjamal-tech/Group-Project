import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './UserProfile/Profile'
import Mainpage from './Mainpage'
import LoggedIn from './LoggedIn';
import Jobs from './Jobs'
import {BrowserRouter as Router,Route, Switch, Link, NavLink} from 'react-router-dom';
import Posts from './Posts'
import CreateUser from './UserProfile/CreateUser'

class App extends Component{
  state={
    
  }
  
  render(){
  return (
    <div className="App">
      {/* <Mainpage/> */}
     
     {/* <Profile/> */}
     <Switch>
    
     <Route path="/create" component={CreateUser} />
          <Route path="/edit/:id" component={CreateUser} />
          <Route path="/" exact component={LoggedIn} />
          </Switch>
    </div>
  );
}}

export default App;
