import { useContext, useState } from "react";
import styled from "styled-components";
import { playersContext } from './Board';

const Item = styled.div`
  width: 3vmin;
  height: 3vmin;
  background: rgb(66, 66, 255);
  border: solid white 1px;
`;

export default function Cell(props) {

  const [contextData, setContextDate] = useState(useContext(playersContext));

  return (
    <Item onClick={() => /* setContextDate({...contextData, dopKey: 'dopProp1'}) */ console.log(contextData)} />
  )
}