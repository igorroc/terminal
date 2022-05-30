import keywords from "../utils/keyWords.js"

function insertUi(root, currentSettings, command) {
	let html = ``
	if (command) {
		let argument = command.split(" ")
		let structure = []
		argument.forEach((el) => {
			let find = false
			keywords.forEach((keyword) => {
				if (el == keyword) {
					structure.push(`<b>${el}</b>`)
					find = true
				}
			})
			if (!find) structure.push(el)
		})
		html = `<span class="head">
                    <span class="logo">🚀</span><span class="user">${
						currentSettings.currentUser
					}@${document.domain}</span><span class="folder">${
			currentSettings.currentFolder
		}</span>
                    <span class="userInput">${structure.join(" ")}</span>
                </span>`
	} else {
		html = `<span class="head">
                    <span class="logo">🚀</span><span class="user">${currentSettings.currentUser}@${document.domain}</span><span class="folder">${currentSettings.currentFolder}</span>
                    <span class="userInput"><input type='text'/></span>
                </span>`
	}

	root.innerHTML += html

	let fragment = document.createDocumentFragment()
	let cursor = document.querySelector("#cursor")
	let lastHeadInput = document.querySelector(".head:last-child .userInput")
	fragment.appendChild(cursor)
	lastHeadInput.insertBefore(fragment, lastHeadInput.firstChild)
}

export default insertUi
