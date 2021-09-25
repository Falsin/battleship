import { Link } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { humanPlayer } from "../factoriesFunc/player";

const WrapperForRegist = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & * {
    padding: 0;
    margin: 1vmin;
  }
/* 
  & button {
    padding: 1vmin;
  } */

  & input {
    padding: 1vmin;
    border: solid gray 1px;
    outline: none;
  }

  a {
    /* -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    text-decoration: none;
    color: initial; */
    display: block;
    border: solid gray 1px;
    padding: 1vmin;
    text-decoration: none;
    color: black;
  }
`;

export default function MainContent(props) {
  const [name, setName] = useState(null);

  return (
    (props.page === 'registration') ? <Regist func={setName} /> : <Game userName={name} />
  )
}

function Regist(props) {
  return (
    <WrapperForRegist>
      <h3>Enter player name:</h3>
      <input placeholder='Combat' 
        onBlur={(e) => props.func.setName(e.target.value)}>
      </input>
      <Link to='/gamePage'>Start game</Link>
    </WrapperForRegist>
  )
}

function Game(params) {
  return (
    <h1>This is a game page!</h1>
  )
}