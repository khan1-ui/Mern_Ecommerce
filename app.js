const express= require('express')
const router = require('./src/routes/api')
const app = new express()
const bodyParser= require('body-parser')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const hpp =require('hpp')
const cors = require('cors')
const mongoose = require('mongoose')
//security
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended: true}))
//json bodyParser
app.use(bodyParser.json())
//Rate-limit
const limiter = rateLimit({
    windowMs:15*60*1000,max:300
})
app.use(limiter)
//Database Connection
let URI="mongodb+srv://user1111:user1111@cluster0.upzps2o.mongodb.net/Ecommerce"
let OPTION={user:'user1111',pass:"user1111",autoIndex:true}
mongoose.connect(URI,OPTION).then((result)=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.log(error)
})
//backend-router
app.use("/api/v1",router)
app.use("*",(req,res)=>{
    res.status(400).json({
        state:"failed",data:"data not fount"
    })
})
module.exports = app