const box = document.getElementById("box");
const helpText = document.getElementById("helpText");
const completeText = document.getElementById("completeText");
const shareButton = document.getElementById("share");
const quit = document.getElementsByClassName("close");
const help = document.getElementsByClassName("help")[0];

export interface dayData {
    day: number,
    word: string,
    found: string[],
    correct: number,
    all: number
}
var data: dayData;
var showingHelp = false;
var showingComplete = false;

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
    console.log(showingComplete);


    if (!showingComplete) {
        changeBoxState(false);
        completeText.classList.add("hidden");
        return;
    }

    changeBoxState(true);
    completeText.classList.remove("hidden");
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
    data = correct;
    changeCompleteState();
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
