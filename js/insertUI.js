function insertUi(root, currentUser, currentFolder) {
	let html = `<span class="head">
                    <span class="user">${currentUser}@${document.domain}</span><span class="folder">${currentFolder}</span>
                    <input class="userInput"></input>
                </span>`

	root.innerHTML += html
}

export default insertUi
