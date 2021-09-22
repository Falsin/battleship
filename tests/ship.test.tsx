import ship from "../factoriesFunc/ship";

describe('give damage', () => {
  let createShip: {[key: string]: any} = {};
  let hitPosition: null | number = null;

  beforeAll(() => {
    createShip = ship({
      name: 'carrier',
      length: 5,
    })
  })

  beforeEach(() => {
    hitPosition = hitPosition === null ? 0 : ++hitPosition;
    createShip.hit(hitPosition)
  })

  test('hit one', () => {
    expect(createShip.isSunk()).toBeFalsy();
  });
  test('hit two', () => {
    expect(createShip.isSunk()).toBeFalsy();
  });
  test('hit three', () => {
    expect(createShip.isSunk()).toBeFalsy();
  });
  test('hit four', () => {
    expect(createShip.isSunk()).toBeFalsy();
  });
  test('hit five', () => {
    expect(createShip.isSunk()).toBeTruthy();
  })
})