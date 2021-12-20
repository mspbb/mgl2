import "../style/style.css"
import "./testsctipt"
import "./buttons"
import "./modal.js"

import { _creatModal } from "./modal.js"
import { isValid } from "./util"
import { InputText } from "./inputText"
import { takeAsyncXFetch } from "./inputText"



const menuButton = document.querySelector('.header__menu span')
const menuList = document.querySelector('.menu__list')
const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')
const menuListChilds = menuList.childNodes;
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

document.addEventListener('click', (event) =>{
if (event.target.closest('.header__menu span') && !menuButton.hasAttribute('close')){
	menuOpen()
} else if (event.target.hasAttribute('close') || !event.target.closest('.menu__item')){
	menuClose()
} else if (event.target.dataset.btn1){
	_creatModal()
	menuClose()
	console.log('btn1')
} else if (event.target.dataset.btn2){
} else if (event.target.dataset.btn3){
} else if (event.target.dataset.btn4){
} else if (event.target.dataset.btn5){
}
})


function menuOpen(){
	menuList.style.display = 'block'
	menuButton.setAttribute('close', '')
}

function menuClose(){
	menuList.style.display = ''
	menuButton.removeAttribute('close')
}


window.addEventListener('load', InputText.renderList)
window.addEventListener('load', takeAsyncXFetch) 

form.addEventListener('submit', submitFormHandler)
/* form.addEventListener('submit', takeAsyncXFetch) */

input.addEventListener('input', () => {
	submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event){
	event.preventDefault()
	if(isValid(input.value)){
		const question = {
			text: input.value.trim(),
			date: new Date().toJSON(),
		}
		submitBtn.disabled = true
		//
		InputText.create(question)
		.then(() => {
			console.log('question', question)
			input.value = ''
			submitBtn.disabled = false
		})
	}
}