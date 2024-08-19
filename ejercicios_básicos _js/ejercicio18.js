/* Ejercicio 18
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
Imprime en un console log el array resultante.
Puedes usar este array: */

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

let filterPlaces = []

for (let i = 0; i < placesToTravel.length; i++) {
  const place = placesToTravel[i]
  if (place.id === 11 || place.id === 40) {
  } else {
    filterPlaces.push(place)
  }
}

console.log(filterPlaces)

/* 

Aquí no tenía claro si podía usar una función, por eso pongo las dos opciones, 
por si la función no vale

function placesFilter(places) {
  const filterPlaces = []
  for (let i = 0; i < places.length; i++) {
    const place = places[i]
    if (place.id === 11 || place.id === 40) {
    } else {
      filterPlaces.push(place)
    }
  }
  return filterPlaces
}

console.log(placesFilter(placesToTravel))*/
