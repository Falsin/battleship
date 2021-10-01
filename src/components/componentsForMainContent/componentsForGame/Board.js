import React, { useState } from 'react';
import uniqid from 'uniqid';
import gameBoard from '../../../factoriesFunc/gameBoard';
import styled from "styled-components";
import Cell from './Cell';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 4vmin);
  grid-template-rows: repeat(10, 4vmin);  
`;


export default function Board(props) {

/*   const [board, setBoard] = useState(gameBoard())
  const [player, setPlayer] = useState(props.player);
  const [isReady, setReadyStatus] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);
  const [[countRows, countCells], setCountElements] = useState([10, 10]); */

/*   const state = {
    objStatus: {isReady, setReadyStatus},
    objBoard: {board, setBoard},
    objPlayer: {player, setPlayer},
    cells: {selectedCells, setSelectedCells},
    countElements: {countRows, countCells, setCountElements},
  } */

  /* function createBoardTemplate(countRows, countCells) {
    return new Array(countRows).fill()
    .map((elem, id) => {
      let horizontalCoord = String.fromCharCode('A'.charCodeAt(0) + id);
      return <Row horizontal={horizontalCoord} key={uniqid()} state={state} />
    });
  } */

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

/* let playersContext = React.createContext(null);

export default function Board(props) {

  const [board, setBoard] = useState(gameBoard())
  const [player, setPlayer] = useState(props.player);
  const [isReady, setReadyStatus] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);
  const [[countRows, countCells], setCountElements] = useState([10, 10])

  let objStatus     = {isReady, setReadyStatus};
  let objBoard      = {board, setBoard};
  let objPlayer     = {player, setPlayer};
  let cells         = {selectedCells, setSelectedCells};
  let countElements = {countRows, countCells, setCountElements};

  function createBoardTemplate(countRows, countCells) {
    return new Array(countRows).fill()
    .map((elem, id) => {
      let horizontalCoord = String.fromCharCode('A'.charCodeAt(0) + id);
      return <Row horizontal={horizontalCoord} key={uniqid()} countCells={countCells} />
    });
  }

  return (
    <playersContext.Provider value={{user: objPlayer, status: objStatus, board: objBoard, selectedCells: cells, countItems: countElements, changeContext: () => {}}}>
      <div>
        {createBoardTemplate(countRows, countCells).map(elem => elem)}
      </div>
    </playersContext.Provider>
  )
}

export { playersContext }; */