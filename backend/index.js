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

app.get("/api/random_word", (req, res) => {
    const word = getRandomWord();
    const possible = possibleCount(word);
    console.log(`Random word sent: "${word}" ${possible} possible combinations`);
    res.status(200).json({
        word: word,
        quantity: possible
    });
})

app.get("/api/daily_word", (req, res) => {
    console.log(`Daily word sent: "${word}" ${possibleCount(dayWord)} possible combinations`);
    res.status(200).json({
        word: dayWord,
        quantity: possibleCount(dayWord)
    });
})

app.get("/api/check_word/:word", (req, res) => {
    // console.log("checking word: " + req.params.word + "... " + checkWord(req.params.word, null));

    res.status(200).json({
        word: req.params.word,
        exist: checkWord(req.params.word, null)
    });
})

app.listen(enviroment.port, () => {
    console.log(`Example app listening on port ${enviroment.port}`)
})

////////////////////////////////////////////////////////////////////////////////

var words = [];
var dayWord = "";

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

        dayWord = getRandomWord();
    });
}

function getRandomWord() {
    const index = Math.floor(Math.random() * 100000) % words.length;
    return words[index];
}

function checkWord(word, base) {
    if (!base) {
        return words.includes(word.normalize("NFD").replace(/[^a-zA-Zs]/g, ""));
    }
}

function possibleCount(word) {
    var chars = {
        // "a": 2
    };
    word.split("").forEach(element => {
        if (!chars[element]) {
            chars[element] = 1;
        } else {
            chars[element]++;
        }
    })

    var number = 0;

    var possibles = words
        .filter(value => value.length <= word.length)
        .filter(value => {
            var is = true;

            var wordChars = {}
            value.split("").forEach(element => {
                if (!wordChars[element]) {
                    wordChars[element] = 1;
                } else {
                    wordChars[element]++;
                }
            })

            Object.entries(wordChars).forEach(element => {
                if (!chars[element[0]]) {
                    is = false;
                } else {
                    if (chars[element[0]] < element[1]) {
                        is = false
                    }
                }
            })

            return is;
        });

    console.log(possibles);
    return possibles.length;
}