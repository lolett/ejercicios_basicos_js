/* Ejercicio 13
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
Puedes usar este array para probar tu función: */

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function nameFinder(nameList, hero) {
  let check = false
  let hero_index = null
  for (let i = 0; i < nameList.length; i++) {
    const name = nameList[i]
    if (name === hero) {
      check = true
      hero_index = nameList.indexOf(name)
      return check + ' ' + '[' + hero_index + ']'
    }
  }

  return check
}

console.log(nameFinder(names, 'Leia'))

console.log(nameFinder(names, 'Logan'))
