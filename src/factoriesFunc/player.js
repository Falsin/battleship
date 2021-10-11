import gameBoard from "./gameBoard";

function templateObjForPlayers() {
  const prototype = gameBoard();
  const isReady = false;

  return Object.assign(Object.create(prototype), {isReady});
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