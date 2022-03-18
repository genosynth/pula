import React from 'react'
import Cards from './Cards'

import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DealGame from './DealGame.js';

function Dashboard({isLoggedIn, logOut}) {


  if (isLoggedIn.username==="genju") return (

    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-10">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5"> 
        <div className="card bg-dark text-white" >
            <h1>{isLoggedIn.username}</h1>
            <div className='ball-container'>
              <Cards cards={isLoggedIn.cards}/>
            </div>
            <button className="btn btn-outline-light btn-lg px-5" type='button' onClick={()=>{window.location.href="/dealgame"}}>Deal</button>
            <Router>
          <Routes>
          <Route path="/dealgame"  element={<DealGame isLoggedIn={isLoggedIn}/>}/>
          
          </Routes>
        </Router>
            <button className="btn btn-outline-light btn-lg px-5" type='button' onClick={logOut}>Log Out</button>
        </div>
        
      </div>
      </div>
      <p style={{color: "white"}}>{isLoggedIn.message}</p>
      </div>
      
    </section>
  )
  return (

    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-10">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5"> 
        <div className="card bg-dark text-white" >
            <h1>{isLoggedIn.username}</h1>
            <div className='ball-container'>
              <Cards cards={isLoggedIn.cards}/>
            </div>
            <button className="btn btn-outline-light btn-lg px-5" type='button' onClick={logOut}>Log Out</button>
        </div>
        
      </div>
      </div>
      <p style={{color: "white"}}>{isLoggedIn.message}</p>
      </div>
      
    </section>
  )
}

export default Dashboard