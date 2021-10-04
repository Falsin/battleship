import ship from "./ship";

function gameBoard() {
  let orientation = 'horizontal';
  let selectedCells = [];
  let hoveredCells = [];

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

  function placeShips(index) {
    this.hoveredCells = [];
    let findElem = newShipsArray.find(elem => !elem.isPlaced)

    if (orientation === 'horizontal') {
      findElem.shipPart.forEach((elem, id) => {
        elem.coord = index + id;
        selectedCells.push(index + id)
      })
    }
  }

  function checkCellAssing(coord) {
    return !selectedCells.includes(coord);
  }

  function addCellsIntoHoveredCells(ship, index) {
    this.hoveredCells = [];

    ship.shipPart.forEach((elem, id) => {
      this.hoveredCells.push(index + id)
    });
  }

  return {
    placeShips,
    checkCellAssing,
    newShipsArray,
    addCellsIntoHoveredCells,
    hoveredCells,
    selectedCells
  }
}

export default gameBoard;