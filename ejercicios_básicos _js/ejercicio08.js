/* Ejercicio 8
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

let longuestAvengerString = '0'

function findLongestWord(stringList) {
  for (let i = 0; i < stringList.length; i++) {
    const avenger = stringList[i]
    if (avenger.length > longuestAvengerString.length) {
      longuestAvengerString = avenger
    }
  }
  return longuestAvengerString
}

console.log(findLongestWord(avengers))
