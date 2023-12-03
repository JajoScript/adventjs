/*
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

function manufacture(gifts, materials) {
  // Code here

  let giftsCanManufacture = [];
  gifts.map((gift) => {
    let canBeManufacture = true

    for (let i = 0; i < gift.length; i++) {
      if (!materials.includes(gift[i])) {
        canBeManufacture = false
      }
    }

    if (canBeManufacture) {
      giftsCanManufacture.push(gift)
    }
  })

  return giftsCanManufacture
}

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

const result = manufacture(gifts, materials) // []
console.log("result", result)
