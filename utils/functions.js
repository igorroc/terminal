export async function removeRootLastChild(root) {
	let lastChild = root.lastChild
	setTimeout(() => {
		console.log(lastChild)
		lastChild.style = "animation: none"
		lastChild.width = "100%"
	}, 100)
	await sleep(100)
}

export async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export function saveCursor() {
	let fragment = document.createDocumentFragment()
	let cursor = document.querySelector("#cursor")
	let body = document.querySelector("#root")
	fragment.appendChild(cursor)
	body.appendChild(fragment)
}

export default sleep
