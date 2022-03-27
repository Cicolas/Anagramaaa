import enviroment from '../../shared/enviroment.js';

const chars = document.getElementById("chars");
const textWrite = document.getElementById("textWrite");
const foundWords = document.getElementById("foundWords");
const deleteButton = document.getElementsByClassName("delete")[0];
const sendButton = document.getElementsByClassName("send")[0];
const counter = document.getElementsByClassName("counter")[0];

var selectedWord = ""
var writingWord = ""
var correctWords = []

var quantity = 0;
const selectedDivs = []

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

        chars.appendChild(div);
    });
}

function charClick(c, div: HTMLElement) {
    if (!selectedDivs.includes(div)) {
        writingWord += c;
        div.style.backgroundColor = "#555";
        selectedDivs.push(div);
    }

    updateWriting();
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
    }
}

function reset() {
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

loadWord().then(() =>
    setChars()
);