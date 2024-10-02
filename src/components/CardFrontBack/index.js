import CardGame from "../CardGame";
import "./style.css";
const CardFrontBack = () => {
  return `
  
  <article class="card-front-back"> 
    <div class=" card -front"> ${CardGame("javascript")} </div>
    <div class="card -back"> ${CardGame()} </div>
  </article>`;
};

export default CardFrontBack;
