const express = require("express");
const speakeasy = require("speakeasy");
const uuid = require("uuid");
const { JsonDB } = require("node-json-db");
const { config } = require("node-json-db/dist/lib/JsonDBConfig");



App = express();

App.use(express.json)

const db = new JsonDB(new Config('myDatabase', true, false, '/'))

App.get("/api", (req, res) => {
    res.json("Welcome to the 2-Factor authentication application back-end")
})

//Register user and create temporary secret
App.post('/api/register', (req,res) => {
    const id = uuid.v4()

    try {
        const path = `/user/${id}`

        db.push(path, { id })
        const temp_secret = speakeasy.generateSecret()
        res.json({ id, secret: temp_secret.base32 })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error generating secret"})
    }
})


//Verify token and make secret permanent
App.post('/api/verify', (req,res) => {
    const { token, userID } = req.body
    try {
        const path = `/user/${userID}`
        const user = db.getData(path)
    } catch (error) {
        
    }
})

const PORT = process.env.PORT || 5000;

App.listen(PORT, () => {console.log(`Server running on ${PORT}`)});