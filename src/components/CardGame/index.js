import "./style.css";

const CardGame = () => {
  let cards = "";
  let j = 6;
  
  for (let i = 0; i < j; i++) {
    cards += ` <article class="card-game"> <img src = "images/alura-pixel.png" alt= "Logo da Alura!"> </article>`;
  }

  return cards;
};

export default CardGame;

// export {CardGame};
