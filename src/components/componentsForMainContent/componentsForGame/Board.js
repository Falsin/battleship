import React from 'react';
import styled from "styled-components";
import Cell from './Cell';
import cloneObj from '../../../factoriesFunc/cloneObj';
import { useEffect, useState } from 'react/cjs/react.development';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    display: grid;
    grid-template-columns: repeat(10, 4vmin);
    grid-template-rows: repeat(10, 4vmin); 
  }

  button {
    margin-right: 2vmin;
  }
`;

export default function Board(props) {
  const [coordOfAttack, setCoordOfAttack] = useState(null);

  const state = {
    player: props.player, 
    func: props.func
  }

  function createBoardTemplate(countRows) {
    return new Array(countRows).fill().map((elem, id) => {
      if (id === coordOfAttack) {
        return <Cell key={id} index={id} state={state} isHuman={props.isHuman} coordOfAttack={true} />
      }
      return <Cell key={id} index={id} state={state} isHuman={props.isHuman} coordOfAttack={false} />
    });
  }

  useEffect(() => {
    if (props.player.name === 'robot') {
      let clone = cloneObj(props.player);
      let findShip = clone.newShipsArray.find(elem => !elem.isPlaced);

      while (findShip !== undefined) {
        clone.orientation = ['vertical', 'horizontal'][randomNumberGenerator(1, 2)];
        clone.addCellsIntoHoveredCells(findShip, randomNumberGenerator(1, 100));
        clone.placeShips();
        clone.isReady = true;
        findShip = clone.newShipsArray.find(elem => !elem.isPlaced);
        props.func(clone);
      }
    }
  }, []);

  useEffect(() => {
    if (props.isHuman && props.player.isActive && props.player.isReady) {
      let clone = cloneObj(props.player);
      let coord = randomNumberGenerator(1, 100);

      if (clone.attackedCells.includes(coord)) {
        while (clone.attackedCells.includes(coord) === true) {
          coord = randomNumberGenerator(1, 100);
        }
      }

      setCoordOfAttack(coord);
      clone.attackedCells.push(coord);
      props.func(clone)
    }
  }, [props.player.isActive]);

  useEffect(() => {
    let clone = cloneObj(props.player);

    for (const elem of clone.newShipsArray) {
      let filter = elem.shipPart.filter(elem => elem.isDamage === true);

      if (filter.length === elem.length) {
        elem.destroyed = true;
      }
    }

    const filter = clone.newShipsArray.find(elem => elem.destroyed === false);
    const prototype = Object.getPrototypeOf(clone);


    if (!filter && !prototype.isGameOver) {
      prototype.isGameOver = true;
      clone.isLose = true;
      //console.log(clone)
      props.func(clone);
      
      //console.log(clone.name + ' lose')
    }
  })

  return (
    <Wrapper>
      {(props.isHuman) ? <button onClick={() => {
        let cloneState = cloneObj(props.player);
        cloneState.changeOrientation();
        props.func(cloneState);
      }}>axis: {props.player.orientation === 'horizontal' ? 'X' : 'Y'}</button> : null}
      <div>
        {createBoardTemplate(100)}
      </div>
    </Wrapper>
  )
}

function randomNumberGenerator(minNumber, maxNumber) {
  return Math.round(minNumber + (maxNumber - minNumber + 1) * Math.random() - 0.5) - 1; 
}