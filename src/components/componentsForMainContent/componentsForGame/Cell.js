import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { playersContext } from './Board';

const Item = styled.div`
  width: 3vmin;
  height: 3vmin;
  background:  ${props => props.status.key ? 'gray' : `rgb(66, 66, 255)`};
  border: solid white 1px;
`;

export default function Cell(props) {

  const contextData = useContext(playersContext);
  const [coord] = useState({horizontal: props.horizontal, vertical: props.vertical});
  const [isSelected, setIsSelected] = useState(false);

  console.log(contextData)

  useEffect(() => {
    let check = contextData.selectedCells.find(elem => {
      return elem.vertical === coord.vertical && elem.horizontal === coord.horizontal;
    })

    console.log(check)

    if (check) {
      setIsSelected(true);
      console.log('work')
    } else {
      setIsSelected(false);
    }
  }, [isSelected])

  return (
    <Item
    onMouseEnter={() => {
      //console.log()
      let array = contextData.board.board.newShipsArray;
      let requiredItem = array.find(elem => !elem.isPlaced);

      if (coord.vertical + requiredItem.length < 11) {
        let createArray = new Array(requiredItem.length).fill().map((elem, id) => Object.assign({}, coord, {vertical: coord.vertical + id}))
        
      
        contextData.selectedCells.setSelectedCells(createArray)
      } else {
        return 'Invalid value';
      }
    }} 
    onClick={() => console.log(contextData.board.boardForGame.placeShips(coord))} status={{key: isSelected}} />
  )
}