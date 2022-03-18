import React, {useState} from 'react'
import ball1 from "../images/ball1.png"
import ball2 from "../images/ball2.png"
import ball3 from "../images/ball3.png"
import ball4 from "../images/ball4.png"
import ball5 from "../images/ball5.png"
import ball6 from "../images/ball6.png"
import ball7 from "../images/ball7.png"
import ball8 from "../images/ball8.png"
import ball9 from "../images/ball9.png"
import ball10 from "../images/ball10.png"
import ball11 from "../images/ball11.png"
import ball12 from "../images/ball12.png"
import ball13 from "../images/ball13.png"
import ball14 from "../images/ball14.png"
import ball15 from "../images/ball15.png"

const pics = [ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15]


function Card({card}) {

  const [css, updateCss] = useState({visibility:"visible"}) 
 
  
  return (
    <div className="ball-container"> 
    <img alt={card} style={css} className="balls" src={pics[(card-1)]} onClick={()=>{updateCss({visibility:"hidden"})}}/>
    </div>
  )
}

export default Card