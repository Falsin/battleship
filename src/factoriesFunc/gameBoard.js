import ship from "./ship";

function gameBoard() {
  const orientation = 'horizontal';
  const selectedCells = [];
  const hoveredCells = {
    cellsArray: [],
    isValid: true,
  }
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
    let findElem = this.newShipsArray.find(elem => !elem.isPlaced);

    if (condition === undefined) {
      const newArr = findElem.shipPart.map((elem, id) => elem.coord = this.hoveredCells.cellsArray[id]);
      this.selectedCells.push(...newArr);
      findElem.isPlaced = true;
    }
    this.hoveredCells.cellsArray = [];
  }

  function addCellsIntoHoveredCells(ship, index) {
    if (this.orientation === 'horizontal') {
      if (index % 10 + ship.length <= 10) {

        if (this.selectedCells.includes(index)) {
          console.log('work')
          this.hoveredCells.cellsArray = ship.shipPart.map((elem, id) => index + id);
          this.hoveredCells.isValid = false;
        } else {
          this.hoveredCells.cellsArray = ship.shipPart.map((elem, id) => index + id);
          this.hoveredCells.isValid = true;
        }
      } else {

        this.hoveredCells.cellsArray = [];
        let id = 0;

        while (index % 10 + id < 10) {
          this.hoveredCells.cellsArray.push(index + id++);
        }
        
        this.hoveredCells.isValid = false;
      }
    } else if (this.orientation === 'vertical') {
        if (index + (ship.length * 10 - 10) <= 99) {

          if (this.selectedCells.includes(index)) {
            this.hoveredCells.cellsArray = ship.shipPart.map((elem, id) => index + (id * 10));
            this.hoveredCells.isValid = false;
          } else {
            this.hoveredCells.cellsArray = ship.shipPart.map((elem, id) => index + (id * 10));
            this.hoveredCells.isValid = true;
          }

        } else {

          this.hoveredCells.cellsArray = [];
          let id = 0;

          while (index + id <= 99) {
            this.hoveredCells.cellsArray.push(index + id);
            id += 10;
          }
          this.hoveredCells.isValid = false;
        }
    } 
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