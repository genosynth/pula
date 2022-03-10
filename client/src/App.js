import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import jwt from "jwt-decode"

// import jwt from "jwt-decode"
function App() {

  
  let accounts = [{username:"genju", password:"genju", cards:[10,5]}, {username:"jacques", password:"jacques", cards:[11,5]}]
  
  const [isLoggedIn, changeLogInStatus] = useState(()=>{ //used to get the name of the logged in user
    const token = localStorage.getItem("pula")
    if (token){
    const loggedUser = jwt(token)
    //console.log(loggedUser)
    if(loggedUser){return loggedUser}
    else {
      localStorage.removeItem('pula')
      return false}
    } else { return false}
  
  })

  let logOut = () =>{
    localStorage.removeItem('pula')
    window.location.href = '/'
  }

  if (isLoggedIn){
    return (
      <div className='App'>
       
        <Dashboard isLoggedIn={isLoggedIn} logOut={logOut}/>

      </div>
      
    )
  }
  return (
    <div className="App">
      

      
      <Router>
          <Routes>
          <Route path="/"  element={<Login accounts={accounts}/>}/>
          <Route path="/register"  element={<Register/>}/>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
