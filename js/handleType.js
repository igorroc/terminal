function handleType(ev) {
	const userInput = document.getElementById("userInputBig")
	console.log(userInput.value)
	if (ev.key == "Enter") {
		insertUi(root, currentUser, currentFolder)
	} else {
		console.log(ev.key)
		let lastUserInput = document.querySelector(".userInput:last-child")

		lastUserInput.innerText += ev.key
	}
}
