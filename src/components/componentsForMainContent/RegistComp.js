import { Link } from "react-router-dom";
import styled from "styled-components";
import { Player, Robot } from "../../factoriesFunc/player";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & * {
    padding: 0;
    margin: 1vmin;
  }

  & input {
    padding: 1vmin;
    border: solid gray 1px;
    outline: none;
  }

  a {
    display: block;
    border: solid gray 1px;
    padding: 1vmin;
    text-decoration: none;
    color: black;
  }
`;


export default function Regist(props) {
  return (
    <Wrapper>
      <h3>Enter player name:</h3>
      <input placeholder='Combat' onBlur={(e) => {
        Player().setName(e.target.value)}
      } />
      <Link to='/gamePage'>Start game</Link>
    </Wrapper>
  )
}