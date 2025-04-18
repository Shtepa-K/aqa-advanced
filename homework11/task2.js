const fetch = require('node-fetch');

function testFetch1() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((data) => {
			console.log('GET Response1:', data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
testFetch1();

function testFetch2() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((data) => {
			console.log('GET Response2:', data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
testFetch2();

const promise = [testFetch1(), testFetch2()];
Promise.all(promise)
	.then((allresult) => {
		console.log('Allresult:', allresult);
	})
	.catch((error) => {
		console.error('Error:', error);
	});

Promise.race(promise)
	.then((raceresult) => {
		console.log('Raceresult:', raceresult);
	})
	.catch((error) => {
		console.error('Error:', error);
	});
