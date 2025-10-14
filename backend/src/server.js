const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const ENV = require('./config/env.js');
const connectDB = require('./config/db.js');



const app = express()

app.get("/", (req,res)=>{
    res.send("Hello World!")
})

const port = ENV.PORT;

app.listen(port, ()=> {
    console.log(`Server started on port : ${port}`);
    connectDB();
})