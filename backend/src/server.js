const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const ENV = require('./config/env.js');
const connectDB = require('./config/db.js');
const {clerkMiddleware} = require('@clerk/express')
const {serve} = require('inngest/express')
const  {functions,inngest} = require('./config/inngest.js');

const app = express();

app.use(express.json()); //acccess req.body

app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req,res)=>{
    res.send("Hello World!")
})


const startServer = async ()=>{
    try {

        await connectDB();

        if(ENV.NODE_ENV !== "production"){
            app.listen(ENV.PORT, ()=>{
                console.log(`Server started on port : ${ENV.PORT}`);
            });
        }

    } catch (error) {

        console.log("Error occured while starting the server : ",error);
        process.exit(1);

    }
}

startServer();

module.exports = app;
