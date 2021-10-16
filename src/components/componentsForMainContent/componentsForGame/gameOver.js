import styled from "styled-components";
import refreshArrow from "../../../images/refreshArrow.svg";
import uniqid from "uniqid";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(135, 99, 99, 0.5);
  font-weight: 900;
  color: white;

  h1 {
    text-shadow: 0 0 6px black;
  }
`

function GameOver(props) {
  return (
    <Wrapper>
      <h1>Game over!</h1>
      <div>{props.loserName + ` lost!`}</div>
      <img src={refreshArrow} onClick={() => props.func(uniqid())} />
</Wrapper>
  )
}

export default GameOver;