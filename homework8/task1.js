const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

let copyNumbers= []

for (let i = 0; i < numbers.length; i++) {
    copyNumbers.push(numbers[i]+1)
   positiveCount = copyNumbers.filter((number) => number > 0)
   negativeCount = copyNumbers.filter((number) => number < 0)
   zeroCount = copyNumbers.filter((number) => number = 0)
    }


//console.log(copyNumbers)
console.log(`Кількість позитивних чисел: ${ positiveCount.length }`)
console.log(`Кількість негативних чисел: ${ negativeCount.length }`)
console.log(`Кількість нульових чисел: ${ zeroCount.length }`)



    



