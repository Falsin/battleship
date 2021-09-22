import gameBoard from "../factoriesFunc/gameBoard";

describe('set positions of ships', () => {
  let createGameBoard = gameBoard();
/*   createGameBoard.placeShips({
    horizontal: 1,
    vertical: 'A',
  })  */

  beforeAll(() => {
    createGameBoard.placeShips({
      horizontal: 1,
      vertical: 'A',
    })
  })

  test('set the first position', () => {
    expect(createGameBoard.newShipsArray[0]).toEqual({
      name: 'carrier',
      length: 5,
      isDamage: false,
    })
  })
})