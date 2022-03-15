const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/dbModel.js')
const jwt = require("jsonwebtoken")
const deal = require("../models/deal")

router.get('/', (req, res) => {
    res.send("HelloWorld") // testing that server is up

})


router.post('/sign', (request, response) => {
    //response.send('send')
    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        password: request.body.password,
        email: request.body.email,
        dob: request.body.dob

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
       password: request.body.password
    })

    if(user){

        const token = jwt.sign({
            username:user.username,
            cards:user.cards,
            email:user.email
        }, 'secretqwerty')
        console.log(user)
        return response.json({status: 'ok', user:token})
    } else {return response.json({status:"error", user:false})}

})

router.post('/deal', async (req, res)=> { // this is used to deal and distribute cards to players playing
   
    let players = req.body
    
   const users =  await signUpTemplateCopy.find({ $or:[
          {username : {$eq : players[0]}},
          {username: {$eq:players[1]}},
          {username: {$eq:players[2]}},
          {username: {$eq:players[3]}},
          {username: {$eq:players[4]}},
          {username: {$eq:players[5]}},
          {username: {$eq:players[6]}},
          {username: {$eq:players[7]}}
        ]
    })
  
    //const users = await signUpTemplateCopy.find({ username: "genju" })

     console.log(users)
  let results = deal(users.length)
  
   if(users){
    let i = 0;
    users.forEach((el)=>{
        el.cards=results[i]
        el.save()
        i+=1
    })
    return res.json({status:"ok"})
      /* users[0].cards=[distributed[0], distributed[1]]
      console.log(user[0].cards)
      users[0].save()
      return res.json({status:"ok"}) */
   } else {return res.json({status:"error", users:false})}
  })

module.exports = router