const users = [
  { name: "Вадим", email: 'testvadim@gmail.com', age: 30 },
  { name: "Юлія", email: 'testjuliya@gmail.com', age: 18 },
  { name: "Олег", email: 'testoleg@gmail.com', age: 25 }
]

for (const set of users) { //перебор масиву
   console.log(set)
}

for (const x of users) { //перебор масиву
  const { name, email, age } = x  //деструктуризації об'єктів
    console.log(name, email, age)
}



