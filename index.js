const express = require("express");
const speakeasy = require("speakeasy");
const uuid = require("uuid");
const { JsonDB } = require("node-json-db");
const { config } = require("node-json-db/dist/lib/JsonDBConfig");



App = express();

const db = new JsonDB(new Config('myDatabase', true, false, '/'))

App.get("/api", (req, res) => {
    res.json("Welcome to the 2-Factor authentication application back-end")
})

//Register user and create temporary secret


const PORT = process.env.PORT || 5000;

App.listen(PORT, () => {console.log(`Server running on ${PORT}`)});