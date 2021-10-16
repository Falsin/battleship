import cloneObj from "./cloneObj";
import gameBoard from "./gameBoard";

function templateObjForPlayers() {
  const prototype = gameBoard();
  const isReady = false;
  const isGameOver = false;
  const isLose = false;

  function getDamage(props, func) {
    const clone = cloneObj(props.state);
    const checkCoord = this.selectedCells.includes(props.index);

    if (checkCoord) {
      for (let i = 0; i < clone.player.newShipsArray.length; i++) {
        let shipPartArray = clone.player.newShipsArray[i].shipPart;
        let requiredElem = shipPartArray.find(elem => elem.coord === props.index);

        if (requiredElem) {
          clone.player.isActive = false;
          requiredElem.isDamage = true;

          props.state.func(clone.player);
          break;
        }
      }
    } else {
      clone.player.isActive = false;
      func(false);
      props.state.func(clone.player);
    }
  }

  return Object.assign(Object.create(prototype), {isReady, getDamage, isGameOver, isLose});
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