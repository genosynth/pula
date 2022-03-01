import './App.css';
import React, {useState} from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

// import jwt from "jwt-decode"
function App() {

  
  let accounts = [{username:"genju", password:"genju", cards:[1,10]}, {username:"jacques", password:"jacques", cards:[11,5]}]
  
  const [isLoggedIn, changeLogInStatus] = useState(()=>{ //used to get the name of the logged in user
    const token = localStorage.getItem("pula")
    if (token){
    const loggedUser = JSON.parse(token)
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
      <Login accounts={accounts}/>
      
    </div>
  );
}

export default App;
