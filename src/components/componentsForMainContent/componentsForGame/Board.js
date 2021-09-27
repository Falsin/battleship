import React, { useState } from 'react';
import uniqid from 'uniqid';
import Row from './Row';

let playersContext = React.createContext(null);

export default function Board(props) {

  const [player, setPlayer] = useState(props.player);

  function createBoardTemplate(countRows, countCells) {
    return new Array(countRows).fill()
    .map(() => <Row key={uniqid()} countCells={countCells} />);
  }

  return (
    <playersContext.Provider value={{user: player, setUser: setPlayer, changeContext: () => {}}}>
      <div>
        {createBoardTemplate(10, 10).map(elem => elem)}
      </div>
    </playersContext.Provider>
  )
}

export { playersContext };