import enviroment from '../../shared/enviroment.js';

const chars = document.getElementById("chars");

var word = ""

async function loadWord() {
    var req = await fetch(enviroment.url+"api/get_word/").then((value) => {
        return value.json();
    })

    word = req.word;
}

function setChars() {
    const chs = word.split("")
    console.log(chs);

    chs.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("char")
        div.innerText = element;

        chars.appendChild(div);
    });
}

loadWord().then(() =>
    setChars()
);