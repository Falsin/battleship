function ship(ship) { 
  let shipPart = createShipParts(ship);

  return {
    shipPart,
    hit(positionNumber) {
      shipPart[positionNumber].isDamage = true;
    },
    isSunk() {
      let hitsCount = shipPart.filter(elem => elem.isDamage).length;
      return hitsCount === shipPart.length;
    }
  }
}

function createShipParts(ship) {
  let obj = {
    isDamage: false,
  }

  return new Array(ship.length).fill().map(elem => Object.assign({}, obj));
}

export default ship