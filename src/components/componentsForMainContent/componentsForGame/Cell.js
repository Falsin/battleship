import React, {useEffect, useState } from "react";
import styled from "styled-components";

const Square = styled.div`
  //background:  ${props => props.status.key ? 'gray' : `rgb(66, 66, 255)`};
  background: ${(props) => {
    if (props.error.key) {
      return 'red';
    } else if (props.status.key || props.hover.key) {
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
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {

      const array = props.state.board.newShipsArray;

      if (props.state.board.hoveredCells.includes(props.index)) {
        if (props.state.board.selectedCells.includes(props.index)) {
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
      const cloneBoard = Object.assign({}, props.state.board);
      let findElem = cloneBoard.newShipsArray.find(elem => !elem.isPlaced);

      if (cloneBoard.checkCellAssing(props.index)) {
        console.log('work1');
        let remainderOfDivision = props.index % 10;

        if (remainderOfDivision + findElem.length <= 10) {
          cloneBoard.addCellsIntoHoveredCells(findElem, props.index);
      
          props.state.setBoard(cloneBoard);
        }
      } else {
        console.log('work2')
        cloneBoard.addCellsIntoHoveredCells(findElem, props.index);
        //setIsError(true);
        props.state.setBoard(cloneBoard);
      }
      
    }
  
    return (
      <Square onClick={() => arrangeShips()} onMouseEnter={() => shipHover()}
      
      status={{key: isSelected}} error={{key: isError}} hover={{key: isHover}}>{props.index}</Square>
    )
}

function comprasionOfProps(prevProps, nextProps) {
  /* const array = nextProps.state.board.newShipsArray;

  for (const item of array) {
    if (item.isPlaced) {
      let condition = item.shipPart.find(elem => elem.coord === nextProps.index)

      if (condition) {
        return false;
      }
    }
  }

  return true; */
  return !(prevProps !== nextProps);
  /* if (prevProps !== nextProps) {
    reut
  } */
}

export default Cell;