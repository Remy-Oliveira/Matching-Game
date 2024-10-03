import "./src/Styles/settings/colors.css";
import "./src/Styles/generic/reset.css";
import "./src/Styles/elements/base.css";

//import CardGame from "./src/components/CardGame";
//import BoardGame from "./src/Objects/BoardGame";
import ScoreBoard from "./src/Objects/ScoreBoard";
//import CardFrontBack from "./src/components/CardFrontBack";
import BoardGame from "./src/Objects/BoardGame";

//${CardGame().repeat(6)}

const $root = document.querySelector("#root")

$root.insertAdjacentHTML("beforeend",  ScoreBoard() + BoardGame(6));

