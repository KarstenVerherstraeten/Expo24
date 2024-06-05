"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const port = 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

//code from cloud.mongodb.com
// Create a MongoClient 
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get("/getInvites", async (req, res) => {
    try{
        //connect the client
        await client.connect();

        //retrieve data
        const collection = client.db("FP4").collection("Full-Projects-Expo")
        const invites = await collection.find({}).toArray();

        res.status(200).send(invites);
    } finally{
        await client.close();
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});