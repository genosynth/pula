const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require ('path')
const routesUrls = require('./routes/routes')
const port = process.env.PORT || 4000
const app = express()

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
    if (error) {return console.log(error)}
    else console.log("Database connected")
})


//app.use(express.static(path.join(__dirname + "/public"))) // this is the extra code
app.use(express.static(path.join(__dirname, 'public')));

// PATH CONFIGURATION TO RESPOND TO A REQUEST TO STATIC ROUTE REQUEST BY SERVING index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json())
app.use(cors())
app.use('/', routesUrls)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})