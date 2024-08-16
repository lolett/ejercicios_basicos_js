/* Ejercicio 7
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberTwo > numberOne) {
    return numberTwo
  }
  return console.log(
    'Ambos números son iguales: ' + numberOne + ' y ' + numberTwo
  )
}

let results = greaterNumber(8, 3)
console.log(results)

let results2 = greaterNumber(3, 5)
console.log(results2)

let results3 = greaterNumber(3, 3)
console.log(results3)
