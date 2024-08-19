/* Ejercicio 14
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
Puedes usar este array para probar tu función: */

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

function repeatCounter(list) {
  // Creación de un objeto vacío
  const actions = {}
  // Inicio loop
  for (let i = 0; i < list.length; i++) {
    const action = list[i]
    // check si el elemento si ya existe, si true incrementa su valor en uno cada vez que lo encuentra en el array
    if (actions[action]) {
      actions[action]++
      //si no genera un key:value pair inicial con valor de 1
    } else {
      actions[action] = 1
    }
  }

  return actions
}

console.log(repeatCounter(words))
