import React, {useEffect, useState } from "react";
import styled from "styled-components";

const Square = styled.div`
  background:  ${props => props.status.key ? 'gray' : `rgb(66, 66, 255)`};
  border: solid white 1px;
`;

/* class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentState: props.state,
      isSelected: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const array = nextProps.state.board.newShipsArray;

    //console.log('work')

    if (this.state.isSelected !== nextState.isSelected) {
      console.log(this.state.isSelected)
      console.log(nextState.isSelected)
      return true;
    } else {
      
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i].isPlaced) {
        const requiredItem = array[i];

        let condition = requiredItem.shipPart.find(elem => {
          return elem.coord.coord === this.props.index;
        })

        if (condition) {
          return true;
        }
      }
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    const array = this.state.parentState.board.newShipsArray;

    for (let i = 0; i < array.length; i++) {
      if (array[i].isPlaced) {
        const requiredItem = array[i];

        let condition = requiredItem.shipPart.find(elem => {
          return elem.coord.coord === this.props.index;
        })

        if (condition && !prevState.isSelected) {
          this.setState({isSelected: true})

        }
      }
    }
  }

  render() {
    console.log(this.state)
    return (
      <Square
    
    onClick={() => {
      const cloneBoard = Object.assign({}, this.props.state.board)
      let findElem = cloneBoard.newShipsArray.find(elem => {
        return !elem.isPlaced;
      })

      let remainderOfDivision = this.props.index % 10;

      if (remainderOfDivision + findElem.length <= 10) {
        cloneBoard.placeShips(this.props.index);
        findElem.isPlaced = true;
        this.props.state.setBoard(cloneBoard)
      } else {
      }
    }} status={{key: this.state.isSelected}}>{this.props.index}</Square>
    )
  }

}

export default Cell; */

const Cell = React.memo((props) => {

  const [isSelected, setIsSelected] = useState(false);
  console.log('work')

  useEffect(() => {
    const array = props.state.board.newShipsArray;

    for (let i = 0; i < array.length; i++) {
      if (array[i].isPlaced) {
        const requiredItem = array[i];

        let condition = requiredItem.shipPart.find(elem => {
          return elem.coord.coord === props.index;
        })

        if (condition) {
          setIsSelected(true);
        }
      }
    }
  })
  return (
    <Square
    
    onClick={() => {
      const cloneBoard = Object.assign({}, props.state.board)
      let findElem = cloneBoard.newShipsArray.find(elem => {
        return !elem.isPlaced;
      })

      let remainderOfDivision = props.index % 10;

      if (remainderOfDivision + findElem.length <= 10) {
        cloneBoard.placeShips(props.index);
        findElem.isPlaced = true;
        props.state.setBoard(cloneBoard)
      } else {
      }
    }} status={{key: isSelected}}>{props.index}</Square>
  )
}, (prevProps, nextProps) => {
  const array = nextProps.state.board.newShipsArray;

    for (let i = 0; i < array.length; i++) {
      if (array[i].isPlaced) {
        const requiredItem = array[i];

        let condition = requiredItem.shipPart.find(elem => {
          return elem.coord.coord === nextProps.index;
        })

        if (condition) {
          return false;
        }
      }
    }
    return true;

  //return prevProps === nextProps;
})

export default Cell;

/* import React, {useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 3vmin;
  height: 3vmin;
  background:  ${props => props.status.key ? 'gray' : `rgb(66, 66, 255)`};
  border: solid white 1px;
`;

export default function Cell(props) {

  const [coord] = useState({horizontal: props.horizontal, vertical: props.vertical});
  const [isSelected, setIsSelected] = useState(false);
  const [boardState, setBoardState] = useState(props.state);

  useEffect(() => {
    console.log(boardState)
    let findElem;
    let shipsArray = boardState.objBoard.board.newShipsArray;

    for (let i = 0; i < shipsArray.length; i++) {
      findElem = shipsArray[i].shipPart.find(elem => {
        return elem.coord && elem.coord.vertical === coord.vertical && elem.coord.horizontal === coord.horizontal;
      })

      if (findElem) {
        break;
      }
    }

    if (findElem) {
      setIsSelected(true)
    }

    
  }, [isSelected])

  return (
    <Item
    onMouseEnter={() => {
      let array = boardState.objBoard.board.newShipsArray;
      let requiredItem = array.find(elem => !elem.isPlaced);

      if (coord.vertical + requiredItem.length - 1 <= boardState.countElements.countCells) {
        let createArray = new Array(requiredItem.length).fill().map((elem, id) => Object.assign({}, coord, {vertical: coord.vertical + id}))
        
        console.log(createArray)
        boardState.cells.setSelectedCells(createArray.map(elem => Object.assign(elem)))
      } else {
        return 'Invalid value';
      }
    }}


    onClick={() => {
      let board = Object.assign({}, boardState.objBoard.board)
      let placedCells = board.placeShips(coord).shipPart.map(elem => elem.coord);  

      boardState.cells.setSelectedCells(placedCells);
      boardState.objBoard.setBoard(board)
    }}
    status={{key: isSelected}} />
  )
} */