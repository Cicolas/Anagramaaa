const helpBox = document.getElementById("helpBox");
const helpText = document.getElementById("helpText");
// const title = helpText.getElementsByClassName("title")[0];
// const p = helpText.getElementsByTagName("p");
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

help.addEventListener("click", changeHelpState.bind(this))
quit.addEventListener("click", changeHelpState.bind(this))
