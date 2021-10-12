import React, {useEffect, useState } from "react";
import styled from "styled-components";
import cloneObj from "../../../factoriesFunc/cloneObj";

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

  const player = props.state.player;
  const array = player.newShipsArray;

  useEffect(() => {
    console.log(player.isReady)
    if (!player.isReady) {
      if (player.hoveredCells.cellsArray.includes(props.index)) {
        if (player.hoveredCells.isValid) {
          setIsHover(true);
          setIsError(false);
        } else {
          setIsError(true);
        }
      } else {
        setIsHover(false);
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
    } else {
      if (player.selectedCells.includes(props.index)) {
        setIsSelected(true);

        let requiredElem = null;
        for (let i = 0; i < player.newShipsArray.length; i++) {
          let shipPartArray = player.newShipsArray[i].shipPart;
          requiredElem = shipPartArray.find(elem => elem.coord === props.index);

          if (requiredElem && requiredElem.isDamage) {
            //requiredElem.isDamage = true;
            //сделать так, чтобы менялся цвет
            break
          }

          //console.log(this.newShipsArray[i].shipPart)
        }
      }
    }
  })

  function arrangeShips() {
    let cloneBoard = cloneObj(player);
    cloneBoard.placeShips(props.index);

    let findElem = cloneBoard.newShipsArray.find(elem => !elem.isPlaced);
    
    if (!findElem) {
      cloneBoard.isReady = true;
      cloneBoard.isActive = false;
    }
    props.state.func(cloneBoard);
  }

  function shipHover() {
    let cloneBoard = cloneObj(player);
    
    let findElem = cloneBoard.newShipsArray.find(elem => !elem.isPlaced);

    cloneBoard.addCellsIntoHoveredCells(findElem, props.index);
    props.state.func(cloneBoard);
  }

  function returnFuncForClick() {
    if (player.isReady && player.isActive) {
      return player.getDamage(props.index);
    } else if (props.isHuman && !player.isReady) {
      return arrangeShips();
    }
  }

  return (
    <Square 
    onClick={() => returnFuncForClick()} 
    onMouseEnter={() => player.isReady || !props.isHuman ? null : shipHover()}
    status={{key: isSelected}} error={{key: isError}} hover={{key: isHover}}>{props.index}</Square>
  )
}

function comprasionOfProps(prevProps, nextProps) {
  const prevPlayer = prevProps.state.player;
  const nextPlayer = nextProps.state.player;

  if (prevPlayer.hoveredCells.cellsArray.includes(nextProps.index) || nextPlayer.hoveredCells.cellsArray.includes(nextProps.index)) {
    return false;
  } else if (prevPlayer.isReady !== nextPlayer.isReady) {
    return false
  } else if (prevPlayer.orientation !== nextPlayer.orientation) {
    return false;
  } else if (sumNumbersInArray(prevPlayer.selectedCells) !== sumNumbersInArray(nextPlayer.selectedCells)) {
    return false;
  } else {
    const array = prevPlayer.newShipsArray;

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

function sumNumbersInArray(array) {
  return array.reduce((prevVal, currVal) => prevVal + currVal, 0)
}

export default Cell;