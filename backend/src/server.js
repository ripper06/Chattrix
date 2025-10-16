const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const ENV = require('./config/env.js');
const connectDB = require('./config/db.js');
const {clerkMiddleware} = require('@clerk/express')
const {serve} = require('inngest/express')
const  {inngest,functions} = require('./config/inngest.js');
const clerkWebhookRouter = require('./routes/clerk-webhook.js');

const app = express();

app.use(express.json()); //acccess req.body

app.use(clerkWebhookRouter);

app.use(clerkMiddleware());

app.get("/", (req,res)=>{
    res.send("Hello World!")
})

app.use("/api/inngest", serve({ client: 
    inngest, 
    functions,
    signingKey: ENV.INNGEST_SIGNING_KEY
 }));


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
