import enviroment from "../../shared/enviroment.js";
import {complete, dayData, showMessageBox} from "./index";

const chars = document.getElementById("chars");
const textWrite = document.getElementById("textWrite");
const foundWords = document.getElementById("foundWords");
const deleteButton = document.getElementsByClassName("delete")[0];
const sendButton = document.getElementsByClassName("send")[0];
const counter = document.getElementsByClassName("counter")[0];

export var finished = false;
var wordChars: [string, HTMLElement][] = [];
var writingWord = ""
const selectedDivs = [];
var possibleChars: [string, HTMLElement][] = [];

export const _data: dayData = {
    day: "",
    word: "",
    found: [],
    correct: 0,
    all: 0
};

async function loadWord() {
    if (localStorage.getItem("data")) {
        _data.day = JSON.parse(localStorage.getItem("data")).day
    }

    var res = await fetch(`${enviroment.url}/api/daily_word/`)
        .then((value) => {
            return value.json();
        })
        .catch(() => {
            console.log("error");

            showMessageBox(
                "erro ao se comunicar com o servidor. (err: 1000)",
                -1,
                "error"
            );
        });
        _data.word = res.word;
        _data.all = res.quantity;

        finished = res.day.toString() == _data.day;
        _data.day = res.day;
}

function setChars() {
    const chs = _data.word.split("");

    chs.forEach((element) => {
        const div = document.createElement("button");
        div.classList.add("char");
        div.innerText = element;
        div.addEventListener("click", charClick.bind(this, element, div));

        wordChars.push([element, div]);
        possibleChars.push([element, div]);

        chars.appendChild(div);
    });
    if (finished){
        disableAll()
        loadFoundWords();
    }
}

function updateChar(c, div) {
    if (!selectedDivs.includes(div)) {
        div.style.backgroundColor = "#555";
        selectedDivs.push(div);
    }
}

function charClick(c, div: HTMLElement) {
    if (!selectedDivs.includes(div)) {
        writingWord += c;
        div.style.backgroundColor = "#555";
        selectedDivs.push(div);
        possibleChars.splice(
            possibleChars.findIndex((value) => value[0] === c),
            1
        );
    }
    updateWriting();
}

function addChar(c) {
    if (
        possibleChars.find(
            (value) =>
                value[0].normalize("NFD").replace(/[^a-zA-Zs]/g, "") === c
        )
    ) {
        const index = possibleChars.findIndex(
            (value) =>
                value[0].normalize("NFD").replace(/[^a-zA-Zs]/g, "") === c
        );

        writingWord += c;

        updateChar(c, possibleChars[index][1]);
        possibleChars.splice(index, 1);
        updateWriting();
    }
}

function updateWriting() {
    textWrite.innerHTML = writingWord;
}

function clearSelectedDivs() {
    selectedDivs.forEach((element) => {
        element.style.backgroundColor = "";
    });
    selectedDivs.length = 0;
}

function addCorrectWord(word: string[]) {
    for (let i = 0; i < word.length; i++) {
        const v = word[i];
        if (!_data.found.includes(v)) {
            _data.found.push(v);
            const div = document.createElement("div");
            div.classList.add("word");
            div.innerHTML = v+"\n";

            foundWords.appendChild(div);

            counter.innerHTML = `${_data.found.length}/${_data.all}`;
            _data.correct = _data.found.length
            correctWordsAlign();
        }
    }

    if (_data.all === _data.found.length) {
        showMessageBox(
            "Parabéns você completou o desafio de hoje!!!",
            3000,
            "correct"
        );

        disableAll();
        complete(_data);
    }
}

export function disableAll() {
    finished = true;

    wordChars.forEach(value => {
        (value[1] as HTMLButtonElement).disabled = true;
        value[1].style.backgroundColor = "#333";
        value[1].style.cursor = "default";
    })
}

function loadFoundWords(){
    const a = JSON.parse(localStorage.getItem("data")).found;

    for (let i = 0; i < a.length; i++) {
        addCorrectWord(a);
    }

    correctWordsAlign();
}

function correctWordsAlign() {
    if (foundWords.clientWidth < foundWords.scrollWidth) {
        foundWords.style.alignContent = "flex-start";
    } else {
        foundWords.style.alignContent = "center";
    }
}

function reset() {
    for (let i = 0; i < wordChars.length; i++) {
        possibleChars[i] = wordChars[i];
    }

    writingWord = "";
    clearSelectedDivs();
    updateWriting();
}

async function sendWord() {
    const res = await fetch(`${enviroment.url}/api/check_word/${writingWord}`)
        .then((value) => {
            return value.json();
        })
        .catch(() =>
            showMessageBox(
                "erro ao se comunicar com o servidor.(err: 1001)",
                5000,
                "error"
            )
        );

    const value = await res;
    if (value.exist) addCorrectWord(value.word);
}

deleteButton.addEventListener("click", () => {
    reset();
});

sendButton.addEventListener("click", async () => {
    sendWord();
    reset();
});

document.addEventListener("keydown", async (e) => {
    if (!finished) {
        addChar(e.key.toLowerCase());
        if (e.key === "Enter") {
            sendWord();
            reset();

            e.preventDefault();
        }
    }

    if (e.key === "Backspace") {
        reset();

        e.preventDefault();
    }
});

loadWord().then(setChars);
