import "./src/Styles/settings/colors.css";
import "./src/Styles/generic/reset.css"
import "./src/Styles/elements/base.css";

import CardGame from "./src/components/CardGame";

//${CardGame().repeat(6)}

document.querySelector("#root").insertAdjacentHTML("beforeend", CardGame());
