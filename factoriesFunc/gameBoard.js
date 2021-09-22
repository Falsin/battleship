import ship from "./ship";

function gameBoard() {
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

  function placeShips(coord) {
    let requiredId = newShipsArray.findIndex(elem => {
      return !elem[coord];
    });

    if (requiredId !== -1) {
      let cloneArr = newShipsArray.map(elem => Object.assign({}, elem));
      cloneArr[requiredId].coord = coord;
    }
  }

  return {
    placeShips,
    newShipsArray,
  }
}

/* let createGameBoard = gameBoard();
createGameBoard.placeShips({
  horizontal: 1,
  vertical: 'A',
}) */

export default gameBoard;