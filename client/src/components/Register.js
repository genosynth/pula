import React, {useState, useRef} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {

  const [signUsername, updateSignUsername] = useState("");
  const [signPassword, updateSignPassword] = useState("");
  const [signFname, updateSignFname] = useState("");
  const [signDOB, updateSignDOB] = useState("");
  const [signEmail, updateSignEmail] = useState("");



  const uname = useRef();
  const password = useRef();
  const fname = useRef();
  const dob = useRef();
  const email = useRef()


  const signUp = (event) => {
    event.preventDefault()
    const registered = {fullName: signFname, username:signUsername, password: signPassword, email: signEmail, dob: signDOB};
  
    axios.post('http://192.168.0.180:4000/sign', registered)    // OR LOCALHOST!!
    .then((response) => {
      console.log(response)
      if(response.data.email){
      alert("Registered succesfully!")
       return window.location.href="/"
      //console.log(response)
      } else{ alert("Username and/or Email already in use! Please use another username and/or email.")}
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
                <input ref={fname} placeholder='Full Name' className="form-control form-control-lg" onChange={()=>{
                updateSignFname(fname.current.value)
            }}></input>
                <label className="form-label" htmlFor="typeFullNameX">Full Name</label>
              </div>
              

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
                <input ref={email} placeholder='Email Address' required type="email" className="form-control form-control-lg" onChange={()=>{
                updateSignEmail(email.current.value)
            }}></input>
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">               
                <input ref={dob} placeholder='Date Of Birth' type="date" className="form-control form-control-lg" onChange={()=>{
                updateSignDOB(dob.current.value)
            }}></input>
                <label className="form-label" htmlFor="typeDateX">DOB</label>
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