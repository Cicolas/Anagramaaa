const express = require('express');
const cors = require('cors');
const enviroment = require("../shared/enviroment");
const fs = require('fs');
const path = require("path")

const app = express();
app.use(cors());

start();

app.get("/", (_req, res) => {
    res.send("hello world!")
})
app.get("/api/get_word", (_req, res) => {
    const index = Math.floor(Math.random() * 100000) % words.length;
    const word = words[index];

    console.log("get_word called!!!, random word send: " + word);
    res.status(200).json({
        word: word
    });
})

app.listen(enviroment.port, () => {
    console.log(`Example app listening on port ${enviroment.port}`)
})

////////////////////////////////////////////////////////////////////////////////

var words = [];

function start() {
    fs.readFile(path.resolve(__dirname, "palavras.txt"), "utf8", (err, data) => {
        words = data
            .replace(/\n/g, " ")
            .replace(/\r/g, " ")
            .split(" ")
            .filter((v) => v !== "")
            .map((v) => {
                return v.trim();
            });
    });
}