import React, {useState, useRef} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {

  const [signUsername, updateSignUsername] = useState("");
  const [signPassword, updateSignPassword] = useState("");
  const [SignConfPassword, updateSignConfPassword] = useState("");
  
  



  const uname = useRef();
  const password = useRef();
  const confPassword = useRef();




  const signUp = (event) => {
    event.preventDefault()

    if (signPassword!==SignConfPassword) return alert("Passwords do not match!")
    const registered = { username:signUsername, password: signPassword};
  
    axios.post('http://192.168.0.145:4000/sign', registered)    // OR LOCALHOST!!
    .then((response) => {
      console.log(response)
      if(response.data.username){
      alert("Registered succesfully!")
       return window.location.href="/"
      //console.log(response)
      } else{ alert("Username already in use! Please use another username.")}
    })

  }

    //let logIn,updateLogInUname,updateLogInPassword,password,uname;
  return (
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <form onSubmit={signUp} className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please enter the required information!</p>

              
              <div className="form-outline form-white mb-4">               
                <input ref={uname} placeholder='username' required className="form-control form-control-lg" onChange={()=>{
                updateSignUsername(uname.current.value)
            }}></input>
                <label className="form-label" required htmlFor="typeUsernameX">Username</label>
              </div>


              <div className="form-outline form-white mb-4">
               
                <input ref={password} placeholder ="password" type="password" required className="form-control form-control-lg" onChange={()=>{
                 updateSignPassword(password.current.value)
            }}></input>
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>
              

              <div className="form-outline form-white mb-4">
               
               <input ref={confPassword} placeholder ="confirm password" type="password" required className="form-control form-control-lg" onChange={()=>{
                updateSignConfPassword(confPassword.current.value)
           }}></input>
               <label className="form-label" htmlFor="typePasswordX">Confirm Password</label>
             </div>


        
          
              <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

             
            </form>

            <div>
              <p className="mb-0">Already have an account? <a href="/" className="text-white-50 fw-bold">Log in</a></p>
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