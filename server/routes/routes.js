const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/dbModel.js')
const jwt = require("jsonwebtoken")

router.get('/', (req, res) => {
    res.send("HelloWorld")

})


router.post('/sign', (request, response) => {
    //response.send('send')
    const signedUpUser = new signUpTemplateCopy({
        fullName: "Jean Pierre",
        username: "genju",
        password: "genju",
        email: "genju@genju.com",
        dob: "30/06/1992"

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
       username: "genju",//request.body.username, 
       password: "genju" //request.body.password
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

module.exports = router