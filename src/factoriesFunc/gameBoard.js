import ship from "./ship";

function gameBoard() {
  const orientation = 'horizontal';
  const selectedCells = [];
  const hoveredCells = [];
  const isReady = false;

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

  let newShipsArray = shipsArray.map(elem => {
    return {
      ...elem,
      ...ship(elem),
    }
  })

  function changeOrientation() {
    return this.orientation = (this.orientation === 'vertical') ? 'horizontal' : 'vertical';
  }

  function placeShips(index) {
    let condition = this.selectedCells.find(elem => elem === index);
    let findElem = newShipsArray.find(elem => !elem.isPlaced);

    if (condition === undefined) {
      const newArr = findElem.shipPart.map((elem, id) => elem.coord = this.hoveredCells[id]);
      this.selectedCells.push(...newArr);
      findElem.isPlaced = true;
    }
    this.hoveredCells = [];
  }

  function addCellsIntoHoveredCells(ship, index) {
    this.hoveredCells = [];

    if (this.orientation === 'horizontal' && index % 10 + ship.length <= 10) {
      ship.shipPart.forEach((elem, id) => {
        this.hoveredCells.push(index + id)
      });
    } else if (this.orientation === 'vertical' && index + (ship.length * 10 - 10) <= 99) {
      ship.shipPart.forEach((elem, id) => {
        this.hoveredCells.push(index + (id * 10))
      });
    }
  }

  function sayHello(params) {
    return 'Hello!'
  }

  return {
    placeShips,
    newShipsArray,
    addCellsIntoHoveredCells,
    hoveredCells,
    selectedCells,
    isReady,
    changeOrientation,
    orientation,
  }
}

export default gameBoard;