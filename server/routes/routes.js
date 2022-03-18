const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/dbModel.js')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const deal = require("../models/deal")

router.get('/', (req, res) => {
    res.send("HelloWorld") // testing that server is up

})


router.post('/sign', async(request, response) => {
    //response.send('send')
    let hashedPassword = await bcrypt.hash(request.body.password, 8);
    const signedUpUser = new signUpTemplateCopy({
        //fullName: request.body.fullName,
        username: request.body.username,
        password: hashedPassword
        //email: request.body.email,
        //dob: request.body.dob

    })
    signedUpUser.save()
    .then (data => {
        console.log(data)
        response.json(data)
        //console.log(data)
    })
    .catch (error => {
        response.json(error)
        //console.log(error)
    }) 
})

router.post('/login', async(request, response) => {
    //response.send('send')
   const user = await signUpTemplateCopy.findOne({
       username: request.body.username, 
       //password: request.body.password
    })

    if(user && await bcrypt.compare(request.body.password, user.password)){

        const token = jwt.sign({
            username:user.username,
            cards:user.cards,
            message:user.message
            //email:user.email
        }, 'secretqwerty')
        console.log(user)
        return response.json({status: 'ok', user:token})
    } else {return response.json({status:"error", user:false})}

})

router.post('/deal', async (req, res)=> { // this is used to deal and distribute cards to players playing ADMIN ONLY GENJU
   
    let players = req.body
    
   const users =  await signUpTemplateCopy.find()
  
    //const users = await signUpTemplateCopy.find({ username: "genju" })

     console.log(users)
    let results = deal(players.length)

    let stringPlayers = ""
    players.forEach((player)=>{
        stringPlayers+=" - " + player
    })
  
   if(users){
    let i = 0;
    users.forEach((el)=>{
        
        for (let z=0; z<players.length; z++){
            if (el.username === players[z]){
                el.cards=results[i]
                el.message =`Current Players are${stringPlayers}`
                i++
                el.save()
                return
            }

        }
        el.cards=[];
        el.message = ""
        el.save()
        /*el.cards=results[i]        
        i+=1 */
    })
    
    return res.json({status:"ok"})
      /* users[0].cards=[distributed[0], distributed[1]]
      console.log(user[0].cards)
      users[0].save()
      return res.json({status:"ok"}) */
   } else {return res.json({status:"error", users:false})}
  })

module.exports = router