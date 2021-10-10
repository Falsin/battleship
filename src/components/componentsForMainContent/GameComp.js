import styled from "styled-components";
import Board from './componentsForGame/Board'
import { Player, Robot } from "../../factoriesFunc/player";
import { useState } from "react";

const Wrapper = styled.div`
  #gameBoards {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default function Game() {
  const [humanPlayer, setHumanPlayer] = useState(Player());
  const [botPlayer, setBotPlayer] = useState(Robot());

  console.log(humanPlayer)

  return (
    <Wrapper>
      <div id='gameBoards'>
        <Board player={humanPlayer} func={setHumanPlayer} isHuman />
        <Board player={botPlayer} func={setBotPlayer} />
      </div>
    </Wrapper>
  )
}