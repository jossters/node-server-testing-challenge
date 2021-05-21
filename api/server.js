const express = require("express");

const JokesRouter = require('./jokes/jokes-router')

const server = express();

server.use(express.json());

server.use('/api/jokes', JokesRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
})

module.exports = server;