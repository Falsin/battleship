import React from 'react';
import styled from "styled-components";
import Cell from './Cell';
import cloneObj from '../../../factoriesFunc/cloneObj';

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