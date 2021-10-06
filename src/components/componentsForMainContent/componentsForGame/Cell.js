import React, {useEffect, useState } from "react";
import styled from "styled-components";

const Square = styled.div`
  background: ${(props) => {
    return  (props.error.key) ? 'red' : 
            (props.status.key || props.hover.key) ? 'gray' : `rgb(66, 66, 255)`
  }};
  border: solid white 1px;
`;

const Cell = React.memo(CreateCell, comprasionOfProps);

function CreateCell (props) {
    const [isSelected, setIsSelected] = useState(false);
    const [isError, setIsError]       = useState(false);
    const [isHover, setIsHover]       = useState(false);

  useEffect(() => {
    const array = props.state.board.newShipsArray;
    const board = props.state.board;

    if (board.hoveredCells.includes(props.index)) {
      if (board.selectedCells.includes(props.index)) {
        setIsError(true);
      } else {
        setIsHover(true);
      }
    } else {
      if (isHover) {
        setIsHover(false);
      }
      setIsError(false);

      for (const item of array) {
        if (item.isPlaced) {
          let condition = item.shipPart.find(elem => elem.coord === props.index)
      
          if (condition) {
            setIsSelected(true);
          }
        }
      }
    }
  })
  
  function arrangeShips() {
    let cloneBoard = Object.assign({}, props.state.board);
    cloneBoard.placeShips(props.index);

    let findElem = cloneBoard.newShipsArray.find(elem => !elem.isPlaced);
    
    if (!findElem) {
      cloneBoard.isReady = true;
    }

    props.state.setBoard(cloneBoard);
  }

  function shipHover() {
    let cloneBoard = Object.assign({}, props.state.board);
    let findElem = cloneBoard.newShipsArray.find(elem => !elem.isPlaced);

    cloneBoard.addCellsIntoHoveredCells(findElem, props.index);
    props.state.setBoard(cloneBoard);
  }
  
    return (
      <Square 
      onClick={() => props.state.board.isReady || !props.isHuman ? null : arrangeShips()} 
      onMouseEnter={() => props.state.board.isReady || !props.isHuman ? null : shipHover()}
      status={{key: isSelected}} error={{key: isError}} hover={{key: isHover}}>{props.index}</Square>
    )
}

function comprasionOfProps(prevProps, nextProps) {
  if (nextProps.state.board.hoveredCells.includes(nextProps.index) || prevProps.state.board.hoveredCells.includes(nextProps.index)) {
    return false;
  } else if (prevProps.state.board.isReady !== nextProps.state.board.isReady) {
    return false
  } else if (prevProps.state.board.orientation !== nextProps.state.board.orientation) {
    return false;
  } else {
    const array = nextProps.state.board.newShipsArray;

    for (const item of array) {
      if (item.isPlaced) {
        let condition = item.shipPart.find(elem => elem.coord === nextProps.index)

        if (condition) {
          return false;
        }
      }
    }
  }
  return true;
}

export default Cell;