import styled from "styled-components";
import Board from './componentsForGame/Board'
import { Player, Robot } from "../../factoriesFunc/player";
import { useEffect, useState } from "react";
import cloneObj from "../../factoriesFunc/cloneObj";

const Wrapper = styled.div`
  #gameBoards {
    display: flex;
    justify-content: space-evenly;
    position: relative;
  }
`;

const GameOver = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

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

  /* useEffect(() => {
    console.log(humanPlayer)
    //let clone = cloneObj(humanPlayer);
    //console.log(clone === humanPlayer)
    //setHumanPlayer(clone)
    //console.log(humanPlayer.isGameOver)
  }, [humanPlayer.isGameOver]);
  //console.log(humanPlayer.isGameOver) */

  useEffect(() => {
    //console.log(botPlayer)
    if (botPlayer.isGameOver) {
      let clone = cloneObj(botPlayer);
      setBotPlayer(clone)
    } else if (humanPlayer.isGameOver) {
      let clone = cloneObj(humanPlayer);
      setBotPlayer(clone)
    }
  }, [botPlayer.isGameOver, humanPlayer.isGameOver])

  return (
    <Wrapper>
      <div id='gameBoards'>
        <Board player={humanPlayer} func={setHumanPlayer} isHuman />
        <Board player={botPlayer} func={setBotPlayer} />
      </div>
      {console.log(humanPlayer)}
      {(humanPlayer.isGameOver || botPlayer.isGameOver) ? <GameOver>Game over!</GameOver> : null}
    </Wrapper>
  )
}


function comprasionOfProps(prevProps, nextProps) {
  return prevProps

}