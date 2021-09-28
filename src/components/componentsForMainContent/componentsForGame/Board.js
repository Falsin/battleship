import React, { useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import gameBoard from '../../../factoriesFunc/gameBoard';
import Row from './Row';

let playersContext = React.createContext(null);

export default function Board(props) {

  const [board, setBoard] = useState(gameBoard())
  const [player, setPlayer] = useState(props.player);
  const [isReady, setReadyStatus] = useState(false);
  const [selectedCells, setSelectedCells] = useState([])

  let objStatus = {isReady, setReadyStatus};
  let objBoard = {board, setBoard};
  let objPlayer = {player, setPlayer};
  let cells = {selectedCells, setSelectedCells}


/*   useEffect(() => {

  }) */

  function createBoardTemplate(countRows, countCells) {
    return new Array(countRows).fill()
    .map((elem, id) => {
      let horizontalCoord = String.fromCharCode('A'.charCodeAt(0) + id);
      return <Row horizontal={horizontalCoord} key={uniqid()} countCells={countCells} />
    });
  }

  return (
    <playersContext.Provider value={{user: objPlayer, status: objStatus, board: objBoard, selectedCells: cells, changeContext: () => {}}}>
      <div>
        {createBoardTemplate(10, 10).map(elem => elem)}
      </div>
    </playersContext.Provider>
  )
}

export { playersContext };