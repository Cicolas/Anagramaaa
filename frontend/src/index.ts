const helpBox = document.getElementById("helpBox");
const helpText = document.getElementById("helpText");
const quit = document.getElementsByClassName("close")[0];
const help = document.getElementsByClassName("help")[0];

var showingHelp = false;
console.log(help);

function changeHelpState() {
    showingHelp = !showingHelp;
    console.log(helpBox as HTMLElement);

    if (!showingHelp) {
        helpBox.classList.add("hidden");
        helpText.classList.add("hidden");
        return;
    }

    helpBox.classList.remove("hidden");
    helpText.classList.remove("hidden");
}

export default function showMessageBox(msg: string, time: number, type: string, callback?: () => void) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.id = "messageBox";

    if (type === "normal") {
        div.style.backgroundColor = "#888";
    }if (type === "correct") {
        div.style.backgroundColor = "#73dd10";
        div.style.color = "#000";
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

help.addEventListener("click", changeHelpState.bind(this))
quit.addEventListener("click", changeHelpState.bind(this))
