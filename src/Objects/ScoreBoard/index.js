import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";

const ScoreBoard = () => {
  return `<header class="score-board"> ${PlayerName("Player1")} ${VsPlayer()} ${PlayerName("Player2")} </header>`;
};

export default ScoreBoard;
