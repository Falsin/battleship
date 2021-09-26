import styled from "styled-components";
import uniqid from 'uniqid';
import { humanPlayer } from "../../factoriesFunc/player";


const Wrapper = styled.div`
  .board {
    //display: flex;
    display: grid;

    & div {
    width: 2vmin;
    height: 2vmin;
    border: solid red 1px;
    }
  }
`;

export default function Game(params) {

  /* function createBoardTemplate(params) {
    const countRows = 10;
    const countCells = 10;

    let rowsArray = [];

    for (let i = 0; i < countRows; i++) {
      rowsArray.push(Row(countCells))
    }
    
    return rowsArray;
  } */

  function createBoardTemplate(countRows, countCells) {
    return new Array(countRows).fill().map(() => Row(countCells));
  }

  return (
    <Wrapper>
      <div id='gameBoards'>
        <div className='board'>
          {createBoardTemplate(10, 10).map(elem => elem)}
        </div>
        <div className='board'></div>
      </div>
    </Wrapper>
  )
}

function Row(countCells) {
  function createCells() {
    return new Array(countCells).fill()
    .map(() => <div key={uniqid()} className='cell'></div>)
  }

  return (
    <div className='row'>
      {createCells().map(elem => elem)}
    </div>
  )
}

// было 23 строчки
// стало 14 строчек

/* function Row(countCells) {
  function createCells(params) {
    let arrayCells = [];
    for (let i = 0; i < countCells; i++) {
      arrayCells.push(<div className='cell'></div>)
    }

    return arrayCells;
  }

  return (
    <div className='row'>
      {createCells().map(elem => elem)}
    </div>
  )
} */