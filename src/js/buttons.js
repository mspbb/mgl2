const template = document.querySelector('.leftBox__border');
let contolledBodyExist = false
/* console.log(contolledBodyExist) */

document.addEventListener('click', (event) => {
	if(event.target.closest('.buttonUp')){
		moveUp()
	} else if (event.target.closest('.buttonDown')){
		moveDown()
	} else if (event.target.closest('.buttonLeft')){
		moveLeft()
	} else if (event.target.closest('.buttonRight')){
		moveRight()
	} else if (event.target.closest('.buttonTest')){
		addRedBody()
	} else if (event.target.closest('.buttonForRemove')){
		removeAllRedBody()
	}
})


function addRedBody(){	
	const allRedColorBody = template.children
	const testArr = []
	for (let i = 0; i < allRedColorBody.length; i++) {
		if(!allRedColorBody[i].classList.contains('redPoint')){
			testArr.push(allRedColorBody[i])
		}
	}
	let numberA = testArr.length
	let C = Math.floor(Math.random() * numberA)
	let redColorBody = testArr[C]
	if(numberA === 0){
		console.log('limit')
		return
	} else if (!redColorBody.classList.contains ('redPoint')){
		testArr[C].insertAdjacentHTML('afterbegin', `
		<div class="redBody targetForRemove">
		`)
		redColorBody.classList.add('redPoint')
	}
}

function removeAllRedBody(){
	const redColorBody = template.children
	for (let i = 0; i < redColorBody.length; i++) {
		if(redColorBody[i].classList.contains ('redPoint'))
		document.querySelector('.targetForRemove').remove()
		redColorBody[i].classList.remove('redPoint')
		redColorBody[i].removeChild
		removeGreenBody()
	}
}

function removeGreenBody(){
	if(contolledBodyExist){
		document.querySelector('.controlledBody').remove()
		contolledBodyExist = false
	}
}



function creatControlledBody() {
	if(!contolledBodyExist){
		document.body.insertAdjacentHTML('afterbegin', `
		<div class="controlledBody">
		`)
		contolledBodyExist = true
		const body = document.querySelector('.controlledBody')
		body.style.top = `100px`
		body.style.left = `100px`
	}
}

function moveDown(){
	creatControlledBody()
	const body = document.querySelector('.controlledBody')
	let coords = body.getBoundingClientRect()
	let coordZ = coords.top
	body.style.top = `${coordZ +3}px`
}

function moveUp(){
	creatControlledBody()
	const body = document.querySelector('.controlledBody')
	let coords = body.getBoundingClientRect()
	let coordZ = coords.top
	body.style.top = `${coordZ -3}px`
}
	
function moveLeft(){
	creatControlledBody()
	const body = document.querySelector('.controlledBody')
let coords = body.getBoundingClientRect()
	let coordX = coords.left
	body.style.left = `${coordX -3}px`
}

function moveRight(){
	creatControlledBody()
	const body = document.querySelector('.controlledBody')
	let coords = body.getBoundingClientRect()
	let coordX = coords.left
	if(coordX >= 150){
		console.log('limit')
		return
	} else {
		body.style.left = `${coordX +3}px`
		/* console.log(coordX) */
	}
}