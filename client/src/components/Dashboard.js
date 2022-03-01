import React from 'react'
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard({isLoggedIn, logOut}) {
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
      </div>
      
    </section>
  )
}

export default Dashboard