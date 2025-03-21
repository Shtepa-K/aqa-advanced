const person = {
  firstName: "Вадим",
  lastName: 'Степаненко',
  age: 23
}

person.email = 'test@gmail.com' // Додавання до об'єкта person властивість email
delete person.age // Видалення з об'єкта person властивість age

console.log(person)