import enviroment from '../../shared/enviroment.js';

const chars = document.getElementById("chars");
const textWrite = document.getElementById("textWrite");
const foundWords = document.getElementById("foundWords");
const deleteButton = document.getElementsByClassName("delete")[0];
const sendButton = document.getElementsByClassName("send")[0];
const counter = document.getElementsByClassName("counter")[0];

var wordChars: [string, HTMLElement][] = [];
var selectedWord = ""
var writingWord = ""
const correctWords = []

var quantity = 0;
const selectedDivs = []
var possibleChars: [string, HTMLElement][] = [];

async function loadWord() {
    var res = await fetch(enviroment.url+"/api/random_word/").then((value) => {
        return value.json();
    })

    selectedWord = res.word;
    quantity = res.quantity;
}

function setChars() {
    const chs = selectedWord.split("")

    chs.forEach(element => {
        const div = document.createElement("button");
        div.classList.add("char")
        div.innerText = element;
        div.addEventListener("click", charClick.bind(this, element, div));

        wordChars.push([element, div]);
        possibleChars.push([element, div]);

        chars.appendChild(div);
    });
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
        possibleChars.splice(possibleChars.findIndex(value => value[0] === c), 1);
    }
    updateWriting();
}

function addChar(c) {
    if (possibleChars.find(value => value[0].normalize("NFD").replace(/[^a-zA-Zs]/g, "") === c)) {
        const index = possibleChars.findIndex(value => value[0].normalize("NFD").replace(/[^a-zA-Zs]/g, "") === c);

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
    selectedDivs.forEach(element => {
        element.style.backgroundColor = "";
    });
    selectedDivs.length = 0;
}

function addCorrectWord(word) {
    if (!correctWords.includes(word)) {
        correctWords.push(writingWord);
        const div = document.createElement("div");
        div.classList.add("word");
        div.innerHTML = word;

        foundWords.appendChild(div);

        counter.innerHTML = `${correctWords.length}/${quantity}`
        correctWordsAlign();
    }
}

function correctWordsAlign() {
    if (foundWords.clientWidth < foundWords.scrollWidth) {
        foundWords.style.alignContent = "flex-start";
    }else {
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

deleteButton.addEventListener("click", () => {
    reset();
})

sendButton.addEventListener("click", async () => {
    const res = await fetch(`${enviroment.url}/api/check_word/${writingWord}`)
    const value = await res.json();

    if (value.exist) addCorrectWord(value.word);
    reset();
})

document.addEventListener("keydown", async (e) => {
    addChar(e.key.toLowerCase());

    if (e.key === "Enter") {
        const res = await fetch(`${enviroment.url}/api/check_word/${writingWord}`)
        const value = await res.json();
        if (value.exist) addCorrectWord(value.word);
        reset();
    }

    if (e.key === "Backspace") {
        reset();
    }

    e.preventDefault();
})

loadWord().then(() =>
    setChars()
);