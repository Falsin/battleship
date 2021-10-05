import React, { useState } from 'react';
import uniqid from 'uniqid';
import gameBoard from '../../../factoriesFunc/gameBoard';
import styled from "styled-components";
import Cell from './Cell';
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
  const [board, setBoard] = useState(gameBoard());

  function createBoardTemplate(countRows) {
    return new Array(countRows).fill().map((elem, id) => <Cell key={id} index={id} state={{board, setBoard}} />);
  }

  console.log(props)

  return (
    <Wrapper>
      {(props.isHuman) ? <button>axis: X</button> : null}
      <div>
        {createBoardTemplate(100)}
      </div>
    </Wrapper>
  )
}