import gameBoard from "./gameBoard";

function templateObjForPlayers() {
  const prototype = gameBoard();
  const isReady = false;

  function getDamage(index) {
    const checkCoord = this.selectedCells.includes(index);

    if (checkCoord) {
      let requiredElem = null;
      for (let i = 0; i < this.newShipsArray.length; i++) {
        let shipPartArray = this.newShipsArray[i].shipPart;
        requiredElem = shipPartArray.find(elem => elem.coord === index);

        if (requiredElem) {
          requiredElem.isDamage = true;
          break
        }

        //console.log(this.newShipsArray[i].shipPart)
      }
      console.log(requiredElem)
    }
    //console.log(checkCoord);
  }

  return Object.assign(Object.create(prototype), {isReady, getDamage});
}

const Player = (() => {
  let savedName = null;

  return function () {
    const prototype = templateObjForPlayers();
    let name = savedName;
    const isActive = true;

    function setName(selectedName) {
      name = selectedName;
      this.name = name;
      savedName = selectedName;
      this.name = selectedName;
    }

    return Object.assign(Object.create(prototype), {name, isActive, setName});
  }
})()

const Robot = () => {
  const prototype = templateObjForPlayers();
  const name = 'robot';
  const isActive = false;

  return Object.assign(Object.create(prototype), {name, isActive});
}

export { Player, Robot }