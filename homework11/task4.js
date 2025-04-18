const fetch = require('node-fetch');

class fetch1 {
	static async fetchData1() {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/todos/1',
			);
			if (!response.ok) {
				throw new Error('Request failed');
			}
			const data1 = await response.json();
			return data1;
		} catch (error1) {
			console.error('Помилка при отриманні todo:', error1);
			throw error1;
		}
	}
}

class fetch2 {
	static async fetchData2() {
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
}

async function promiseAll() {
	await Promise.all([fetch1.fetchData1(), fetch2.fetchData2()])
		.then((allresult) => {
			console.log('Allresult:', allresult);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

async function promiseRace() {
	await Promise.race([fetch1.fetchData1(), fetch2.fetchData2()])
		.then((allresult) => {
			console.log('Allresult:', allresult);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

promiseAll();
promiseRace();
