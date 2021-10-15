import ship from "./ship";

function gameBoard() {
  const orientation = 'horizontal';
  const selectedCells = [];
  const attackedCells = [];
  const hoveredCells = {
    cellsArray: [],
    isValid: true,
  }

  const shipsArray = [
    {
      name: 'carrier',
      length: 5,
      destroyed: false,
    },
    {
      name: 'battleship',
      length: 4,
      destroyed: false,
    },
    {
      name: 'Cruiser',
      length: 3,
      destroyed: false,
    },
    {
      name: 'submarine',
      length: 3,
      destroyed: false,
    },
    {
      name: 'destroyer',
      length: 2,
      destroyed: false,
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
    let findElem = this.newShipsArray.find(elem => !elem.isPlaced);

    if (this.hoveredCells.isValid && this.hoveredCells.cellsArray.length) {
      const newArr = findElem.shipPart.map((elem, id) => elem.coord = this.hoveredCells.cellsArray[id]);
      this.selectedCells.push(...newArr);
      findElem.isPlaced = true;
      this.hoveredCells.cellsArray = [];
    } else {
      this.addCellsIntoHoveredCells(findElem, index);
    }
  }

  function addCellsIntoHoveredCells(ship, index) {
    if (this.orientation === 'horizontal') {
      if (index % 10 + ship.length <= 10) {
        let condition = true;

        for (let i = index; i <= index + ship.length; i++) {
          if (this.selectedCells.includes(i)) {
            condition = false;
            break;
          }
        }

        if (condition) {
          this.hoveredCells.cellsArray = ship.shipPart.map((elem, id) => index + id);
          this.hoveredCells.isValid = true;
        } else {
          this.hoveredCells.cellsArray = ship.shipPart.map((elem, id) => index + id);
          this.hoveredCells.isValid = false;
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

          let condition = true;

          for (let i = index; i < index + ship.length * 10; i += 10) {
            if (this.selectedCells.includes(i)) {
              condition = false;
              break;
            }
          }

          if (condition) {
            this.hoveredCells.cellsArray = ship.shipPart.map((elem, id) => index + (id * 10));
            this.hoveredCells.isValid = true;
          } else {
            this.hoveredCells.cellsArray = ship.shipPart.map((elem, id) => index + (id * 10));
            this.hoveredCells.isValid = false;
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
    changeOrientation,
    orientation,
    attackedCells,
  }
}

export default gameBoard;