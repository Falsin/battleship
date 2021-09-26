import { humanPlayer } from "../../factoriesFunc/player"

export default function Game(params) {
  return (
    <>
      <h1>This is a game page!</h1>
      <div>{humanPlayer.name}</div>
    </>
  )
}