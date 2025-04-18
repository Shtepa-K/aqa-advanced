function makeCounter(num) {
    console.log(num)   
}
  
let next = (num) => {
  while (num <= 100) {
      num++;
}
  if (num >= 100) {
    return
  }
       
  makeCounter(3)

}   
  
next(makeCounter)

