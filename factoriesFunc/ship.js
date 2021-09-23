function ship(ship) { 
  let shipPart = createShipParts(ship);
  let isPlaced = false;

  return {
    shipPart,
    hit(positionNumber) {
      shipPart[positionNumber].isDamage = true;
    },
    isSunk() {
      let hitsCount = shipPart.filter(elem => elem.isDamage).length;
      return hitsCount === shipPart.length;
    },
    isPlaced,
  }
}

function createShipParts(ship) {
  let obj = {
    isDamage: false,
  }

  return new Array(ship.length).fill().map(() => Object.assign({}, obj));
}

export default ship