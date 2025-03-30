const fetch = require('node-fetch') 

class fetch1 {
  static async fetchData1() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data1 = await response.json()
  return data1
}
}

class fetch2 {
  static async fetchData2() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data2 = await response.json()
  return data2
}
}

 async function promiseAll(){
   await Promise.all([fetch1.fetchData1(), fetch2.fetchData2()])
    .then(allresult => {
    console.log('Allresult:', allresult)
  })
  .catch(error => {
    console.error('Error:', error)
  })
     }

  async function promiseRace(){
   await Promise.race([fetch1.fetchData1(), fetch2.fetchData2()])
    .then(allresult => {
    console.log('Allresult:', allresult)
  })
  .catch(error => {
    console.error('Error:', error)
  })
      }

promiseAll()
promiseRace()