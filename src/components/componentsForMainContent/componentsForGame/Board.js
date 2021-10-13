import React from 'react';
import styled from "styled-components";
import Cell from './Cell';
import cloneObj from '../../../factoriesFunc/cloneObj';
import { useEffect, useState } from 'react/cjs/react.development';
import iniqid from 'uniqid';

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

  const [coordOfAttack, setCoordOfAttack] = useState(null);

  useEffect(() => {
    if (props.isHuman && props.player.isActive && props.player.isReady) {
      //setCoordOfAttack(randomNumberGenerator(1, 100));
      setCoordOfAttack(50);
    }
  }, [props.player.isActive])

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