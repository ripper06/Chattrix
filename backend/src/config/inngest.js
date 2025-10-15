const {Inngest} = require('inngest');
const connectDB = require('./db')
const {User} = require('../models/user.model')
const {INGEST_SIGNING_KEY} = require("../config/env")

// Create a client to send and receive events
const inngest = new Inngest({ 
    id: "chattrix"
});

const syncUser = inngest.createFunction(
    {id : "sync-user"},
    {event : "clerk/user.created"},
    async ({event})=> {
        await connectDB();

        const {id, email_addresses, first_name, last_name, image_url} = event.data;

        const newUser = {
            clerkId : id,
            email : email_addresses[0]?.email_address,
            name : `${first_name || ""}${" "}${last_name || ""}`,
            image : image_url,
        }

        await User.create(newUser);
    }
)

const deleteUserFromDB = inngest.createFunction(
    {id : "delete-user-from-db"},
    {event : "clerk/user.deleted"},
    async ({event})=> {

        const {id} = event.data;

        await User.deleteOne({clerkId : id});
        //await deleteStreamUser(id.toString());
    }
)

// Create an empty array where we'll export future Inngest functions
const functions = [syncUser, deleteUserFromDB];

module.exports = { inngest, functions };