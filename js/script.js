import insertUi from "./insertUI.js"

let currentFolder = "~"
let currentUser = "visitor"

const root = document.getElementById("root")
let currentHead = document.querySelectorAll(".head")
insertUi(root, currentUser, currentFolder)

document.addEventListener("click", () => {
	currentHead = document.querySelectorAll(".head")
	currentHead[currentHead.length - 1].querySelector(".userInput").focus()
})

let lastHeadInput = currentHead[currentHead.length - 1].querySelector(".userInput")

lastHeadInput.addEventListener("keyup", (ev) => {
    if(ev.key == "Enter") {

    }
})

