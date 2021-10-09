import gameBoard from "./gameBoard";

function templateObjForPlayers() {
  const prototype = gameBoard();
  const isReady = false;

  return Object.assign(Object.create(prototype), {isReady});
}

const Player = (() => {
  let savedName = null;

  return function () {
    const name = savedName;
    const prototype = templateObjForPlayers();

    function setName(selectedName) {
      savedName = selectedName;
      this.name = selectedName;
    }

    return Object.assign(Object.create(prototype), {name, setName});
  }
})()

const Robot = () => {
  const prototype = templateObjForPlayers();
  const name = 'robot'

  return Object.assign(Object.create(prototype), {name});
}

export { Player, Robot }