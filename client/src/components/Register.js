import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {

    let logIn,updateLogInUname,updateLogInPassword,password,uname;
  return (
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <form onSubmit={logIn} className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please enter the required information!</p>

              <div className="form-outline form-white mb-4">               
                <input ref={uname} placeholder='First Name' className="form-control form-control-lg" onChange={()=>{
                updateLogInUname(uname.current.value)
            }}></input>
                <label className="form-label" htmlFor="typeEmailX">First Name</label>
              </div>

              <div className="form-outline form-white mb-4">               
                <input ref={uname} placeholder='Last Name' className="form-control form-control-lg" onChange={()=>{
                updateLogInUname(uname.current.value)
            }}></input>
                <label className="form-label" htmlFor="typeEmailX">Last Name</label>
              </div>

              <div className="form-outline form-white mb-4">               
                <input ref={uname} placeholder='username' className="form-control form-control-lg" onChange={()=>{
                updateLogInUname(uname.current.value)
            }}></input>
                <label className="form-label" htmlFor="typeEmailX">Username</label>
              </div>


              <div className="form-outline form-white mb-4">
               
                <input ref={password} placeholder ="password" type="password" className="form-control form-control-lg" onChange={()=>{
                 updateLogInPassword(password.current.value)
            }}></input>
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>

          
              <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

             
            </form>

            <div>
              <p className="mb-0">Already have an account? <a href="/" className="text-white-50 fw-bold">Log in from here</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Register