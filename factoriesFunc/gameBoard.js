import ship from "./ship";

function gameBoard() {
  let orientation = 'horizontal';

  let shipsArray = [
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

  let newShipsArray = shipsArray.map(elem => {
    return {
      ...elem,
      ...ship(elem),
    }
  })

  function changeOrientation() {
    this.orientation = (this.orientation === 'vertical') ? 'horizontal' : 'vertical';
  }

  function placeShips(coord) {
    let requiredItem = newShipsArray.find(elem => !elem.isPlaced);

    if (orientation === 'horizontal') {
      if (coord.horizontal + shipsArray.length < 11) {
        requiredItem.shipPart.forEach((elem, id) => {
          elem.coord = Object.assign({}, coord, {horizontal: coord.horizontal + id});
        });
      } else {
        return 'Invalid value';
      }
    }
  }

  return {
    placeShips,
    newShipsArray,
  }
}

export default gameBoard;