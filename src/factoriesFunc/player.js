import gameBoard from "./gameBoard";

function Player() {
  const prototype = gameBoard();
  let isReady = false;

  return Object.assign(Object.create(prototype), isReady);
}

function Robot() {
  const prototype = Player();

  /*some funcs */

  return Object.assign(Object.create(prototype), /*some props */);
}

const human = Player();
const bot = Robot()



/* const createHumanPlayer =  (() => {
  let name; 

  return function () {
    function setName(selectedName) {
      name = selectedName;
      this.name = name;
    }

    return {name, setName}
  }
})()

function createBotPlayer() {
  function makeMove() {
  }

  return {makeMove}
}

let humanPlayer = createHumanPlayer();

export {humanPlayer, createBotPlayer} */