//1. declaration
function area_rectangle(width, height) {
  return width*height;
}
console.log(area_rectangle(5, 10));

//2. expression
const area_rectangle2=function (width, height) {
  return width*height;
}
console.log(area_rectangle2(3, 10));

//3. arrow function
const area_rectangle3 = (width, height) => width * height

console.log(area_rectangle3(2, 3));
