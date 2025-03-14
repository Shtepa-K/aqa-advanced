function handleNum(num, call1, call2) {
    if (num % 2 === 0) {
        call1(text1 = "number is even")
    } else if (num % 2 !== 0) {
        call2(text2 = "number is odd") 
    }
}

function handleEven() {
    console.log(text1)
}

function handleOdd() {
    console.log(text2)
}

handleNum(12, handleEven, handleOdd)
