import Regist from "./componentsForMainContent/RegistComp";
import Game from "./componentsForMainContent/GameComp";
import { useState } from "react";
import uniqid from "uniqid";

export default function MainContent(props) {
  const [key, setKey] = useState(uniqid());

  return (
    (props.page === 'registration') ? <Regist /> : <Game key={key} func={setKey} />
  )
}