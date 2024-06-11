"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 3000;  // Use environment variable for port
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI || "mongodb+srv://remygistelinck:LuWvvCl6qW8AP6bp@web2.lqrloxg.mongodb.net/?retryWrites=true&w=majority";

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

async function connectClient() {
    try {
        await client.connect();
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectClient();

app.get("/getInvites", async (req, res) => {
    try {
        const collection = client.db("FP4").collection("Full-Projects-Expo");
        const invites = await collection.find({}).toArray();
        res.status(200).send(invites);
    } catch (error) {
        console.error("Error getting invites:", error);
        res.status(500).send({
            error: "Something went wrong!",
            value: error,
        });
    }
});

app.post("/postInvite", async (req, res) => {
    //TODO: check for empty fields
    try {
        const invite = {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            numberOfPeople: req.body.numberOfPeople,
            preferences: req.body.preferences,
            occupation: req.body.occupation,
            companyTitle: req.body.companyTitle
        };

        const collection = client.db("FP4").collection("Full-Projects-Expo");
        const insertInvite = await collection.insertOne(invite);
        res.status(201).send({
            status: "Saved",
            message: "User has been saved!",
            data: insertInvite,
        });
    } catch (error) {
        console.error("Error posting invite:", error);
        res.status(500).send({
            error: "Something went wrong!",
            value: error,
        });
    }
});

// Health check endpoint
app.get("/health", async (req, res) => {
    try {
        // Perform a simple operation to check server health
        const database = client.db("FP4"); // Use any existing database
        const adminCommand = { ping: 1 };
        const result = await database.command(adminCommand);
        if (result.ok === 1) {
            console.log('Status ok');
            res.status(200).send({ status: "OK" });
        } else {
            throw new Error("Health check failed");
        }
    } catch (error) {
        console.error("Health check failed:", error);
        res.status(500).send({ error: "Health check failed" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

    setInterval(async () => {
        try {
            const fetch = await import('node-fetch');
            const response = await fetch.default(`http://localhost:${port}/health`);
            const body = await response.text();
            console.log(`Health check response: ${body}`);
        } catch (err) {
            console.error('Error checking server health:', err);
        }
    }, 840000); // 14 minutes
});
