import React, {useRef, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import jwt from "jwt-decode"
function Login({accounts}) {

const [logInUname, updateLogInUname] = useState("") 
const [logInPassword, updateLogInPassword] = useState("") 
    
  const uname = useRef()
  const password = useRef()

const logIn = () =>{
    let message = "Incorrect username and/or password!"
    accounts.map((el)=>{
        if (el.username===logInUname && el.password===logInPassword){
          localStorage.setItem('pula', JSON.stringify(el))
          
            return message=`Logged in as ${logInUname}`
        }       
        
    })

    alert(message)
    window.location.href = '/' 
    }

    return (
       
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <form onSubmit={logIn} className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

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

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

             
            </form>

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    ) 
  /*return ( THIS IS INSTEAD OF THE <SECTION>
  
    <div>
        <form onSubmit={logIn}>
            <input ref={uname} placeholder='username' onChange={()=>{
                updateLogInUname(uname.current.value)
            }}></input>
            <input ref={password} placeholder ="password" type="password" onChange={()=>{
                 updateLogInPassword(password.current.value)
            }}></input>
            <button type="submit">Log In</button>
        </form>
    </div>
  )
*/
  
}

export default Login