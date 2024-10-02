import "./src/Styles/settings/colors.css";
import "./src/Styles/generic/reset.css";
import "./src/Styles/elements/base.css";

//import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/components/Objects/BoardGame";

//${CardGame().repeat(6)}

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $htmlPalyerName = PlayerName("Player1" + "Player2")

$root.insertAdjacentHTML("beforeend", $htmlPalyerName  + $htmlBoardGame);

