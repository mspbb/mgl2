//=======================================================================
// фетчим масив объектов

const requestURL = 'https://jsonplaceholder.typicode.com/posts'

async function sendRequest(url){
	return fetch(url)
	.then(response => {
		if (response.status <= 400){
			return response.json()
		}
		return response.json().then(error => {
			const e = new Error('Error')
			e.data = error
			throw e
		})
	})
}

let takeAsyncRandomBody = async (rBody) => {
	const obj = await sendRequest(requestURL)
	const result = await obj;
	let x = Math.floor(Math.random() * result.length)
	return rBody = result[x]
}

/* async function takeAsyncRandomBody(){
	const x = await newNewTest()
	console.log(x)
} */
//=======================================================================

let modalExist = false //определяем существует мадальное окно или нет
function _modalClose(){
	if (modalExist === true){
		document.querySelector('.modal').remove()
		modalExist = false
		document.removeEventListener('click', modalListner)
	}
}

	const modalListner = document.addEventListener('click', (event) => {
		if(event.target.dataset.closable){
			_modalClose()
		}
	})

	export async function _creatModal(){
		if(modalExist === false){
			let testBody = await takeAsyncRandomBody()
			modalExist = true
			const DEFAULT_WIDTH = testBody.body.length + 'px'
			console.log(DEFAULT_WIDTH)
			const modal = document.createElement('div')
			modal.classList.add('modal')
			modal.insertAdjacentHTML('afterbegin', `
			<div class="modal__overlay" data-closable="true">
				<div class="modal__window" style=width:${DEFAULT_WIDTH}>
					<div class="modal__header">
						<span class="modal__title"> Модальное окно с id#${testBody.id}</span>
						<span class="modal__close" data-closable="true">&times;</span>
					</div>
					<div class="modal__main" data-content>
						Текст
						<br>
						${testBody.body}
			</div>
				</div>
			</div>
			`)
			document.body.appendChild(modal)
	}
}

/* const nP = new Promise ((resolve, reject) =>{
	resolve(fetch(requestURL))	
})

nP.then(data => console.log(data)) */