/* function player() {
  let name;

  return {name, setName}
} */

const createHumanPlayer =  (() => {
  let name; 

  return function () {
    function setName(selectedName) {
      name = selectedName;
      this.name = name;
    }

    return {name, setName}
  }
})()

let humanPlayer = createHumanPlayer();
/* let botPlayer   = player(); */

export {humanPlayer}