const car1 = {
  brand: "Tesla",
  model: "Cybertruck",
  year: 2023,
}

const car2 = {
  brand: "Tesla",
  model: "Cybertruck",
  owner: 2023,
}

const car3 = {...car1, ...car2};

console.log(car3)