import insertUi from "./insertUI.js"
import { runCommand, banner } from "./runCommand.js"
import { saveCursor, sleep } from "../utils/functions.js"

let currentSettings = {
	currentFolder: "~",
	currentUser: "guest",
}

const root = document.getElementById("root")

await sleep(6000)
root.innerHTML += `<p class="command">Terminal Rocha</p>`
root.innerHTML += `<p class="command" style="animation-delay: 100ms;">Copyright © 2022 ilRocha. All rights reserved.</p>`
banner(root)
insertUi(root, currentSettings)

document.addEventListener("click", (ev) => {
	document.querySelector("#cursor ~ input").focus()
})

document.addEventListener("keydown", async (ev) => {
	if (ev.key == "Enter") {
		let lastHead = document.querySelector(".head:last-child")
		let lastUserInput = lastHead.querySelector(".userInput")
		let command = lastUserInput.querySelector("input").value

		if (command == "") {
			saveCursor()
			lastUserInput.innerHTML = ""
			insertUi(root, currentSettings)
			document.querySelector("#cursor ~ input").focus()
			return
		}

		let argument = command.split(" ")
		command = argument.shift()

		saveCursor()

		await runCommand(root, command, argument, currentSettings)

		lastUserInput.innerHTML = `<b>${command}</b> ${argument.join(" ")}`

		insertUi(root, currentSettings)
		await document.querySelector("#cursor ~ input").focus()
	}
})

document.querySelector("#cursor ~ input").focus()
