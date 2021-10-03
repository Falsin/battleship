import React, {useEffect, useState } from "react";
import styled from "styled-components";

const Square = styled.div`
  //background:  ${props => props.status.key ? 'gray' : `rgb(66, 66, 255)`};
  background: ${(props) => {
    if (props.error.key) {
      return 'red';
    } else if (props.status.key) {
      return 'gray';
    } else {
      return `rgb(66, 66, 255)`;
    }
  }};
  border: solid white 1px;
`;

const Cell = React.memo(CreateCell, comprasionOfProps);

function CreateCell (props) {

    const [isSelected, setIsSelected] = useState(false);
    const [isError, setIsError] = useState(false);
  
    //console.log('work')
  
    useEffect(() => {
      if (props.state.board.hoveredCells.includes(props.index)) {
        setIsError(true);
      } else {
        setIsError(false);
        const array = props.state.board.newShipsArray;
  
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
      const cloneBoard = Object.assign({}, props.state.board);
  
      if (cloneBoard.checkCellAssing(props.index)) {
        let findElem = cloneBoard.newShipsArray.find(elem => !elem.isPlaced);
  
        let remainderOfDivision = props.index % 10;
  
        if (remainderOfDivision + findElem.length <= 10) {
          cloneBoard.placeShips(props.index);
          findElem.isPlaced = true;
          props.state.setBoard(cloneBoard);
        }
      }
    }

    function shipHover() {
        //console.log('enter')
      const cloneBoard = Object.assign({}, props.state.board);
      let findElem = cloneBoard.newShipsArray.find(elem => !elem.isPlaced);

      if (cloneBoard.checkCellAssing(props.index)) {
        let remainderOfDivision = props.index % 10;
  
      } else {
        cloneBoard.addCellsIntoHoveredCells(findElem, props.index);
        props.state.setBoard(cloneBoard)
      }
      
    }

/*     function leaveCells() {
      const cloneBoard = Object.assign({}, props.state.board);
      cloneBoard.hoveredCells = [];
      props.state.setBoard(cloneBoard)
      console.log('leave')
    } */
  
    return (
      <Square onClick={() => arrangeShips()} onMouseEnter={() => shipHover()}
      /* onMouseLeave={() => leaveCells()} */
      
      status={{key: isSelected}} error={{key: isError}}>{props.index}</Square>
    )
}

function comprasionOfProps(prevProps, nextProps) {
  const array = nextProps.state.board.newShipsArray;

  for (const item of array) {
    if (item.isPlaced) {
      let condition = item.shipPart.find(elem => elem.coord === nextProps.index)

      if (condition) {
        return false;
      }
    }
  }

  return true;
}

export default Cell;