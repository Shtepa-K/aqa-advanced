function check_age(age) {
    if (age >= 18){
    return true
} else if (age < 18){
    return false
}
}
console.log(check_age(25));
console.log(check_age(15));