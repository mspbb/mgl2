export class InputText {
	static create(text) {
		return fetch('https://mgl-project-default-rtdb.europe-west1.firebasedatabase.app/text.json', {
			method: 'POST',
			body: JSON.stringify(text),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(response => {
			text.id = response.name
			return text
		})
		.then(addToLocalStorage)
		/* .then(InputText.renderList) */
		.then(takeAsyncXFetch)
	}
	static renderList() {
		const text = getTextFromLocalStorage()
		const html = text.length
		? text.map(toCard).join('')
		: `<div> Текста нету </div>`
		const list = document.getElementById('list')

		list.innerHTML = html
	}

	static fetch() {
		return fetch ('https://mgl-project-default-rtdb.europe-west1.firebasedatabase.app/text.json')
		.then(response => response.json())
		.then(response => {
			if(response.error) {
				return `<p class="error"> ${response.error} </p>`
			}
			return response ? Object.keys(response).map(key => ({
				...response[key],
				id: key
			})) : []
		})
	}
}

function addToLocalStorage(text){
	const all = getTextFromLocalStorage()
	all.push(text)
	localStorage.setItem('text', JSON.stringify(all))
}

function getTextFromLocalStorage(){
	return JSON.parse(localStorage.getItem('text') || '[]')
}

function toCard(text) {
	return `
	<div class="inputBox">
	<div class="inputBox__inputDate">
	${new Date(text.date).toLocaleDateString()}
	${new Date(text.date).toLocaleTimeString()}
	</div>
	<div class="inputBox__inputText">
	${text.text}
	</div>
	</div>
	`
}

export async function xFetch() {
	return fetch ('https://mgl-project-default-rtdb.europe-west1.firebasedatabase.app/text.json')
	.then(response => response.json())
		.then(response => {
			return response ? Object.keys(response).map(key => ({
				...response[key],
				id: key
			})) : []
		})
}

export let takeAsyncXFetch = async () => {
	const obj = await xFetch()
	const result = await obj;
	/* console.log(result) */
	const html = result.length
	? result.map(toCard).join('')
	: `<div> Текста нету </div>`
	const list = document.getElementById('list')

	list.innerHTML = html
}