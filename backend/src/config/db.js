const mongoose = require('mongoose')
const ENV = require('./env')

const connectDB = async() =>{
    try {
        const success = await mongoose.connect(ENV.MONGO_URI);
        console.log("MongoDB connected successfully!", success.connection.host);
    } 
    catch (error) {
        console.log("Error connecting to MongoDB : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;