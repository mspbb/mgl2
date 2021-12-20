import { retry } from "rxjs/operator/retry"

const people = [
	{name: 'ramzes', age: 11, color: 'white'},
	{name: 'mamzes', age: 12, color: 'yellow'},
	{name: 'jamzes', age: 13, color: 'red'},
	{name: 'kamzes', age: 14, color: 'green'},
	{name: 'zamses', age: 15, color: 'blue'},
	{name: 'tamzes', age: 17, color: 'white'},
]

/* for (let i = 0; i < people.length; i++) {
	console.log(people[i])
} */


/* let amout = ""
for (let i = 0; i < people.length; i++) {
	amout += people[i].name + " "
}
console.log(amout) */


/* for (let person of people){
	console.log(person)
} */

//=======================================================================

/* people.forEach(function (person, index, peepo) {
	console.log(person)
}) */


/* people.forEach(person => {
	console.log(person)
}) */

//=======================================================================

/* const newPeople = people.map(person => {
	console.log(person.age)
})
console.log(newPeople) */

/* const newPeople = people.map(person => {
	return `${person.name} (${person.age})`
})
console.log(newPeople) */

//=======================================================================

//filter
/* const WhitePeople = []
for (let i =0; i < people.length; i ++){
	if (people[i].color === 'white'){
		WhitePeople.push(people[i])
	}
}
console.log(WhitePeople) */

/* const WhitePeople = people.filter(person => {
	if (person.color === 'white'){
		return true
	}
})
console.log(WhitePeople) */

/* const WhitePeople = people.filter(person => person.color === 'white')
console.log(WhitePeople) */

//=======================================================================


/* const amout = people.reduce((total, person) => {
	return total + person.age
}, 0)
console.log(amout) */

//=======================================================================

/* const whitePeople = people.find(person => person.color === 'white')
console.log(whitePeople) */

/* const whitePeopleIndex = people.findIndex(person => person.color === 'white')
console.log(whitePeopleIndex) */

//=======================================================================


/* class Person {
	constructor(name, mem) {
		this.name = name
		this.mem = mem
	}

	greet() {
		console.log(this.name + ' privet')
	}
}

const max = new Person('Mox', '321')
console.log(max.greet()) */


/* const person = Object.create(
	{
		calculateAge(){
			console.log('Age:', new Date().getFullYear() - this.birthYear)
		}
	},
	{
		name: {
			value: 'kanashii',
			enumerable: true,
			writable: false,
			configurable: false,
		},
		birthYear: {
			value: 2000,
			enumerable: true,
			writable: false,
			configurable: false,
		},
		age: {
			get() {
				return new Date().getFullYear() - this.birthYear
			},
			set(value) {
				console.log('set age', value)
			}
		}
	}
)

for (let key in person) {
	if (person.hasOwnProperty(key)){
		console.log('Key', person[key])
	}
} */

