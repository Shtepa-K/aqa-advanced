
const fetch = require('node-fetch') 

async function fetchData1() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  return data;
}
    fetchData1()

    async function fetchData2() {
  const response2 = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data2 = await response2.json()
  return data2
    }

    fetchData2()

const promise = [fetchData1(), fetchData2()]
   Promise.all(promise)
    .then(allresult => {
    console.log('Allresult:', allresult)
  })
  .catch(error => {
    console.error('Error:', error)
  })

   Promise.race(promise)
   .then(raceresult => {
    console.log('Raceresult:', raceresult)
  })
  .catch(error => {
    console.error('Error:', error)
  })


  