/* Ejercicio 10
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla: */

const numbers = [12, 21, 38, 5, 45, 37, 6]

let total = 0
function average(numberList) {
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i]
    total += number
  }

  return total / numberList.length
}

console.log(average(numbers))
