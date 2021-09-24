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
      if (coord.horizontal + requiredItem.length < 11) {
        requiredItem.shipPart.forEach((elem, id) => {
          elem.coord = Object.assign({}, coord, {horizontal: coord.horizontal + id});
        });
      } else {
        return 'Invalid value';
      }
    } else {
      let maxValue = 'J'.charCodeAt(0);
      if (coord.vertical.charCodeAt(0) + requiredItem.length <= maxValue) {
        requiredItem.shipPart.forEach((elem, id) => {
          elem.coord = Object.assign({}, coord, {vertical: String.fromCharCode( ((coord.vertical).charCodeAt(0) + id)) });
        });
      }
    }
  }

  return {
    placeShips,
    newShipsArray,
  }
}

export default gameBoard;