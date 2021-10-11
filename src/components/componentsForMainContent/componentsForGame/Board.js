import React from 'react';
import styled from "styled-components";
import Cell from './Cell';
import cloneObj from '../../../factoriesFunc/cloneObj';
import { useEffect } from 'react/cjs/react.development';

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
  const state = {
    player: props.player, 
    func: props.func
  }

  function createBoardTemplate(countRows) {
    return new Array(countRows).fill().map((elem, id) => {
      return <Cell key={id} index={id} state={state} isHuman={props.isHuman} />
    });
  }

  useEffect(() => {
    if (props.player.name === 'robot' && props.player.isActive) {
      let clone = cloneObj(props.player);
      let findShip = clone.newShipsArray.find(elem => !elem.isPlaced);

      while (findShip !== undefined) {
        let arrayOrienttation = ['vertical', 'horizontal']
        let orientation = arrayOrienttation[randomNumberGenerator(1, 2)];
        let randomNumber = randomNumberGenerator(1, 100);
        clone.orientation = orientation;
        clone.addCellsIntoHoveredCells(findShip, randomNumber);
        clone.placeShips();
        findShip = clone.newShipsArray.find(elem => !elem.isPlaced);
        props.func(clone);
      }
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
/*   let minNumber = 1;
  let maxNumber = 100; */
  return Math.round(minNumber + (maxNumber - minNumber + 1) * Math.random() - 0.5) - 1; 
}

/* function setRandomOrientation() {
  let array = ['vertical', 'horizontal'];
  let minNumber = 1;
  let maxNumber = 2;
  return array[Math.round(minNumber + (maxNumber - minNumber + 1) * Math.random() - 0.5) - 1]; 
} */