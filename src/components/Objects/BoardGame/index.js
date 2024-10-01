import CardGame from "../../CardGame";

function BoardGame(repeat) {
  return `${CardGame().repeat(repeat)}`;
}

export default BoardGame;
