const emojis = [
  "🍕",
  "🍕",
  "🍔",
  "🍔",
  "🍟",
  "🍟",
  "🍣",
  "🍣",
  "🧁",
  "🧁",
  "☕",
  "☕",
  "🍧",
  "🍧",
  "🍭",
  "🍭"
];

// guarda os elementos que forem sendo abertos
let openCards = [];

// aplica para cada elemento o peso de 2 ou -1 (de acordo com a condição); 
// o elemento com peso -1 vai para trás e o elemento com peso 2 vai para frente;
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));


// coloca os cards dinamicamente na página
for (let i=0; i < emojis.length; i++) {
  // para cada elemento do array emojis, cria uma div (que representa visualmente um card)
  let card = document.createElement("div");
  // com a class item
  card.className = "item";
  // e adiciona um id para cada div criada
  card.id = i;

  // o elemento será pego na shuffleEmojis de acordo com a posição
  card.innerHTML = shuffleEmojis[i];
  
  card.onclick = handleClick;

  // faz o apêndice do card na div principal (".game")
  document.querySelector(".game").appendChild(card);
}

function handleClick() {
  if(openCards.length < 2) {
    // sempre que um card for clicado(aberto), é adicionado a class "cardOpen" e salvo no openCards
    this.classList.add("cardOpen");
    openCards.push(this);
  };

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

// checa se os elementos são iguais e se os id's dos elementos são diferentes
function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML && openCards[0].id !== openCards[1].id) {
    openCards[0].classList.add("cardMatch");
    openCards[1].classList.add("cardMatch");
  } else {
    openCards[0].classList.remove("cardOpen");
    openCards[1].classList.remove("cardOpen");
  }

  // após checar as duas cartas guardadas, o array volta a ficar vazio, esperando pelas duas novas cartas que serão abertas
  openCards = [];

  // o jogo termina quando a quantidade de elementos com a classe .cardMatch é igual a quantidade de elementos do array emojis;
  if (document.querySelectorAll(".cardMatch").length === emojis.length) {
    alert("Parabéns, você venceu! 🏆");
  }
}