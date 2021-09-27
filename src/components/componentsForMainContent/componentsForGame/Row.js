import Cell from "./Cell";
import uniqid from 'uniqid';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

export default function Row(props) {
  function createCells() {
    return new Array(props.countCells).fill().map(() => <Cell player={props.player} changePlayer={props.setPlayer} key={uniqid()} />)
  }

  return (
    <Wrapper>
      {createCells().map(elem => elem)}
    </Wrapper>
  )
}