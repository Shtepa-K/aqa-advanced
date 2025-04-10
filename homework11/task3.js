const fetch = require('node-fetch');

async function fetchData1() {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos/1',
		);
		if (!response.ok) {
			throw new Error('Request failed');
		}
		const data = await response.json();
		return data;
	} catch (error1) {
		console.error('Помилка при отриманні todo:', error1);
		throw error1;
	}
}
fetchData1();

async function fetchData2() {
	try {
		const response2 = await fetch(
			'https://jsonplaceholder.typicode.com/users/1',
		);
		if (!response2.ok) {
			throw new Error('Request failed');
		}
		const data2 = await response2.json();
		return data2;
	} catch (error2) {
		console.error('Помилка при отриманні todo:', error2);
		throw error2;
	}
}

fetchData2();

const promise = [fetchData1(), fetchData2()];
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
