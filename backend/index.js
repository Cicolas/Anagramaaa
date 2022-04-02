const express = require('express');
const cors = require('cors');
const enviroment = require("../shared/enviroment");
const fs = require('fs');
const path = require("path")

var day = new Date();
var seed = getSeed(day);
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
    console.log(`Daily word sent: "${dayWord}" ${dayGuesses.length} possible combinations`);
    res.status(200).json({
	    day: seed,
	word: dayWord,
        quantity: dayGuesses.length
    });
})

app.get("/api/check_word/:word", (req, res) => {
    // console.log("checking word: " + req.params.word + "... " + checkWord(req.params.word, null));

    res.status(200).json({
        word: checkWord(req.params.word),
        exist: checkWord(req.params.word, null).length > 0
    });
})

app.listen(enviroment.port, () => {
    console.log(`Example app listening on port ${enviroment.port}`)
})

////////////////////////////////////////////////////////////////////////////////

var words = [];
var dayWord = "";
var dayGuesses = [];

function start() {
    fs.readFile(path.resolve(__dirname, "palavras.txt"), "utf8", (err, data) => {
        if (err) {
            throw err.message;
        }
        words = data
            .replace(/\n/g, " ")
            .replace(/\r/g, " ")
            .split(" ")
            .filter((v) => v !== "")
            .map((v) => {
                return v.trim();
            });

        update();
    });
}

function update() {
    day = new Date();
    seed = getSeed(day);
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(0);
    nextDay.setMinutes(0)
    nextDay.setSeconds(0);
    nextDay.setMilliseconds(0);

    const nextAtt = nextDay.getTime() - day.getTime();

    console.log(`Tempo próxima atualização: ${nextAtt}ms`);
    console.log(`Dia: ${seed}`);
    dayWord = getDayWord();
    dayGuesses = getPossibles(dayWord);
    console.log(dayWord);
    console.log(dayGuesses);

    setTimeout(update, nextAtt);
}

function getRandomWord() {
    const index = Math.floor(Math.random() * 100000) % words.length;
    return words[index];
}

function getSeed(d) {
    var t = d.getTime();
    t -= 3 * 3600 * 1000;

    return Math.floor(Math.floor(t / 1000) / 3600 / 24);
}

function getDayWord() {
    const index = Math.floor(Math.random(seed) * 100000) % words.length;
    return words[index];
}

function checkWord(word, base) {
    if (!base) {
        return dayGuesses.filter(value => {
            return removeAccecnt(word) === removeAccecnt(value)
        });
    }
}

function getPossibles(word) {
    var chars = {
        // "a": 2
    };
    removeAccecnt(word).split("").forEach(element => {
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
            removeAccecnt(value).split("").forEach(element => {
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

    return possibles;
}

function removeAccecnt(str) {
    return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "")
}
