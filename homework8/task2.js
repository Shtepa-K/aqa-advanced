const numbers = [1, 2, 3, 4, 5]
let copyNumbers = []

for (let i = 0; i < 1; i++) {
    copyNumbers = numbers.map((number, index) => number * index)
}

console.log(copyNumbers)



