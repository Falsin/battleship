import styled from "styled-components";
import Board from './componentsForGame/Board'
import { Player, Robot } from "../../factoriesFunc/player";
import { useEffect, useState } from "react";
import cloneObj from "../../factoriesFunc/cloneObj";

function gameLoop() {
  // создать функцию игрового цикла
  // сохранить сюда humanPlayer и botPlayer
  // и передавать ходы

  const humanPlayer = Player();
  const botPlayer = Robot();

  //фукнция для передачи хода
  function changeMove(params) {
    if (humanPlayer.isActive) {
      humanPlayer.isActive = false;
      botPlayer.isActive = true;
    } else {
      humanPlayer.isActive = true;
      botPlayer.isActive = false;
    }
  }

  return {humanPlayer, botPlayer, changeMove}
}

const Wrapper = styled.div`
  #gameBoards {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default function Game() {
  const [humanPlayer, setHumanPlayer] = useState(Player());
  const [botPlayer, setBotPlayer] = useState(Robot());

  /* const [gameLoopObj, setGameLoop] = useState(gameLoop());
  const [humanPlayer, setHumanPlayer] = useState(gameLoopObj.humanPlayer);
  const [botPlayer, setBotPlayer] = useState(gameLoopObj.botPlayer); */

  //console.log(gameLoopObj.humanPlayer === humanPlayer);

  useEffect(() => {
    if (!humanPlayer.isActive) {
      let clone = cloneObj(botPlayer);
      clone.isActive = true;
      setBotPlayer(clone);
    } else {
      let clone = cloneObj(botPlayer);
      clone.isActive = false;
      setBotPlayer(clone)
    }
  }, [humanPlayer.isActive]);

  //console.log(humanPlayer)

  return (
    <Wrapper>
      <div id='gameBoards'>
        <Board player={humanPlayer} func={setHumanPlayer} isHuman />
        <Board player={botPlayer} func={setBotPlayer} />
        {/* <Board player={humanPlayer} func={setHumanPlayer} isHuman />
        <Board player={botPlayer} func={setBotPlayer} /> */}
      </div>
    </Wrapper>
  )
}