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

  // o elemento será pego na shuffleEmojis de acordo com a posição
  card.innerHTML = shuffleEmojis[i];
  
  card.onclick = handleClick;

  // faz o apêndice do card na div principal (".game")
  document.querySelector(".game").appendChild(card);
}

function handleClick() {
  if(openCards.length < 2) {
    // sempre que um card for clicado(aberto), é adicionado a class "cardOpen"
    this.classList.add("cardOpen");
    openCards.push(this);
  };

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {}