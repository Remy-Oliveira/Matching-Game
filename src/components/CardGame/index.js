import "./style.css";

const CardGame = (icon = "alura-pixel", alt = "Logo da Alura") => {
  return `<article class="card-game"> <img src = "images/${icon}.png" alt= "${alt}"> </article>`;
};

export default CardGame;

/*let cards = "";
  let j = 6;

  let card = `<article class="card-game" onclick = "virar(this)"> <img src = "images/alura-pixel.png" alt= "Logo da Alura!"> </article>`;

  for (let i = 0; i < j; i++) {
    cards += `${card}`;
  }

  return cards;


   onclick = "virar(this)
  const virar = (element) => {
    element.classList.toggle("card-virar");
  
    if (element.classList.contains("card-virar")) {
      element.querySelector("img").src = "images/javascript.png";
    } else {
      element.querySelector("img").src = "images/alura-pixel.png";
    }
  };
window.virar = virar;
  */
