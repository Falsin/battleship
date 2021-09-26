import Regist from "./componentsForMainContent/RegistComp";
import Game from "./componentsForMainContent/GameComp";

export default function MainContent(props) {
  return (
    (props.page === 'registration') ? <Regist /> : <Game />
  )
}