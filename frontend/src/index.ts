import { disableAll, _data } from "./game";
import enviroment from "../../shared/enviroment";
import { finish } from "./saveManager";

const box = document.getElementById("box");
const helpText = document.getElementById("helpText");
const completeText = document.getElementById("completeText");
const shareButton = document.getElementById("share");
const completeButton = document.getElementById("desistir");
const quit = document.getElementsByClassName("close");
const help = document.getElementsByClassName("help")[0];

const allWords = document.getElementsByClassName("allWords")[0];

export interface dayData {
    day: string,
    word: string,
    found: string[],
    correct: number,
    all: number,
}
let data: dayData = _data;
let showingHelp = false;
let showingComplete = false;

function changeBoxState(visible: boolean) {
    if(visible) {
        box.classList.remove("hidden");
        return;
    }
    box.classList.add("hidden");
}

function changeHelpState() {
    showingHelp = !showingHelp;

    if (!showingHelp) {
        changeBoxState(false);
        helpText.classList.add("hidden");
        return;
    }

    changeBoxState(true);
    helpText.classList.remove("hidden");
}

function changeCompleteState() {
    showingComplete = !showingComplete;

    if (!showingComplete) {
        changeBoxState(false);
        completeText.classList.add("hidden");
        return;
    }

    changeBoxState(true);
    completeText.classList.remove("hidden");
    updateCompleteState();
}

async function updateCompleteState() {
    let res = await fetch(`${enviroment.url}/api/get_all_words/`)
        .then((value) => {
            return value.json();
        })
        .catch(() => {
            console.log("error");

            showMessageBox(
                "erro ao se comunicar com o servidor. (err: 1003)",
                3000,
                "error"
            );
        });

        let str = "";

        for (let i = 0; i < res.words.length; i++) {
            if (data.found.includes(res.words[i])) {
                str += `<span class="highlight"><b>${res.words[i]}</b></span>; `;
            }else {
                str += res.words[i]+"; ";
            }
        }

        allWords.innerHTML = str;
}

function copyToClipboard() {
    const c = `@Anagramna #${data.day}
A palavra era: ${data.word}

encontrado:
${getFirstFound().join("; ")+(data.found.length>5?"...":"")}

${emojiList()}
${data.correct}/${data.all}

joguem em: anagramna.co`
    navigator.clipboard.writeText(c);

    showMessageBox("copiado para sua área de transferência (CTRL+V)", 2000, "normal");
}

function emojiList() {
    const percent = Math.floor((data.correct/data.all)*10);
    var str = "";

    for (let i = 0; i < 10; i++) {
        str += percent>i?"🟢":"🔴";
    }

    return str;
}
function getFirstFound() {
    const len = Math.min(data.found.length, 5);
    return data.found.slice(0, len);
}

export function complete(correct: dayData) {
    changeCompleteState();
    if (localStorage.getItem("data")) {
        if (data.day == JSON.parse(localStorage.getItem("data")).day) {
            showMessageBox("Você já jogou hoje, volte amanhã para jogar mais!!!", 5000, "normal");
            return;
        }
    }

    console.log(data);

    data = correct;
    disableAll();
    finish(data);
}

export function showMessageBox(msg: string, time: number, type: string, callback?: () => void) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.id = "messageBox";

    if (type === "normal") {
        div.style.backgroundColor = "#888";
    }if (type === "correct") {
        div.style.backgroundColor = "#15ac10";
        // div.style.color = "#000";
    }else if (type === "error") {
        div.style.backgroundColor = "#d31212";
    }else if (type === "warn") {
        div.style.backgroundColor = "#eba611";
    }

    document.body.appendChild(div);
    div.animate([
        {opacity: "0%"},
        {opacity: "100%"}
    ], {
        duration: 300
    })

    if (time > 0) {
        setTimeout(() => {
            div.animate([
                {opacity: "100%"},
                {opacity: "0%"}
            ], {
                duration: 300
            })
        }, time-295);

        setTimeout(() => {
            if (callback) callback();
            div.remove();
        }, time);
    }
}

completeButton.addEventListener("click", complete.bind(this, _data));
help.addEventListener("click", changeHelpState)
shareButton.addEventListener("click", copyToClipboard);
for (let i = 0; i < quit.length; i++) {
    const element = quit[i];
    element.addEventListener("click", () => {
        if (showingHelp) {
            changeHelpState();
        }
        if (showingComplete) {
            changeCompleteState();
        }
    })
}
