import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";

const BoardGame = (amountCards) => {
  const $CardFrontBack = CardFrontBack();
  const $htmlContent = $CardFrontBack.repeat(amountCards);
  return `
  <section class="board-game"> ${$htmlContent} </section>`;
}

export default BoardGame;
