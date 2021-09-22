/* import ship from "./ship"

function player() {
  const shipsArray = [
    {
      name: 'carrier',
      length: 5,
    },
    {
      name: 'battleship',
      length: 4,
    },
    {
      name: 'Cruiser',
      length: 3,
    },
    {
      name: 'submarine',
      length: 3,
    },
    {
      name: 'destroyer',
      length: 2,
    },
  ]  

  const newShipsArray = shipsArray.map(elem => {
    return {
      ...elem,
      ...ship(elem),
    }
  })

  return {
    newShipsArray
  }
}

console.log(player()) */