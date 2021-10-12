import styled from "styled-components";
import Board from './componentsForGame/Board'
import { Player, Robot } from "../../factoriesFunc/player";
import { useEffect, useState } from "react";
import cloneObj from "../../factoriesFunc/cloneObj";

const Wrapper = styled.div`
  #gameBoards {
    display: flex;
    justify-content: space-evenly;
  }
`;

/* function gameLoop() {
  let 
} */

export default function Game() {
  const [humanPlayer, setHumanPlayer] = useState(Player());
  const [botPlayer, setBotPlayer] = useState(Robot());

  useEffect(() => {
    if (!humanPlayer.isActive) {
      let clone = cloneObj(botPlayer);
      clone.isActive = true;
      setBotPlayer(clone);
    }
  }, [humanPlayer.isActive]);

  useEffect(() => {
    if (!botPlayer.isActive) {
      let clone = cloneObj(humanPlayer);
      clone.isActive = true;
      setHumanPlayer(clone);
    }
  }, [botPlayer.isActive]);

  return (
    <Wrapper>
      <div id='gameBoards'>
        <Board player={humanPlayer} func={setHumanPlayer} isHuman /* enemyState={{botPlayer, func: setBotPlayer}} */ />
        <Board player={botPlayer} func={setBotPlayer} /* enemyState={{humanPlayer, func: setHumanPlayer}} */ />
      </div>
    </Wrapper>
  )
}