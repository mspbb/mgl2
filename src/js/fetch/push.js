/* const headers = {
	'Content-Type': 'application/json'
}

function sendRequest(method, url, body = null){
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers,
	})
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

const body = {
	body: 'test body text',
	id: 100,
	title: 'test text',
	userId: 11,
}

sendRequest('POST', requestURL, body)
.then(data => console.log(data))
.catch(err => console.log(err)) */