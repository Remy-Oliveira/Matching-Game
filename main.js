import "./src/Styles/settings/colors.css";
import "./src/Styles/generic/reset.css";
import "./src/Styles/elements/base.css";

//import CardGame from "./src/components/CardGame";
import BoardGame from "./src/components/Objects/BoardGame";
import ScoreBoard from "./src/components/Objects/ScoreBoard";

//${CardGame().repeat(6)}

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $htmlPalyerName = ScoreBoard()

$root.insertAdjacentHTML("beforeend", $htmlPalyerName  + $htmlBoardGame);

