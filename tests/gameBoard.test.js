import gameBoard from "../factoriesFunc/gameBoard";

describe('set positions of ships', () => {
  let createGameBoard = gameBoard();

  test('set the first position (valid value)', () => {
    createGameBoard.placeShips({
      horizontal: 1,
      vertical: 'A',
    })

    console.log(createGameBoard.newShipsArray[0].shipPart)

    expect(createGameBoard.newShipsArray[0].shipPart[0].coord).toEqual({
      horizontal: 1,
      vertical: 'A',
    })

/*     expect(createGameBoard.placeShips({
      horizontal: 1,
      vertical: 'A',
    })[0].coord).toEqual({
      horizontal: 1,
      vertical: 'A',
    }) */

    console.log(createGameBoard.newShipsArray[0].shipPart[0])
  })

  test('set the second position (invalid value)', () => {
    expect(createGameBoard.placeShips({
      horizontal: 9,
      vertical: 'A',
    })).toBe('Invalid value')

    //console.log(createGameBoard.newShipsArray[0].shipPart[0])
  })

})