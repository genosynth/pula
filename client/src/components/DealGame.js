import React , {useRef, useState} from 'react';
import axios from 'axios'


function DealGame({isLoggedIn}) {

  const [usersForGame, updateUsersForGame] = useState([]) 
  const [tempUser, updateTempUser] = useState([]) 
    
  const uname = useRef()
 

  const deal = (event) => {
    event.preventDefault()
      let users = 
    axios.post('http://192.168.0.180:4000/deal', usersForGame)    // OR LOCALHOST!!
    .then((response) => {
      console.log(response)
      if(response.data.status){
      alert("Log out and log in again to view new balls!")
       return window.location.href="/"
      //console.log(response)
      } 
    })

  }

  return (
    <div>
        <form>
        <input ref={uname} placeholder ="User" className="form-control form-control-lg" onChange={()=>{
                 updateTempUser(uname.current.value)
                 
            }}></input>
            <button onClick={(event)=>{
              event.preventDefault()
              updateUsersForGame([...usersForGame,tempUser])
              uname.current.value=""
            }} >Add User</button>
           
         </form>
         <button type="button" onClick={deal}>Send Cards</button>
    </div>
  )
}

export default DealGame