import styled from "styled-components";
import Board from './componentsForGame/Board'
import { humanPlayer, createBotPlayer } from "../../factoriesFunc/player";

const Wrapper = styled.div`
  #gameBoards {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default function Game() {
  return (
    <Wrapper>
      <div id='gameBoards'>
        <Board player={humanPlayer} isHuman />
        <Board player={createBotPlayer()} />
      </div>
    </Wrapper>
  )
}