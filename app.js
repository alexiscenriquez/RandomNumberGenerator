let form = document.querySelector("form");
let buttons = document.querySelector("#buttons");
let roll = document.querySelector("#roll");
let diceRolled = document.querySelector("#dice-rolled");
let diceType = document.querySelector("#dice-type");
let count = document.querySelector("#count");
let numDice;
let sides;
let total = 0;
let randomNumber;
let rolls = [];
let number;
let newGame = document.querySelector("#nGame");
let numbers = document.querySelector("#numbers");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

roll.onclick = rollDice;

roll.addEventListener("click", () => {
  rollDice;
});

function rollDice() {
  numDice = document.querySelector("#dice").value;
  sides = document.querySelector("#sides").value;
  newGame.style.display = "inline-block";
  for (let i = 0; i < numDice; i++) {
    randomNumber = Math.floor(Math.random() * sides + 1);
    console.log(randomNumber);
    rolls.push(randomNumber);
    total += randomNumber;
    number = document.createElement("div");
    number.setAttribute("class", "number");
    numbers.appendChild(number);
    number.innerHTML = randomNumber;
  }

  document.querySelector("#stats").style.display = "block";
  diceRolled.textContent = rolls.length;
  diceType.textContent += `D${sides} `;

  count.textContent = total;
}

newGame.onclick = restart;
function restart() {
  while (numbers.hasChildNodes()) {
    numbers.removeChild(numbers.firstChild);
  }
  count.textContent = "";
  diceType.textContent = "";
  diceRolled.textContent = "";
  total = 0;
  for (let num in rolls) {
    rolls.pop;
  }
  return total;
}
