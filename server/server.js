const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const routesUrls = require('./routes/routes')
const port = 4000
const app = express()

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
    if (error) {return console.log(error)}
    else console.log("Database connected")
})



app.use(express.json())
app.use(cors())
app.use('/', routesUrls)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})