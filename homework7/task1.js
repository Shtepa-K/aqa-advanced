//функція приймає три значення, обчислює парне/непране значення, 
//через коллбек віддає певну відповідь

function handleNum(num, call1, call2) {
    if (num % 2 === 0) {
        call1("number is even") //передаем строку как аргумент
    } else if (num % 2 !== 0) {
        call2("number is odd") 
    }
}

function handleEven(text) { //принимаем параметр
    console.log(text)
}

function handleOdd(text) { //принимаем параметр
    console.log(text)
}

handleNum(12, handleEven, handleOdd)
