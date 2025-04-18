function isObjectsEqual(obj1, obj2) {
    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)

    if (key1.values === key2.values) {
        return true
    } else if (key1.values !== key2.values) {
        return false
    }
}

console.log(isObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }))
console.log(isObjectsEqual({ a: 1, b: 2 }, { a: 1, c: 2 }))
