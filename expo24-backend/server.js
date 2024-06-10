"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://remygistelinck:LuWvvCl6qW8AP6bp@web2.lqrloxg.mongodb.net/?retryWrites=true&w=majority";

if (!uri) {
    throw new Error('MONGODB_URI environment variable is not defined');
}

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Create a MongoClient 
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get("/getInvites", async (req, res) => {
    try {
        //connect the client
        await client.connect();

        //retrieve data
        const collection = client.db("FP4").collection("Full-Projects-Expo");
        const invites = await collection.find({}).toArray();

        res.status(200).send(invites);
    } finally {
        await client.close();
    }
});

app.post("/postInvite", async (req, res) => {
    //TODO: check for empty fields

    try {
        await client.connect();

        const invite = {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            numberOfPeople: req.body.numberOfPeople,
            preferences: req.body.preferences,
            occupation: req.body.occupation
        };

        const collection = client.db("FP4").collection("Full-Projects-Expo");
        const insertInvite = await collection.insertOne(invite);
        //Send back the data with the response
        res.status(201).send({
            status: "Saved",
            message: "User has been saved!",
            data: insertInvite,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: "Something went wrong!",
            value: error,
        });
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    // Ping the server every 14 minutes (840,000 milliseconds)
    setInterval(async () => {
        try {
            const fetch = await import('node-fetch');
            fetch.default(`http://localhost:${port}/ping`)
                .then(res => res.text())
                .then(body => console.log(body))
                .catch(err => console.error('Error pinging server:', err));
        } catch (err) {
            console.error('Error loading node-fetch:', err);
        }
    }, 840000); // 14 minutes
});

// Endpoint to respond to the ping
app.get("/ping", (req, res) => {
    res.send("Server is alive");
});
