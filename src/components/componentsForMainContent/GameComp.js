import styled from "styled-components";
import Board from './componentsForGame/Board'
import { Player, Robot } from "../../factoriesFunc/player";
import { useEffect, useState } from "react";
import cloneObj from "../../factoriesFunc/cloneObj";
import GameOver from "./componentsForGame/gameOver";

const Wrapper = styled.div`
  #gameBoards {
    display: flex;
    justify-content: space-evenly;
    position: relative;
  }
`;

export default function Game(props) {
  const [humanPlayer, setHumanPlayer] = useState(Player());
  const [botPlayer, setBotPlayer] = useState(Robot());
  const [loserName, setLoserName] = useState(null);

  useActiveStatus(botPlayer, [humanPlayer, setHumanPlayer]);
  useActiveStatus(humanPlayer, [botPlayer, setBotPlayer]);

  useEffect(() => {
    if (botPlayer.isGameOver) {
      let clone = cloneObj(botPlayer);
      setBotPlayer(clone)
      setLoserName(clone.name);
    } else if (humanPlayer.isGameOver) {
      let clone = cloneObj(humanPlayer);
      setBotPlayer(clone);
      setLoserName(clone.name);
    }
  }, [botPlayer.isGameOver, humanPlayer.isGameOver])

  return (
    <Wrapper>
      <div id='gameBoards'>
        <Board player={humanPlayer} func={setHumanPlayer} isHuman />
        <Board player={botPlayer} func={setBotPlayer} />
        {(humanPlayer.isGameOver || botPlayer.isGameOver) 
        ? <GameOver func={props.func} loserName={loserName} /> 
        : null}
      </div>
    </Wrapper>
  )
}

function useActiveStatus(obj, args) {
  useEffect(() => {
    if (!obj.isActive) {
      let clone = cloneObj(args[0]);
      clone.isActive = true;
      args[1](clone);
    }
  }, [obj.isActive])
}