function divide(numerator, denominator) {
   if (denominator === 0) {
    throw new Error("Ділення на нуль недопустиме!")
   } else if (typeof numerator !== "number"||typeof denominator !== "number") {
      throw new Error("Введене значення не є числом")
  }
  return numerator / denominator;
} 
try {
  console.log(divide(10, 0))
  console.log(result)
} catch (error) {
  console.error("Сталася помилка:", error.message)
}  finally {
   console.log("Робота завершена")
}
try {
  console.log(divide("текст", 3))
  console.log(result) 
} catch (error) {
  console.error("Сталася помилка:", error.message)
}  finally {
   console.log("Робота завершена")
}
try {
  console.log(divide(9, 3))
  console.log(result) 
} catch (error) {
  console.error("Виконане без помилок")
}  finally {
   console.log("Робота завершена")
}



