import "./style.css";
import PlayerScore from "../PlayerScore";

const PlayerName = (player) => {
   const $htmlPlayerScore = PlayerScore()
  return `<p class="player-name">${player} ${$htmlPlayerScore}</p>`;
};

export default PlayerName;
