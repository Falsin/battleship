import React, { useState } from 'react';
import uniqid from 'uniqid';
import gameBoard from '../../../factoriesFunc/gameBoard';
import styled from "styled-components";
import Cell from './Cell';
import { useEffect } from 'react/cjs/react.development';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 4vmin);
  grid-template-rows: repeat(10, 4vmin);  
`;


export default function Board(props) {
  const [board, setBoard] = useState(gameBoard());

  function createBoardTemplate(countRows) {
    return new Array(countRows).fill().map((elem, id) => <Cell key={id} index={id} state={{board, setBoard}} />);
  }

  return (
    <div>
      <Wrapper>
        {createBoardTemplate(100)}
      </Wrapper>
    </div>
  )
}